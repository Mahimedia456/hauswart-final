import { useState } from "react";
import { notificationService } from "../services/notificationService";

export function useNotifications(role) {
  const [notifications, setNotifications] = useState(
    notificationService.getAll(role)
  );

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    notificationService.markAsRead(id);
    setNotifications([...notificationService.getAll(role)]);
  };

  return {
    notifications,
    unreadCount,
    markAsRead,
  };
}
