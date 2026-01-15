// src/modules/notifications/services/notificationService.js
import { mockNotifications } from "../data/mockNotifications";

export const notificationService = {
  getAll(role = "SUPER_ADMIN") {
    return mockNotifications.filter(n => {
      // ✅ allow notifications without roles
      if (!n.roles || n.roles.length === 0) return true;

      return n.roles.includes(role);
    });
  }
};
