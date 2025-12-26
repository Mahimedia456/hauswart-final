// src/modules/notifications/data/mockNotifications.js
export const mockNotifications = [
  {
    id: 1,
    title: "New ticket assigned",
    description: "Ticket #1245 has been assigned",
    time: "2 mins ago",
    read: false,
    roles: ["SUPER_ADMIN"]
  },
  {
    id: 2,
    title: "Tenant added",
    description: "A new tenant was added",
    time: "1 hour ago",
    read: true,
    roles: ["SUPER_ADMIN"]
  }
];
