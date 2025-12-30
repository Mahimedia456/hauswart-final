import { useState } from "react";
import { notificationService } from "../services/notificationService";
import { useAuth } from "@/context/AuthContext";
import { resolveNotificationLink } from "../utils/notificationRouter";

export function useNotifications() {
  const { role } = useAuth();

  const [notifications, setNotifications] = useState(
    notificationService.getAll(role).map(n => ({
      ...n,
      route: resolveNotificationLink(n, role),
    }))
  );

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    notificationService.markAsRead(id);
    setNotifications(
      notificationService.getAll(role).map(n => ({
        ...n,
        route: resolveNotificationLink(n, role),
      }))
    );
  };

  return {
    notifications,
    unreadCount,
    markAsRead,
  };
}
