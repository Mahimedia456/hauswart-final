export default {
  appName: "Hauswart",
  version: "Version",

  roles: {
    facilityManager: "Facility Manager",
    technician: "Technician",
    serviceProvider: "Service Provider",
    tenant: "Tenant",
  },

  onboarding: {
    skip: "Skip",
    next: "Next",
    getStarted: "Get Started",

    report: {
      title: "Report Issues Instantly",
      description:
        "Create maintenance requests in seconds with photos, videos, and clear descriptions.",
    },
    track: {
      title: "Track Progress Easily",
      description:
        "Stay updated on work orders and service requests in real time.",
    },
    manage: {
      title: "Manage Everything in One Place",
      description:
        "From reporting to resolution — everything stays organized and transparent.",
    },
  },

  roleSelect: {
    title: "Select Your Role",
    subtitle:
      "Choose how you will use the Hauswart app. Your role determines available features and access.",
    continue: "Continue",

    facilityManager: {
      title: "Facility Manager",
      description: "Oversee building operations and maintenance teams.",
      badge: "Full management access",
    },
    technician: {
      title: "Technician",
      description: "Execute work orders and report on repairs.",
      badge: "Operational access only",
    },
    serviceProvider: {
      title: "Service Provider",
      description: "Manage contracted services and vendor tasks.",
      badge: "Vendor-specific access",
    },
    tenant: {
      title: "Tenant",
      description: "View announcements and request repairs.",
      badge: "Resident-level access",
    },
  },

  login: {
    title: "Welcome Back",
    subtitle: "Sign in to access your facility dashboard.",
    email: "Email / Username",
    password: "Password",
    forgot: "Forgot Password?",
    submit: "Log In",
    noAccount: "Don't have an account?",
    register: "Register",
    secure: "Secure Enterprise Login",
  },

  register: {
    title: "Create Account",
    registeringAs: "Registering as",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    password: "Password",
    passwordHint: "Must contain at least 8 characters",
    property: "Property / Unit Code",
    propertyHint: "Found on your lease agreement or welcome packet.",
    agree: "I agree to the Terms & Conditions and Privacy Policy.",
    submit: "Create Account",
  },

  forgotPassword: {
    title: "Forgot Password",
    subtitle: "Enter your email to receive a verification code.",
    submit: "Send Code",
  },

  verifyOtp: {
    title: "Verify OTP",
    subtitle: "Enter the verification code sent to your email.",
    submit: "Verify",
  },

  resetPassword: {
    title: "Create New Password",
    subtitle: "Choose a strong password to secure your account.",
    submit: "Reset Password",
  },

  tenantDashboard: {
    issueTitle: "Something wrong?",
    issueDesc:
      "Submit a maintenance request quickly and track its progress in real time.",
    createTicket: "Create Ticket",
    myTickets: "My Tickets",
    recentUpdates: "Recent Updates",
    announcements: "Announcements",
  },

  common: {
    open: "Open",
    inProgress: "In Progress",
    completed: "Completed",
    viewAll: "View all",
    call: "Call",
    email: "Email",
    tapToCall: "Tap to call",
    tapToEmail: "Tap to email",
  },

  tickets: {
    title: "My Tickets",
    myTickets: "My Tickets",
    history: "History",
    filterByDate: "Filter by date",
    emptyTitle: "No tickets found",
    emptyDesc: "You have no tickets yet",
  },

  ticketDetail: {
    title: "Ticket Details",
    location: "Location",
    property: "Property",
    unit: "Unit",
    area: "Area",
    description: "Description",
    attachments: "Attachments",
    progress: "Status & Progress",
    messages: "Messages",
    openChat: "Open Chat",
  },

  createTicket: {
    title: "Create Ticket",
    priorityNote: "Priority Note",
    priorityDesc:
      "Urgent issues will be prioritized by facility management based on availability and severity.",
    category: "Issue Category",
    selectCategory: "Select category",
    titleLabel: "Issue Title",
    titlePlaceholder: "Short summary of the problem",
    description: "Description",
    descPlaceholder:
      "Describe the issue in detail so maintenance can resolve it faster.",
    location: "Location Details",
    property: "Property",
    unit: "Unit",
    area: "Area",
    selectArea: "Select area (e.g. Kitchen)",
    optional: "Optional",
    attachments: "Attachments",
    attachmentsHint: "Add photos or video to help us understand the issue.",
    addPhoto: "Add Photo",
    addVideo: "Add Video",
    submit: "Submit Ticket",
  },

  chat: {
    title: "Messages",
    ticket: "Ticket",
    subtitle: "Conversation",
    emptyTitle: "No messages yet",
    emptySubtitle: "Messages related to your tickets will appear here.",
    placeholder: "Type your message...",
  },

  profile: {
    title: "Profile",
    account: "Account",
    preferences: "Preferences",
    support: "Support & Legal",
    edit: "Edit Profile",
    password: "Change Password",
    unit: "Unit Information",
    emergency: "Emergency Contact",
    language: "Language",
    notifications: "Notification Preferences",
    help: "Help Center", // ✅ THIS KEY FIXES your profile item label
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    logout: "Log Out",
  },

  editProfile: {
    title: "Edit Profile",
    success: "Profile updated successfully.",
    changePhoto: "Change Photo",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    save: "Save Changes",
  },

  notifications: {
    title: "Notification Settings",
    options: "Notification Options",
    channels: "Notification Channels",
    ticketUpdates: "Ticket status updates",
    chatMessages: "New chat messages",
    announcements: "Announcements",
    reminders: "Reminders",
    push: "Push notifications",
    email: "Email notifications",
    markAll: "Mark all read",
  },

  unit: {
    title: "Unit Information",
    details: "Unit Details",
    property: "Property Name",
    building: "Building",
    unit: "Unit / Apt",
    floor: "Floor",
    type: "Type",
    facilityManagement: "Facility Management",
    facilityManager: "Facility Manager",
    notice:
      "For changes to unit information, please contact facility management directly using the options above.",
  },

  emergency: {
    title: "Emergency Contact",
    services: "Emergency Services",
    fire: "Fire Department",
    police: "Police Department",
    medical: "Medical / Ambulance",
    propertyManagement: "Property Management",
    facilityContact: "Emergency Facility Contact",
    facilityHint: "For building-related emergencies",
    propertyManager: "Property Manager",
    notice:
      "Use these contacts for urgent situations only. For general maintenance or non-urgent repairs, please create a ticket in the Tickets tab.",
  },

  // ✅ MERGED HELP (ONE ONLY)
  help: {
    title: "Help Center",
    heading: "How can we help?",
    subtitle: "Browse FAQs or contact support from your ticket chat.",
    faqs: [
      {
        q: "How do I create a maintenance ticket?",
        a: "Go to the Tickets tab and tap on Create Ticket.",
      },
      {
        q: "How can I track my ticket status?",
        a: "You can view real-time status updates inside the ticket detail screen.",
      },
      {
        q: "How do I contact facility management?",
        a: "Use the Emergency Contact or Chat features inside the app.",
      },
      { q: "How do I create a ticket?", a: "Go to Home and tap Create Ticket." },
      { q: "How can I check status?", a: "Open Tickets and view updates." },
      { q: "How do I message the manager?", a: "Open a ticket and tap Open Chat." },
    ],
  },

  // ✅ MERGED LANGUAGE (ONE ONLY)
  language: {
    title: "Language",
    heading: "Select your language",
    subtitle: "Choose the language you want to use in the app.",
  },

  legal: {
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },

  changePassword: {
    title: "Change Password",
    current: "Current Password",
    new: "New Password",
    confirm: "Confirm New Password",
    currentPlaceholder: "Enter current password",
    newPlaceholder: "Enter new password",
    confirmPlaceholder: "Re-enter new password",
    hint: "Minimum 8 characters",
    submit: "Update Password",
  },

  tabs: {
    home: "Home",
    tickets: "Tickets",
    chat: "Chat",
    alerts: "Alerts",
    profile: "Profile",
  },
  chat: {
  title: "Messages",
  ticket: "Ticket",
  subtitle: "Conversation",
  emptyTitle: "No messages yet",
  emptySubtitle: "Messages related to your tickets will appear here.",
  placeholder: "Type your message...",
  searchPlaceholder: "Search chats...",
  markRead: "Read",
  markUnread: "Unread",
  delete: "Delete",
},
notifications: {
  title: "Alerts",
  markAll: "Mark all as read",
  ticketLabel: "Ticket",
  messageLabel: "Message",
  announcementLabel: "Announcement",
},

  common: {
    viewAll: "View all",
    open: "Open",
    inProgress: "In progress",
    completed: "Completed",
    tapToCall: "Tap to call",
    tapToEmail: "Tap to email",
    save: "Save",
    cancel: "Cancel",
    done: "Done",
  },

  notifications: {
    title: "Alerts",
    markAll: "Mark all as read",
    ticketLabel: "Ticket",
    messageLabel: "Message",
    announcementLabel: "Announcement",
  },

  profile: {
    title: "Profile",
    account: "Account",
    preferences: "Preferences",
    support: "Support & Legal",
    edit: "Edit Profile",
    password: "Change Password",
    unit: "Unit Info",
    emergency: "Emergency Contact",
    language: "Language",
    notifications: "Notifications",
    privacy: "Privacy Policy",
    terms: "Terms",
    help: "Help Center",
    logout: "Log out",
  },

  editProfile: {
    title: "Edit Profile",
    success: "Profile updated",
    changePhoto: "Change photo",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    save: "Save changes",
  },

  changePassword: {
    title: "Change Password",
    current: "Current password",
    new: "New password",
    confirm: "Confirm new password",
    currentPlaceholder: "Enter current password",
    newPlaceholder: "Enter new password",
    confirmPlaceholder: "Re-enter new password",
    hint: "Minimum 8 characters",
    submit: "Update password",
  },

  emergency: {
    title: "Emergency",
    services: "Emergency services",
    fire: "Fire brigade",
    police: "Police",
    medical: "Medical",
    propertyManagement: "Property management",
    facilityContact: "Facility contact",
    facilityHint: "Use these contacts for urgent building issues.",
    propertyManager: "Property Manager",
    noticeTitle: "Important",
    notice:
      "If there is immediate danger, call emergency services first. Then inform your property management.",
  },

  ticketDetail: {
    title: "Ticket Details",
    openChat: "Open chat",
    location: "Location",
    property: "Property",
    unit: "Unit",
    area: "Area",
    description: "Description",
    attachments: "Attachments",
    progress: "Progress",
    messages: "Messages",
  },

  chat: {
    title: "Chat",
    ticket: "Ticket",
    subtitle: "Chat with management / technician",
    placeholder: "Write a message...",
    emptyTitle: "No chats yet",
    emptySubtitle: "When you message on a ticket, it will appear here.",
  },

  ctTabs: {
    dashboard: "Dashboard",
    tasks: "Tasks",
    chat: "Chat",
    profile: "Profile",
    scan: "Scan",
  },
  ctTabs: {
    dashboard: "Dashboard",
    tasks: "Tasks",
    chat: "Chat",
    profile: "Profile",
    scan: "Scan",
  },

  ctDashboard: {
    greeting: "Good Morning",
    role: "Technician",
    assigned: "Assigned",
    inProgress: "In Progress",
    onHold: "On Hold",
    completed: "Completed",
    startWork: "Start Work",
    startWorkDesc: "Begin your assigned task and start time tracking automatically.",
    startTask: "Start Task",
    myAssignedTasks: "My Assigned Tasks",
    upcoming: "Upcoming",
    quickActions: "Quick Actions",
    viewAll: "View All",
    details: "Details",
 viewTasks: "View All Tasks",
  timeLogs: "Time Logs",
  reportIssue: "Report Issue",
  quickChat: "Chat",
},
ctTasks: {
  title: "My Tasks",
  todayLabel: "Today",
  sortByPriority: "Sort by Priority",
  fabStartTask: "Start Task",

  filters: {
    all: "All",
    todo: "To Do",
    inProgress: "In Progress",
    onHold: "On Hold",
    completed: "Completed",
    overdue: "Overdue",
  },

  status: {
    todo: "To Do",
    inProgress: "In Progress",
    onHold: "On Hold",
    completed: "Completed",
    overdue: "Action Required",
  },

  priority: {
    high: "High",
    routine: "Routine",
  },

  assignedToYou: "Assigned to you",
  estimated: "Estimated: 1h",
  requiresApproval: "Requires Manager Approval",
  partsOrdered: "Parts Ordered",
  actionRequired: "Action Required",
},
ctTaskDetails: {
  title: "Task Details",

  status: {
    todo: "To Do",
    inProgress: "In Progress",
    onHold: "On Hold",
    completed: "Completed",
    overdue: "Action Required",
  },

  priority: {
    high: "High Priority",
    routine: "Routine",
  },

  scheduled: "Scheduled",

  timeElapsed: "Time Elapsed",
  running: "RUNNING",
  paused: "PAUSED",

  pause: "Pause",
  resume: "Resume",
  complete: "Complete",

  property: "Property",
  buildingFloor: "Building / Floor",
  unitArea: "Unit / Area",

  description: "Description",

  referenceAttachments: "Reference Attachments",
  noMoreFiles: "No more files",

  checklist: "Checklist",
  done: "Done",

  uploadEvidence: "Upload Evidence",
  before: "Before",
  after: "After",
  video: "Video",

  workNotes: "Work Notes",
  autosaved: "Autosaved 2m ago",
  typeNotes: "Type your notes here...",

  activity: "Activity",
},
scan: {
  title: "Scan",
  desc: "Scan the QR code at the job location to start your task.",
  scanBtn: "Scan New Task",
  activeTaskInfo: "You already have an active task.",
  resumeTask: "Tap to resume current task",
  scanHint: "Align QR code within the frame",
  noPermission: "Camera permission is required to scan QR codes",
},
priority: {
  high: "High",
  routine: "Routine",
},
caretakerProfile: {
  title: "Profile",
  subtitle: "Manage your work settings & account",
  account: "Account",
  editProfile: "Edit Profile",
  changePassword: "Change Password",

  workSettings: "Work Settings",
  availability: "Availability Status",
  gps: "GPS Tracking Preferences",
  shift: "Work Hours / Shift",
  defaultView: "Default Schedule View",

  notifications: "Preferences",
  notificationSettings: "Notification Settings",

  support: "Support & Legal",
  help: "Help Center / FAQ",
  privacy: "Privacy Policy",
  terms: "Terms & Conditions",

  logout: "Logout",
  version: "App Version 2.4.1 (Build 204)",
},
availability: {
  title: "Availability",
  status: "Availability Status",
  online: "Online",
  offline: "Offline",
},

gps: {
  title: "GPS Tracking",
  permissions: "Location Permissions",
  enableTracking: "Enable Location Tracking",
  backgroundTracking: "Allow Background Tracking",
},
notifications: {
  title: "Notification Settings",

  taskUpdates: "Task Updates",
  newTask: "New task assigned",
  statusChanged: "Task status changed",
  onHold: "Task put on hold",
  approvedRejected: "Task approved / rejected",

  communication: "Communication",
  chatMessages: "New chat messages",
  fmReplies: "FM replies",
  mentions: "Mentions",
  comingSoon: "Coming Soon",

  schedule: "Schedule & Reminders",
  reminders: "Upcoming task reminders",
  scheduleChanges: "Schedule changes",
  overdue: "Overdue task alerts",

  channels: "Delivery Channels",
  push: "Push notifications",
  sound: "Sound",
  vibration: "Vibration",
},
defaultView: {
  title: "Default Schedule View",
  description: "Choose how your schedule is shown by default.",
  day: "Day View",
  week: "Week View",
},
defaultView: {
  title: "Default Schedule View",
  heading: "Choose default view",

  dayView: "Day View",
  weekView: "Week View",
  listView: "List View",
},

};
