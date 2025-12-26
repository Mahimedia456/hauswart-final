export function resolveNotificationLink(notification, role) {
  switch (notification.type) {
    case "TICKET_CREATED":
      if (role === "SUPER_ADMIN") return `/super-admin/tickets/${notification.refId}`;
      if (role === "FACILITY_ADMIN") return `/facility-admin/tickets/${notification.refId}`;
      if (role === "TECHNICIAN") return `/technician/tasks/${notification.refId}`;
      if (role === "TENANT") return `/tenant/tickets/${notification.refId}`;
      break;

    case "TENANT_ADDED":
      return `/super-admin/tenants/${notification.refId}`;

    default:
      return "/";
  }
}
