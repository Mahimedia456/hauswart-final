// src/modules/notifications/data/mockNotifications.js
export const mockNotifications = [
  {
    id: 1,
    title: "New ticket assigned",
    message: "Ticket #1245 has been assigned",
    time: "2 mins ago",
    read: false,
    type: "TICKET_CREATED",
    refId: "1245",
    roles: ["SUPER_ADMIN", "FACILITY_MANAGER"],
  },
  {
    id: 2,
    title: "Tenant added",
    message: "A new tenant was added",
    time: "1 hour ago",
    read: true,
    type: "TENANT_ADDED",
    refId: "77",
    roles: ["SUPER_ADMIN"],
  },
];
