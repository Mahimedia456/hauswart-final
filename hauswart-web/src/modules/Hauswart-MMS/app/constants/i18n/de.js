export default {
  appName: "Hauswart",
  version: "Version",

  roles: {
    facilityManager: "Facility Manager",
    technician: "Techniker",
    serviceProvider: "Dienstleister",
    tenant: "Mieter",
  },

  onboarding: {
    skip: "Überspringen",
    next: "Weiter",
    getStarted: "Loslegen",

    report: {
      title: "Probleme sofort melden",
      description:
        "Erstellen Sie Wartungsanfragen in Sekunden mit Fotos, Videos und klaren Beschreibungen.",
    },
    track: {
      title: "Fortschritt einfach verfolgen",
      description:
        "Bleiben Sie in Echtzeit über Arbeitsaufträge und Serviceanfragen informiert.",
    },
    manage: {
      title: "Alles an einem Ort verwalten",
      description:
        "Von der Meldung bis zur Lösung – alles bleibt übersichtlich und transparent.",
    },
  },

  roleSelect: {
    title: "Rolle auswählen",
    subtitle: "Wählen Sie, wie Sie die Hauswart-App nutzen möchten.",
    continue: "Weiter",

    facilityManager: {
      title: "Facility Manager",
      description: "Überwachen Sie den Gebäudebetrieb.",
      badge: "Voller Zugriff",
    },
    technician: {
      title: "Techniker",
      description: "Arbeitsaufträge ausführen.",
      badge: "Operativer Zugriff",
    },
    serviceProvider: {
      title: "Dienstleister",
      description: "Dienstleistungen verwalten.",
      badge: "Dienstleister-Zugriff",
    },
    tenant: {
      title: "Mieter",
      description: "Reparaturen anfordern.",
      badge: "Mieterzugriff",
    },
  },

  login: {
    title: "Willkommen zurück",
    subtitle: "Bitte anmelden",
    email: "E-Mail / Benutzername",
    password: "Passwort",
    forgot: "Passwort vergessen?",
    submit: "Anmelden",
  },

  tickets: {
    title: "Meine Tickets",
    myTickets: "Aktive Tickets",
    history: "Verlauf",
    filterByDate: "Nach Datum filtern",
    emptyTitle: "Keine Tickets gefunden",
    emptyDesc: "Es sind keine Tickets vorhanden",
  },

  profile: {
    title: "Profil",
    account: "Konto",
    preferences: "Einstellungen",
    support: "Support & Rechtliches",
    edit: "Profil bearbeiten",
    password: "Passwort ändern",
    unit: "Wohneinheit",
    emergency: "Notfallkontakt",
    language: "Sprache",
    notifications: "Benachrichtigungen",
    help: "Hilfe-Center", // ✅ added for profile item label
    privacy: "Datenschutz",
    terms: "AGB",
    logout: "Abmelden",
  },

  changePassword: {
    title: "Passwort ändern",
    current: "Aktuelles Passwort",
    new: "Neues Passwort",
    confirm: "Neues Passwort bestätigen",
    currentPlaceholder: "Aktuelles Passwort eingeben",
    newPlaceholder: "Neues Passwort eingeben",
    confirmPlaceholder: "Neues Passwort erneut eingeben",
    hint: "Mindestens 8 Zeichen",
    submit: "Passwort aktualisieren",
  },

  tabs: {
    home: "Start",
    tickets: "Tickets",
    chat: "Chat",
    alerts: "Benachrichtigungen",
    profile: "Profil",
  },

  // ✅ MERGED HELP (ONE ONLY)
  help: {
    title: "Hilfe-Center",
    heading: "Wie können wir helfen?",
    subtitle: "Durchsuche FAQs oder kontaktiere den Support im Ticket-Chat.",
    faqs: [
      {
        q: "Wie erstelle ich ein Ticket?",
        a: "Gehe zu Home und tippe auf Ticket erstellen.",
      },
      {
        q: "Wie sehe ich den Status?",
        a: "Öffne Tickets und schaue dir Updates an.",
      },
      {
        q: "Wie schreibe ich dem Verwalter?",
        a: "Öffne ein Ticket und tippe auf Chat öffnen.",
      },
    ],
  },

  // ✅ MERGED LANGUAGE (ONE ONLY)
  language: {
    title: "Sprache",
    heading: "Sprache auswählen",
    subtitle: "Wähle die Sprache aus, die du in der App verwenden möchtest.",
  },
  chat: {
  title: "Nachrichten",
  ticket: "Ticket",
  subtitle: "Unterhaltung",
  emptyTitle: "Noch keine Nachrichten",
  emptySubtitle: "Nachrichten zu deinen Tickets erscheinen hier.",
  placeholder: "Nachricht schreiben...",
  searchPlaceholder: "Chats suchen...",
  markRead: "Gelesen",
  markUnread: "Ungelesen",
  delete: "Löschen",
},
notifications: {
  title: "Benachrichtigungen",
  markAll: "Alle als gelesen markieren",
  ticketLabel: "Ticket",
  messageLabel: "Nachricht",
  announcementLabel: "Ankündigung",
},
ctTabs: {
    dashboard: "Übersicht",
    tasks: "Aufgaben",
    chat: "Chat",
    profile: "Profil",
    scan: "Scannen",
  
},
  ctTabs: {
    dashboard: "Übersicht",
    tasks: "Aufgaben",
    chat: "Chat",
    profile: "Profil",
    scan: "Scannen",
  },

  ctDashboard: {
    greeting: "Guten Morgen",
    role: "Techniker",
    assigned: "Zugewiesen",
    inProgress: "In Bearbeitung",
    onHold: "Pausiert",
    completed: "Abgeschlossen",
    startWork: "Arbeit starten",
    startWorkDesc: "Starte deine Aufgabe und beginne die Zeiterfassung automatisch.",
    startTask: "Aufgabe starten",
    myAssignedTasks: "Meine Aufgaben",
    upcoming: "Bevorstehend",
    quickActions: "Schnellaktionen",
    viewAll: "Alle anzeigen",
    details: "Details",
  },
  ctTasks: {
    title: "Meine Aufgaben",
    todayLabel: "Heute",
    sortByPriority: "Nach Priorität sortieren",
    fabStartTask: "Aufgabe starten",

    filters: {
      all: "Alle",
      todo: "Offen",
      inProgress: "In Arbeit",
      onHold: "Wartend",
      completed: "Erledigt",
      overdue: "Überfällig",
    },

    status: {
      todo: "Offen",
      inProgress: "In Arbeit",
      onHold: "Wartend",
      completed: "Erledigt",
      overdue: "Aktion erforderlich",
    },

    priority: {
      high: "Hoch",
      routine: "Normal",
    },

    assignedToYou: "Dir zugewiesen",
    estimated: "Geschätzt: 1 Std.",
    requiresApproval: "Manager-Freigabe erforderlich",
    partsOrdered: "Teile bestellt",
    actionRequired: "Aktion erforderlich",
  },
ctTaskDetails: {
  title: "Aufgabendetails",

  status: {
    todo: "Offen",
    inProgress: "In Arbeit",
    onHold: "Wartend",
    completed: "Erledigt",
    overdue: "Aktion erforderlich",
  },

  priority: {
    high: "Hohe Priorität",
    routine: "Normal",
  },

  scheduled: "Geplant",

  timeElapsed: "Verstrichene Zeit",
  running: "LÄUFT",
  paused: "PAUSIERT",

  pause: "Pause",
  resume: "Fortsetzen",
  complete: "Abschließen",

  property: "Objekt",
  buildingFloor: "Gebäude / Etage",
  unitArea: "Einheit / Bereich",

  description: "Beschreibung",

  referenceAttachments: "Anhänge (Referenz)",
  noMoreFiles: "Keine weiteren Dateien",

  checklist: "Checkliste",
  done: "Erledigt",

  uploadEvidence: "Nachweise hochladen",
  before: "Vorher",
  after: "Nachher",
  video: "Video",

  workNotes: "Arbeitsnotizen",
  autosaved: "Automatisch gespeichert vor 2 Min.",
  typeNotes: "Notizen hier eingeben...",

  activity: "Aktivität",
},
  scan: {
    title: "Scannen",
    desc: "Scannen Sie den QR-Code am Einsatzort, um die Aufgabe zu starten.",
    scanBtn: "Neue Aufgabe scannen",
    activeTaskInfo: "Sie haben bereits eine aktive Aufgabe.",
    resumeTask: "Tippen Sie, um die aktuelle Aufgabe fortzusetzen",
    scanHint: "Richten Sie den QR-Code innerhalb des Rahmens aus",
    noPermission: "Kameraberechtigung ist erforderlich, um QR-Codes zu scannen",
  },

  priority: {
    high: "Hoch",
    routine: "Routine",
  },
caretakerProfile: {
  title: "Profil",
  subtitle: "Verwalten Sie Ihre Arbeitseinstellungen und Ihr Konto",
  account: "Konto",
  editProfile: "Profil bearbeiten",
  changePassword: "Passwort ändern",

  workSettings: "Arbeitseinstellungen",
  availability: "Verfügbarkeitsstatus",
  gps: "GPS-Tracking-Einstellungen",
  shift: "Arbeitszeiten / Schicht",
  defaultView: "Standardansicht des Zeitplans",

  notifications: "Einstellungen",
  notificationSettings: "Benachrichtigungseinstellungen",

  support: "Support & Rechtliches",
  help: "Hilfezentrum / FAQ",
  privacy: "Datenschutzrichtlinie",
  terms: "Allgemeine Geschäftsbedingungen",

  logout: "Abmelden",
  version: "App-Version 2.4.1 (Build 204)",
},
availability: {
  title: "Verfügbarkeit",
  status: "Status",
  online: "Online",
  offline: "Offline",
},

gps: {
  title: "GPS-Tracking",
  permissions: "Standortberechtigungen",
  enableTracking: "Standortverfolgung aktivieren",
  backgroundTracking: "Hintergrund-Tracking erlauben",
},
notifications: {
  title: "Benachrichtigungseinstellungen",

  taskUpdates: "Aufgabenaktualisierungen",
  newTask: "Neue Aufgabe zugewiesen",
  statusChanged: "Status der Aufgabe geändert",
  onHold: "Aufgabe pausiert",
  approvedRejected: "Aufgabe genehmigt / abgelehnt",

  communication: "Kommunikation",
  chatMessages: "Neue Chat-Nachrichten",
  fmReplies: "FM-Antworten",
  mentions: "Erwähnungen",
  comingSoon: "Demnächst verfügbar",

  schedule: "Zeitplan & Erinnerungen",
  reminders: "Erinnerungen an Aufgaben",
  scheduleChanges: "Zeitplanänderungen",
  overdue: "Überfällige Aufgaben",

  channels: "Übermittlung",
  push: "Push-Benachrichtigungen",
  sound: "Ton",
  vibration: "Vibration",
},
defaultView: {
  title: "Standardansicht",
  heading: "Standardansicht auswählen",

  dayView: "Tagesansicht",
  weekView: "Wochenansicht",
  listView: "Listenansicht",
},

};