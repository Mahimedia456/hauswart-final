// PURE JAVASCRIPT VERSION — NO TYPESCRIPT, NO INTERFACES

export const t = {
  EN: {
    appName: "Hauswart",
    footer_allRights: "All rights reserved.",

    superAdmin: "Super Admin",
    dashboard: "Dashboard",
    search: "Global search…",

    jobs: "Jobs & Tasks",
    jobsHistory: "Timeline / History",
    maintenance: "Maintenance schedules",
    timeTracking: "Time Tracking",
    gps: "GPS Logs",
    documents: "Documents",
    notifications: "Notifications",
    chat: "Messaging / Chat",
    settings: "System Settings",
    logout: "Logout",
    profile: "Profile",
    backups: "Backups",
    auditLogs: "Audit Logs",
    billing: "Billing",

    splash_wait: "Please wait…",
    splash_skip: "Skip",

    onb_tagline: "Facility Management Reimagined",
    onb_skip: "Skip",
    onb_next: "Next",
    onb_getStarted: "Get started",

    onb_slide1_title: "Smart Facility Oversight",
    onb_slide1_body:
      "Track tickets, assets, and maintenance from a single dashboard.",
    onb_slide1_b1: "Centralized ticketing across all properties",
    onb_slide1_b2: "Instant view of open tasks and SLAs",

    onb_slide2_title: "Empower Your Team",
    onb_slide2_body:
      "Give caretakers, service providers, and tenants a modern experience.",
    onb_slide2_b1: "Role-based interfaces",
    onb_slide2_b2: "Modern SaaS UI",

    onb_slide3_title: "Real-Time Transparency",
    onb_slide3_body:
      "Monitor progress and communication in real time.",
    onb_slide3_b1: "Live updates from technicians",
    onb_slide3_b2: "Analytics-ready data",

    auth_email: "Email address",
    auth_email_placeholder: "Enter your email",
    auth_password: "Password",
    auth_password_placeholder: "Enter your password",
    auth_confirmPassword: "Confirm password",
    auth_confirmPassword_placeholder: "Re-enter your password",
    auth_fullName: "Full name",
    auth_fullName_placeholder: "John Doe",
    auth_phone: "Phone number",
    auth_phone_placeholder: "+1 (555) 000-0000",

    auth_login: "Log in",
    auth_register: "Register",
    auth_forgotPassword: "Forgot password?",
    auth_backToLogin: "Back to login",

    auth_noAccount: "Don’t have an account? Register",
    auth_haveAccount: "Already have an account? Login",

    login_title: "Log in to your account",
    login_subtitle: "Welcome back! Please enter your details.",
    login_invalid: "Invalid login credentials",

    register_title: "Create your account",
    register_subtitle: "Join the leading facility management platform.",

    register_role_label: "Select role",
    register_terms_prefix: "I agree to the",
    register_terms_link: "Terms & Privacy Policy",

    role_facilityManager: "Facility Manager",
    role_caretaker: "Caretaker / Technician",
    role_serviceProvider: "Service Provider",
    role_tenant: "Tenant",
    roleSelect_title: "Select your role",

    forgot_title: "Forgot your password?",
    forgot_subtitle: "Enter your email to receive a reset link.",
    forgot_invalidEmail: "Enter a valid email",
    forgot_cta: "Reset password",

    otp_title: "Verify your account",
    otp_subtitle: "Enter the 6-digit verification code.",
    otp_invalid: "Enter a valid 6-digit code",
    otp_cta: "Verify",

    reset_title: "Set your new password",
    reset_subtitle: "Enter and confirm your password.",
    reset_newPwd: "New password",
    reset_newPwd_placeholder: "Enter new password",
    reset_confirmPwd: "Confirm password",
    reset_confirmPwd_placeholder: "Re-enter password",
    reset_tooShort: "Minimum 6 characters",
    reset_mismatch: "Passwords do not match",
    reset_cta: "Save new password",

    dash_title: "Super Admin Dashboard",
    dash_breadcrumb_home: "Home",
    dash_breadcrumb_current: "Dashboard",

    dash_card_orgs: "Total organizations",
    dash_card_properties: "Active properties",
    dash_card_openTickets: "Open tickets (global)",
    dash_card_activeUsers: "Active users",
    dash_card_activeUsers_sub: "(FM / Caretaker / SP)",
    dash_chart_tickets: "Ticket Trend",
dash_chart_users: "User Role Distribution",
dash_alerts: "System Alerts",
dash_alert_billing: "Upcoming billing cycle requires attention.",
dash_alert_sla: "Several tickets have breached SLA deadlines.",
dash_alert_docs: "Some compliance documents will expire soon.",

dash_table_tickets: "Recent Tickets",
dash_table_orgs: "Latest Organizations",

tkt_id: "Ticket ID",
tkt_user: "User",
tkt_org: "Organization",
tkt_date: "Date",

org_name: "Organization",
org_email: "Email",
org_plan: "Plan",
org_created: "Created At",
dash_ticketTrend: "Ticket Trend",
dash_maintenanceRate: "Maintenance Completion Rate",

// Alerts (Dashboard)
dash_alert_subRenew_desc: "Your subscription will renew soon.",
dash_alert_failedPay_desc: "A recent payment attempt has failed.",
dash_alert_apiSpike_desc: "Unusual API activity detected.",

// Section titles
section_recent_activity: "Recent Activity",

// Activity texts
activity_ticket_updated: "A ticket was updated.",
activity_just_now: "Just now",
activity_org_created: "A new organization was created.",
activity_15min: "15 minutes ago",
activity_sync_done: "System data sync completed.",
activity_1h: "1 hour ago",
organizations:"Organization",
createOrganization: "Create Organizations",

//property
properties: "Properties",
createProperty: "Create Property",

// PROPERTY MODULE
properties: "Properties",
properties_subtitle: "Manage all properties across all organizations.",
createProperty: "Add Property",
createPropertySubtitle: "Enter property details, structure, and personnel.",
backToProperties: "Back to Properties",

// Filters
filter_org: "Organization",
filter_propertyType: "Property Type",
filter_assignedFM: "Assigned FM",
filter_status: "Status",
searchProperty: "Search Property",
searchPropertyPlaceholder: "Search by property name...",

// Table columns
col_propertyName: "Property Name",
col_organization: "Organization",
col_type: "Type",
col_floorsUnits: "Floors / Units",
col_facilityManager: "Facility Manager",
col_status: "Status",
col_createdDate: "Created Date",
col_actions: "Actions",

// Types
type_residential: "Residential",
type_commercial: "Commercial",
type_industrial: "Industrial",
type_mixed: "Mixed Use",

// Common labels
label_floors: "Floors",
label_units: "Units",
status_active: "Active",
status_archived: "Archived",
noProperties: "No properties found.",

// Create Form
section_propertyInfo: "Property Information",
section_propertyInfo_sub: "Provide essential details about the property.",
section_building: "Building Structure",
section_personnel: "Assign Personnel",
section_documents: "Property Documents",

field_propertyName: "Property Name",
placeholder_propertyName: "Enter property name",

field_propertyType: "Property Type",
placeholder_propertyType: "Select property type",

field_address: "Street Address",
placeholder_address: "Enter full address",

field_city: "Region / City",
placeholder_city: "Select city",

field_postal: "Postal Code / ZIP",
placeholder_postal: "Enter postal code",

field_latitude: "GPS Latitude",
placeholder_latitude: "Enter latitude",

field_longitude: "GPS Longitude",
placeholder_longitude: "Enter longitude",

field_propertySize: "Property Size",
placeholder_propertySize: "e.g., 50000 sq ft",

field_description: "Description / Notes",
placeholder_description: "Add notes or details...",

field_floors: "Number of Floors",
field_units: "Total Units",
field_sections: "Building Sections (Optional)",
field_utilities: "Utility Areas (Optional)",

building_note: "Detailed floors and units can be configured after property creation.",

field_facilityManager: "Facility Manager",
placeholder_selectFM: "Select a manager",

field_caretakers: "Caretakers",
placeholder_selectCaretakers: "Select caretakers...",

field_serviceProviders: "Service Providers",
placeholder_selectProviders: "Select providers...",

field_securityTeam: "Security / Access Control Team",
placeholder_selectSecurity: "Select a team",

field_notes: "Additional Notes",
placeholder_notes: "Write notes...",

optional: "Optional",

uploadFile: "Upload a file",
orDragDrop: "or drag and drop",
fileLimit: "PDF, Images, Word up to 25MB",

cancel: "Cancel",
saveProperty: "Save Property",

  tab_overview: "Overview",
  tab_details: "Details",
  tab_structure: "Structure",
  tab_assets: "Assets",
  tab_maintenance: "Maintenance",
  tab_tickets: "Tickets",
  tab_documents: "Documents",
  tab_staff: "Assigned Staff",
  tab_gpsLogs: "GPS Logs",
  tab_activity: "Activity Logs",

  label_propertyId: "Property ID",
  label_organization: "Organization",
  label_floors: "Floors",
  label_units: "Units",

  action_edit: "Edit",
  action_archive: "Archive",
  action_delete: "Delete",
  action_cancel: "Cancel",

  modal_archive_title: "Archive Property?",
  modal_archive_description: "Archiving this property will restrict all operational workflows and hide it from active listings. You can restore it anytime.",
  modal_archive_confirm: "Archive Property",


// PROPERTY OVERVIEW TEXTS
prop_overview_summary: "Summary",
prop_overview_organization: "Organization",
prop_overview_type: "Property Type",
prop_overview_floors_units: "Floors / Units",
prop_overview_manager: "Facility Manager",
prop_overview_updated: "Last Updated",

prop_overview_gps: "GPS Coordinates",
prop_overview_openTickets: "Open Tickets",
prop_overview_upcomingMaintenance: "Upcoming Maintenance",
prop_overview_staff: "Assigned Staff",
prop_overview_lastActivity: "Last Activity",

prop_overview_active: "Active",
prop_overview_members: "Members",
prop_overview_scheduled: "Scheduled",
prop_overview_activeTickets: "Active",


prop_details_basicInfo: "Basic Information",
prop_details_edit: "Edit",

prop_details_propertyName: "Property Name",
prop_details_propertyType: "Property Type",
prop_details_propertySize: "Property Size",
prop_details_description: "Description",

prop_details_address: "Address",
prop_details_regionCity: "Region / City",
prop_details_zip: "Zip / Postal Code",
prop_details_gps: "GPS Coordinates",

prop_details_buildingStructure: "Building Structure",
prop_details_numberFloors: "Number of Floors",
prop_details_totalUnits: "Total Units",
prop_details_sections: "Building Sections",
prop_details_utilities: "Utility Areas",
prop_details_basementParking: "Basement / Parking Count",
prop_details_rooftopAccess: "Rooftop Access Info",
prop_details_yearConstruction: "Year of Construction",
prop_details_fireZone: "Fire Safety Zone",
prop_details_manageStructure: "Manage full structure →",

prop_details_assignedPersonnel: "Assigned Personnel",
prop_details_goToAssignedStaff: "Go to Assigned Staff tab →",
prop_details_manageAssignments: "Manage Assignments →",

prop_details_compliance: "Compliance & Legal Information",
prop_details_valid: "Valid",
prop_details_upcoming: "Upcoming",
prop_details_registered: "Registered",
prop_details_active: "Active",
prop_details_expires: "Expires:",
prop_details_lastService: "Last service:",
prop_details_renewal: "Renewal:",
prop_details_manageDocuments: "Manage Documents →",

prop_details_systemMetadata: "System Metadata",
prop_details_createdBy: "Created By",
prop_details_lastUpdatedBy: "Last Updated By",
prop_details_lastActivity: "Last Activity",
prop_details_propertyId: "Property ID",
prop_details_createdOn: "Created On",
prop_details_updatedOn: "Last Updated On",
prop_details_organizationId: "Organization ID",

prop_details_internalNotes: "Internal Notes",
prop_details_addNote: "Add Note",
prop_details_lastNoteBy: "Last note by",
modal_delete_description: "Deleting this property will permanently remove all associated data. This action cannot be undone.",

  // STRUCTURE TAB
  prop_structure_title: "Structure",
  prop_structure_floors: "Floors",
  prop_structure_addFloor: "Add Floor",
  prop_structure_units: "Units",
  prop_structure_addUnit: "Add Unit",
  prop_structure_manageFloors: "Manage Floors",
  prop_structure_bulkAdd: "Bulk Add Units",
  prop_structure_downloadDiagram: "Download Structure Diagram",
  prop_structure_fullHierarchy: "View Full Hierarchy",

  // FLOOR ITEM
  prop_floor_label: "Floor",
  prop_floor_ground: "Ground Floor",

  // UNIT CARD
  prop_unit_assignedTenant: "Assigned Tenant",
  prop_unit_noTenant: "No Tenant",
  prop_unit_noCaretakers: "No Caretakers",
  prop_unit_caretakers: "Caretakers",
  prop_unit_rooms: "Rooms",
  
  // BADGES
  prop_badge_residential: "Residential",
  prop_badge_office: "Office",
  prop_badge_storage: "Storage",
  prop_badge_active: "Active",
  prop_badge_vacant: "Vacant",
  prop_badge_maintenance: "Maintenance Needed",

  // ACTIONS
  action_view: "View",
  action_edit: "Edit",
  action_delete: "Delete",

    // FLOOR MODALS
    floor_add_title: "Add Floor",
    floor_add_subtitle: "Create a new floor for this property.",
    floor_field_name: "Floor Name",
    floor_placeholder_name: "Enter floor name...",
    floor_add_action: "Create Floor",

    floor_edit_title: "Edit Floor",
    floor_edit_subtitle: "Update the floor name.",
    floor_edit_action: "Save Floor",

    // UNIT MODALS (EXTRAS NOT IN YOUR FILE)
    unit_field_id: "Unit ID",
    unit_placeholder_id: "Enter unit ID...",
    unit_field_category: "Category",
    unit_field_usage: "Usage Type",
    unit_field_status_label: "Status",
    unit_placeholder_status: "Select status",

    // UNIT STATUS OPTIONS
    unit_status_active: "Active",
    unit_status_vacant: "Vacant",
    unit_status_maintenance: "Needs Maintenance",

    // UNIT TYPES (EXACT UI TERMS)
    unit_type_residential: "Residential Unit",
    unit_type_office: "Office Unit",
    unit_type_storage: "Storage Unit",

    // MODAL GENERIC
    modal_close: "Close",
    modal_save: "Save",
    modal_update: "Update",

prop_assets_search_placeholder: "Search assets...",
prop_assets_filter_category: "Asset Category",
prop_assets_filter_status: "Status",
prop_assets_addAsset: "Add Asset",

prop_assets_col_name: "Asset Name",
prop_assets_col_category: "Category",
prop_assets_col_unit: "Unit",
prop_assets_col_serial: "Serial Number",
prop_assets_col_status: "Status",

prop_asset_status_active: "Active",
prop_asset_status_under_maintenance: "Under Maintenance",
prop_asset_status_out_of_service: "Out of Service",

prop_asset_unitFloor: "Unit & Floor",
prop_asset_serial: "Serial Number",
prop_asset_lastMaintenance: "Last Maintenance",
prop_asset_nextMaintenance: "Next Maintenance Due",

prop_asset_openFullDetails: "Open Full Asset Details",
prop_asset_assignMaintenance: "Assign Maintenance",

prop_asset_add_title: "Add Asset to Unit",
prop_asset_add_sub: "Register a new asset and define metadata.",
prop_asset_label_name: "Asset Name",
prop_asset_placeholder_name: "Enter asset name",
prop_asset_label_category: "Asset Category",
prop_asset_placeholder_category: "Select category",
prop_asset_label_serial: "Serial Number (optional)",
prop_asset_placeholder_serial: "Enter serial number",
prop_asset_add_cta: "Add Asset",

prop_asset_edit_title: "Edit Asset",
prop_asset_edit_sub: "Modify asset details and review settings.",
prop_asset_edit_cta: "Save Changes",


// ===== ASSET DETAIL PAGE =====
prop_assetDetail_back: "Back to Assets",
prop_assetDetail_status_active: "Active",
prop_assetDetail_status_inactive: "Inactive",
prop_assetDetail_delete: "Delete Asset",
prop_assetDetail_more: "More",
prop_assetDetail_edit: "Edit Asset",

// More Menu
prop_assetDetail_downloadPDF: "Download Asset Report (PDF)",
prop_assetDetail_exportHistory: "Export History",
prop_assetDetail_assignMaintenance: "Assign Maintenance",

// Header Badge Info
prop_assetDetail_unit: "Unit",
prop_assetDetail_floor: "Floor",
prop_assetDetail_placement: "Placement",
prop_assetDetail_serialModel: "Serial / Model",
prop_assetDetail_vendor: "Vendor / Supplier",

// Warranty & Lifecycle
prop_assetWarranty_title: "Warranty & Lifecycle",
prop_assetWarranty_purchaseDate: "Purchase Date",
prop_assetWarranty_installationDate: "Installation Date",
prop_assetWarranty_expectedLifetime: "Expected Lifetime",
prop_assetWarranty_vendor: "Vendor / Supplier",
prop_assetWarranty_expiry: "Warranty Expiry",
prop_assetWarranty_expiresSoon: "Expires Soon",
prop_assetWarranty_lastUpdated: "Last Updated",

// Maintenance Overview
prop_assetMaintenance_title: "Maintenance Overview",
prop_assetMaintenance_viewLogs: "View Maintenance Logs",
prop_assetMaintenance_frequency: "Maintenance Frequency",
prop_assetMaintenance_status: "Maintenance Status",
prop_assetMaintenance_onSchedule: "On Schedule",
prop_assetMaintenance_nextScheduled: "Next Scheduled Maintenance",
prop_assetMaintenance_lastCompleted: "Last Maintenance Completed",
prop_assetMaintenance_assignedTechs: "Assigned Technicians",

// Documents & Media
prop_assetDocs_title: "Documents & Media",
prop_assetDocs_uploadDrag: "Upload files or drag documents here",
prop_assetDocs_uploadBtn: "Upload Document",
prop_assetDocs_view: "View",
prop_assetDocs_download: "Download",
prop_assetDocs_delete: "Delete",

// Service History
prop_assetHistory_title: "Service History",
prop_assetHistory_maintenanceCompleted: "Maintenance Completed",
prop_assetHistory_issueReported: "Issue Reported",
prop_assetHistory_assetInstalled: "Asset Installed",
prop_assetHistory_performedBy: "Performed by",

// Quick Actions
prop_assetQuick_title: "Quick Actions",
prop_assetQuick_ticket: "Create Ticket for This Asset",
prop_assetQuick_assignTask: "Assign Maintenance Task",
prop_assetQuick_addDocument: "Add Document",
prop_assetQuick_markOutOfService: "Mark as Out of Service",

// Assigned Staff
prop_assetStaff_title: "Assigned Staff",
prop_assetStaff_remove: "Remove",

// Unit Context
prop_assetContext_title: "Unit Context",
prop_assetContext_unit: "Unit",
prop_assetContext_floor: "Floor",
prop_assetContext_property: "Property",


  prop_assign_title: "Assign Maintenance Task",
  prop_assign_subtitle: "Set task details, select technicians, and schedule maintenance.",
  prop_assign_technicians: "Assigned Technicians",
  
  prop_assign_priority: "Task Priority",
  prop_assign_priority_low: "Low",
  prop_assign_priority_medium: "Medium",
  prop_assign_priority_high: "High",
  prop_assign_priority_urgent: "Urgent",

  prop_assign_scheduleDate: "Scheduled Date",

  prop_assign_frequency: "Maintenance Frequency",
  prop_assign_select: "Select option",
  prop_assign_freq_oneTime: "One-Time",
  prop_assign_freq_weekly: "Weekly",
  prop_assign_freq_monthly: "Monthly",
  prop_assign_freq_quarterly: "Quarterly",
  prop_assign_freq_yearly: "Yearly",

  prop_assign_notes: "Additional Notes",
  prop_assign_notes_placeholder: "Enter notes or special instructions",

  prop_assign_context: "Task Context",
  prop_assign_unit: "Unit",
  prop_assign_floor: "Floor",
  prop_assign_property: "Property",

  prop_assign_submit: "Assign Task",
prop_deleteAsset_title: "Delete Asset",
  prop_deleteAsset_description: "Are you sure you want to permanently delete this asset? This action cannot be undone.",
  prop_deleteAsset_warning: "Deleting this asset will remove all related maintenance logs, documents, and history.",
  prop_deleteAsset_confirm: "Delete Asset",


prop_asset_docs_title: "Documents & Media",
  prop_asset_docs_uploadText: "Upload files or drag documents here",
  prop_asset_docs_uploadButton: "Upload Document",

prop_asset_history_title: "Service History",
  prop_asset_history_maintenanceCompleted: "Maintenance Completed",
  prop_asset_history_issueReported: "Issue Reported",
  prop_asset_history_installed: "Asset Installed",

  prop_asset_history_desc_maintenance1: "Routine quarterly check. Cleaned filters, checked refrigerant levels.",
  prop_asset_history_desc_issue1: "Unit making a rattling sound. Technician dispatched.",
  prop_asset_history_desc_install1: "New HVAC unit installed by certified technician.",

  prop_asset_history_performedBy: "Performed by:",
  prop_asset_history_ticket: "Ticket",


maint_summary_totalTasks: "Total Maintenance Tasks",
maint_summary_preventive: "Preventive Tasks",
maint_summary_corrective: "Corrective Tasks",
maint_summary_overdue: "Overdue Tasks",

maint_upcoming_title: "Upcoming Maintenance",
maint_viewCalendar: "View Calendar",

maint_tasks_title: "Maintenance Tasks",
maint_createTask: "Create Maintenance Task",

maint_col_task: "Task",
maint_col_asset: "Asset",
maint_col_frequency: "Frequency",
maint_col_nextDue: "Next Due",
maint_col_status: "Status",
maint_col_assigned: "Assigned To",

maint_status_upcoming: "Upcoming",
maint_status_pending: "Pending",
maint_status_overdue: "Overdue",

maint_drawer_title: "Maintenance Task Details",
maint_field_taskName: "Task Name",
maint_field_asset: "Asset",
maint_field_frequency: "Frequency",
maint_field_nextDue: "Next Due Date",
maint_field_status: "Status",
maint_field_assignedTo: "Assigned To",
maint_field_description: "Description",
maint_noDescription: "No description provided.",
maint_action_editTask: "Edit Task",

maint_create_title: "Create Maintenance Task",
maint_placeholder_taskName: "Enter task name",
maint_placeholder_description: "Write description...",
maint_action_create: "Create Task",

maint_calendar_title: "Maintenance Calendar",

maint_assign_title: "Assign Maintenance",
maint_assign_asset: "Selected Asset",
maint_assign_task: "Select Task Template",
maint_assign_button: "Assign Maintenance",

maint_noTechnicians: "No technicians assigned",
maint_assignTechnician: "Assign Technician",
maint_assign: "Assign",
maint_remove: "Remove",

gps_map_title: "Technician GPS Tracking",
gps_map_placeholder: "Map will load here…",
gps_search_technician: "Search technician...",

gps_filter_status: "Filter by Status",

gps_col_technician: "Technician",
gps_col_role: "Role",
gps_col_status: "Status",
gps_col_lastUpdate: "Last Update",

gps_status_online: "Online",
gps_status_offline: "Offline",
gps_status_onTask: "On Task",

gps_drawer_title: "Technician Details",
gps_drawer_status: "Current Status",
gps_drawer_lastUpdate: "Last GPS Update",
gps_drawer_coordinates: "Coordinates",

docs_of: "of",
col_actions: "Actions",

prop_staff_title: "Technician Staff",
prop_staff_assign: "Assign Technician",
prop_staff_search: "Search technician...",
prop_staff_assignedFloors: "Assigned Floors",

common_active: "Active",
common_inactive: "Inactive",

  struct_floors: "Floors",
  struct_add_floor: "Add Floor",
  struct_units: "Units",

  struct_add_unit: "Add Unit",
  struct_assigned_tenant: "Assigned Tenant",
  struct_unassigned: "Unassigned",
  struct_no_tenant: "No Tenant",
  struct_caretakers: "Caretakers",
  struct_no_caretakers: "No Caretakers",

  struct_manage_floors: "Manage Floors",
  struct_bulk_units: "Bulk Add Units",
  struct_download_diagram: "Download Structure Diagram",
  struct_view_hierarchy: "View Full Hierarchy",

  // Status tags
  struct_status_active: "Active",
  struct_status_vacant: "Vacant",
  struct_status_maintenance: "Maintenance Needed",

floor_add_title: "Add Floor",
  floor_add_subtitle: "Create a new floor and define its basic structure.",

  floor_field_name: "Floor Name / Number",
  floor_placeholder_name: "e.g. Ground Floor",

  floor_field_label: "Floor Label (Optional)",
  floor_placeholder_label: "e.g. West Wing",

  floor_field_units: "Number of Units on This Floor",
  floor_units_hint: "You can add units individually after creating the floor.",

  floor_field_notes: "Additional Notes (Optional)",
  floor_placeholder_notes: "Enter any relevant notes here...",

  floor_info_text:
    "Floor details can be edited later. You can also add individual units after creating the floor.",

  floor_btn_add: "Add Floor",
  btn_cancel: "Cancel",



  /* ---------------------- */
  /* FLOOR – ADD FLOOR MODAL */
  /* ---------------------- */
  floor_add_title: "Add Floor",
  floor_add_subtitle: "Create a new floor and define its basic structure.",

  floor_field_name: "Floor Name / Number",
  floor_field_label: "Floor Label (Optional)",
  floor_field_units: "Number of Units on This Floor",
  floor_field_notes: "Additional Notes (Optional)",

  floor_placeholder_name: "e.g. Ground Floor",
  floor_placeholder_label: "e.g. West Wing",
  floor_placeholder_notes: "Enter any relevant notes here...",

  floor_units_hint: "You can add units individually after creating the floor.",
  floor_info_text:
    "Floor details can be edited later. You can also add individual units after creating the floor.",

  floor_btn_add: "Add Floor",

  /* ---------------------- */
  /* FLOOR – EDIT FLOOR MODAL */
  /* ---------------------- */
  floor_edit_title: "Edit Floor",
  floor_edit_subtitle: "Modify floor details and manage units on this level.",

  floor_units_title: "Units on This Floor",
  floor_units_subtitle: "Rename units, reorder them, or remove them.",

  floor_units_addUnit: "Add Unit",
  floor_units_deleteWarning: "Delete this unit? This action cannot be undone.",

  /* ---------------------- */
  /* UNIT DETAILS */
  /* ---------------------- */

  unit_badge_default: "Unit",
  unit_noTenant: "Unassigned",
  unit_status_active: "Active",
  unit_status_maintenance: "Maintenance",
  unit_status_vacant: "Vacant",

  /* ---------------------- */
  /* BUTTONS */
  /* ---------------------- */

  btn_cancel: "Cancel",
  btn_saveChanges: "Save Changes",
  btn_deletePermanent: "Delete Permanently",

 unit_add_title: "Add Unit",
  unit_add_subtitle: "Create a new unit under this floor and assign metadata.",

  unit_field_name: "Unit Name / Number",
  unit_field_type: "Unit Type",
  unit_field_tenant: "Assigned Tenant (optional)",
  unit_field_sqft: "Square Footage (optional)",
  unit_field_floor: "Floor Number",
  unit_field_status: "Unit Status",
  unit_field_notes: "Unit Notes (optional)",

  unit_placeholder_name: "e.g., 'Unit 301'",
  unit_placeholder_tenant: "Search tenant",
  unit_placeholder_sqft: "e.g., 1250 sq ft",
  unit_placeholder_notes: "Add any relevant remarks, e.g., 'Requires inspection'",
  unit_placeholder_staff: "Search staff...",
  unit_placeholder_room: "e.g. Kitchen",

  unit_assign_staff: "Assign Caretakers / Service Staff",
  unit_assign_staff_desc: "Assigned staff will receive tickets for this unit.",

  unit_rooms_title: "Rooms / Areas (Optional)",
  unit_rooms_desc:
    "Define rooms or functional areas in this unit for accurate maintenance routing.",

  unit_type_residential: "Residential",
  unit_type_office: "Office",
  unit_type_retail: "Retail / Shop",
  unit_type_storage: "Storage",
  unit_type_warehouse: "Warehouse",

  unit_status_active: "Active",
  unit_status_vacant: "Vacant",
  unit_status_maintenance: "Maintenance Needed",
  unit_status_renovation: "Under Renovation",

  unit_add_action: "Add Unit",
  btn_add: "Add",
  btn_cancel: "Cancel",

unit_edit_title: "Edit Unit",
  unit_edit_subtitle: "Update unit information, tenant assignment, and structural details.",

  unit_field_name: "Unit Name / Number*",
  unit_field_type: "Unit Type*",
  unit_field_sqft: "Square Footage",
  unit_field_status: "Unit Status",
  unit_field_notes: "Unit Notes",

  unit_placeholder_name: "e.g., 'Unit 301'",
  unit_placeholder_sqft: "1250 sq ft",
  unit_placeholder_notes: "Add any relevant notes here...",
  unit_placeholder_tenant: "Search tenants...",
  unit_placeholder_staff: "Add Caretakers, Technicians...",
  unit_placeholder_room: "e.g. Living Room, Storage Area",

  unit_tenant_section: "Assigned Tenant",
  unit_tenant_note: "The selected tenant will receive notifications and access to this unit.",

  unit_assign_staff: "Assigned Staff",
  unit_assign_staff_desc: "Staff here will be auto-notified for maintenance and unit-level tasks.",

  unit_rooms_title: "Rooms / Functional Areas",
  unit_rooms_desc: "Define internal sections for more accurate ticket routing and scheduling.",

  unit_type_residential: "Residential",
  unit_type_office: "Office",
  unit_type_retail: "Retail / Shop",
  unit_type_storage: "Storage",
  unit_type_warehouse: "Warehouse",
  unit_type_custom: "Custom",

  unit_status_active: "Active",
  unit_status_vacant: "Vacant",
  unit_status_maintenance: "Maintenance Needed",
  unit_status_renovation: "Under Renovation",

  unit_delete_action: "Delete Unit",
  unit_edit_action: "Save Changes",
  btn_cancel: "Cancel",
  btn_add: "Add",

struct_edit_floor: "Edit Floor",
// ADD ASSET MODAL
prop_asset_add_title: "Add Asset to Unit",
prop_asset_add_sub: "Register a new equipment item for this unit and define maintenance metadata.",

prop_asset_section_basic: "Basic Asset Information",
prop_asset_section_location: "Location Details",
prop_asset_section_warranty: "Warranty & Lifecycle",
prop_asset_section_maintenance: "Maintenance Settings",
prop_asset_section_documents: "Asset Documents & Photos",
prop_asset_section_notes: "Notes",

prop_asset_label_name: "Asset Name",
prop_asset_label_category: "Asset Category",
prop_asset_label_manufacturer: "Manufacturer (optional)",
prop_asset_label_model: "Model Number (optional)",
prop_asset_label_serial: "Serial Number (optional)",
prop_asset_label_unit: "Unit",
prop_asset_label_floor: "Floor",
prop_asset_label_position: "Placement Position (optional)",
prop_asset_label_purchase: "Purchase Date",
prop_asset_label_installation: "Installation Date",
prop_asset_label_warranty: "Warranty Expiry",
prop_asset_label_lifetime: "Expected Lifetime (optional)",
prop_asset_label_vendor: "Vendor / Supplier Name (optional)",
prop_asset_label_maintFreq: "Maintenance Frequency",
prop_asset_label_nextMaint: "Next Scheduled Maintenance",
prop_asset_label_staff: "Assign Responsible Staff",

prop_asset_label_notes: "Notes (optional)",

prop_asset_placeholder_name: "e.g., HVAC Split AC",
prop_asset_placeholder_manufacturer: "Enter manufacturer",
prop_asset_placeholder_model: "Enter model number",
prop_asset_placeholder_serial: "Enter serial number",
prop_asset_placeholder_position: "e.g., Living Room Wall",
prop_asset_placeholder_lifetime: "e.g., 5 years",
prop_asset_placeholder_vendor: "Enter name",
prop_asset_placeholder_notes: "e.g., Installed during 2023 renovation. Check for leaks quarterly.",
prop_asset_placeholder_searchStaff: "Search and add staff...",

prop_asset_add_cta: "Add Asset",



tickets: "Tickets",

ticketsDashboard: "Dashboard",
ticketsAll: "All Tickets",
ticketCreate: "Create Ticket",

tkt_dash_title: "Tickets Dashboard",
tkt_dash_subtitle: "System-wide overview of ticket activity, SLAs, and workload distribution.",

tkt_filter_org: "Organizations: All",
tkt_filter_property: "Properties: All",
tkt_filter_range: "Date Range: This Month",

tkt_kpi_total: "Total Tickets",
tkt_kpi_open: "Open Tickets",
tkt_kpi_overdue: "Overdue Tickets",
tkt_kpi_overdue_breached: "SLA Breached",
tkt_kpi_resolvedToday: "Resolved Today",
tkt_last_24h: "Last 24 hours",

tkt_vol_trend: "Ticket Volume Trend",
tkt_vol_trend_sub: "Overall ticket flow across all organizations",

tkt_by_category: "Tickets by Category",
tkt_by_category_sub: "Breakdown of tickets by service category",

tkt_sla_perf: "SLA Performance",
tkt_sla_perf_sub: "SLA compliance in current reporting period",
tkt_sla_rate: "SLA Compliance Rate",

tkt_overdue_breakdown: "Overdue Breakdown",
tkt_overdue_breakdown_sub: "Age of tickets that have breached SLA",

tkt_top_orgs: "Top 5 Tickets by Organization",
tkt_by_property: "Tickets by Property",
tkt_high_priority_only: "High Priority Only",

tkt_heatmap: "Tickets Heatmap (Time vs Day)",


tickets: "Tickets",
ticketsDashboard: "Tickets Dashboard",
allTickets: "All Tickets",
createTicket: "Create Ticket",

ticket_filters_org: "Organization",
ticket_filters_property: "Property",
ticket_filters_priority: "Priority",
ticket_filters_category: "Category",
ticket_filters_status: "Status",
ticket_filters_assigned: "Assigned To",
ticket_filters_created: "Created Date",
ticket_filters_sla: "SLA Status",
ticket_filters_clear: "Clear All",

ticket_bulk_selected: "tickets selected",
ticket_bulk_assign: "Assign Technician",
ticket_bulk_priority: "Change Priority",
ticket_bulk_status: "Update Status",
ticket_bulk_delete: "Delete",

ticket_col_id: "Ticket ID",
ticket_col_title: "Title / Summary",
ticket_col_priority: "Priority",
ticket_col_category: "Category",
ticket_col_org: "Organization",
ticket_col_property: "Property",
ticket_col_assigned: "Assigned To",
ticket_col_status: "Status",
ticket_col_created: "Created Date",
ticket_col_sla: "SLA Due",

ticket_create_header: "Create New Ticket",
ticket_create_sub: "Log a new issue and assign it to the correct team.",
ticket_back_to_all: "Back to All Tickets",

ticket_info: "Ticket Information",
ticket_location: "Location Details",
ticket_assignment: "Assignment",
ticket_attachments: "Attachments (Optional)",
ticket_description: "Description & Notes",
ticket_sla_settings: "SLA Settings (Advanced)",

ticket_title: "Ticket Title",
ticket_type: "Ticket Type",
ticket_category: "Category",
ticket_requested_by: "Requested By",
ticket_priority: "Priority",
ticket_source: "Source of Request",
ticket_desc: "Description",
ticket_internal_notes: "Internal Notes",

ticket_org: "Organization",
ticket_floor: "Floor",
ticket_property: "Property",
ticket_unit: "Unit / Room",
ticket_address: "Address",
ticket_asset: "Asset",

ticket_assign_to: "Assign To",
ticket_user_picker: "User Picker",
ticket_expected: "Expected Completion Date",
ticket_notify_user: "Notify User",

ticket_drag_drop: "Drag & drop files here or click to browse",
ticket_drag_support: "Supports: Images, PDFs, Videos",

ticket_sla_override: "Override default SLA settings?",
ticket_cancel: "Cancel",
ticket_submit: "Create Ticket",

ticket_edit: "Edit Ticket",
ticket_assign: "Assign / Reassign",
ticket_title: "Title",
ticket_priority: "Priority",
ticket_category: "Category",
ticket_type: "Ticket Type",
ticket_source: "Source",
ticket_requested_by: "Requested By",
ticket_description: "Description",
ticket_internal_notes: "Internal Notes",
ticket_timeline: "Timeline",
ticket_attachments: "Attachments",
ticket_chat: "Ticket Chat",
ticket_related: "Related Tickets",
ticket_type_message: "Type a message...",
ticket_close: "Close Ticket",
ticket_mark_completed: "Mark as Completed",
add_internal_note: "Add Internal Note",
back_to_tickets: "Back to Tickets",

assign_title: "Assign Ticket",
assign_desc: "Select a role and user to assign this ticket.",
assign_role: "Assign To Role",
expected_date: "Expected Completion Date",
available_users: "Available Users",
assigned_to: "Assigned to",
tasks_today: "Tasks today",
assignment_note: "Assignment Note (Optional)",
assignment_note_placeholder: "Add a note for the assignee...",
cancel: "Cancel",
assign_btn: "Assign Ticket",
upload: "Upload",

// ========== UPDATE STATUS ==========
  ticket_status_title: "Update Ticket Status",
  ticket_status_sub: "Change the workflow stage and optionally add a note for this action.",
  ticket_status_current: "Current Status",
  ticket_status_new: "New Status",
  ticket_status_choose: "Select new status",
  ticket_status_rule_preview: "Rule preview: Attachments are recommended before completing.",
  ticket_status_note: "Status Change Note (Optional)",
  ticket_status_note_ph: "Add a reason for this status update...",
  ticket_status_note_info: "This note will be visible in the ticket timeline.",
  ticket_status_attach_advice: "Consider adding completion photos or documents to verify the work done.",
  ticket_status_upload_btn: "Upload Attachments",
  ticket_status_close_warn1: "Closing a ticket is irreversible.",
  ticket_status_close_warn2: "Once closed, the ticket cannot be reopened or modified.",
  ticket_status_close_feedback: "Require tenant feedback after closing",
  ticket_status_sla_notice: "Completing this ticket will stop the SLA timers.",
  ticket_status_submit: "Mark Completed",

  // ========== INTERNAL NOTES ==========
  ticket_notes_title: "Internal Notes",
  ticket_notes_sub: "Notes visible only to Super Admin, Facility Managers, and Admins.",
  ticket_notes_addNew: "Add a New Internal Note",
  ticket_notes_ph: "Write an internal note...",
  ticket_notes_attach: "Attach files (optional)",
  ticket_notes_tag: "Tag this note (optional)",
  ticket_notes_high: "Record as high-importance note",
  ticket_notes_info: "These notes are not visible to tenants or service providers.",
  ticket_notes_history: "Notes History",
  ticket_notes_highLabel: "High Importance",
  ticket_notes_dummy1: "Tenant reported a major leak. Maintenance assigned. Monitor closely.",
  ticket_notes_submit: "Add Note",

  // actions
  action_cancel: "Cancel",
  action_close: "Close",
ticket_notes_viewFull: "View full note",



tkt_dash_title: "Tickets Dashboard",
  tkt_dash_subtitle: "System-wide overview of ticket activity, SLAs, and workload.",

  tkt_filter_org: "Organizations: All",
  tkt_filter_property: "Properties: All",
  tkt_filter_range: "Date Range: This Month",

  tkt_kpi_total: "Total Tickets",
  tkt_kpi_total_footer: "+2.5% • All organizations",
  tkt_kpi_open: "Open Tickets",
  tkt_badge_open: "Open",
  tkt_kpi_overdue: "Overdue Tickets",
  tkt_kpi_overdue_footer: "SLA Breached: 212",
  tkt_kpi_resolved_today: "Resolved Today",
  tkt_kpi_last24: "Last 24 hours",

  tkt_vol_trend: "Ticket Volume Trend",
  tkt_vol_trend_sub: "Overall ticket flow across all organizations",

  tkt_by_category: "Tickets by Category",
  tkt_by_category_sub: "Breakdown of tickets by service category",

  tkt_sla_perf: "SLA Performance",
  tkt_sla_perf_sub: "SLA compliance in current reporting period",

  tkt_overdue_breakdown: "Overdue Breakdown",
  tkt_overdue_breakdown_sub: "Age of tickets that breached SLA",

  tkt_top_orgs: "Top 5 Tickets by Organization",
  tkt_by_property: "Tickets by Property",
  tkt_high_priority_only: "High Priority Only",

  tkt_heatmap: "Tickets Heatmap (Time vs Day)",
  tkt_heatmap_sub: "Ticket density visualized by day and time",

  tkt_org: "Organization",
  tkt_open: "Open",
  tkt_in_progress: "In Progress",
  tkt_overdue: "Overdue",
  tkt_view_all: "View All",

ticketCreate: "Create New Ticket",
ticketCreateDesc: "Log a new issue and assign it to the correct team.",
backToTickets: "Back to All Tickets",

// Sections
ticketInfo: "Ticket Information",
locationDetails: "Location Details",
assignment: "Assignment",
descriptionNotes: "Description & Notes",

// Fields
ticketTitle: "Ticket Title*",
ticketType: "Ticket Type",
category: "Category*",
requestedBy: "Requested By",
priority: "Priority*",
sourceOfRequest: "Source of Request",

organization: "Organization*",
property: "Property*",
floor: "Floor",
unitRoom: "Unit / Room",
address: "Address",
asset: "Asset",

assignTo: "Assign To*",
userPicker: "User Picker",
searchUser: "Search for a user...",
expectedCompletion: "Expected Completion Date",
notifyUser: "Notify User",

description: "Description*",
internalNotes: "Internal Notes",

cancel: "Cancel",
createTicketsButton: "Create Tickets",
createTicketButton: "Create Ticket",
cancelChanges: "Cancel Changes",
saveChanges: "Save Changes",
closeTicket: "Close Ticket",
backToTicket: "Back to Ticket",
ticketEdit: "Edit Ticket",
ticketEditDesc: "Update ticket information and assignment.",


ticket_overview: "Overview",
ticket_details: "Details",
ticket_attachments: "Attachments",
ticket_history: "History Log",
ticket_chat: "Chat Hub",
ticket_assessment: "Assessment",
ticket_timeline: "Timeline Audit",


title: "Title",
priority: "Priority",
category: "Category",
ticketType: "Ticket Type",
sourceOfRequest: "Source",
requestedBy: "Requested By",
slaDue: "SLA Due",
lastUpdated: "Last Updated",
description: "Description",
internalNotes: "Internal Notes",
timeline: "Timeline",
attachments: "Attachments",




requestedBy: "Requested By",
assignedTo: "Assigned To",
createdAt: "Created Date",
highlights: "Highlights",
latestEvent: "Latest event",
messages: "Messages",
historyLog: "History Log",
assessment: "Assessment",
recentTimeline: "Recent Timeline",
addInternalNote: "Add Internal Note",


attachmentsForTicket: "Attachments for Ticket",
attachmentsSubtitle: "View, upload, tag, and manage all media files linked to this ticket.",
backToTicket: "Back to Ticket",
uploadFiles: "Upload Files",
searchPlaceholder: "Search by file name or tag",
sortNewest: "Sort: Newest First",
clearFilters: "Clear Filters",
fileType: "File Type",
taggedAs: "Tagged As",
uploadedBy: "Uploaded By",
dateRange: "Date Range",
fileDetails: "File Details",
fileName: "File Name",
fileType: "File Type",
fileSize: "File Size",
dimensions: "Dimensions",
uploadDate: "Upload Date",
tags: "Tags",
addTag: "Add Tag",
timeline: "Timeline",
addToTimeline: "Add this attachment to ticket timeline",
updateAttachment: "Update Attachment",
download: "Download",
deleteFile: "Delete File",
ticketHistoryLog: "Ticket History Log",
historySubtitle: "A full audit trail of every action performed on this ticket.",
backToTicket: "Back to Ticket Detail",
exportLog: "Export Log",
filterEvents: "Filter Events",
performedBy: "Performed By",
allUsers: "All Users",
tenant: "Tenant",
technician: "Technician",
admin: "Admin",
dateRange: "Date Range",
impactLevel: "Impact Level",
allLevels: "All Levels",
low: "Low",
medium: "Medium",
high: "High",
searchHistory: "Search history events...",
eventType: "Event Type",
created: "Created",
assignmentChange: "Assignment Change",
statusChange: "Status Change",
noteAdded: "Note Added",
slaEvent: "SLA Event",
clearFilters: "Clear Filters",

slaBreach: "SLA Breach",
firstResponseTime: "First Response Time",
slaFirstResponse: "First response time",
statusChanged: "Status Changed",
attachmentUploaded: "Attachment Uploaded",
ticketCreated: "Ticket Created",

subject: "Subject",
download: "Download",

auditInspector: "Audit Metadata Inspector",
selectEvent: "Select an event from the timeline to view its detailed metadata.",
participants: "Participants",
tenant: "Tenant",
facilityManager: "Facility Manager",
technician: "Technician",
superAdmin: "Super Admin",

filters: "Filters",
allMessages: "All Messages",
attachmentsOnly: "Attachments Only",
adminMessages: "Admin Messages",
voiceNotes: "Voice Notes",
searchMessages: "Search messages...",

ticketTitle: "Ticket",
locationSample: "Floor 2 → Unit 201 → Server Room",
inProgress: "In Progress",

writeMessage: "Write a message...",
messageDetails: "Message Details",
noMessageSelected: "Select a message to view details",

you: "You",
assessment_title: "Ticket Assessment",
assessment_subtitle: "Review diagnostic details, risk rating, and recommended actions.",
assessment_overview: "Assessment Overview",
priority: "Priority",
category: "Category",
property: "Property",
unit: "Unit",
sla_remaining: "SLA Remaining",
assessment_info: "Assessment affects SLA, risk levels, and required technician skill set.",

root_cause: "Root Cause Analysis",
cause_1: "Clogged condenser coil reducing airflow.",
cause_2: "Refrigerant pressure imbalance detected during inspection.",
cause_3: "Unit maintenance overdue by 3 months.",

risk_assessment: "Risk Assessment",
risk_score: "Risk Score",
impact: "Impact",
impact_text: "Issue may affect cooling and server room stability.",
urgency: "Urgency",
urgency_text: "Requires immediate attention to avoid downtime.",

rec_actions: "Recommended Actions",
action_1_title: "Clean condenser coil",
action_1_desc: "Perform full cleaning to restore airflow efficiency.",
action_2_title: "Check refrigerant levels",
action_2_desc: "Balance pressure and ensure no leakage.",
action_3_title: "Replace worn components",
action_3_desc: "Proactively replace filters and weak parts.",

suggested_personnel: "Suggested Technician (AI)",
technician: "Technician",
skill_match: "Best skill match",
fast_response: "Fast response",
low_workload: "Low workload",
assign_now: "Assign Now",
ticket_notes_title: "Internal Notes",
ticket_notes_sub: "Notes visible only to Super Admin, Facility Managers, and Admins.",
ticket_notes_addNew: "Add a New Internal Note",
ticket_notes_ph: "Write an internal note...",
ticket_notes_attach: "Attach files (optional)",
ticket_notes_tag: "Tag this note (optional)",

ticket_notes_tag_general: "General",
ticket_notes_tag_escalation: "Escalation",
ticket_notes_tag_sla: "SLA Exception",
ticket_notes_tag_safety: "Safety Concern",

ticket_notes_high: "Record as high-importance note",
ticket_notes_highLabel: "High Importance",

ticket_notes_info: "These notes are not visible to tenants or service providers.",
ticket_notes_history: "Notes History",

ticket_notes_dummy1: "Tenant reported a significant leak. Maintenance assigned. Monitor closely.",
ticket_notes_dummy2: "Security cameras installed. Please see attached vendor report.",

ticket_notes_viewFull: "View full note",
ticket_notes_submit: "Add Note",

action_edit: "Edit",
action_delete: "Delete",
action_close: "Close",
ticket_notes_title: "Internal Notes",
ticket_notes_sub: "Notes visible only to Super Admin, Facility Managers, and Admins.",
ticket_notes_addNew: "Add a New Internal Note",
ticket_notes_ph: "Write an internal note...",
ticket_notes_attach: "Attach files (optional)",
ticket_notes_tag: "Tag this note (optional)",

ticket_notes_tag_general: "General",
ticket_notes_tag_escalation: "Escalation",
ticket_notes_tag_sla: "SLA Exception",
ticket_notes_tag_safety: "Safety Concern",

ticket_notes_high: "Record as high-importance note",
ticket_notes_highLabel: "High Importance",

ticket_notes_info: "These notes are not visible to tenants or service providers.",
ticket_notes_history: "Notes History",

ticket_notes_dummy1: "Tenant reported a significant leak. Maintenance assigned. Monitor closely.",
ticket_notes_dummy2: "Security cameras installed. Please see attached vendor report.",

ticket_notes_viewFull: "View full note",
ticket_notes_submit: "Add Note",

action_edit: "Edit",
action_delete: "Delete",
action_close: "Close",


  maintenance: "Maintenance",
  maintenanceDashboard: "Dashboard",
  maintenanceList: "Maintenance List",
  maintenanceCreate: "Create Maintenance",
  maintenanceEdit: "Edit Maintenance",


maintenance: "Maintenance",
maintenanceDashboard: "Dashboard",
maintenanceList: "Maintenance List",
maintenanceCreate: "Create Maintenance",
maintenanceEdit: "Edit Maintenance",

maintenanceExportSummary: "Export Summary",
maintenanceOpenReports: "Open Maintenance Reports",
maintenanceCreateTask: "Create Maintenance Task",

maintenanceUpcomingTasks: "Upcoming Maintenance Tasks",
maintenanceUpcomingHint: "Next 7 days",
maintenanceOverdueTasks: "Overdue Tasks",
maintenanceOverdueHint: "Requires immediate action",
maintenanceWarningAssets: "Assets in Warning State",
maintenanceWarningHint: "Based on sensor logs / task history",
maintenanceCertificates: "Certificates Near Expiry",
maintenanceCertificatesHint: "Within 30 days",

maintenanceWorkload: "Workload Distribution",
maintenanceWorkloadSub: "By role: Facility Manager / Caretaker / Technician / Service Provider",
maintenanceRoleManager: "Manager",
maintenanceRoleCaretaker: "Caretaker",
maintenanceRoleTechnician: "Technician",
maintenanceRoleProvider: "Service Provider",

maintenanceTrend: "Maintenance Trend (Last 6 Months)",
maintenanceTrendSub: "Preventive vs Corrective Maintenance",

maintenanceAssetHealth: "Asset Health Overview",
maintenanceAssetHealthHealthy: "Healthy",
maintenanceAssetHealthWarning: "Warning",
maintenanceAssetHealthCritical: "Critical",
maintenanceAssetHealthUnknown: "Unknown",

maintenanceRiskScore: "Maintenance Risk Score",
maintenanceRiskModerate: "Moderate Risk",
maintenanceRiskUpcoming: "Upcoming high-risk assets:",
maintenanceRiskViewAll: "View All Risk Reports",

maintenanceOverdueTitle: "Overdue Tasks",
maintenanceOverdueViewAll: "View All Overdue Tasks",

maintenanceTableTask: "Task Name",
maintenanceTableAsset: "Asset/Area",
maintenanceTableProperty: "Property",
maintenanceTableAssignedTo: "Assigned To",
maintenanceTableDueDate: "Due Date",
maintenanceTableStatus: "Status",
maintenanceTableActions: "Actions",

maintenanceUpcomingPM: "Upcoming Preventive Maintenance (Next 7 Days)",
maintenanceSeeCalendar: "See Maintenance Calendar",

maintenanceRecent: "Recently Completed",
maintenanceResultPassed: "Passed",
maintenanceResultObservations: "Passed with observations",
maintenanceResultFailed: "Failed",

maintenance: "Maintenance",
maintenanceDashboard: "Dashboard",

maintenanceDashboardPageTitle: "Maintenance Dashboard",
maintenanceDashboardSub: "Global overview of all preventive and corrective maintenance activities.",

maintenance_exportSummary: "Export Summary",
maintenance_openReports: "Open Maintenance Reports",
maintenance_createTask: "Create Maintenance Task",

/* KPI */
maintenance_kpi_upcoming: "Upcoming Maintenance Tasks",
maintenance_kpi_upcoming_hint: "Next 7 days",

maintenance_kpi_overdue: "Overdue Tasks",
maintenance_kpi_overdue_hint: "Requires immediate action",

maintenance_kpi_warningAssets: "Assets in Warning State",
maintenance_kpi_warningAssets_hint: "Based on sensor logs / task history",

maintenance_kpi_certificates: "Certificates Near Expiry",
maintenance_kpi_certificates_hint: "Within 30 days",

/* Workload */
maintenance_workload_title: "Workload Distribution",
maintenance_workload_sub: "By role: Facility Manager / Caretaker / Technician / Service Provider",

maintenance_role_manager: "Manager",
maintenance_role_caretaker: "Caretaker",
maintenance_role_technician: "Technician",
maintenance_role_provider: "Service Provider",

/* Trend */
maintenance_trend_title: "Maintenance Trend (Last 6 Months)",
maintenance_trend_sub: "Preventive vs Corrective Maintenance",

/* Asset Health */
maintenance_assetHealth_title: "Asset Health Overview",
maintenance_assetHealth_assetsLabel: "Assets",
maintenance_assetHealth_healthy: "Healthy",
maintenance_assetHealth_warning: "Warning",
maintenance_assetHealth_critical: "Critical",
maintenance_assetHealth_unknown: "Unknown",

/* Risk Score */
maintenance_risk_title: "Maintenance Risk Score",
maintenance_risk_moderate: "Moderate Risk",
maintenance_risk_upcomingTitle: "Upcoming high-risk assets:",
maintenance_risk_viewAll: "View All Risk Reports",

/* Overdue */
maintenance_overdue_title: "Overdue Tasks",
maintenance_overdue_viewAll: "View All Overdue Tasks",

maintenance_table_taskName: "Task Name",
maintenance_table_assetArea: "Asset/Area",
maintenance_table_property: "Property",
maintenance_table_assignedTo: "Assigned To",
maintenance_table_dueDate: "Due Date",
maintenance_table_status: "Status",
maintenance_table_actions: "Actions",

/* Upcoming PM */
maintenance_upcoming_title: "Upcoming Preventive Maintenance (Next 7 Days)",
maintenance_upcoming_seeCalendar: "See Maintenance Calendar",

/* Recently Completed */
maintenance_recent_title: "Recently Completed",
maintenance_result_passed: "Passed",
maintenance_result_observations: "Passed with observations",
maintenance_result_failed: "Failed",

/* Generic */
action_view: "View",

maintenanceListPageTitle: "Maintenance Tasks",
maintenanceListPageSub: "View, filter, and manage all maintenance tasks.",
maintenance_createTask: "Create Task",
search: "Search",
filter_organization: "Organization",
filter_property: "Property",
filter_assetCategory: "Asset Category",
filter_taskType: "Task Type",
filter_priority: "Priority",
filter_status: "Status",
filter_technician: "Technician",
filter_sla: "SLA",
resetFilters: "Reset Filters",

mt_table_id: "Task ID",
mt_table_title: "Task Title",
mt_table_org: "Organization",
mt_table_property: "Property",
mt_table_asset: "Asset",
mt_table_technician: "Technician",
mt_table_dueDate: "Due Date",
mt_table_priority: "Priority",
mt_table_status: "Status",
mt_table_sla: "SLA",

mt_tab_overview: "Overview",
mt_tab_detail: "Detail",
mt_tab_upcoming: "Upcoming Tasks",
mt_tab_overdue: "Overdue Tasks",
mt_tab_calendar: "Calendar",
mt_tab_preventive: "Preventive Schedule",
mt_tab_assetMaintenance: "Asset Maintenance",
mt_tab_propertyMaintenance: "Property Maintenance",

label_mtId: "Maintenance ID",
label_asset: "Asset",
label_property: "Property",

modal_delete_title: "Delete Maintenance Task",
modal_delete_description: "Are you sure you want to delete",
modal_delete_confirm: "Yes, Delete",

mt_overview_title: "Maintenance Overview",
mt_overview_desc: "General summary and important highlights for this maintenance task.",
mt_tab_overview: "Overview",
mt_tab_detail: "Detail",
mt_tab_upcomingTasks: "Upcoming Tasks",
mt_tab_overdueTasks: "Overdue Tasks",
mt_tab_calendar: "Calendar",
mt_tab_preventive: "Preventive Schedule",
mt_tab_assetMaintenance: "Asset Maintenance",
mt_tab_propertyMaintenance: "Property Maintenance",





mt_tab_upcomingTasks: "Upcoming Tasks",
mt_tab_overdueTasks: "Overdue Tasks",
mt_tab_calendar: "Calendar",
mt_tab_preventive: "Preventive Schedule",
mt_tab_assetMaintenance: "Asset Maintenance",
mt_tab_propertyMaintenance: "Property Maintenance",

fromSchedule: "From Schedule",

exportList: "Export Task List",
sortBySoonest: "Sort by: Soonest Due",

filter_timeRange: "Time Range",
filter_organization: "Organization",
filter_property: "Property",
filter_assetCategory: "Asset Category",
filter_priority: "Priority",
filter_status: "Status",

mt_table_title: "Task Name",
mt_table_asset: "Asset / Area",
mt_table_property: "Property",
mt_table_technician: "Assigned To",
mt_table_dueDate: "Scheduled Date",
mt_table_priority: "Priority",
mt_table_status: "Status",

modal_delete_title: "Delete Task?",
modal_delete_desc: "Are you sure you want to delete this maintenance task?",
mt_status_overdue: "Overdue",
mt_label_schedule: "SCHEDULE",
mt_label_description: "DESCRIPTION",
mt_label_checklistPreview: "CHECKLIST PREVIEW",

mt_action_openDetails: "Open Full Maintenance Details",
mt_action_viewHistory: "View History",
mt_action_editTask: "Edit Task",


mt_tab_overdueTasks: "Overdue Tasks",
mt_overdue_subtitle: "All maintenance tasks past their scheduled date.",
mt_overdue_kpi_critical: "Critical Overdue Tasks",
mt_overdue_kpi_criticalDesc: "Overdue by more than 10 days",
mt_overdue_kpi_high: "High Priority Overdue",
mt_overdue_kpi_highDesc: "Overdue 3–10 days",
mt_overdue_kpi_medium: "Medium Priority",
mt_overdue_kpi_mediumDesc: "Overdue 1–3 days",
mt_overdue_kpi_unassigned: "Unassigned Overdue",
mt_overdue_kpi_unassignedDesc: "Not yet assigned to a technician",

backToDashboard: "Back to Dashboard",
exportOverdueList: "Export Overdue List",
assignTechnicians: "Assign Technicians",

mt_overdue_days: "Days Overdue",
mt_overdue_sla: "SLA State",
daysOverdue: "days overdue",
unassigned: "Unassigned",


  mt_calendar_monthView: "Monthly View",
  mt_calendar_weekView: "Weekly View",
  mt_calendar_dayView: "Daily View",

  mt_calendar_month: "Month",
  mt_calendar_week: "Week",
  mt_calendar_day: "Day",

  createMaintenanceSchedule: "Create Maintenance Schedule",
  createMaintenanceTask: "Create Maintenance Task",

  mt_calendar_noTasks: "No tasks scheduled",
  mt_calendar_selectTask: "Select a task to view details",
  mt_calendar_exampleDesc: "Scheduled preventive task for the selected date.",

  openTaskDetail: "Open Task Detail",
  reschedule: "Reschedule",
  reassignTask: "Reassign Task",
  deleteTask: "Delete Task",

priority: "Priority",
  category: "Category",
  quickFilters: "Quick Filters",
  resetFilters: "Reset Filters",


mt_pm_title: "Preventive Maintenance Schedules",
mt_pm_subtitle: "View and manage all PM schedules across organizations.",

mt_pm_search: "Search schedules...",
mt_pm_import: "Import Schedules",
mt_pm_create: "Create Schedule",

// Filters
mt_pm_filter_org: "Organization",
mt_pm_filter_property: "Property",
mt_pm_filter_assetCategory: "Asset Category",
mt_pm_filter_frequency: "Frequency",
mt_pm_filter_status: "Status",
mt_pm_filter_dateRange: "Date Range",
mt_pm_resetFilters: "Reset Filters",

// Table
mt_pm_table_name: "Schedule Name",
mt_pm_table_org: "Organization",
mt_pm_table_property: "Property",
mt_pm_table_asset: "Asset",
mt_pm_table_frequency: "Frequency",
mt_pm_table_due: "Next Due Date",
mt_pm_table_assigned: "Assigned To",
mt_pm_table_status: "Status",
mt_pm_overdue: "Overdue",

// Bulk bar
mt_pm_selected: "schedules selected",
mt_pm_pause: "Pause",
mt_pm_resume: "Resume",
mt_pm_assign: "Assign Technician",
mt_pm_delete: "Delete",




  asset_title: "Asset Maintenance Overview",
  asset_subtitle: "View maintenance status, schedules, performance, and history for this asset.",

  asset_btn_edit: "Edit Asset",
  asset_btn_addTask: "Add Maintenance Task",
  asset_btn_assignSchedule: "Assign Schedule",

  asset_linkedSchedules: "Linked Schedules",
  asset_noSchedules: "Asset has no preventive maintenance schedules assigned.",
  asset_assignNow: "Assign Schedule",

  asset_upcomingTasks: "Upcoming Tasks",
  asset_overdue_alert: "tasks are overdue. Immediate attention required.",

  asset_history: "Maintenance History",
  asset_viewFullHistory: "View Full History",

  asset_analytics: "Performance & Health Analytics",

  asset_documents: "Related Documents",
  asset_uploadDocument: "Upload Document",

  asset_quickActions: "Quick Actions",
  asset_markUnderRepair: "Mark as Under Repair",
asset_export: "Export Asset Report",

  asset_metadata: "Asset Metadata",
  asset_alerts: "Warnings & Alerts",

  asset_notes: "Notes",
  asset_addNote: "Add Note",
asset_id: "ID no",
  asset_status_active: "Active",
  asset_model: "Model",
  asset_serial: "Serial",
  asset_manufacturer: "Manufacturer",
  asset_installDate: "Install Date",
  asset_warrantyExpiry: "Warranty Expiry",
  asset_changeImage: "Change Image",

  asset_linkedSchedules: "Linked Schedules",
  asset_noSchedules: "Asset has no preventive maintenance schedules assigned.",
  asset_assignNow: "Assign Schedule",

  asset_upcomingTasks: "Upcoming Tasks",
  asset_overdue_alert: "tasks are overdue. Immediate attention required.",
  asset_taskId: "Task ID",
  asset_scheduledDate: "Scheduled Date",
  asset_assignedTo: "Assigned To",
  asset_priority: "Priority",
  asset_status: "Status",
  asset_status_overdue: "Overdue",
  asset_status_upcoming: "Upcoming",
  asset_actions: "Actions",
  asset_openTask: "Open Task",

  asset_history: "Maintenance History",
  asset_history_item1: "Replaced air filter and cleaned coils.",
  asset_history_item2: "Evidence Added: Post-service report uploaded.",
  asset_history_item3: "Quarterly inspection completed.",
  asset_by: "by",
  asset_viewTaskDetails: "View Task Details",
  asset_viewFullHistory: "View Full History",

  asset_analytics: "Performance & Health Analytics",
  asset_avgTime: "Avg Time to Complete",
  asset_totalTasks: "Total Tasks Completed",
  asset_overdueTasks: "Overdue Tasks",
  asset_conditionRating: "Condition Rating",
  asset_chart_activity: "Line Chart: Maintenance Activity",
  asset_chart_failures: "Bar Chart: Component Failures",

  asset_documents: "Related Documents",
  asset_uploadDocument: "Upload Document",
  asset_uploadedBy: "Uploaded by",
  asset_on: "on",

  asset_quickActions: "Quick Actions",
  asset_markUnderRepair: "Mark as Under Repair",
  asset_export: "Export Asset Report",

  asset_metadata: "Asset Metadata",
  asset_createdOn: "Created On",
  asset_createdBy: "Created By",
  asset_lastUpdated: "Last Updated",
  asset_organization: "Organization",
  asset_property: "Property",
  asset_location: "Location",

  asset_alerts: "Warnings & Alerts",
  asset_alert_warranty: "Warranty expires soon.",
  asset_alert_overdue: "This asset has overdue maintenance tasks.",

  asset_notes: "Notes",
  asset_addNote: "Add Note",
  asset_note_dummy: "Observed noise during inspection; recommend checking the fan belt.",


mt_property_title: "Property Maintenance Overview",
mt_property_subtitle: "View all maintenance activity, schedules, tasks, and asset health for this property.",

mt_property_org: "Organization",

mt_property_totalAssets: "Total Assets",
mt_property_activeSchedules: "Active Schedules",
mt_property_openTasks: "Open Tasks",
mt_property_overdueTasks: "Overdue Tasks",

mt_property_activeSchedules: "Active Maintenance Schedules",
mt_property_noSchedules: "No schedules assigned to this property.",
mt_property_assignSchedule: "Assign Schedule",

mt_property_upcomingTasks: "Upcoming Tasks",
mt_property_overdueAlert: "This property has overdue maintenance tasks requiring immediate attention.",
mt_property_taskId: "Task ID",
mt_property_scheduledDate: "Scheduled Date",
mt_property_technician: "Technician",
mt_property_priority: "Priority",
mt_property_location: "Location",
mt_property_status: "Status",
mt_property_overdue: "Overdue",
mt_property_inProgress: "In Progress",
mt_property_scheduled: "Scheduled",

mt_property_history: "Recent Maintenance History",
mt_property_history_item1: "Replaced filter for HVAC unit.",
mt_property_history_item2: "Completed fire extinguisher inspection.",
mt_property_viewFullHistory: "View Full History",

mt_property_analytics: "Property Maintenance Analytics",
mt_property_completionRate: "Schedule Completion Rate",
mt_property_workload: "Maintenance Workload (Last 6 Months)",

mt_property_risk: "Risk Indicators",
mt_property_highRisk: "High Risk Assets",
mt_property_expiringWarranty: "Expiring Warranty",
mt_property_agingEquipment: "Aging Equipment (>10 years)",

mt_property_compliance: "Compliance Summary",
mt_property_fireSafety: "Fire Safety Certificate",
mt_property_elevatorInspection: "Elevator Inspection",
mt_property_electricalReport: "Electrical Safety Report",
mt_property_valid: "Valid",
mt_property_expiresSoon: "Expires in 15 days",
mt_property_expired: "Expired",
mt_property_uploadDoc: "Upload Document",
mt_property_openCompliance: "Open Compliance Module",

 mt_detail_title: "Maintenance Detail",
  mt_detail_subtitle: "View all information related to this maintenance task.",
  mt_detail_id: "Task ID",
  mt_detail_lastUpdated: "Last Updated",

  mt_detail_assignTech: "Assign Technician",
  mt_detail_addEvidence: "Add Evidence",
  mt_detail_markCompleted: "Mark Completed",

  mt_detail_schedule: "Schedule",
  mt_detail_asset: "Asset",
  mt_detail_property: "Property",
  mt_detail_technician: "Technician",
  mt_detail_dueDate: "Due Date",
  mt_detail_startedAt: "Started At",

  mt_detail_openAsset: "Open Asset",

 mt_overview_title: "Maintenance Overview",
  mt_overview_subtitle: "Quick summary of this maintenance task, status, and progress.",
  mt_overview_id: "Task ID",
  mt_overview_lastUpdated: "Last Updated",

  mt_overview_status: "Status",
  mt_overview_priority: "Priority",
  mt_overview_category: "Category",

  mt_overview_progress: "Progress",
  mt_overview_technician: "Assigned Technician",
  mt_overview_dueDate: "Due Date",

  mt_overview_property: "Property",
  mt_overview_asset: "Asset",

ms_backToSchedules: "Back to Schedules",

ms_title: "Create Maintenance Schedule",
ms_subtitle: "Set up preventive maintenance for assets, properties, and organizations.",

ms_scheduleInfo: "Schedule Information",
ms_scheduleName: "Schedule Name*",
ms_scheduleName_placeholder: "Example: Monthly HVAC Filter Cleaning",
ms_description: "Description",
ms_description_placeholder: "Describe the purpose of this schedule.",
ms_category: "Category",
ms_priority: "Priority",

ms_orgProperty: "Organization & Property",
ms_org: "Organization*",
ms_selectOrg: "Select Organization",
ms_property: "Property*",
ms_selectProperty: "Select Property",
ms_area: "Area / Floor / Unit",
ms_allFloors: "All Floors",
ms_locationNotes: "Location Notes",
ms_locationNotes_placeholder: "Specify exact room or area.",

ms_assetSelection: "Asset Selection*",
ms_selectSpecificAsset: "Select Specific Asset",
ms_applyToCategory: "Apply Schedule to Asset Category",
ms_asset: "Asset",
ms_assetDetails: "Asset Details",
ms_model: "Model",
ms_serial: "Serial No",
ms_lastMaint: "Last Maint",
ms_warranty: "Warranty",

ms_frequencyTiming: "Frequency & Timing",
ms_frequency: "Frequency*",
ms_repeatOn: "Repeat On",
ms_startDate: "Start Date*",
ms_preferredTime: "Preferred Time",
ms_endDate: "End Date",
ms_noEndDate: "No End Date",
ms_endOn: "End on specific date",

ms_assignment: "Assignment",
ms_assignedTo: "Assigned To",
ms_autoAssign: "Auto-assign tasks to available technician",
ms_assignExpertise: "Assign by asset expertise",

ms_additional: "Additional Settings",
ms_checklistTemplate: "Checklist Template",
ms_autoReminder: "Auto-generate reminder 24 hours before due date.",
ms_autoTenantNotice: "Auto-generate tenant notice (if relevant).",

ms_cancel: "Cancel",
ms_save: "Save Schedule",


ms_edit_back: "Back to Schedules",
ms_edit_title: "Edit Maintenance Schedule",
ms_edit_subtitle: "Modify schedule settings and review impact on future tasks.",
ms_edit_scheduleId: "Schedule ID",
ms_edit_viewDetails: "View Schedule Details",

ms_edit_scheduleInfo: "Schedule Information",
ms_edit_name: "Schedule Name",
ms_edit_description: "Description",
ms_edit_category: "Category",
ms_edit_category_note: "Changing category may modify template recommendations.",
ms_edit_priority: "Priority",

ms_edit_freqTiming: "Frequency & Timing",
ms_edit_freqWarning: "Changing frequency will generate a new task pattern starting from the next cycle.",
ms_edit_frequency: "Frequency",
ms_edit_onThe: "On the",
ms_edit_startDate: "Start Date",
ms_edit_prefTime: "Preferred Time",

ms_edit_impactPreview: "Change Impact Preview",
ms_edit_futureTasks: "Future Tasks Affected",
ms_edit_tasks: "Tasks",

ms_edit_freqImpactTitle: "Frequency Change Impact: ",
ms_edit_freqImpact: "New tasks will now be generated on the 15th of each month.",
ms_edit_assignImpactTitle: "Assignment Impact: ",
ms_edit_assignImpact: "No change. All future tasks remain assigned to 'HVAC Team'.",

ms_edit_overdueNotice: "This schedule has 2 overdue tasks. Changes may affect their reporting.",
ms_edit_applyNewOnly: "Apply changes only to new tasks (from next cycle)",
ms_edit_applyAllFuture: "Apply changes to all future (unstarted) tasks",

ms_edit_versionHistory: "Version History",
ms_edit_madeChanges: "made changes",
ms_edit_created: "created schedule",
ms_edit_historyExample1: "Updated priority from Medium to High.",
ms_edit_historyExample2: "Initial schedule creation.",

ms_edit_cancel: "Cancel",
ms_edit_save: "Save Changes",

maint_assign_title: "Assign Maintenance",
maint_assign_subtitle: "Select a user and role to assign this maintenance task.",
maint_assign_role: "Assign To Role",
maint_assign_due: "Expected Completion Date",
maint_assign_filter_note: "Users shown are filtered based on asset property & role permissions.",
maint_assign_users: "Available Users",
maint_assign_property: "Assigned to",
maint_assign_tasks: "Tasks today",
maint_assign_open: "Open tickets",
maint_assign_note: "Assignment Note (Optional)",
maint_assign_note_ph: "Add a note for the assignee...",
maint_assign_button: "Assign Task",

mt_create_title: "Create Maintenance Task",
mt_create_subtitle: "Fill in details to create a new maintenance task.",
mt_create_name: "Task Name",
mt_create_name_ph: "Enter task name",
mt_create_category: "Category",
mt_create_priority: "Priority",
mt_create_dueDate: "Due Date",
mt_create_description: "Description",
mt_create_description_ph: "Describe the task details...",
mt_create_button: "Create Task",

mt_edit_title: "Edit Maintenance Task",
mt_edit_subtitle: "Update the fields below and save changes.",
mt_edit_button: "Save Changes",

priority_low: "Low",
priority_medium: "Medium",
priority_high: "High",
priority_critical: "Critical",

select: "Select",

prop_backToList: "Back to Properties",
prop_edit_title: "Edit Property",
prop_edit_subtitle: "Update property information, structure, and assigned staff.",

prop_info: "Property Information",
prop_info_sub: "Update essential details about the property.",

prop_name: "Property Name",
prop_type: "Property Type",
prop_street: "Street Address",
prop_city: "Region / City",
prop_zip: "Postal Code / ZIP",
prop_lat: "GPS Latitude",
prop_long: "GPS Longitude",
prop_size: "Property Size",
prop_desc: "Description / Notes",

prop_structure: "Building Structure",
prop_floors: "Number of Floors",
prop_units: "Total Units",
prop_sections: "Building Sections (Optional)",
prop_utilities: "Utility Areas (Optional)",

prop_personnel: "Assign Personnel",
prop_manager: "Facility Manager",
prop_caretakers: "Caretakers",
prop_providers: "Service Providers",
prop_security: "Security / Access Control Team",
prop_notes: "Additional Notes",

prop_save_changes: "Save Changes",
users_module: "Users",
users_list: "Users",
users_create: "Add New User",

users: "Users",
users_sub: "Manage all users across all organizations.",
users_export: "Export Users",
users_add: "Add New User",

users_user: "User",
users_role: "Role",
users_org: "Organization",
users_properties: "Properties",
users_phone: "Phone",
users_status: "Status",
users_last_activity: "Last Activity",
users_actions: "Actions",

back_to_users: "Back to Users",

user_create_title: "Create New User",
user_create_subtitle: "Add a new user to the Hauswart ecosystem.",

user_info_title: "User Information",
user_info_desc: "Enter basic user details and assign a role.",

user_full_name: "Full Name",
user_email: "Email Address",
user_phone: "Phone Number",
user_photo: "Profile Photo (Optional)",
user_password: "Password",
user_confirm_password: "Confirm Password",

user_role_title: "Role Assignment",
user_role_desc: "Roles determine access level and visibility across the platform.",
user_role: "Role",
user_customize_permissions: "Customize Permissions",
user_permissions_for: "Permissions for",
user_permissions_desc: "Full access to manage tickets, properties, maintenance schedules, and users within their assigned organization.",

user_access_title: "Access Mapping",
user_access_desc: "Assigning properties limits which tickets and tasks the user can work on.",
user_assign_org: "Assign Organization",
user_assign_properties: "Assign Properties",

user_status_title: "Status & Activation",
user_status: "Status",
user_send_activation: "Send activation email to the user",

unsaved_changes: "Unsaved changes",

action_cancel: "Cancel",
action_create_user: "Create User",
user_edit_title: "Edit User",
user_edit_subtitle: "Update user details, role, and access permissions.",

action_save_changes: "Save Changes",







user_tab_overview: "Overview",
user_tab_performance: "Performance Dashboard",
user_tab_attendance: "Attendance",
user_tab_dailyAttendance: "Daily Attendance Log",
user_tab_offboarding: "Offboarding & Access",

action_backToUsers: "Back to Users",
action_editUser: "Edit User",
action_assignRole: "Assign Role",
action_moreActions: "More Actions",



user_delete_title: "Delete User",
user_delete_subtitle: "This action is permanent and cannot be undone.",

user_delete_warning_title:
  "Deleting this user will permanently remove their access and detach all active assignments.",
user_delete_warning_desc:
  "Historical data will remain for compliance. Proceed with caution.",

user_delete_impact_title: "Before You Delete This User",

user_open_tickets: "Open Tickets",
user_active_maintenance: "Active Maintenance",
user_recurring_tasks: "Recurring Assignments",
user_upcoming_tasks: "Upcoming Scheduled Tasks",
user_live_chats: "Live Chats",

user_reassign_notice:
  "These items must be reassigned or closed before deletion.",

user_delete_confirm:
  "I understand that this action is permanent and cannot be undone.",

user_delete_notes_title: "Optional Admin Notes",
user_delete_notes_desc:
  "Add an internal note explaining why this user is being deleted. This will be stored in audit logs.",
user_delete_notes_placeholder:
  "e.g., User has left the company as of YYYY-MM-DD.",

user_delete_irreversible: "This action is irreversible.",

action_delete_user: "Delete User Permanently",
action_backToUserProfile: "Back to User Profile",

user_orgs: "Organization(s)",
user_properties: "Assigned Properties",
user_last_active: "Last Active",
user_created: "Created Date",
user_id: "User ID",
        
role_apply_title: "Apply Role & Permission Changes?",
role_apply_subtitle:
  "These changes affect user access immediately and will be logged in the audit system.",

role_apply_summary:
  "You are about to apply the following changes to multiple user roles.",

permission_added: "Permission Added",
permission_removed: "Permission Removed",

role_facility_manager: "Role: Facility Manager",
role_technician: "Role: Technician",
role_auditor: "Role: Auditor",

action_confirm_apply: "Confirm & Apply",
user_overview_basic: "Basic Information",
user_overview_access: "Organization & Property Access",
user_quick_actions: "Quick Actions",
user_recent_activity: "Recent Activity",
user_upcoming_assignments: "Upcoming Assignments",

user_joined_date: "Joined Date",
user_last_login: "Last Login",
user_mfa_enabled: "MFA Enabled",
user_assigned_properties: "Assigned Properties",

action_edit_information: "Edit Information",
action_edit_access: "Edit Access",
action_view_full_log: "View Full Log",
action_reset_password: "Reset Password",
action_deactivate_user: "Deactivate User",
action_view_audit_log: "View Audit Log",
action_download_report: "Download User Report",
perf_total_tickets: "Total Tickets",
perf_sla_adherence: "SLA Adherence",
perf_avg_resolution: "Avg. Resolution",
perf_overdue_tasks: "Overdue Tasks",
perf_maintenance: "Maintenance",
perf_rework_rate: "Rework Rate",
perf_graphs: "Performance Graphs",
perf_tasks_completed: "Tasks Completed Over Time",
perf_task_distribution: "Task Distribution by Category",
perf_ticket_performance: "Ticket Performance",
perf_task_strengths: "Task Category Strengths",
perf_attendance_summary: "Attendance Summary",
perf_productivity: "Productivity Score",
perf_excellent: "Excellent",
perf_sla_compliance: "SLA Compliance",
perf_avg_completion: "Avg Completion",
perf_total_orders: "Total Orders",
perf_attendance: "Attendance",

action_download_performance: "Download Performance Report",
action_filter: "Filter",
action_compare_user: "Compare With Another User",
attendance_overview: "Attendance Overview",
attendance_subtitle: "Detailed attendance insights for this user.",

att_working_days: "Working Days",
att_present_days: "Present Days",
att_absent_days: "Absent Days",
att_late_arrivals: "Late Arrivals",
att_early_clockouts: "Early Clock-outs",

filter_date_range: "Date Range: This Month",
filter_organization: "Organization",
filter_property: "Property",
filter_status: "Status: All",

att_monthly_heatmap: "Monthly Attendance Heatmap",
att_statistics: "Attendance Statistics",
att_avg_daily_hours: "Avg Daily Hours",
att_punctuality_score: "Avg Punctuality Score",
att_avg_breaks: "Avg Breaks Taken",
att_daily_hours_trend: "Daily Hours Trend (Last 30 Days)",
att_late_vs_early: "Late Arrivals vs Early Exits",

att_leave_tracker: "Leave & Exception Tracker",
att_recent_logs: "Recent Clock-ins & Clock-outs",
att_compliance: "Compliance Overview",

att_avg_weekly_hours: "Avg weekly hours",
att_overtime: "Overtime hours",
att_undertime: "Undertime hours",
att_missing_logs: "Missing clock-ins",
att_frequent_late_warning: "Frequent late arrivals detected.",

quick_actions: "Quick Actions",

action_export_attendance: "Export Attendance",
action_view_daily_logs: "View Daily Logs",
action_request_leave: "Request Leave",
action_view_full_history: "View Full History",
action_reset_filters: "Reset Filters",
action_approve_leave: "Approve Leave Request",
action_manual_entry: "Add Manual Entry",
action_send_reminder: "Send Reminder to Clock-in",

clock_in: "Clock-in",
clock_out: "Clock-out",
compliant: "Compliant",



att_daily_logs: "Daily Attendance Logs",
att_daily_logs_sub: "Clock-in, clock-out, and shift data for this user.",

att_missing_logs: "Missing Logs",

table_date: "Date",
table_day: "Day",
table_total_hours: "Total Hours",
table_status: "Status",
table_location: "Location",
table_actions: "Actions",

att_status_present: "Present",
att_status_late: "Late",
att_status_missing: "Missing Log",
att_status_absent: "Absent",
att_status_early: "Early Exit",

action_export_logs: "Export Logs",
action_filter: "Filter",
action_view_map: "View Map",
action_previous: "Previous",
action_next: "Next",

offboarding_title: "Offboarding & Access Removal",
offboarding_subtitle: "Deactivate the user, revoke access, and reassign responsibilities.",

action_deactivate_user: "Deactivate User",
action_archive_user: "Archive User",
action_delete_user: "Delete User Permanently",

off_last_active: "Last Active",
off_account_created: "Account Created",
off_created_by: "Created By",

off_choose_type: "Choose Deactivation Type",

off_temp_suspension: "Temporary Suspension",
off_temp_suspension_desc: "User cannot log in; account remains intact.",

off_full_deactivation: "Full Deactivation",
off_full_deactivation_desc: "Removes user from active lists; tasks must be reassigned.",

off_permanent_deletion: "Permanent Deletion",
off_permanent_deletion_desc: "User and personal identifiers will be permanently removed.",
off_irreversible_warning: "This action is irreversible and requires confirmation.",

off_reassign_tasks: "Reassign Tickets & Tasks",
off_reassign_warning: "These items must be reassigned or closed before deletion.",

table_task_id: "Task ID",
table_task_type: "Type",
table_property: "Property",
table_due_date: "Due Date",
table_reassign_to: "Reassign To",

off_property_cleanup: "Property Assignment Cleanup",
off_unassign_all: "Unassign from all properties",

off_notes_docs: "Notes & Documentation",
off_reason_label: "Reason for Offboarding",
off_upload_docs: "Upload Supporting Documents",
off_hr_comments: "HR Comments",

off_access_removal: "Access Removal Steps",
off_disable_login: "Disable login access",
off_terminate_sessions: "Terminate active sessions",
off_revoke_tokens: "Revoke API tokens",
off_remove_roles: "Remove role assignments",
off_remove_properties: "Remove property assignments",
off_remove_org_access: "Remove organization access",
off_stop_notifications: "Stop notifications & alerts",

off_data_retention: "Data Retention Mode",
off_retain_all: "Retain all data",
off_retain_all_desc: "Keeps all user-generated data intact. (Recommended)",

off_anonymize_pii: "Retain logs, anonymize PII",
off_anonymize_pii_desc: "Removes personal identifiers from user data.",

off_full_anonymization: "Full anonymization",
off_full_anonymization_desc: "Anonymizes all user data for GDPR compliance.",

off_summary: "Offboarding Summary",
off_deactivation_type: "Deactivation Type",
off_tasks_reassigned: "Tasks Reassigned",
off_properties_reassigned: "Properties Reassigned",
off_access_steps: "Access Steps",
off_data_retention_label: "Data Retention",

action_review_confirm: "Review & Confirm Offboarding",


/* =========================
   OFFBOARDING – EN
========================= */

offboarding_title: "Offboarding & Access Removal",
offboarding_subtitle: "Deactivate the user, revoke access, and reassign responsibilities.",

action_deactivate_user: "Deactivate User",
action_archive_user: "Archive User",
action_delete_user: "Delete User Permanently",
action_review_confirm: "Review & Confirm Offboarding",

off_last_active: "Last Active",
off_account_created: "Account Created",
off_created_by: "Created By",

off_choose_type: "Choose Deactivation Type",

off_temp_suspension: "Temporary Suspension",
off_temp_suspension_desc: "User cannot log in; account remains intact.",

off_full_deactivation: "Full Deactivation",
off_full_deactivation_desc: "Removes user from active lists; tasks must be reassigned.",

off_permanent_deletion: "Permanent Deletion",
off_permanent_deletion_desc: "User and personal identifiers will be permanently removed.",
off_irreversible_warning: "This action is irreversible and requires confirmation.",

off_reassign_tasks: "Reassign Tickets & Tasks",
off_reassign_warning: "These items must be reassigned or closed before deletion.",

table_task_id: "Task ID",
table_task_type: "Type",
table_property: "Property",
table_due_date: "Due Date",
table_reassign_to: "Reassign To",

off_property_cleanup: "Property Assignment Cleanup",
off_unassign_all: "Unassign from all properties",

off_notes_docs: "Notes & Documentation",
off_reason_label: "Reason for Offboarding",
off_upload_docs: "Upload Supporting Documents",
off_hr_comments: "HR Comments (Optional)",

off_access_removal: "Access Removal Steps",
off_disable_login: "Disable login access",
off_terminate_sessions: "Terminate active sessions",
off_revoke_tokens: "Revoke API tokens",
off_remove_roles: "Remove role assignments",
off_remove_properties: "Remove property assignments",
off_remove_org_access: "Remove organization access",
off_stop_notifications: "Stop notifications & alerts",

off_data_retention: "Data Retention Mode",
off_retain_all: "Retain all data",
off_retain_all_desc: "Keeps all user-generated data intact. (Recommended)",
off_anonymize_pii: "Retain logs, anonymize PII",
off_anonymize_pii_desc: "Removes personal identifiers from user data.",
off_full_anonymization: "Full anonymization",
off_full_anonymization_desc: "Anonymizes all user data for GDPR compliance.",

off_summary: "Offboarding Summary",
off_deactivation_type: "Deactivation Type",
off_tasks_reassigned: "Tasks Reassigned",
off_properties_reassigned: "Properties Reassigned",
off_access_steps: "Access Steps",
off_data_retention_label: "Data Retention",



tenants_module: "Tenants",
tenants: "Tenants",
tenants_subtitle: "Manage all tenants across organizations and properties.",
add_tenant: "Add Tenant",
export_list: "Export List",

tenants_total: "Total Tenants",
tenants_active: "Active Tenants",
tenants_pending: "Pending Onboarding",
tenants_recent: "Recently Added",

tenant_name: "Tenant Name",
move_in: "Move-In",
last_activity: "Last Activity",


add_new_tenant: "Add New Tenant",
add_tenant_subtitle: "Create a tenant profile and assign property/unit.",
tenants_list: "Tenants List",

personal_information: "Personal Information",
full_name: "Full Name",
enter_full_name: "Enter full name",
email_address: "Email Address",
enter_email: "Enter email address",
date_of_birth: "Date of Birth",
phone_number: "Phone Number",
enter_phone: "Enter phone number",
gender: "Gender",
male: "Male",
female: "Female",
other: "Other",
secondary_phone_optional: "Secondary Phone (Optional)",
enter_secondary_phone: "Enter secondary phone",
national_id: "National ID / CNIC",
enter_national_id: "Enter national ID",
emergency_contact_name: "Emergency Contact Name",
enter_contact_name: "Enter contact name",
emergency_contact_phone: "Emergency Contact Phone",
enter_contact_phone: "Enter contact phone",

tenancy_details: "Tenancy Details",
tenant_type: "Tenant Type",
primary: "Primary",
co_tenant: "Co-Tenant",
family_member: "Family Member",
lease_start_date: "Lease Start Date",
lease_end_date: "Lease End Date",
account_status: "Account Status",
active: "Active",
pending: "Pending",
suspended: "Suspended",
move_in_date: "Move-In Date",
move_out_date_optional: "Move-Out Date (Optional)",
rent_amount_optional: "Rent Amount (Optional)",
deposit_amount_optional: "Deposit Amount (Optional)",
enter_amount: "Enter amount",
lease_helper_text: "These fields help track lease and rental history.",

property_assignment: "Property Assignment",
optional: "Optional",
select_organization: "Select Organization",
select_property: "Select Property",
select_unit: "Select Unit",
floor: "Floor",
building: "Building",
block: "Block",
north: "North",
unit_type: "Unit Type",
assign_primary_responsible: "Assign Tenant as Primary Responsible for Unit",
assign_later_note: "You can assign a property later from the tenant details screen.",

cancel: "Cancel",
create_tenant: "Create Tenant",




edit_tenant: "Edit Tenant",
edit_tenant_subtitle: "Update tenant information",
update_tenant: "Update Tenant",



// ===============================
// TENANT DETAIL
// ===============================
tenantProfile_title: "Tenant Profile",
tenantProfile_subtitle:
  "View and manage tenant information, documents, and history.",

propertyAssigned: "Property Assigned",
unitNumber: "Unit Number",
moveInDate: "Move-In Date",
leaseExpiry: "Lease Expiry",

// ===============================
// TENANT TABS
// ===============================
tab_overview: "Overview",
tab_tenantDetails: "Tenant Details",
tab_propertyUnit: "Property & Unit",
tab_tickets: "Tickets",
tab_maintenance: "Maintenance History",
tab_documents: "Documents",
tab_communication: "Communication Log",
tab_notes: "Notes",
tab_activity: "Activity Log",





// ===============================
// TENANT DETAIL — HEADER ACTIONS
// ===============================
action_backToTenants: "Back to Tenants",
action_editTenant: "Edit Tenant",
action_moveTenant: "Move Tenant",
action_deactivate: "Deactivate",
action_delete: "Delete",

// ===============================
// TENANT DETAIL — META LABELS
// ===============================
propertyAssigned: "Property Assigned",
unitNumber: "Unit Number",
moveInDate: "Move-In Date",
leaseExpiry: "Lease Expiry",




// Tenant Overview Tabs
tenant_tab_overview: "Overview",
tenant_tab_leaseDetails: "Lease Details",
tenant_tab_documents: "Documents",
tenant_tab_activityLog: "Activity Log",

// Summary Cards
tenant_overview_propertyUnit: "Property & Unit",
tenant_overview_leaseStatus: "Lease Status",
tenant_overview_tickets: "Tickets",
tenant_overview_maintenance: "Maintenance",

tenant_overview_viewProperty: "View Property",
tenant_overview_viewLeaseDetails: "View Lease Details",
tenant_overview_viewAllTickets: "View All Tickets",
tenant_overview_viewMaintenanceHistory: "View Maintenance History",

tenant_overview_leaseExpires: "Expires",
tenant_overview_active: "Active",
tenant_overview_requests: "Requests",

// Tenant Information
tenant_info_title: "Tenant Information",
tenant_info_fullName: "Full Name",
tenant_info_email: "Email",
tenant_info_phone: "Phone",
tenant_info_nationalId: "National ID / CNIC",
tenant_info_dateOfBirth: "Date of Birth",
tenant_info_gender: "Gender",
tenant_info_emergencyContact: "Emergency Contact",
tenant_info_emergencyPhone: "Emergency Phone",
tenant_info_tenantType: "Tenant Type",
tenant_info_accountStatus: "Account Status",
tenant_info_moveInDate: "Move-In Date",
tenant_info_edit: "Edit Tenant Information",



/* ---------------- TENANT DETAILS ---------------- */

    tenant_personalInformation: "Personal Information",
    tenancyDetails: "Tenancy Details",
    propertyAssignment: "Property Assignment",
    documents: "Documents",
    accountInformation: "Account Information",
    adminNotes: "Admin Notes",

    /* ---------------- FIELDS ---------------- */

    fullName: "Full Name",
    email: "Email",
    dateOfBirth: "Date of Birth",
    phoneNumber: "Phone Number",
    secondaryPhone: "Secondary Phone",
    gender: "Gender",
    nationalId: "National ID / CNIC",
    emergencyContactName: "Emergency Contact Name",
    emergencyContactNumber: "Emergency Contact Number",

    tenantType: "Tenant Type",
    leaseStartDate: "Lease Start Date",
    leaseEndDate: "Lease End Date",
    moveInDate: "Move-In Date",
    moveOutDate: "Move-Out Date",
    rentAmount: "Rent Amount",
    depositAmount: "Deposit Amount",
    currentStatus: "Current Status",
    notSpecified: "Not Specified",

    assignedProperty: "Assigned Property",
    assignedUnit: "Assigned Unit",
    floorBuilding: "Floor / Building",
    tenancyTypeLabel: "Tenancy Type",

    leaseAgreement: "Lease Agreement",
    nationalIdDoc: "National ID",
    tenantApplication: "Tenant Application",
    additionalDocuments: "Additional Documents",

    username: "Username",
    lastLoginActivity: "Last Login Activity",
    accountCreatedOn: "Account Created On",
    activeSessions: "Active Sessions",

    /* ---------------- ACTIONS ---------------- */

    editInformation: "Edit Information",
    resetAccountPassword: "Reset Account Password",
    editTenancyDetails: "Edit Tenancy Details",
    viewLeaseAgreement: "View Lease Agreement",
    assignPropertyUnit: "Assign Property / Unit",
    removeAssignment: "Remove Assignment",
    manageAllDocuments: "Manage All Documents",
    manageSessions: "Manage Sessions",
    suspendAccount: "Suspend Account",
    deleteAccountPermanently: "Delete Account Permanently",
    viewAllNotes: "View All Notes",
    addNewNote: "Add New Note",

    /* ---------------- NOTES TAGS ---------------- */

    noteGeneral: "General",
    noteWarning: "Warning",
    noteDispute: "Dispute",

assignPropertyUnit: "Assign Property / Unit",
tenantPropertyHelper:
  "This tenant may be linked to one or multiple properties and units. Use this page to manage assignments.",


searchTickets: "Search tickets…",
createTicket: "Create Ticket",

ticketId: "Ticket ID",
category: "Category",
propertyUnit: "Property / Unit",
assignedTo: "Assigned To",
status: "Status",
priority: "Priority",
createdDate: "Created Date",
lastUpdated: "Last Updated",

status_completed: "Completed",
status_inProgress: "In Progress",
status_overdue: "Overdue",
status_open: "Open",

priority_low: "Low",
priority_medium: "Medium",
priority_high: "High",
priority_critical: "Critical",


notifications: "Notifications",
markAllRead: "Mark all as read",
all: "All",
unread: "Unread",
tickets: "Tickets",
maintenance: "Maintenance",
system: "System",
noNotifications: "You have no notifications at the moment.",


notifications: "Notifications",
viewAllNotifications: "View all notifications",

notification_ticketAssigned: "Ticket Assigned",
notification_maintenanceUpdate: "Maintenance Update",
notification_tenantAdded: "Tenant Added",
notification_system: "System Notification",
notifications: "Notifications",
viewAll: "View all",
notificationsHelper: "All recent system and activity notifications",

notification_ticketAssigned: "New ticket assigned",
notification_maintenanceScheduled: "Maintenance scheduled",
notification_userAdded: "New user added",
notification_systemUpdate: "System update",

ticket: "Ticket",
maintenance: "Maintenance",
users: "Users",
system: "System",




profile: "Profile",
profile_personalInfo: "Personal Information",
security: "Security",
fullName: "Full Name",
email: "Email",
phone: "Phone Number",
language: "Language",
currentPassword: "Current Password",
newPassword: "New Password",
confirmPassword: "Confirm Password",
saveChanges: "Save Changes",
cancel: "Cancel",


systemSettings: "System Settings",
systemSettingsDesc:
  "Manage global configuration, platform templates, and core system behavior.",

settings_general_title: "General Settings",
settings_general_desc: "Timezone, language, system name",

settings_branding_title: "Branding",
settings_branding_desc: "Logos, colors, theme preferences",

settings_localization_title: "Localization",
settings_localization_desc: "Languages and regional formats",

settings_notifications_title: "Notification Templates",
settings_notifications_desc: "Email, SMS, push templates",

settings_email_title: "Email (SMTP)",
settings_email_desc: "SMTP host, credentials, testing",

settings_push_title: "Push Notification Settings",
settings_push_desc: "Firebase / APNs configuration",

settings_integrations_title: "Integrations",
settings_integrations_desc: "Stripe, PayPal, Webhooks, IoT",

generalSettings: "General Settings",
generalSettingsDescription: "Configure global system defaults such as timezone, language, and naming.",
systemConfiguration: "System Configuration",
systemConfigurationHint: "These settings affect all organizations and modules.",
systemName: "System Name",
systemNamePlaceholder: "Enter system name...",
defaultTimezone: "Default Timezone",
defaultLanguage: "Default Language",
dateFormat: "Date Format",
timeFormat: "Time Format",
currency: "Currency",
numberFormat: "Number Format",
weekStartDay: "Week Start Day",
monday: "Monday",
sunday: "Sunday",
saveSettings: "Save Settings",
cancel: "Cancel",


branding: "Branding",
brandingDesc: "Customize the platform’s visual identity and theme.",

logoIdentity: "Logo & Identity",
logoIdentityDesc: "Upload your brand logos for both light and dark mode.",
lightModeLogo: "Light Mode Logo",
darkModeLogo: "Dark Mode Logo",
uploadHint: "Drag & drop or click to upload",
uploadFormat: "PNG, SVG (240×80px recommended)",

themeColors: "Theme & Colors",
primaryColor: "Primary Brand Color",
neutralDark: "Neutral Dark",
neutralGrey: "Neutral Grey",
accentColors: "Accent Colors (Optional)",
addAccent: "Add Accent Color",

themeMode: "Theme Mode",
theme_light: "Light",
theme_dark: "Dark",
theme_auto: "Auto (sync with device)",

saveBranding: "Save Branding Settings",



localization: "Localization",
localizationDesc: "Manage supported languages and regional formatting.",
supportedLanguages: "Supported Languages",
supportedLanguagesDesc: "Enable or disable languages available in the system.",
addLanguage: "Add Language",
language: "Language",
code: "Code",
enabled: "Enabled",
default: "Default",
languagePriority: "Language Priority Order",
languagePriorityDesc: "Drag to reorder languages. Higher priority languages appear first.",
saveLocalization: "Save Localization Settings",


notificationTemplates: "Notification Templates",
notificationTemplatesDesc: "Manage email, SMS, push, and in-app notification templates.",

emailTemplates: "Email Templates",
emailTemplatesDesc: "Customize automated communication templates.",

createTemplate: "Create New Template",
templateName: "Template Name",
type: "Type",
description: "Description",
lastUpdated: "Last Updated",
status: "Status",
actions: "Actions",

welcomeEmailDesc: "Sent to new users upon registration.",

editTemplate: "Edit Template",
subject: "Subject",
messageBody: "Message Body",
availableVariables: "Available Variables",

active: "Active",
inactive: "Inactive",

saveChanges: "Save Changes",
cancel: "Cancel",


smtpTitle: "Email (SMTP) Settings",
smtpDesc: "Configure SMTP server used for sending system notifications and alerts.",

smtpConfigTitle: "SMTP Configuration",
smtpConfigDesc: "Provide details of your email provider for transaction-based communication.",

smtpHost: "SMTP Host",
smtpPort: "SMTP Port",
smtpUsername: "Username",
smtpPassword: "Password",
smtpEncryption: "Encryption Method",
smtpFromEmail: "From Email Address",
smtpFromName: "From Name",

smtpAdvanced: "Advanced Options",
smtpTimeout: "Connection Timeout (seconds)",
smtpRetries: "Retry Attempts",
smtpAuthMode: "Authentication Mode",

smtpTest: "Test Email",
smtpTestEmail: "Send Test Email To",
sendTestEmail: "Send Test Email",

saveSmtp: "Save SMTP Settings",
resetDefaults: "Reset to Defaults",


pushTitle: "Push Notification Settings",
pushDesc:
  "Configure Firebase and APNs credentials for mobile and web push notifications.",

firebaseTitle: "Firebase Configuration (Android & Web)",
firebaseDesc: "Add credentials provided by Firebase Console.",

firebaseServerKey: "Firebase Server Key",
firebaseSenderId: "Sender ID",
firebaseProjectId: "Project ID",
firebaseAppId: "Application ID",
firebaseApiKey: "API Key",

sendTestPush: "Send Test Push Notification",
deviceToken: "Device Token",

apnsTitle: "APNs Configuration (iOS)",
apnsDesc: "Upload Apple push certificate for iOS notifications.",

apnsCert: "APNs Certificate (.p12 or .pem)",
apnsCertPassword: "Certificate Password",
apnsTeamId: "Team ID",
apnsKeyId: "Key ID",
apnsBundleId: "Bundle Identifier",

sendTestPushIos: "Send Test Notification (iOS)",

savePush: "Save Push Settings",
cancel: "Cancel",



// DASHBOARD
dash_title: "Super Admin Dashboard",
dash_breadcrumb_current: "Dashboard",

// KPI CARDS
dash_card_orgs: "Total Organizations",
dash_card_properties: "Active Properties",
dash_card_openTickets: "Open Tickets",
dash_card_activeUsers: "Active Users",
dash_card_activeUsers_sub: "FM / Caretaker / SP",

// CHARTS
dash_ticketTrend: "Ticket Trend",
dash_maintenanceRate: "Maintenance Completion Rate",

// ALERTS
dash_systemAlerts: "System Alerts",
dash_alert_subRenew_desc: "Your subscription will renew soon.",
dash_alert_failedPay_desc: "A recent payment attempt has failed.",
dash_alert_apiSpike_desc: "High API traffic detected.",

// ACTIVITY
section_recent_activity: "Recent Activity",
activity_ticket_updated: "Ticket status updated",
activity_org_created: "New organization created",
activity_sync_done: "System sync completed",
activity_just_now: "Just now",
activity_15min: "15 minutes ago",
activity_1h: "1 hour ago",

// MINI TABLES
dash_recent_tickets: "Recent Tickets",
dash_recent_orgs: "Recent Organizations",
table_ticket: "Ticket",
table_user: "User",
table_property: "Property",
table_date: "Date",
table_name: "Name",
table_contact: "Contact",
table_email: "Email",
table_created: "Created",

// COMMON
no_data_available: "No data available",
completion_percent: "Completion",


fm_dash_title: "Facility Manager Dashboard",
fm_dash_breadcrumb: "Dashboard",
fm_dash_activeStaff: "Active Staff",
fm_dash_alert_overdueTasks: "Some maintenance tasks are overdue.",
fm_activity_task_completed: "Maintenance task completed",


dash_card_facilities: "Facility Management",
dash_recent_facilities: "Recent Facilities",
activity_facility_created: "New facility created",

facilityManagers: "Facility Managers",
createFacilityManager: "New Facility Manager",
searchFacilityManagers: "Search facility managers",
searchFacilityManagersPlaceholder: "Search facility managers...",
noFacilityManagers: "No facility managers found.",

table_facilityManager: "Facility Manager",
table_contactPerson: "Contact Person",
table_properties: "Properties",
table_plan: "Subscription Plan",
table_status: "Status",
table_created: "Created Date",
table_actions: "Actions",


facilityManagers: "Facility Managers",
facilityManagers_list: "Facility Managers",
facilityManagers_create: "Create Facility Manager",

dash_card_facilityManagers: "Facility Managers",
dash_recent_facilityManagers: "Recent Facility Managers",

table_facilityManager: "Facility Manager",
table_facilityManagers: "Facility Managers",
facilityManagers: "Facility Managers",
facilityManagerId: "Facility Manager ID",
createFacilityManager: "New Facility Manager",
loadingFacilityManager: "Loading facility manager…",

primaryContact: "Primary Contact",
properties: "Properties",
created: "Created",

edit: "Edit",
delete: "Delete",
suspend: "Suspend",
cancel: "Cancel",

suspendFacilityManager: "Suspend Facility Manager?",
suspendFacilityManagerDesc:
  "Suspending this facility manager will block all access to dashboards, mobile apps, and properties.",
confirmSuspend: "Confirm Suspension",

loadingFacilityManager: "Loading facility manager...",

tab_overview: "Overview",
tab_details: "Details",
tab_billing: "Billing",
tab_users: "Users",
tab_properties: "Properties",
tab_tickets: "Tickets",
tab_maintenance: "Maintenance",
tab_activity: "Activity Logs",


facilityManagerId: "Facility Manager ID",
primaryContact: "Primary Contact",
createdOn: "Created",
properties: "Properties",

edit: "Edit",
suspend: "Suspend",
delete: "Delete",
cancel: "Cancel",

suspendFacilityManagerTitle: "Suspend Facility Manager?",
suspendFacilityManagerDesc:
  "Suspending this facility manager will immediately block all users from accessing dashboards, mobile apps, and assigned properties.",

suspendBullet1: "All active sessions will be logged out.",
suspendBullet2: "Tickets, maintenance tasks, and user assignments will remain intact.",
suspendBullet3: "You can reactivate this facility manager anytime.",

suspendOnly: "Suspend only",
archivePermanently: "Archive permanently",
confirmSuspend: "Suspend Facility Manager",

fm_total_properties: "Total Properties",
fm_assigned_users: "Assigned Users",
fm_open_tickets: "Open Tickets",

fm_ticket_trend: "Ticket Trend (Last 30 Days)",
fm_recent_tickets: "Recent Tickets",
fm_recent_activity: "Recent Activity",

fm_tickets: "Tickets",
fm_ticket_days: ["Day 1", "Day 5", "Day 10", "Day 15", "Day 20", "Day 25", "Day 30"],

fm_activity_ticket_updated: "Ticket was updated",
fm_activity_user_added: "New user added",
fm_activity_ticket_closed: "Ticket was closed",

status_open: "Open",
status_in_progress: "In Progress",
status_completed: "Completed",

table_ticket: "Ticket ID",
table_category: "Category",
table_property: "Property",
table_assigned: "Assigned To",
table_status: "Status",
table_date: "Created Date",
users_searchPlaceholder: "Search users...",
users_allRoles: "All Roles",
users_add: "Add User",

users_name: "User Name",
users_role: "Role",
users_email: "Email",
users_phone: "Phone Number",
users_status: "Status",
users_lastActive: "Last Active",

role_technician: "Technician",
role_tenant: "Tenant",

status_active: "Active",
status_inactive: "Inactive",

time_5hoursAgo: "5 hours ago",
time_2weeksAgo: "2 weeks ago",

pagination_rows: "Rows per page:",
pagination_range: "1–5 of 12",

fm_create_title: "Create New Facility Manager",
fm_create_subtitle: "Add a new facility manager company to the Hauswart system.",
fm_create_backToList: "Back to Facility Managers",

fm_create_cardTitle: "New Facility Manager Setup",
fm_create_cardSubtitle: "Enter facility manager information below.",

fm_create_name_label: "Facility Manager Name",
fm_create_name_placeholder: "Enter facility manager name",

fm_create_industry_label: "Industry Type",
fm_create_industry_selectPlaceholder: "Select industry",
fm_create_industry_realEstate: "Real Estate",
fm_create_industry_healthcare: "Healthcare",
fm_create_industry_education: "Education",
fm_create_industry_hospitality: "Hospitality",

fm_create_address_label: "Address",
fm_create_address_placeholder: "Enter full address",

fm_create_contactName_label: "Contact Person Name",
fm_create_contactName_placeholder: "e.g., Jane Doe",

fm_create_contactEmail_label: "Contact Email",
fm_create_contactEmail_placeholder: "e.g., jane.doe@example.com",

fm_create_contactPhone_label: "Contact Phone",
fm_create_contactPhone_placeholder: "Enter phone number",

fm_create_plan_label: "Subscription Plan",
fm_create_plan_selectPlaceholder: "Select plan",
fm_create_plan_basic: "Basic",
fm_create_plan_professional: "Professional",
fm_create_plan_enterprise: "Enterprise",

fm_create_status_label: "Status",
fm_create_notes_label: "Notes (Optional)",
fm_create_notes_placeholder: "Add any relevant notes",

fm_create_save: "Save Facility Manager",

common_cancel: "Cancel",

status_active: "Active",
status_trial: "Trial",
status_suspended: "Suspended",

fm_edit_title: "Edit Facility Manager",
fm_edit_subtitle: "Update facility manager information.",
fm_edit_back: "Back to Details",

fm_edit_cardTitle: "Facility Manager Details",
fm_edit_cardSubtitle: "Modify the information below.",

fm_edit_save: "Update Facility Manager",


technicians: "Technicians",
technicians_subtitle: "Manage all technicians across organizations",

technicians_total: "Total Technicians",
technicians_active: "Active Technicians",
technicians_assigned: "Assigned Technicians",
technicians_unassigned: "Unassigned Technicians",

add_technician: "Add Technician",

technician_name: "Technician",
organization: "Organization",
properties: "Properties",
phone: "Phone Number",
status: "Status",
last_activity: "Last Activity",

export_list: "Export List",
actions: "Actions",



action_backToTechnicians: "Back to Technicians",
action_editTechnician: "Edit Technician",
action_assignPermissions: "Assign Permissions",

tech_tab_overview: "Overview",
tech_tab_performance: "Performance",
tech_tab_attendance: "Attendance",
tech_tab_dailyAttendance: "Daily Attendance",
tech_tab_offboarding: "Offboarding",





back_to_technicians: "Back to Technicians",

technician_create_title: "Create Technician",
technician_create_subtitle: "Add a new technician and assign access.",

tech_info_title: "Technician Information",
tech_info_desc: "Basic personal and login details for the technician.",

tech_full_name: "Full Name",
tech_email: "Email Address",
tech_phone: "Phone Number",
tech_photo: "Profile Photo",
tech_password: "Password",
tech_confirm_password: "Confirm Password",

tech_access_title: "Access & Assignment",
tech_access_desc: "Assign organization and properties to this technician.",

tech_assign_org: "Assigned Organization",
tech_assign_properties: "Assigned Properties",

tech_status_title: "Account Status",
tech_status: "Status",
tech_send_activation: "Send activation email to technician",

action_create_technician: "Create Technician",

technician_edit_title: "Edit Technician",
technician_edit_subtitle: "Update technician details and assignments.",

tech_password_edit: "New Password",
tech_password_optional: "Leave blank to keep existing password",

action_update_technician: "Update Technician",

technician_delete_title: "Delete Technician",
technician_delete_subtitle: "This action will permanently remove the technician from the system.",

technician_delete_warning_title: "This action is irreversible",
technician_delete_warning_desc: "All assigned tasks, tickets, and schedules will be affected.",

technician_delete_impact_title: "Impact Overview",

technician_delete_confirm: "I understand the consequences and want to delete this technician.",

technician_delete_notes_title: "Deletion Notes (Optional)",
technician_delete_notes_desc: "Provide internal notes for audit or record keeping.",
technician_delete_notes_placeholder: "Reason for deleting this technician...",

technician_delete_irreversible: "This action cannot be undone.",

action_delete_technician: "Delete Technician",
action_backToTechnicianProfile: "Back to Technician Profile",

tech_org: "Organization",
tech_properties: "Assigned Properties",
tech_last_active: "Last Active",
tech_joined: "Joined On",
tech_id: "Technician ID",

tech_open_tickets: "Open Tickets",
tech_active_tasks: "Active Tasks",
tech_scheduled_jobs: "Scheduled Jobs",
tech_pending_reports: "Pending Reports",
tech_live_chats: "Live Chats",

tech_reassign_notice: "All assignments must be reassigned before deletion.",

// Technician – Tasks (Tickets)

tech_tasks_search: "Search tasks",
tech_tasks_create: "Create Task",

tech_task_id: "Task ID",
tech_task_category: "Category",
tech_task_property: "Property / Unit",
tech_task_reported_by: "Reported By",
tech_task_status: "Status",
tech_task_priority: "Priority",
tech_task_created: "Created",
tech_task_updated: "Last Updated",



// Technician – Tasks (Tickets)
tech_tab_tasks: "Tasks",

tech_tasks_search: "Search tasks",
tech_tasks_create: "Create Task",

tech_task_id: "Task ID",
tech_task_category: "Category",
tech_task_property: "Property / Unit",
tech_task_reported_by: "Reported By",
tech_task_status: "Status",
tech_task_priority: "Priority",
tech_task_created: "Created",
tech_task_updated: "Last Updated",


fm_total: "Total Facility Managers",
fm_active: "Active Facility Managers",
fm_trial: "Trial Accounts",
fm_suspended: "Suspended Accounts",
facilityManagers_subtitle: "Manage facility management organizations and access",



subscriptionInvoices: "Subscriptions",
subscriptions_subtitle: "All facility manager subscription plans",
subs_total: "Total Subscriptions",
subs_active: "Active Subscriptions",
subs_expiring: "Expiring Soon",
subs_revenue: "Total Revenue",

invoices: "Invoices",
invoices_subtitle: "All billing invoices and payments",
invoiceId: "Invoice ID",
facilityManager: "Facility Manager",
plan: "Plan",
startDate: "Start Date",
endDate: "End Date",
amount: "Amount",
status: "Status",
date: "Date",


  /* ---------------- BILLING ---------------- */
  billing: "Billing",

  /* Subscriptions */
  subscriptionInvoices: "Subscriptions",
  subscriptions_subtitle: "All facility manager subscription plans",
  subs_total: "Total Subscriptions",
  subs_active: "Active Subscriptions",
  subs_expiring: "Expiring Soon",
  subs_revenue: "Total Revenue",

  subscriptionId: "Subscription ID",
  subscriptionDetails: "Subscription Details",
  stopSubscription: "Stop Subscription",
  autoRenew: "Auto Renew",
  nextBilling: "Next Billing Date",

  /* Invoices */
  invoices: "Invoices",
  invoices_subtitle: "All billing invoices and payments",
  invoiceId: "Invoice ID",
  paymentMethod: "Payment Method",
  downloadInvoice: "Download Invoice",
  viewInvoice: "View Invoice",

  /* Common */
  facilityManager: "Facility Manager",
  plan: "Plan",
  startDate: "Start Date",
  endDate: "End Date",
  amount: "Amount",
  status: "Status",
  date: "Date",

 /* ===================== */
  /* BILLING – INVOICES    */
  /* ===================== */

  invoices: "Invoices",
  invoices_subtitle: "All billing invoices and payments",

  invoices_total: "Total Invoices",
  invoices_paid: "Paid Invoices",
  invoices_unpaid: "Unpaid Invoices",
  invoices_revenue: "Total Revenue",

  invoiceId: "Invoice ID",
  facilityManager: "Facility Manager",
  date: "Date",
  amount: "Amount",
  status: "Status",
  actions: "Actions",

  paid: "Paid",
  unpaid: "Unpaid",

  all: "All",
  january: "January",
  february: "February",
  march: "March",











  },
  

  DE: {
    appName: "Hauswart",
    footer_allRights: "Alle Rechte vorbehalten.",

    superAdmin: "Superadministrator",
    dashboard: "Instrumententafel",
    search: "Globale Suche…",

    jobs: "Aufträge & Aufgaben",
    jobsHistory: "Zeitachse / Verlauf",
    maintenance: "Wartungspläne",
    timeTracking: "Zeiterfassung",
    gps: "GPS-Protokolle",
    documents: "Dokumente",
    notifications: "Benachrichtigungen",
    chat: "Nachrichten / Chat",
    settings: "Systemeinstellungen",
    logout: "Abmelden",
    profile: "Profil",
    backups: "Backups",
    auditLogs: "Audit-Logs",
    billing: "Abrechnung",

    splash_wait: "Bitte warten…",
    splash_skip: "Überspringen",

    onb_tagline: "Facility Management neu gedacht",
    onb_skip: "Überspringen",
    onb_next: "Weiter",
    onb_getStarted: "Jetzt starten",

    onb_slide1_title: "Intelligente Objektübersicht",
    onb_slide1_body:
      "Verfolge Tickets, Anlagen und Wartungen in einem Dashboard.",
    onb_slide1_b1: "Zentralisierte Ticketübersicht",
    onb_slide1_b2: "Sofortige Übersicht offener Aufgaben",

    onb_slide2_title: "Stärke dein Team",
    onb_slide2_body:
      "Gib Hauswarten, Dienstleistern und Mietern eine moderne Oberfläche.",
    onb_slide2_b1: "Rollenbasierte Benutzeroberflächen",
    onb_slide2_b2: "Modernes SaaS-Design",

    onb_slide3_title: "Transparenz in Echtzeit",
    onb_slide3_body: "Überwache Fortschritt und Kommunikation live.",
    onb_slide3_b1: "Echtzeit-Updates",
    onb_slide3_b2: "Analysefähige Daten",

    auth_email: "E-Mail Adresse",
    auth_email_placeholder: "E-Mail eingeben",
    auth_password: "Passwort",
    auth_password_placeholder: "Passwort eingeben",
    auth_confirmPassword: "Passwort bestätigen",
    auth_confirmPassword_placeholder: "Passwort erneut eingeben",
    auth_fullName: "Vollständiger Name",
    auth_fullName_placeholder: "Max Mustermann",
    auth_phone: "Telefonnummer",
    auth_phone_placeholder: "+49 170 000000",

    auth_login: "Anmelden",
    auth_register: "Registrieren",
    auth_forgotPassword: "Passwort vergessen?",
    auth_backToLogin: "Zurück zur Anmeldung",

    auth_noAccount: "Noch kein Konto? Registrieren",
    auth_haveAccount: "Bereits ein Konto? Login",

    login_title: "Im Konto anmelden",
    login_subtitle: "Willkommen zurück! Bitte gib deine Daten ein.",
    login_invalid: "Ungültige Anmeldedaten",

    register_title: "Konto erstellen",
    register_subtitle:
      "Werde Teil der führenden Facility-Management Plattform.",

    register_role_label: "Rolle auswählen",
    register_terms_prefix: "Ich stimme den",
    register_terms_link: "AGB & Datenschutz zu",

    role_facilityManager: "Facility Manager",
    role_caretaker: "Hauswart / Techniker",
    role_serviceProvider: "Dienstleister",
    role_tenant: "Mieter",
    roleSelect_title: "Wähle deine Rolle",

    forgot_title: "Passwort vergessen?",
    forgot_subtitle: "E-Mail eingeben, um Link zu erhalten.",
    forgot_invalidEmail: "Bitte gültige E-Mail eingeben",
    forgot_cta: "Passwort zurücksetzen",

    otp_title: "Konto verifizieren",
    otp_subtitle: "Gib den 6-stelligen Code ein.",
    otp_invalid: "Bitte 6-stelligen Code eingeben",
    otp_cta: "Bestätigen",

    reset_title: "Neues Passwort setzen",
    reset_subtitle: "Passwort eingeben und bestätigen.",
    reset_newPwd: "Neues Passwort",
    reset_newPwd_placeholder: "Passwort eingeben",
    reset_confirmPwd: "Passwort bestätigen",
    reset_confirmPwd_placeholder: "Passwort erneut eingeben",
    reset_tooShort: "Mindestens 6 Zeichen",
    reset_mismatch: "Passwörter stimmen nicht überein",
    reset_cta: "Speichern",

    dash_title: "Superadmin-Dashboard",
    dash_breadcrumb_home: "Start",
    dash_breadcrumb_current: "Dashboard",

    dash_card_orgs: "Organisationen gesamt",
    dash_card_properties: "Aktive Objekte",
    dash_card_openTickets: "Offene Tickets (global)",
    dash_card_activeUsers: "Aktive Nutzer",
    dash_card_activeUsers_sub: "(FM / Hauswart / Dienstleister)",
    dash_chart_tickets: "Ticketverlauf",
dash_chart_users: "Benutzerrollen-Verteilung",
dash_alerts: "Systemwarnungen",
dash_alert_billing: "Der Abrechnungszeitraum erfordert Aufmerksamkeit.",
dash_alert_sla: "Mehrere Tickets haben SLA-Fristen überschritten.",
dash_alert_docs: "Einige Compliance-Dokumente laufen bald ab.",

dash_table_tickets: "Neueste Tickets",
dash_table_orgs: "Neueste Organisationen",

tkt_id: "Ticket ID",
tkt_user: "Benutzer",
tkt_org: "Organisation",
tkt_date: "Datum",

org_name: "Organisation",
org_email: "E-Mail",
org_plan: "Plan",
org_created: "Erstellt am",
dash_ticketTrend: "Ticketverlauf",
dash_maintenanceRate: "Wartungsabschlussrate",

// Alerts (Dashboard)
dash_alert_subRenew_desc: "Ihr Abonnement wird in Kürze verlängert.",
dash_alert_failedPay_desc: "Ein kürzlicher Zahlungsversuch ist fehlgeschlagen.",
dash_alert_apiSpike_desc: "Ungewöhnliche API-Aktivität wurde erkannt.",

// Section titles
section_recent_activity: "Letzte Aktivitäten",

// Activity texts
activity_ticket_updated: "Ein Ticket wurde aktualisiert.",
activity_just_now: "Gerade eben",
activity_org_created: "Eine neue Organisation wurde erstellt.",
activity_15min: "Vor 15 Minuten",
activity_sync_done: "Systemdaten-Synchronisierung abgeschlossen.",
activity_1h: "Vor 1 Stunde",

organizations:"Organisation",
createOrganization: "Organisation erstellen",
// Property

  properties: "Objekte",
  createProperty: "Objekt erstellen",



  // PROPERTY MODULE
properties: "Objekte",
properties_subtitle: "Verwalten Sie alle Objekte über alle Organisationen hinweg.",
createProperty: "Objekt hinzufügen",
createPropertySubtitle: "Geben Sie Objektinformationen, Struktur und Personal ein.",
backToProperties: "Zurück zu Objekten",

// Filters
filter_org: "Organisation",
filter_propertyType: "Objekttyp",
filter_assignedFM: "Zugewiesener FM",
filter_status: "Status",
searchProperty: "Objekt suchen",
searchPropertyPlaceholder: "Nach Objektname suchen...",

// Table columns
col_propertyName: "Objektname",
col_organization: "Organisation",
col_type: "Typ",
col_floorsUnits: "Etagen / Einheiten",
col_facilityManager: "Facility Manager",
col_status: "Status",
col_createdDate: "Erstellt am",
col_actions: "Aktionen",

// Types
type_residential: "Wohnobjekt",
type_commercial: "Gewerbeobjekt",
type_industrial: "Industrieobjekt",
type_mixed: "Mischnutzung",

// Common labels
label_floors: "Etagen",
label_units: "Einheiten",
status_active: "Aktiv",
status_archived: "Archiviert",
noProperties: "Keine Objekte gefunden.",

// Create Form
section_propertyInfo: "Objektinformationen",
section_propertyInfo_sub: "Geben Sie die wichtigsten Informationen zum Objekt an.",
section_building: "Gebäudestruktur",
section_personnel: "Personal zuweisen",
section_documents: "Objektdokumente",

field_propertyName: "Objektname",
placeholder_propertyName: "Objektname eingeben",

field_propertyType: "Objekttyp",
placeholder_propertyType: "Objekttyp auswählen",

field_address: "Adresse",
placeholder_address: "Vollständige Adresse eingeben",

field_city: "Region / Stadt",
placeholder_city: "Stadt auswählen",

field_postal: "Postleitzahl",
placeholder_postal: "Postleitzahl eingeben",

field_latitude: "GPS Breitengrad",
placeholder_latitude: "Breitengrad eingeben",

field_longitude: "GPS Längengrad",
placeholder_longitude: "Längengrad eingeben",

field_propertySize: "Objektgröße",
placeholder_propertySize: "z.B. 50000 sq ft",

field_description: "Beschreibung / Notizen",
placeholder_description: "Notizen oder Details hinzufügen...",

field_floors: "Anzahl der Etagen",
field_units: "Gesamteinheiten",
field_sections: "Gebäudebereiche (Optional)",
field_utilities: "Nutzflächen (Optional)",

building_note: "Detaillierte Etagen und Einheiten können nach der Erstellung definiert werden.",

field_facilityManager: "Facility Manager",
placeholder_selectFM: "Manager auswählen",

field_caretakers: "Hauswarte",
placeholder_selectCaretakers: "Hauswarte auswählen...",

field_serviceProviders: "Dienstleister",
placeholder_selectProviders: "Dienstleister auswählen...",

field_securityTeam: "Sicherheits- / Zugangsteam",
placeholder_selectSecurity: "Team auswählen",

field_notes: "Zusätzliche Notizen",
placeholder_notes: "Notizen eingeben...",

optional: "Optional",

uploadFile: "Datei hochladen",
orDragDrop: "oder per Drag & Drop",
fileLimit: "PDF, Bilder, Word bis zu 25MB",

cancel: "Abbrechen",
saveProperty: "Objekt speichern",

  tab_overview: "Übersicht",
  tab_details: "Details",
  tab_structure: "Struktur",
  tab_assets: "Vermögenswerte",
  tab_maintenance: "Wartung",
  tab_tickets: "Tickets",
  tab_documents: "Dokumente",
  tab_staff: "Zugewiesenes Personal",
  tab_gpsLogs: "GPS-Protokolle",
  tab_activity: "Aktivitätsprotokolle",

  label_propertyId: "Objekt-ID",
  label_organization: "Organisation",
  label_floors: "Etagen",
  label_units: "Einheiten",

  action_edit: "Bearbeiten",
  action_archive: "Archivieren",
  action_delete: "Löschen",
  action_cancel: "Abbrechen",

  modal_archive_title: "Objekt archivieren?",
  modal_archive_description: "Durch das Archivieren dieses Objekts werden alle operativen Abläufe eingeschränkt und es wird aus aktiven Listen entfernt. Sie können es jederzeit wiederherstellen.",
  modal_archive_confirm: "Objekt archivieren",

prop_overview_summary: "Zusammenfassung",
prop_overview_organization: "Organisation",
prop_overview_type: "Objekttyp",
prop_overview_floors_units: "Etagen / Einheiten",
prop_overview_manager: "Objektmanager",
prop_overview_updated: "Zuletzt aktualisiert",

prop_overview_gps: "GPS-Koordinaten",
prop_overview_openTickets: "Offene Tickets",
prop_overview_upcomingMaintenance: "Bevorstehende Wartung",
prop_overview_staff: "Zugewiesenes Personal",
prop_overview_lastActivity: "Letzte Aktivität",

prop_overview_active: "Aktiv",
prop_overview_members: "Mitglieder",
prop_overview_scheduled: "Geplant",
prop_overview_activeTickets: "Aktiv",


prop_details_basicInfo: "Grundinformationen",
prop_details_edit: "Bearbeiten",

prop_details_propertyName: "Objektname",
prop_details_propertyType: "Objekttyp",
prop_details_propertySize: "Objektgröße",
prop_details_description: "Beschreibung",

prop_details_address: "Adresse",
prop_details_regionCity: "Region / Stadt",
prop_details_zip: "PLZ",
prop_details_gps: "GPS-Koordinaten",

prop_details_buildingStructure: "Gebäudestruktur",
prop_details_numberFloors: "Anzahl der Etagen",
prop_details_totalUnits: "Gesamteinheiten",
prop_details_sections: "Gebäudebereiche",
prop_details_utilities: "Technische Bereiche",
prop_details_basementParking: "Keller / Parkplätze",
prop_details_rooftopAccess: "Zugang zum Dach",
prop_details_yearConstruction: "Baujahr",
prop_details_fireZone: "Brandschutzzone",
prop_details_manageStructure: "Strukturverwaltung →",

prop_details_assignedPersonnel: "Zugewiesenes Personal",
prop_details_goToAssignedStaff: "Zum Personal-Tab →",
prop_details_manageAssignments: "Zuweisungen verwalten →",

prop_details_compliance: "Compliance & Rechtliche Informationen",
prop_details_valid: "Gültig",
prop_details_upcoming: "Anstehend",
prop_details_registered: "Registriert",
prop_details_active: "Aktiv",
prop_details_expires: "Gültig bis:",
prop_details_lastService: "Letzter Service:",
prop_details_renewal: "Erneuerung:",
prop_details_manageDocuments: "Dokumente verwalten →",

prop_details_systemMetadata: "Systemmetadaten",
prop_details_createdBy: "Erstellt von",
prop_details_lastUpdatedBy: "Zuletzt aktualisiert von",
prop_details_lastActivity: "Letzte Aktivität",
prop_details_propertyId: "Objekt-ID",
prop_details_createdOn: "Erstellt am",
prop_details_updatedOn: "Aktualisiert am",
prop_details_organizationId: "Organisations-ID",

prop_details_internalNotes: "Interne Notizen",
prop_details_addNote: "Notiz hinzufügen",
prop_details_lastNoteBy: "Letzte Notiz von",
modal_delete_description: "Das Löschen dieser Immobilie entfernt dauerhaft alle zugehörigen Daten. Dieser Vorgang kann nicht rückgängig gemacht werden.",

 // STRUCTURE TAB
  prop_structure_title: "Struktur",
  prop_structure_floors: "Etagen",
  prop_structure_addFloor: "Etage hinzufügen",
  prop_structure_units: "Einheiten",
  prop_structure_addUnit: "Einheit hinzufügen",
  prop_structure_manageFloors: "Etagen verwalten",
  prop_structure_bulkAdd: "Einheiten stapelweise hinzufügen",
  prop_structure_downloadDiagram: "Strukturdiagramm herunterladen",
  prop_structure_fullHierarchy: "Gesamte Hierarchie ansehen",

  // FLOOR ITEM
  prop_floor_label: "Etage",
  prop_floor_ground: "Erdgeschoss",

  // UNIT CARD
  prop_unit_assignedTenant: "Zugewiesener Mieter",
  prop_unit_noTenant: "Kein Mieter",
  prop_unit_noCaretakers: "Keine Hausmeister",
  prop_unit_caretakers: "Hausmeister",
  prop_unit_rooms: "Räume",

  // BADGES
  prop_badge_residential: "Wohnung",
  prop_badge_office: "Büro",
  prop_badge_storage: "Lager",
  prop_badge_active: "Aktiv",
  prop_badge_vacant: "Frei",
  prop_badge_maintenance: "Wartung benötigt",

  // ACTIONS
  action_view: "Ansehen",
  action_edit: "Bearbeiten",
  action_delete: "Löschen",

      // FLOOR MODALS
    floor_add_title: "Add Floor",
    floor_add_subtitle: "Create a new floor for this property.",
    floor_field_name: "Floor Name",
    floor_placeholder_name: "Enter floor name...",
    floor_add_action: "Create Floor",

    floor_edit_title: "Edit Floor",
    floor_edit_subtitle: "Update the floor name.",
    floor_edit_action: "Save Floor",

    // UNIT MODALS (EXTRAS NOT IN YOUR FILE)
    unit_field_id: "Unit ID",
    unit_placeholder_id: "Enter unit ID...",
    unit_field_category: "Category",
    unit_field_usage: "Usage Type",
    unit_field_status_label: "Status",
    unit_placeholder_status: "Select status",

    // UNIT STATUS OPTIONS
    unit_status_active: "Active",
    unit_status_vacant: "Vacant",
    unit_status_maintenance: "Needs Maintenance",

    // UNIT TYPES (EXACT UI TERMS)
    unit_type_residential: "Residential Unit",
    unit_type_office: "Office Unit",
    unit_type_storage: "Storage Unit",

    // MODAL GENERIC
    modal_close: "Close",
    modal_save: "Save",
    modal_update: "Update",



    prop_assets_search_placeholder: "Assets durchsuchen...",
prop_assets_filter_category: "Asset-Kategorie",
prop_assets_filter_status: "Status",
prop_assets_addAsset: "Asset hinzufügen",

prop_assets_col_name: "Asset-Name",
prop_assets_col_category: "Kategorie",
prop_assets_col_unit: "Einheit",
prop_assets_col_serial: "Seriennummer",
prop_assets_col_status: "Status",

prop_asset_status_active: "Aktiv",
prop_asset_status_under_maintenance: "In Wartung",
prop_asset_status_out_of_service: "Außer Betrieb",

prop_asset_unitFloor: "Einheit & Etage",
prop_asset_serial: "Seriennummer",
prop_asset_lastMaintenance: "Letzte Wartung",
prop_asset_nextMaintenance: "Nächste fällige Wartung",

prop_asset_openFullDetails: "Vollständige Assetdetails öffnen",
prop_asset_assignMaintenance: "Wartung zuweisen",

prop_asset_add_title: "Asset zur Einheit hinzufügen",
prop_asset_add_sub: "Neues Gerät registrieren und Metadaten festlegen.",
prop_asset_label_name: "Asset-Name",
prop_asset_placeholder_name: "Asset-Name eingeben",
prop_asset_label_category: "Asset-Kategorie",
prop_asset_placeholder_category: "Kategorie auswählen",
prop_asset_label_serial: "Seriennummer (optional)",
prop_asset_placeholder_serial: "Seriennummer eingeben",
prop_asset_add_cta: "Asset hinzufügen",

prop_asset_edit_title: "Asset bearbeiten",
prop_asset_edit_sub: "Assetdetails bearbeiten und Einstellungen prüfen.",
prop_asset_edit_cta: "Änderungen speichern",


// ===== ASSET DETAIL PAGE =====
prop_assetDetail_back: "Zurück zu Assets",
prop_assetDetail_status_active: "Aktiv",
prop_assetDetail_status_inactive: "Inaktiv",
prop_assetDetail_delete: "Asset löschen",
prop_assetDetail_more: "Mehr",
prop_assetDetail_edit: "Asset bearbeiten",

// More Menu
prop_assetDetail_downloadPDF: "Asset-Bericht herunterladen (PDF)",
prop_assetDetail_exportHistory: "Verlauf exportieren",
prop_assetDetail_assignMaintenance: "Wartung zuweisen",

// Header Badge Info
prop_assetDetail_unit: "Einheit",
prop_assetDetail_floor: "Etage",
prop_assetDetail_placement: "Platzierung",
prop_assetDetail_serialModel: "Seriennummer / Modell",
prop_assetDetail_vendor: "Lieferant",

// Warranty & Lifecycle
prop_assetWarranty_title: "Garantie & Lebenszyklus",
prop_assetWarranty_purchaseDate: "Kaufdatum",
prop_assetWarranty_installationDate: "Installationsdatum",
prop_assetWarranty_expectedLifetime: "Erwartete Lebensdauer",
prop_assetWarranty_vendor: "Lieferant",
prop_assetWarranty_expiry: "Garantieablauf",
prop_assetWarranty_expiresSoon: "Läuft bald ab",
prop_assetWarranty_lastUpdated: "Zuletzt aktualisiert",

// Maintenance Overview
prop_assetMaintenance_title: "Wartungsübersicht",
prop_assetMaintenance_viewLogs: "Wartungsprotokolle anzeigen",
prop_assetMaintenance_frequency: "Wartungsfrequenz",
prop_assetMaintenance_status: "Wartungsstatus",
prop_assetMaintenance_onSchedule: "Im Plan",
prop_assetMaintenance_nextScheduled: "Nächste geplante Wartung",
prop_assetMaintenance_lastCompleted: "Letzte abgeschlossene Wartung",
prop_assetMaintenance_assignedTechs: "Zugewiesene Techniker",

// Documents & Media
prop_assetDocs_title: "Dokumente & Medien",
prop_assetDocs_uploadDrag: "Dateien hochladen oder hier ablegen",
prop_assetDocs_uploadBtn: "Dokument hochladen",
prop_assetDocs_view: "Ansehen",
prop_assetDocs_download: "Herunterladen",
prop_assetDocs_delete: "Löschen",

// Service History
prop_assetHistory_title: "Serviceverlauf",
prop_assetHistory_maintenanceCompleted: "Wartung abgeschlossen",
prop_assetHistory_issueReported: "Problem gemeldet",
prop_assetHistory_assetInstalled: "Asset installiert",
prop_assetHistory_performedBy: "Durchgeführt von",

// Quick Actions
prop_assetQuick_title: "Schnellaktionen",
prop_assetQuick_ticket: "Ticket für dieses Asset erstellen",
prop_assetQuick_assignTask: "Wartungsaufgabe zuweisen",
prop_assetQuick_addDocument: "Dokument hinzufügen",
prop_assetQuick_markOutOfService: "Als außer Betrieb markieren",

// Assigned Staff
prop_assetStaff_title: "Zugewiesenes Personal",
prop_assetStaff_remove: "Entfernen",

// Unit Context
prop_assetContext_title: "Einheitskontext",
prop_assetContext_unit: "Einheit",
prop_assetContext_floor: "Etage",
prop_assetContext_property: "Objekt",


 prop_assign_title: "Wartungsaufgabe zuweisen",
  prop_assign_subtitle: "Aufgabendetails festlegen, Techniker auswählen und Wartung planen.",
  prop_assign_technicians: "Zugewiesene Techniker",

  prop_assign_priority: "Aufgabenpriorität",
  prop_assign_priority_low: "Niedrig",
  prop_assign_priority_medium: "Mittel",
  prop_assign_priority_high: "Hoch",
  prop_assign_priority_urgent: "Dringend",

  prop_assign_scheduleDate: "Geplantes Datum",

prop_assign_frequency: "Wartungsfrequenz",
  prop_assign_select: "Option wählen",
  prop_assign_freq_oneTime: "Einmalig",
  prop_assign_freq_weekly: "Wöchentlich",
  prop_assign_freq_monthly: "Monatlich",
  prop_assign_freq_quarterly: "Vierteljährlich",
  prop_assign_freq_yearly: "Jährlich",

  prop_assign_notes: "Zusätzliche Notizen",
  prop_assign_notes_placeholder: "Notizen oder besondere Anweisungen eingeben",

  prop_assign_context: "Aufgabenkontext",
  prop_assign_unit: "Einheit",
  prop_assign_floor: "Etage",
  prop_assign_property: "Objekt",

  prop_assign_submit: "Aufgabe zuweisen",

  prop_deleteAsset_title: "Asset löschen",
  prop_deleteAsset_description: "Sind Sie sicher, dass Sie dieses Asset dauerhaft löschen möchten? Dieser Vorgang kann nicht rückgängig gemacht werden.",
  prop_deleteAsset_warning: "Das Löschen dieses Assets entfernt alle zugehörigen Wartungsprotokolle, Dokumente und den Verlauf.",
  prop_deleteAsset_confirm: "Asset löschen",
 prop_asset_docs_title: "Dokumente & Medien",
  prop_asset_docs_uploadText: "Dateien hochladen oder hierher ziehen",
  prop_asset_docs_uploadButton: "Dokument hochladen",


 prop_asset_history_title: "Serviceverlauf",
  prop_asset_history_maintenanceCompleted: "Wartung abgeschlossen",
  prop_asset_history_issueReported: "Problem gemeldet",
  prop_asset_history_installed: "Asset installiert",

  prop_asset_history_desc_maintenance1: "Routinemäßige vierteljährliche Wartung. Filter gereinigt, Kältemittelstand geprüft.",
  prop_asset_history_desc_issue1: "Gerät verursacht ein Rasselgeräusch. Techniker wurde entsendet.",
  prop_asset_history_desc_install1: "Neues HVAC-Gerät von zertifiziertem Techniker installiert.",

  prop_asset_history_performedBy: "Durchgeführt von:",
  prop_asset_history_ticket: "Ticket",



maint_summary_totalTasks: "Wartungsaufgaben gesamt",
maint_summary_preventive: "Vorbeugende Aufgaben",
maint_summary_corrective: "Korrekturaufgaben",
maint_summary_overdue: "Überfällig",

maint_upcoming_title: "Bevorstehende Wartung",
maint_viewCalendar: "Kalender anzeigen",

maint_tasks_title: "Wartungsaufgaben",
maint_createTask: "Wartungsaufgabe erstellen",

maint_col_task: "Aufgabe",
maint_col_asset: "Asset",
maint_col_frequency: "Frequenz",
maint_col_nextDue: "Nächste Fälligkeit",
maint_col_status: "Status",
maint_col_assigned: "Zugewiesen an",

maint_status_upcoming: "Bevorstehend",
maint_status_pending: "Ausstehend",
maint_status_overdue: "Überfällig",


maint_drawer_title: "Wartungsaufgabe Details",
maint_field_taskName: "Aufgabenname",
maint_field_asset: "Asset",
maint_field_frequency: "Frequenz",
maint_field_nextDue: "Nächste Fälligkeit",
maint_field_status: "Status",
maint_field_assignedTo: "Zugewiesen an",
maint_field_description: "Beschreibung",
maint_noDescription: "Keine Beschreibung vorhanden.",
maint_action_editTask: "Aufgabe bearbeiten",

maint_create_title: "Wartungsaufgabe erstellen",
maint_placeholder_taskName: "Aufgabenname eingeben",
maint_placeholder_description: "Beschreibung eingeben...",
maint_action_create: "Aufgabe erstellen",

maint_calendar_title: "Wartungskalender",

maint_assign_title: "Wartung zuweisen",
maint_assign_asset: "Ausgewähltes Asset",
maint_assign_task: "Aufgabe auswählen",
maint_assign_button: "Wartung zuweisen",

maint_noTechnicians: "Keine Techniker zugewiesen",
maint_assignTechnician: "Techniker zuweisen",
maint_assign: "Zuweisen",
maint_remove: "Entfernen",


gps_map_title: "GPS-Tracking der Techniker",
gps_map_placeholder: "Die Karte wird hier geladen…",
gps_search_technician: "Techniker suchen...",

gps_filter_status: "Nach Status filtern",

gps_col_technician: "Techniker",
gps_col_role: "Rolle",
gps_col_status: "Status",
gps_col_lastUpdate: "Letzte Aktualisierung",

gps_status_online: "Online",
gps_status_offline: "Offline",
gps_status_onTask: "Im Einsatz",

gps_drawer_title: "Techniker-Details",
gps_drawer_status: "Aktueller Status",
gps_drawer_lastUpdate: "Letztes GPS-Update",
gps_drawer_coordinates: "Koordinaten",

docs_of: "von",
col_actions: "Aktionen",
prop_staff_title: "Technikerteam",
prop_staff_assign: "Techniker zuweisen",
prop_staff_search: "Techniker suchen...",
prop_staff_assignedFloors: "Zugewiesene Etagen",

common_active: "Aktiv",
common_inactive: "Inaktiv",


struct_floors: "Etagen",
  struct_add_floor: "Etage hinzufügen",
  struct_units: "Einheiten",

  struct_add_unit: "Einheit hinzufügen",
  struct_assigned_tenant: "Zugewiesener Mieter",
  struct_unassigned: "Nicht zugewiesen",
  struct_no_tenant: "Kein Mieter",
  struct_caretakers: "Hauswarte",
  struct_no_caretakers: "Keine Hauswarte",

  struct_manage_floors: "Etagen verwalten",
  struct_bulk_units: "Einheiten stapelweise hinzufügen",
  struct_download_diagram: "Strukturdiagramm herunterladen",
  struct_view_hierarchy: "Gesamte Hierarchie ansehen",

  // Status tags
  struct_status_active: "Aktiv",
  struct_status_vacant: "Leerstehend",
  struct_status_maintenance: "Wartung erforderlich",

  floor_add_title: "Etage hinzufügen",
  floor_add_subtitle: "Erstellen Sie eine neue Etage und definieren Sie deren Grundstruktur.",

  floor_field_name: "Etagenname / Nummer",
  floor_placeholder_name: "z. B. Erdgeschoss",

  floor_field_label: "Etagenbezeichnung (Optional)",
  floor_placeholder_label: "z. B. Westflügel",

  floor_field_units: "Anzahl der Einheiten auf dieser Etage",
  floor_units_hint: "Sie können Einheiten nach dem Erstellen der Etage einzeln hinzufügen.",

  floor_field_notes: "Zusätzliche Notizen (Optional)",
  floor_placeholder_notes: "Geben Sie relevante Notizen ein…",

  floor_info_text:
    "Etagenangaben können später bearbeitet werden. Sie können nachträglich auch einzelne Einheiten hinzufügen.",

  floor_btn_add: "Etage hinzufügen",
  btn_cancel: "Abbrechen",

  /* ---------------------- */
  /* FLOOR – ADD FLOOR MODAL */
  /* ---------------------- */
  floor_add_title: "Etage hinzufügen",
  floor_add_subtitle: "Erstellen Sie eine neue Etage und definieren Sie ihre Grundstruktur.",

  floor_field_name: "Etagenname / Nummer",
  floor_field_label: "Etagenbezeichnung (Optional)",
  floor_field_units: "Anzahl der Einheiten auf dieser Etage",
  floor_field_notes: "Zusätzliche Notizen (Optional)",

  floor_placeholder_name: "z. B. Erdgeschoss",
  floor_placeholder_label: "z. B. Westflügel",
  floor_placeholder_notes: "Geben Sie hier relevante Notizen ein...",

  floor_units_hint:
    "Einheiten können nach dem Erstellen der Etage einzeln hinzugefügt werden.",
  floor_info_text:
    "Etageninformationen können später bearbeitet werden. Sie können nach dem Erstellen der Etage auch einzelne Einheiten hinzufügen.",

  floor_btn_add: "Etage hinzufügen",

  /* ---------------------- */
  /* FLOOR – EDIT FLOOR MODAL */
  /* ---------------------- */
  floor_edit_title: "Etage bearbeiten",
  floor_edit_subtitle:
    "Bearbeiten Sie die Etageninformationen und verwalten Sie die Einheiten auf dieser Ebene.",

  floor_units_title: "Einheiten auf dieser Etage",
  floor_units_subtitle:
    "Benennen Sie Einheiten um, ändern Sie die Reihenfolge oder entfernen Sie sie.",

  floor_units_addUnit: "Einheit hinzufügen",
  floor_units_deleteWarning:
    "Diese Einheit löschen? Dieser Vorgang kann nicht rückgängig gemacht werden.",

  /* ---------------------- */
  /* UNIT DETAILS */
  /* ---------------------- */

  unit_badge_default: "Einheit",
  unit_noTenant: "Nicht zugewiesen",
  unit_status_active: "Aktiv",
  unit_status_maintenance: "Wartung",
  unit_status_vacant: "Leerstehend",

  /* ---------------------- */
  /* BUTTONS */
  /* ---------------------- */

  btn_cancel: "Abbrechen",
  btn_saveChanges: "Änderungen speichern",
  btn_deletePermanent: "Dauerhaft löschen",

 unit_add_title: "Einheit hinzufügen",
  unit_add_subtitle:
    "Erstellen Sie eine neue Einheit auf dieser Etage und weisen Sie Metadaten zu.",

  unit_field_name: "Einheitsname / Nummer",
  unit_field_type: "Einheitstyp",
  unit_field_tenant: "Zugewiesener Mieter (optional)",
  unit_field_sqft: "Fläche (optional)",
  unit_field_floor: "Etage",
  unit_field_status: "Status der Einheit",
  unit_field_notes: "Notizen zur Einheit (optional)",

  unit_placeholder_name: "z. B. 'Einheit 301'",
  unit_placeholder_tenant: "Mieter suchen",
  unit_placeholder_sqft: "z. B. 1250 sq ft",
  unit_placeholder_notes: "Relevante Hinweise eingeben, z. B. 'Inspektion erforderlich'",
  unit_placeholder_staff: "Mitarbeiter suchen...",
  unit_placeholder_room: "z. B. Küche",

  unit_assign_staff: "Hausmeister / Serviceteam zuweisen",
  unit_assign_staff_desc:
    "Zugewiesene Mitarbeiter erhalten Tickets für diese Einheit.",

  unit_rooms_title: "Räume / Bereiche (optional)",
  unit_rooms_desc:
    "Definieren Sie Räume oder Funktionsbereiche innerhalb dieser Einheit.",

  unit_type_residential: "Wohnung",
  unit_type_office: "Büro",
  unit_type_retail: "Einzelhandel / Shop",
  unit_type_storage: "Lagerraum",
  unit_type_warehouse: "Lagerhalle",

  unit_status_active: "Aktiv",
  unit_status_vacant: "Leerstehend",
  unit_status_maintenance: "Wartung erforderlich",
  unit_status_renovation: "In Renovierung",

  unit_add_action: "Einheit hinzufügen",
  btn_add: "Hinzufügen",
  btn_cancel: "Abbrechen",


unit_edit_title: "Einheit bearbeiten",
  unit_edit_subtitle: "Aktualisieren Sie Einheitsdaten, Mieterzuweisung und strukturelle Informationen.",

  unit_field_name: "Einheitsname / Nummer*",
  unit_field_type: "Einheitstyp*",
  unit_field_sqft: "Fläche",
  unit_field_status: "Status der Einheit",
  unit_field_notes: "Einheitsnotizen",

  unit_placeholder_name: "z. B. 'Einheit 301'",
  unit_placeholder_sqft: "1250 sq ft",
  unit_placeholder_notes: "Relevante Hinweise eingeben...",
  unit_placeholder_tenant: "Mieter suchen...",
  unit_placeholder_staff: "Hausmeister, Techniker hinzufügen...",
  unit_placeholder_room: "z. B. Wohnzimmer, Lagerbereich",

  unit_tenant_section: "Zugewiesener Mieter",
  unit_tenant_note: "Der ausgewählte Mieter erhält Benachrichtigungen und Zugriff auf diese Einheit.",

  unit_assign_staff: "Zugewiesenes Personal",
  unit_assign_staff_desc: "Dieses Personal wird automatisch über Wartungs- und Einheitentickets informiert.",

  unit_rooms_title: "Räume / Funktionsbereiche",
  unit_rooms_desc: "Definieren Sie interne Bereiche für genauere Ticketzuweisungen und Planung.",

  unit_type_residential: "Wohnung",
  unit_type_office: "Büro",
  unit_type_retail: "Einzelhandel / Shop",
  unit_type_storage: "Lagerraum",
  unit_type_warehouse: "Lagerhalle",
  unit_type_custom: "Benutzerdefiniert",

  unit_status_active: "Aktiv",
  unit_status_vacant: "Leerstehend",
  unit_status_maintenance: "Wartung erforderlich",
  unit_status_renovation: "In Renovierung",

  unit_delete_action: "Einheit löschen",
  unit_edit_action: "Änderungen speichern",
  btn_cancel: "Abbrechen",
  btn_add: "Hinzufügen",
struct_edit_floor: "Etage bearbeiten",


// ADD ASSET MODAL (GERMAN)
prop_asset_add_title: "Asset zur Einheit hinzufügen",
prop_asset_add_sub: "Registrieren Sie ein neues Gerät für diese Einheit und definieren Sie Wartungsmetadaten.",

prop_asset_section_basic: "Grundlegende Asset-Informationen",
prop_asset_section_location: "Standortdetails",
prop_asset_section_warranty: "Garantie & Lebenszyklus",
prop_asset_section_maintenance: "Wartungseinstellungen",
prop_asset_section_documents: "Asset-Dokumente & Fotos",
prop_asset_section_notes: "Notizen",

prop_asset_label_name: "Asset-Name",
prop_asset_label_category: "Asset-Kategorie",
prop_asset_label_manufacturer: "Hersteller (optional)",
prop_asset_label_model: "Modellnummer (optional)",
prop_asset_label_serial: "Seriennummer (optional)",
prop_asset_label_unit: "Einheit",
prop_asset_label_floor: "Etage",
prop_asset_label_position: "Platzierungsposition (optional)",
prop_asset_label_purchase: "Kaufdatum",
prop_asset_label_installation: "Installationsdatum",
prop_asset_label_warranty: "Garantieablauf",
prop_asset_label_lifetime: "Erwartete Lebensdauer (optional)",
prop_asset_label_vendor: "Lieferant / Anbietername (optional)",
prop_asset_label_maintFreq: "Wartungsfrequenz",
prop_asset_label_nextMaint: "Nächste geplante Wartung",
prop_asset_label_staff: "Verantwortliches Personal zuweisen",

prop_asset_label_notes: "Notizen (optional)",

prop_asset_placeholder_name: "z. B. HVAC Split AC",
prop_asset_placeholder_manufacturer: "Hersteller eingeben",
prop_asset_placeholder_model: "Modellnummer eingeben",
prop_asset_placeholder_serial: "Seriennummer eingeben",
prop_asset_placeholder_position: "z. B. Wohnzimmerwand",
prop_asset_placeholder_lifetime: "z. B. 5 Jahre",
prop_asset_placeholder_vendor: "Name eingeben",
prop_asset_placeholder_notes: "z. B. Installiert während der Renovierung 2023. Vierteljährlich auf Lecks prüfen.",
prop_asset_placeholder_searchStaff: "Personal suchen und hinzufügen...",

prop_asset_add_cta: "Asset hinzufügen",

tickets: "Tickets",

ticketsDashboard: "Übersicht",
ticketsAll: "Alle Tickets",
ticketCreate: "Ticket erstellen",
tkt_dash_title: "Ticket-Dashboard",
tkt_dash_subtitle: "Systemweite Übersicht über Ticketaktivitäten, SLAs und Arbeitsverteilung.",

tkt_filter_org: "Organisationen: Alle",
tkt_filter_property: "Immobilien: Alle",
tkt_filter_range: "Zeitraum: Dieser Monat",

tkt_kpi_total: "Gesamtzahl Tickets",
tkt_kpi_open: "Offene Tickets",
tkt_kpi_overdue: "Überfällige Tickets",
tkt_kpi_overdue_breached: "SLA Überschritten",
tkt_kpi_resolvedToday: "Heute gelöst",
tkt_last_24h: "Letzte 24 Stunden",

tkt_vol_trend: "Ticketvolumen-Trend",
tkt_vol_trend_sub: "Gesamt Ticketfluss aller Organisationen",

tkt_by_category: "Tickets nach Kategorie",
tkt_by_category_sub: "Aufschlüsselung der Tickets nach Servicetyp",

tkt_sla_perf: "SLA-Leistung",
tkt_sla_perf_sub: "SLA-Einhaltung im aktuellen Berichtszeitraum",
tkt_sla_rate: "SLA-Erfüllungsquote",

tkt_overdue_breakdown: "Überfälligkeits-Analyse",
tkt_overdue_breakdown_sub: "Alter der Tickets, die SLA verletzt haben",

tkt_top_orgs: "Top 5 Organisationen nach Tickets",
tkt_by_property: "Tickets nach Immobilie",
tkt_high_priority_only: "Nur hohe Priorität",

tkt_heatmap: "Ticket-Heatmap (Zeit vs. Tag)",






tickets: "Tickets",
ticketsDashboard: "Tickets Übersicht",
allTickets: "Alle Tickets",
createTicket: "Ticket Erstellen",

ticket_filters_org: "Organisation",
ticket_filters_property: "Gebäude",
ticket_filters_priority: "Priorität",
ticket_filters_category: "Kategorie",
ticket_filters_status: "Status",
ticket_filters_assigned: "Zugewiesen an",
ticket_filters_created: "Erstellt am",
ticket_filters_sla: "SLA Status",
ticket_filters_clear: "Alle löschen",

ticket_bulk_selected: "Tickets ausgewählt",
ticket_bulk_assign: "Techniker zuweisen",
ticket_bulk_priority: "Priorität ändern",
ticket_bulk_status: "Status aktualisieren",
ticket_bulk_delete: "Löschen",

ticket_col_id: "Ticket-ID",
ticket_col_title: "Titel / Zusammenfassung",
ticket_col_priority: "Priorität",
ticket_col_category: "Kategorie",
ticket_col_org: "Organisation",
ticket_col_property: "Gebäude",
ticket_col_assigned: "Zugewiesen an",
ticket_col_status: "Status",
ticket_col_created: "Erstellt am",
ticket_col_sla: "SLA Fällig",

ticket_create_header: "Neues Ticket erstellen",
ticket_create_sub: "Erfassen Sie ein neues Problem und weisen Sie es dem richtigen Team zu.",
ticket_back_to_all: "Zurück zu allen Tickets",

ticket_info: "Ticketinformationen",
ticket_location: "Standortdetails",
ticket_assignment: "Zuweisung",
ticket_attachments: "Anhänge (Optional)",
ticket_description: "Beschreibung & Notizen",
ticket_sla_settings: "SLA Einstellungen (Erweitert)",

ticket_title: "Ticket Titel",
ticket_type: "Ticket Typ",
ticket_category: "Kategorie",
ticket_requested_by: "Angefordert von",
ticket_priority: "Priorität",
ticket_source: "Quelle der Anfrage",
ticket_desc: "Beschreibung",
ticket_internal_notes: "Interne Notizen",

ticket_org: "Organisation",
ticket_floor: "Stockwerk",
ticket_property: "Gebäude",
ticket_unit: "Einheit / Raum",
ticket_address: "Adresse",
ticket_asset: "Asset",

ticket_assign_to: "Zuweisen an",
ticket_user_picker: "Benutzerauswahl",
ticket_expected: "Voraussichtliches Abschlussdatum",
ticket_notify_user: "Benutzer benachrichtigen",

ticket_drag_drop: "Dateien hier ablegen oder klicken zum Hochladen",
ticket_drag_support: "Unterstützt: Bilder, PDFs, Videos",

ticket_sla_override: "Standard-SLA-Einstellungen überschreiben?",
ticket_cancel: "Abbrechen",
ticket_submit: "Ticket Erstellen",
ticket_edit: "Ticket bearbeiten",
ticket_assign: "Zuweisen / Neu zuweisen",
ticket_title: "Titel",
ticket_priority: "Priorität",
ticket_category: "Kategorie",
ticket_type: "Tickettyp",
ticket_source: "Quelle",
ticket_requested_by: "Angefordert von",
ticket_description: "Beschreibung",
ticket_internal_notes: "Interne Notizen",
ticket_timeline: "Zeitverlauf",
ticket_attachments: "Anhänge",
ticket_chat: "Ticket-Chat",
ticket_related: "Verwandte Tickets",
ticket_type_message: "Nachricht eingeben...",
ticket_close: "Ticket schließen",
ticket_mark_completed: "Als abgeschlossen markieren",
add_internal_note: "Interne Notiz hinzufügen",
back_to_tickets: "Zurück zu Tickets",

assign_title: "Ticket zuweisen",
assign_desc: "Wählen Sie eine Rolle und einen Benutzer zur Zuweisung aus.",
assign_role: "Rolle zuweisen",
expected_date: "Voraussichtliches Abschlussdatum",
available_users: "Verfügbare Benutzer",
assigned_to: "Zugewiesen zu",
tasks_today: "Aufgaben heute",
assignment_note: "Zuweisungsnotiz (optional)",
assignment_note_placeholder: "Notiz für den Mitarbeiter hinzufügen...",
cancel: "Abbrechen",
assign_btn: "Ticket zuweisen",
upload: "Hochladen",




 ticket_status_title: "Ticketstatus aktualisieren",
  ticket_status_sub: "Ändern Sie die Workflow-Stufe und fügen Sie optional eine Notiz hinzu.",
  ticket_status_current: "Aktueller Status",
  ticket_status_new: "Neuer Status",
  ticket_status_choose: "Neuen Status auswählen",
  ticket_status_rule_preview: "Regelhinweis: Anhänge werden vor Abschluss empfohlen.",
  ticket_status_note: "Statusänderungsnotiz (Optional)",
  ticket_status_note_ph: "Grund für diese Statusänderung hinzufügen...",
  ticket_status_note_info: "Diese Notiz wird in der Ticket-Zeitleiste sichtbar sein.",
  ticket_status_attach_advice: "Bitte fügen Sie Nachweisfotos oder Dokumente hinzu.",
  ticket_status_upload_btn: "Anhänge hochladen",
  ticket_status_close_warn1: "Das Schließen eines Tickets ist endgültig.",
  ticket_status_close_warn2: "Ein geschlossenes Ticket kann nicht wieder geöffnet werden.",
  ticket_status_close_feedback: "Nach dem Schließen Mieterfeedback anfordern",
  ticket_status_sla_notice: "Das Abschließen dieses Tickets stoppt die SLA-Timer.",
  ticket_status_submit: "Als abgeschlossen markieren",

  ticket_notes_title: "Interne Notizen",
  ticket_notes_sub: "Nur für Super Admin, Facility Manager und Admins sichtbar.",
  ticket_notes_addNew: "Neue interne Notiz hinzufügen",
  ticket_notes_ph: "Interne Notiz schreiben...",
  ticket_notes_attach: "Dateien anhängen (optional)",
  ticket_notes_tag: "Notiz markieren (optional)",
  ticket_notes_high: "Als wichtige Notiz markieren",
  ticket_notes_info: "Diese Notizen sind für Mieter oder Dienstleister nicht sichtbar.",
  ticket_notes_history: "Notizverlauf",
  ticket_notes_highLabel: "Hohe Wichtigkeit",
  ticket_notes_dummy1: "Mieter meldete starken Wasserschaden. Bitte überwachen.",
  ticket_notes_submit: "Notiz hinzufügen",

  action_cancel: "Abbrechen",
  action_close: "Schließen",


ticket_notes_viewFull: "Vollständige Notiz anzeigen",

  tkt_dash_title: "Ticket-Dashboard",
  tkt_dash_subtitle: "Systemweite Übersicht über Ticketaktivität, SLAs und Workload.",

  tkt_filter_org: "Organisationen: Alle",
  tkt_filter_property: "Liegenschaften: Alle",
  tkt_filter_range: "Zeitraum: Dieser Monat",

  tkt_kpi_total: "Gesamtzahl Tickets",
  tkt_kpi_total_footer: "+2.5% • Alle Organisationen",
  tkt_kpi_open: "Offene Tickets",
  tkt_badge_open: "Offen",
  tkt_kpi_overdue: "Überfällige Tickets",
  tkt_kpi_overdue_footer: "SLA verletzt: 212",
  tkt_kpi_resolved_today: "Heute gelöst",
  tkt_kpi_last24: "Letzte 24 Stunden",

  tkt_vol_trend: "Ticket-Volumentrend",
  tkt_vol_trend_sub: "Gesamter Ticketfluss über alle Organisationen",

  tkt_by_category: "Tickets nach Kategorie",
  tkt_by_category_sub: "Aufteilung der Tickets nach Dienstleistungskategorie",

  tkt_sla_perf: "SLA-Leistung",
  tkt_sla_perf_sub: "SLA-Einhaltung im aktuellen Zeitraum",

  tkt_overdue_breakdown: "Überfällig nach Zeit",
  tkt_overdue_breakdown_sub: "Alter der Tickets, die eine SLA verletzt haben",

  tkt_top_orgs: "Top 5 Tickets nach Organisation",
  tkt_by_property: "Tickets nach Liegenschaft",
  tkt_high_priority_only: "Nur hohe Priorität",

  tkt_heatmap: "Ticket-Heatmap (Zeit vs Tag)",
  tkt_heatmap_sub: "Ticket-Dichte nach Tagen und Uhrzeiten",

  tkt_org: "Organisation",
  tkt_open: "Offen",
  tkt_in_progress: "In Bearbeitung",
  tkt_overdue: "Überfällig",
  tkt_view_all: "Alle anzeigen",


  ticketCreate: "Neues Ticket erstellen",
ticketCreateDesc: "Erfassen Sie ein neues Problem und weisen Sie es dem richtigen Team zu.",
backToTickets: "Zurück zu allen Tickets",

// Sections
ticketInfo: "Ticketinformationen",
locationDetails: "Standortdetails",
assignment: "Zuweisung",
descriptionNotes: "Beschreibung & Notizen",

// Fields
ticketTitle: "Tickettitel*",
ticketType: "Tickettyp",
category: "Kategorie*",
requestedBy: "Angefordert von",
priority: "Priorität*",
sourceOfRequest: "Anfragequelle",

organization: "Organisation*",
property: "Immobilie*",
floor: "Stockwerk",
unitRoom: "Einheit / Raum",
address: "Adresse",
asset: "Anlage",

assignTo: "Zuweisen an*",
userPicker: "Benutzerauswahl",
searchUser: "Benutzer suchen...",
expectedCompletion: "Voraussichtliches Abschlussdatum",
notifyUser: "Benutzer benachrichtigen",

description: "Beschreibung*",
internalNotes: "Interne Notizen",

cancel: "Abbrechen",
createTicketsButton: "Tickets erstellen",
createTicketButton: "Ticket erstellen",
cancelChanges: "Änderungen verwerfen",
saveChanges: "Änderungen speichern",
closeTicket: "Ticket schließen",
backToTicket: "Zurück zum Ticket",
ticketEdit: "Ticket bearbeiten",
ticketEditDesc: "Ticketinformationen und Zuweisung aktualisieren.",

ticket_overview: "Übersicht",
ticket_details: "Details",
ticket_attachments: "Anhänge",
ticket_history: "Verlauf",
ticket_chat: "Chat",
ticket_assessment: "Bewertung",
ticket_timeline: "Zeitachse",

title: "Titel",
priority: "Priorität",
category: "Kategorie",
ticketType: "Tickettyp",
sourceOfRequest: "Quelle der Anfrage",
requestedBy: "Angefordert von",
slaDue: "SLA Fällig",
lastUpdated: "Zuletzt aktualisiert",
description: "Beschreibung",
internalNotes: "Interne Notizen",
timeline: "Zeitverlauf",
attachments: "Anhänge",

requestedBy: "Angefordert von",
assignedTo: "Zugewiesen an",
createdAt: "Erstellt am",
highlights: "Highlights",
latestEvent: "Letztes Ereignis",
messages: "Nachrichten",
historyLog: "Verlauf",
assessment: "Bewertung",
recentTimeline: "Letzte Zeitleiste",
addInternalNote: "Interne Notiz hinzufügen",
attachmentsForTicket: "Anhänge für Ticket",
attachmentsSubtitle: "Anzeigen, hochladen, markieren und verwalten Sie alle Medien, die mit diesem Ticket verknüpft sind.",
backToTicket: "Zurück zum Ticket",
uploadFiles: "Dateien hochladen",
searchPlaceholder: "Nach Dateiname oder Tag suchen",
sortNewest: "Sortieren: Neueste zuerst",
clearFilters: "Filter löschen",
fileType: "Dateityp",
taggedAs: "Markiert als",
uploadedBy: "Hochgeladen von",
dateRange: "Datumsbereich",
fileDetails: "Dateidetails",
fileName: "Dateiname",
fileSize: "Dateigröße",
dimensions: "Abmessungen",
uploadDate: "Upload-Datum",
tags: "Tags",
addTag: "Tag hinzufügen",
timeline: "Zeitleiste",
addToTimeline: "Diesen Anhang zur Ticket-Zeitleiste hinzufügen",
updateAttachment: "Anhang aktualisieren",
download: "Herunterladen",
deleteFile: "Datei löschen",


ticketHistoryLog: "Ticket-Verlauf",
historySubtitle: "Eine vollständige Audit-Historie aller Aktionen dieses Tickets.",
backToTicket: "Zurück zum Ticket",
exportLog: "Protokoll exportieren",
filterEvents: "Ereignisse filtern",
performedBy: "Ausgeführt von",
allUsers: "Alle Benutzer",
tenant: "Mieter",
technician: "Techniker",
admin: "Administrator",
dateRange: "Datumsbereich",
impactLevel: "Auswirkungsgrad",
allLevels: "Alle Stufen",
low: "Niedrig",
medium: "Mittel",
high: "Hoch",
searchHistory: "Verlauf durchsuchen...",
eventType: "Ereignistyp",
created: "Erstellt",
assignmentChange: "Zuweisungsänderung",
statusChange: "Statusänderung",
noteAdded: "Notiz hinzugefügt",
slaEvent: "SLA-Ereignis",
clearFilters: "Filter löschen",

slaBreach: "SLA-Verstoß",
firstResponseTime: "Reaktionszeit",
slaFirstResponse: "Reaktionszeit",
statusChanged: "Status geändert",
attachmentUploaded: "Anhang hochgeladen",
ticketCreated: "Ticket erstellt",

subject: "Betreff",
download: "Download",

auditInspector: "Audit-Metadaten-Inspektor",
selectEvent: "Wählen Sie ein Ereignis aus, um die Details anzuzeigen.",
participants: "Teilnehmer",
tenant: "Mieter",
facilityManager: "Facility Manager",
technician: "Techniker",
superAdmin: "Super Admin",

filters: "Filter",
allMessages: "Alle Nachrichten",
attachmentsOnly: "Nur Anhänge",
adminMessages: "Admin-Nachrichten",
voiceNotes: "Sprachnotizen",
searchMessages: "Nachrichten durchsuchen...",

ticketTitle: "Ticket",
locationSample: "Etage 2 → Einheit 201 → Serverraum",
inProgress: "In Bearbeitung",

writeMessage: "Nachricht schreiben...",
messageDetails: "Nachrichtendetails",
noMessageSelected: "Wählen Sie eine Nachricht aus, um Details anzuzeigen.",

you: "Sie",

assessment_title: "Ticketbewertung",
assessment_subtitle: "Überprüfen Sie Diagnose, Risikoeinstufung und empfohlene Maßnahmen.",
assessment_overview: "Bewertungsübersicht",
priority: "Priorität",
category: "Kategorie",
property: "Immobilie",
unit: "Einheit",
sla_remaining: "SLA verbleibend",
assessment_info: "Die Bewertung beeinflusst SLA, Risiko und erforderliche Fähigkeiten.",

root_cause: "Ursachenanalyse",
cause_1: "Verstopfte Kondensatorspule reduziert den Luftstrom.",
cause_2: "Ungleichgewicht des Kältemitteldrucks festgestellt.",
cause_3: "Wartung seit 3 Monaten überfällig.",

risk_assessment: "Risikobewertung",
risk_score: "Risikowert",
impact: "Auswirkung",
impact_text: "Problem kann Kühlung und Serverraumstabilität beeinträchtigen.",
urgency: "Dringlichkeit",
urgency_text: "Erfordert sofortige Maßnahmen, um Ausfallzeit zu vermeiden.",

rec_actions: "Empfohlene Maßnahmen",
action_1_title: "Kondensatorspule reinigen",
action_1_desc: "Reinigung durchführen, um Luftstrom zu verbessern.",
action_2_title: "Kältemittel prüfen",
action_2_desc: "Druck ausgleichen und Undichtigkeiten prüfen.",
action_3_title: "Verschlissene Teile ersetzen",
action_3_desc: "Filter und verschlissene Komponenten austauschen.",

suggested_personnel: "Vorgeschlagener Techniker (KI)",
technician: "Techniker",
skill_match: "Beste Übereinstimmung",
fast_response: "Schnelle Reaktion",
low_workload: "Geringe Auslastung",
assign_now: "Jetzt zuweisen",
ticket_notes_title: "Interne Notizen",
ticket_notes_sub: "Notizen sind nur für Super Admin, Facility Manager und Administratoren sichtbar.",

ticket_notes_addNew: "Neue interne Notiz hinzufügen",
ticket_notes_ph: "Interne Notiz schreiben...",
ticket_notes_attach: "Dateien anhängen (optional)",

ticket_notes_tag: "Notiz markieren (optional)",
ticket_notes_tag_general: "Allgemein",
ticket_notes_tag_escalation: "Eskalation",
ticket_notes_tag_sla: "SLA-Ausnahme",
ticket_notes_tag_safety: "Sicherheitsrelevantes Thema",

ticket_notes_high: "Als wichtige Notiz markieren",
ticket_notes_highLabel: "Hohe Wichtigkeit",

ticket_notes_info: "Diese Notizen sind für Mieter oder Dienstleister nicht sichtbar.",

ticket_notes_history: "Notizverlauf",

ticket_notes_dummy1:
  "Mieter meldete einen erheblichen Wasserschaden. Wartungsteam wurde zugewiesen. Bitte engmaschig überwachen.",
ticket_notes_dummy2:
  "Neue Sicherheitskameras wurden installiert. Siehe beigefügten Bericht des Anbieters.",

ticket_notes_viewFull: "Vollständige Notiz anzeigen",
ticket_notes_submit: "Notiz hinzufügen",

action_edit: "Bearbeiten",
action_delete: "Löschen",
action_close: "Schließen",

ticket_notes_title: "Interne Notizen",
ticket_notes_sub: "Notizen sind nur für Super Admin, Facility Manager und Administratoren sichtbar.",

ticket_notes_addNew: "Neue interne Notiz hinzufügen",
ticket_notes_ph: "Interne Notiz schreiben...",
ticket_notes_attach: "Dateien anhängen (optional)",

ticket_notes_tag: "Notiz markieren (optional)",
ticket_notes_tag_general: "Allgemein",
ticket_notes_tag_escalation: "Eskalation",
ticket_notes_tag_sla: "SLA-Ausnahme",
ticket_notes_tag_safety: "Sicherheitsrelevantes Thema",

ticket_notes_high: "Als wichtige Notiz markieren",
ticket_notes_highLabel: "Hohe Wichtigkeit",

ticket_notes_info: "Diese Notizen sind für Mieter oder Dienstleister nicht sichtbar.",

ticket_notes_history: "Notizverlauf",

ticket_notes_dummy1:
  "Mieter meldete einen erheblichen Wasserschaden. Wartungsteam wurde zugewiesen. Bitte engmaschig überwachen.",
ticket_notes_dummy2:
  "Neue Sicherheitskameras wurden installiert. Siehe beigefügten Bericht des Anbieters.",

ticket_notes_viewFull: "Vollständige Notiz anzeigen",
ticket_notes_submit: "Notiz hinzufügen",

action_edit: "Bearbeiten",
action_delete: "Löschen",
action_close: "Schließen",

  maintenance: "Wartung",
  maintenanceDashboard: "Dashboard",
  maintenanceList: "Wartungsliste",
  maintenanceCreate: "Wartung erstellen",
  maintenanceEdit: "Wartung bearbeiten",

maintenance: "Wartung",
maintenanceDashboard: "Dashboard",
maintenanceList: "Wartungsliste",
maintenanceCreate: "Wartung erstellen",
maintenanceEdit: "Wartung bearbeiten",

maintenanceExportSummary: "Übersicht exportieren",
maintenanceOpenReports: "Wartungsberichte öffnen",
maintenanceCreateTask: "Wartungsaufgabe erstellen",

maintenanceUpcomingTasks: "Bevorstehende Wartungsaufgaben",
maintenanceUpcomingHint: "Nächste 7 Tage",
maintenanceOverdueTasks: "Überfällige Aufgaben",
maintenanceOverdueHint: "Erfordert sofortige Maßnahmen",
maintenanceWarningAssets: "Anlagen im Warnzustand",
maintenanceWarningHint: "Basierend auf Sensorlogs / Verlauf",
maintenanceCertificates: "Bald ablaufende Zertifikate",
maintenanceCertificatesHint: "Innerhalb von 30 Tagen",

maintenanceWorkload: "Arbeitslastverteilung",
maintenanceWorkloadSub: "Nach Rolle: Facility Manager / Hauswart / Techniker / Dienstleister",
maintenanceRoleManager: "Manager",
maintenanceRoleCaretaker: "Hauswart",
maintenanceRoleTechnician: "Techniker",
maintenanceRoleProvider: "Dienstleister",

maintenanceTrend: "Wartungstrend (Letzte 6 Monate)",
maintenanceTrendSub: "Präventive vs. korrektive Wartung",

maintenanceAssetHealth: "Zustand der Anlagen",
maintenanceAssetHealthHealthy: "Gesund",
maintenanceAssetHealthWarning: "Warnung",
maintenanceAssetHealthCritical: "Kritisch",
maintenanceAssetHealthUnknown: "Unbekannt",

maintenanceRiskScore: "Wartungsrisiko-Score",
maintenanceRiskModerate: "Mittleres Risiko",
maintenanceRiskUpcoming: "Bevorstehende Hochrisiko-Anlagen:",
maintenanceRiskViewAll: "Alle Risikoberichte anzeigen",

maintenanceOverdueTitle: "Überfällige Aufgaben",
maintenanceOverdueViewAll: "Alle überfälligen Aufgaben anzeigen",

maintenanceTableTask: "Aufgabe",
maintenanceTableAsset: "Anlage/Bereich",
maintenanceTableProperty: "Objekt",
maintenanceTableAssignedTo: "Zugewiesen an",
maintenanceTableDueDate: "Fällig am",
maintenanceTableStatus: "Status",
maintenanceTableActions: "Aktionen",

maintenanceUpcomingPM: "Bevorstehende vorbeugende Wartung (nächste 7 Tage)",
maintenanceSeeCalendar: "Wartungskalender anzeigen",

maintenanceRecent: "Kürzlich abgeschlossen",
maintenanceResultPassed: "Bestanden",
maintenanceResultObservations: "Bestanden mit Anmerkungen",
maintenanceResultFailed: "Nicht bestanden",

maintenance: "Wartung",
maintenanceDashboard: "Dashboard",

maintenanceDashboardPageTitle: "Wartungsdashboard",
maintenanceDashboardSub: "Gesamtübersicht aller präventiven und korrektiven Wartungsaktivitäten.",

maintenance_exportSummary: "Zusammenfassung exportieren",
maintenance_openReports: "Wartungsberichte öffnen",
maintenance_createTask: "Wartungsaufgabe erstellen",

/* KPI */
maintenance_kpi_upcoming: "Bevorstehende Wartungsaufgaben",
maintenance_kpi_upcoming_hint: "Nächste 7 Tage",

maintenance_kpi_overdue: "Überfällige Aufgaben",
maintenance_kpi_overdue_hint: "Erfordert sofortige Maßnahmen",

maintenance_kpi_warningAssets: "Anlagen im Warnzustand",
maintenance_kpi_warningAssets_hint: "Basierend auf Sensorprotokollen / Verlauf",

maintenance_kpi_certificates: "Bald ablaufende Zertifikate",
maintenance_kpi_certificates_hint: "Innerhalb von 30 Tagen",

/* Workload */
maintenance_workload_title: "Arbeitslastverteilung",
maintenance_workload_sub: "Nach Rolle: Facility Manager / Hauswart / Techniker / Dienstleister",

maintenance_role_manager: "Manager",
maintenance_role_caretaker: "Hauswart",
maintenance_role_technician: "Techniker",
maintenance_role_provider: "Dienstleister",

/* Trend */
maintenance_trend_title: "Wartungstrend (Letzte 6 Monate)",
maintenance_trend_sub: "Präventive vs. korrektive Wartung",

/* Asset Health */
maintenance_assetHealth_title: "Anlagenzustand",
maintenance_assetHealth_assetsLabel: "Anlagen",
maintenance_assetHealth_healthy: "Gesund",
maintenance_assetHealth_warning: "Warnung",
maintenance_assetHealth_critical: "Kritisch",
maintenance_assetHealth_unknown: "Unbekannt",

/* Risk Score */
maintenance_risk_title: "Wartungsrisiko-Score",
maintenance_risk_moderate: "Mittleres Risiko",
maintenance_risk_upcomingTitle: "Bevorstehende Hochrisiko-Anlagen:",
maintenance_risk_viewAll: "Alle Risikoberichte anzeigen",

/* Overdue */
maintenance_overdue_title: "Überfällige Aufgaben",
maintenance_overdue_viewAll: "Alle überfälligen Aufgaben anzeigen",

maintenance_table_taskName: "Aufgabe",
maintenance_table_assetArea: "Anlage/Bereich",
maintenance_table_property: "Objekt",
maintenance_table_assignedTo: "Zugewiesen an",
maintenance_table_dueDate: "Fälligkeitsdatum",
maintenance_table_status: "Status",
maintenance_table_actions: "Aktionen",

/* Upcoming PM */
maintenance_upcoming_title: "Bevorstehende vorbeugende Wartung (nächste 7 Tage)",
maintenance_upcoming_seeCalendar: "Wartungskalender anzeigen",

/* Recently Completed */
maintenance_recent_title: "Kürzlich abgeschlossen",
maintenance_result_passed: "Bestanden",
maintenance_result_observations: "Bestanden mit Anmerkungen",
maintenance_result_failed: "Nicht bestanden",

/* Generic */
action_view: "Ansehen",

maintenanceListPageTitle: "Wartungsaufgaben",
maintenanceListPageSub: "Alle Wartungsaufgaben anzeigen, filtern und verwalten.",
maintenance_createTask: "Aufgabe erstellen",
search: "Suchen",
filter_organization: "Organisation",
filter_property: "Immobilie",
filter_assetCategory: "Anlagenkategorie",
filter_taskType: "Aufgabentyp",
filter_priority: "Priorität",
filter_status: "Status",
filter_technician: "Techniker",
filter_sla: "SLA",
resetFilters: "Filter zurücksetzen",

mt_table_id: "Aufgaben-ID",
mt_table_title: "Aufgabentitel",
mt_table_org: "Organisation",
mt_table_property: "Immobilie",
mt_table_asset: "Anlage",
mt_table_technician: "Techniker",
mt_table_dueDate: "Fälligkeitsdatum",
mt_table_priority: "Priorität",
mt_table_status: "Status",
mt_table_sla: "SLA",
mt_tab_overview: "Übersicht",
mt_tab_detail: "Details",
mt_tab_upcoming: "Bevorstehende Aufgaben",
mt_tab_overdue: "Überfällige Aufgaben",
mt_tab_calendar: "Kalender",
mt_tab_preventive: "Präventivplan",
mt_tab_assetMaintenance: "Anlagenwartung",
mt_tab_propertyMaintenance: "Objektwartung",

label_mtId: "Wartungs-ID",
label_asset: "Anlage",
label_property: "Objekt",

modal_delete_title: "Wartungsaufgabe löschen",
modal_delete_description: "Möchten Sie wirklich löschen:",
modal_delete_confirm: "Ja, löschen",

mt_overview_title: "Wartungsübersicht",
mt_overview_desc: "Allgemeine Zusammenfassung und wichtige Informationen zu dieser Wartungsaufgabe.",


mt_tab_overview: "Übersicht",
mt_tab_detail: "Details",
mt_tab_upcomingTasks: "Bevorstehende Aufgaben",
mt_tab_overdueTasks: "Überfällige Aufgaben",
mt_tab_calendar: "Kalender",
mt_tab_preventive: "Wartungsplan",
mt_tab_assetMaintenance: "Asset-Wartung",
mt_tab_propertyMaintenance: "Objekt-Wartung",
mt_tab_upcomingTasks: "Bevorstehende Aufgaben",
mt_tab_overdueTasks: "Überfällige Aufgaben",
mt_tab_calendar: "Kalender",
mt_tab_preventive: "Wartungsplan",
mt_tab_assetMaintenance: "Anlagenwartung",
mt_tab_propertyMaintenance: "Objektwartung",

fromSchedule: "Aus Plan",

exportList: "Liste exportieren",
sortBySoonest: "Sortieren nach: Nächste Fälligkeit",

filter_timeRange: "Zeitraum",
filter_organization: "Organisation",
filter_property: "Objekt",
filter_assetCategory: "Anlagenkategorie",
filter_priority: "Priorität",
filter_status: "Status",

mt_table_title: "Aufgabenname",
mt_table_asset: "Anlage / Bereich",
mt_table_property: "Objekt",
mt_table_technician: "Zugewiesen an",
mt_table_dueDate: "Geplantes Datum",
mt_table_priority: "Priorität",
mt_table_status: "Status",

modal_delete_title: "Aufgabe löschen?",
modal_delete_desc:
  "Sind Sie sicher, dass Sie diese Wartungsaufgabe löschen möchten?",
mt_status_overdue: "Überfällig",
mt_label_schedule: "ZEITPLAN",
mt_label_description: "BESCHREIBUNG",
mt_label_checklistPreview: "CHECKLISTE (Vorschau)",

mt_action_openDetails: "Wartungsdetails öffnen",
mt_action_viewHistory: "Verlauf anzeigen",
mt_action_editTask: "Aufgabe bearbeiten",
mt_tab_overdueTasks: "Überfällige Aufgaben",
mt_overdue_subtitle: "Alle Wartungsaufgaben nach dem geplanten Datum.",
mt_overdue_kpi_critical: "Kritische überfällige Aufgaben",
mt_overdue_kpi_criticalDesc: "Mehr als 10 Tage überfällig",
mt_overdue_kpi_high: "Hochpriorisierte Überfällige",
mt_overdue_kpi_highDesc: "3–10 Tage überfällig",
mt_overdue_kpi_medium: "Mittlere Priorität",
mt_overdue_kpi_mediumDesc: "1–3 Tage überfällig",
mt_overdue_kpi_unassigned: "Nicht zugewiesene Überfällige",
mt_overdue_kpi_unassignedDesc: "Noch keinem Techniker zugewiesen",

backToDashboard: "Zurück zum Dashboard",
exportOverdueList: "Überfällige Liste exportieren",
assignTechnicians: "Techniker zuweisen",

mt_overdue_days: "Überfällige Tage",
mt_overdue_sla: "SLA-Status",
daysOverdue: "Tage überfällig",
unassigned: "Nicht zugewiesen",


  mt_calendar_monthView: "Monatsansicht",
  mt_calendar_weekView: "Wochenansicht",
  mt_calendar_dayView: "Tagesansicht",

  mt_calendar_month: "Monat",
  mt_calendar_week: "Woche",
  mt_calendar_day: "Tag",

  createMaintenanceSchedule: "Wartungsplan erstellen",
  createMaintenanceTask: "Wartungsaufgabe erstellen",

  mt_calendar_noTasks: "Keine Aufgaben geplant",
  mt_calendar_selectTask: "Wählen Sie eine Aufgabe aus, um Details anzuzeigen",
mt_calendar_exampleDesc: "Geplante vorbeugende Wartungsaufgabe für dieses Datum.",

  openTaskDetail: "Aufgabendetails öffnen",
  reschedule: "Neu planen",
  reassignTask: "Aufgabe neu zuweisen",
  deleteTask: "Aufgabe löschen",

  priority: "Priorität",
  category: "Kategorie",
  quickFilters: "Schnellfilter",
  resetFilters: "Filter zurücksetzen",

mt_pm_title: "Wartungspläne (vorbeugend)",
mt_pm_subtitle: "Alle Wartungspläne organisationsübergreifend verwalten.",

mt_pm_search: "Pläne suchen...",
mt_pm_import: "Pläne importieren",
mt_pm_create: "Plan erstellen",

mt_pm_filter_org: "Organisation",
mt_pm_filter_property: "Immobilie",
mt_pm_filter_assetCategory: "Anlagenkategorie",
mt_pm_filter_frequency: "Frequenz",
mt_pm_filter_status: "Status",
mt_pm_filter_dateRange: "Datumsbereich",
mt_pm_resetFilters: "Filter zurücksetzen",

mt_pm_table_name: "Planname",
mt_pm_table_org: "Organisation",
mt_pm_table_property: "Immobilie",
mt_pm_table_asset: "Anlage",
mt_pm_table_frequency: "Frequenz",
mt_pm_table_due: "Nächster Termin",
mt_pm_table_assigned: "Zugewiesen",
mt_pm_table_status: "Status",
mt_pm_overdue: "Überfällig",

mt_pm_selected: "Pläne ausgewählt",
mt_pm_pause: "Pausieren",
mt_pm_resume: "Fortsetzen",
mt_pm_assign: "Techniker zuweisen",
mt_pm_delete: "Löschen",

asset_title: "Asset-Wartungsübersicht",
  asset_subtitle: "Wartungsstatus, Zeitpläne, Leistung und Verlauf für dieses Asset anzeigen.",

  asset_btn_edit: "Asset bearbeiten",
  asset_btn_addTask: "Wartungsaufgabe hinzufügen",
  asset_btn_assignSchedule: "Zeitplan zuweisen",

  asset_linkedSchedules: "Verknüpfte Zeitpläne",
  asset_noSchedules: "Diesem Asset sind keine Wartungspläne zugewiesen.",
  asset_assignNow: "Zeitplan zuweisen",

  asset_upcomingTasks: "Bevorstehende Aufgaben",
  asset_overdue_alert: "Aufgaben sind überfällig. Sofortige Aufmerksamkeit erforderlich.",

  asset_history: "Wartungsverlauf",
  asset_viewFullHistory: "Gesamten Verlauf anzeigen",

  asset_analytics: "Leistungs- & Gesundheitsanalyse",

  asset_documents: "Zugehörige Dokumente",
  asset_uploadDocument: "Dokument hochladen",

  asset_quickActions: "Schnellaktionen",
  asset_markUnderRepair: "Als in Reparatur markieren",
  asset_export: "Asset-Bericht exportieren",

  asset_metadata: "Asset-Metadaten",
  asset_alerts: "Warnungen & Hinweise",

  asset_notes: "Notizen",
  asset_addNote: "Notiz hinzufügen",

asset_id: "ID",
  asset_status_active: "Aktiv",
  asset_model: "Modell",
  asset_serial: "Seriennummer",
  asset_manufacturer: "Hersteller",
  asset_installDate: "Installationsdatum",
  asset_warrantyExpiry: "Garantieablauf",
  asset_changeImage: "Bild ändern",

  asset_linkedSchedules: "Verknüpfte Wartungspläne",
  asset_noSchedules: "Für dieses Asset sind keine vorbeugenden Wartungspläne zugewiesen.",
  asset_assignNow: "Plan zuweisen",

  asset_upcomingTasks: "Bevorstehende Aufgaben",
  asset_overdue_alert: "Aufgaben sind überfällig. Sofortige Aufmerksamkeit erforderlich.",
  asset_taskId: "Aufgaben-ID",
  asset_scheduledDate: "Geplanter Termin",
  asset_assignedTo: "Zugewiesen an",
  asset_priority: "Priorität",
  asset_status: "Status",
  asset_status_overdue: "Überfällig",
  asset_status_upcoming: "Bevorstehend",
  asset_actions: "Aktionen",
  asset_openTask: "Aufgabe öffnen",

  asset_history: "Wartungshistorie",
  asset_history_item1: "Luftfilter ersetzt und Spulen gereinigt.",
  asset_history_item2: "Nachweis hinzugefügt: Servicebericht hochgeladen.",
  asset_history_item3: "Vierteljährliche Inspektion abgeschlossen.",
  asset_by: "von",
  asset_viewTaskDetails: "Aufgabendetails anzeigen",
  asset_viewFullHistory: "Gesamte Historie anzeigen",

  asset_analytics: "Leistungs- & Zustandsanalyse",
  asset_avgTime: "Durchschnittliche Bearbeitungszeit",
  asset_totalTasks: "Abgeschlossene Aufgaben insgesamt",
  asset_overdueTasks: "Überfällige Aufgaben",
  asset_conditionRating: "Zustandsbewertung",
  asset_chart_activity: "Liniendiagramm: Wartungsaktivität",
  asset_chart_failures: "Balkendiagramm: Komponentenfehler",

  asset_documents: "Zugehörige Dokumente",
  asset_uploadDocument: "Dokument hochladen",
  asset_uploadedBy: "Hochgeladen von",
  asset_on: "am",

  asset_quickActions: "Schnellaktionen",
  asset_markUnderRepair: "Als in Reparatur markieren",
  asset_export: "Asset-Bericht exportieren",

  asset_metadata: "Asset-Metadaten",
  asset_createdOn: "Erstellt am",
  asset_createdBy: "Erstellt von",
  asset_lastUpdated: "Zuletzt aktualisiert",
  asset_organization: "Organisation",
  asset_property: "Liegenschaft",
  asset_location: "Standort",

  asset_alerts: "Warnungen & Hinweise",
  asset_alert_warranty: "Garantie läuft bald ab.",
  asset_alert_overdue: "Dieses Asset hat überfällige Wartungsaufgaben.",

  asset_notes: "Notizen",
  asset_addNote: "Notiz hinzufügen",
  asset_note_dummy: "Während der Inspektion wurde ein Geräusch festgestellt; Überprüfung des Lüfterriemens empfohlen.",

mt_property_title: "Übersicht der Immobilienwartung",
mt_property_subtitle: "Sehen Sie alle Wartungsaktivitäten, Pläne, Aufgaben und den Anlagenzustand dieser Immobilie.",

mt_property_org: "Organisation",

mt_property_totalAssets: "Gesamtanlagen",
mt_property_activeSchedules: "Aktive Wartungspläne",
mt_property_openTasks: "Offene Aufgaben",
mt_property_overdueTasks: "Überfällige Aufgaben",

mt_property_activeSchedules: "Aktive Wartungspläne",
mt_property_noSchedules: "Für diese Immobilie wurden keine Wartungspläne zugewiesen.",
mt_property_assignSchedule: "Plan zuweisen",

mt_property_upcomingTasks: "Bevorstehende Aufgaben",
mt_property_overdueAlert: "Diese Immobilie hat überfällige Wartungsaufgaben, die sofortige Aufmerksamkeit erfordern.",
mt_property_taskId: "Aufgaben-ID",
mt_property_scheduledDate: "Geplanter Termin",
mt_property_technician: "Techniker",
mt_property_priority: "Priorität",
mt_property_location: "Standort",
mt_property_status: "Status",
mt_property_overdue: "Überfällig",
mt_property_inProgress: "In Bearbeitung",
mt_property_scheduled: "Geplant",

mt_property_history: "Wartungshistorie",
mt_property_history_item1: "Filter für HVAC-Gerät ersetzt.",
mt_property_history_item2: "Feuerlöscherinspektion abgeschlossen.",
mt_property_viewFullHistory: "Gesamte Historie anzeigen",

mt_property_analytics: "Wartungsanalytik der Immobilie",
mt_property_completionRate: "Abschlussrate der Wartungspläne",
mt_property_workload: "Wartungslast (letzte 6 Monate)",

mt_property_risk: "Risikokennzahlen",
mt_property_highRisk: "Hochrisiko-Anlagen",
mt_property_expiringWarranty: "Auslaufende Garantie",
mt_property_agingEquipment: "Alternde Geräte (>10 Jahre)",

mt_property_compliance: "Compliance-Zusammenfassung",
mt_property_fireSafety: "Brandschutzzertifikat",
mt_property_elevatorInspection: "Aufzugsinspektion",
mt_property_electricalReport: "Elektrischer Sicherheitsbericht",
mt_property_valid: "Gültig",
mt_property_expiresSoon: "Läuft in 15 Tagen ab",
mt_property_expired: "Abgelaufen",
mt_property_uploadDoc: "Dokument hochladen",
mt_property_openCompliance: "Compliance-Modul öffnen",


mt_detail_title: "Wartungsdetails",
  mt_detail_subtitle: "Alle Informationen zu dieser Wartungsaufgabe anzeigen.",
  mt_detail_id: "Aufgaben-ID",
  mt_detail_lastUpdated: "Zuletzt aktualisiert",

  mt_detail_assignTech: "Techniker zuweisen",
  mt_detail_addEvidence: "Nachweis hinzufügen",
  mt_detail_markCompleted: "Als abgeschlossen markieren",

  mt_detail_schedule: "Wartungsplan",
  mt_detail_asset: "Anlage",
  mt_detail_property: "Liegenschaft",
  mt_detail_technician: "Techniker",
  mt_detail_dueDate: "Fälligkeitsdatum",
  mt_detail_startedAt: "Gestartet am",

  mt_detail_openAsset: "Anlage öffnen",

mt_overview_title: "Wartungsübersicht",
  mt_overview_subtitle: "Kurze Zusammenfassung dieser Wartungsaufgabe, des Status und des Fortschritts.",
  mt_overview_id: "Aufgaben-ID",
  mt_overview_lastUpdated: "Zuletzt aktualisiert",

  mt_overview_status: "Status",
  mt_overview_priority: "Priorität",
  mt_overview_category: "Kategorie",

  mt_overview_progress: "Fortschritt",
  mt_overview_technician: "Zugewiesener Techniker",
  mt_overview_dueDate: "Fälligkeitsdatum",

  mt_overview_property: "Liegenschaft",
  mt_overview_asset: "Anlage",

ms_backToSchedules: "Zurück zu den Zeitplänen",

ms_title: "Wartungsplan erstellen",
ms_subtitle: "Richten Sie präventive Wartung für Anlagen, Immobilien und Organisationen ein.",

ms_scheduleInfo: "Planinformationen",
ms_scheduleName: "Planname*",
ms_scheduleName_placeholder: "Beispiel: Monatliche HVAC-Filterreinigung",
ms_description: "Beschreibung",
ms_description_placeholder: "Beschreiben Sie den Zweck dieses Wartungsplans.",
ms_category: "Kategorie",
ms_priority: "Priorität",

ms_orgProperty: "Organisation & Immobilie",
ms_org: "Organisation*",
ms_selectOrg: "Organisation auswählen",
ms_property: "Immobilie*",
ms_selectProperty: "Immobilie auswählen",
ms_area: "Bereich / Etage / Einheit",
ms_allFloors: "Alle Etagen",
ms_locationNotes: "Standortnotizen",
ms_locationNotes_placeholder: "Genaue Räumlichkeit oder Bereich angeben.",

ms_assetSelection: "Anlagenauswahl*",
ms_selectSpecificAsset: "Spezifische Anlage wählen",
ms_applyToCategory: "Plan auf Anlagenkategorie anwenden",
ms_asset: "Anlage",
ms_assetDetails: "Anlagendetails",
ms_model: "Modell",
ms_serial: "Seriennummer",
ms_lastMaint: "Letzte Wartung",
ms_warranty: "Garantie",

ms_frequencyTiming: "Häufigkeit & Zeitplanung",
ms_frequency: "Häufigkeit*",
ms_repeatOn: "Wiederholen am",
ms_startDate: "Startdatum*",
ms_preferredTime: "Bevorzugte Zeit",
ms_endDate: "Enddatum",
ms_noEndDate: "Kein Enddatum",
ms_endOn: "Endet an einem bestimmten Datum",

ms_assignment: "Zuweisung",
ms_assignedTo: "Zugewiesen an",
ms_autoAssign: "Aufgaben automatisch verfügbarem Techniker zuweisen",
ms_assignExpertise: "Nach Anlagenexpertise zuweisen",

ms_additional: "Zusätzliche Einstellungen",
ms_checklistTemplate: "Checklisten-Vorlage",
ms_autoReminder: "Automatische Erinnerung 24 Stunden vor Fälligkeit.",
ms_autoTenantNotice: "Automatische Mieterbenachrichtigung (falls relevant).",

ms_cancel: "Abbrechen",
ms_save: "Plan speichern",



ms_edit_back: "Zurück zu den Zeitplänen",
ms_edit_title: "Wartungsplan bearbeiten",
ms_edit_subtitle: "Bearbeiten Sie die Einstellungen des Plans und prüfen Sie Auswirkungen auf zukünftige Aufgaben.",
ms_edit_scheduleId: "Plan-ID",
ms_edit_viewDetails: "Plan Details anzeigen",

ms_edit_scheduleInfo: "Planinformationen",
ms_edit_name: "Planname",
ms_edit_description: "Beschreibung",
ms_edit_category: "Kategorie",
ms_edit_category_note: "Das Ändern der Kategorie kann Vorlagenempfehlungen beeinflussen.",
ms_edit_priority: "Priorität",

ms_edit_freqTiming: "Häufigkeit & Zeitplanung",
ms_edit_freqWarning: "Eine Änderung der Häufigkeit erzeugt ein neues Aufgabenmuster ab dem nächsten Zyklus.",
ms_edit_frequency: "Häufigkeit",
ms_edit_onThe: "Am",
ms_edit_startDate: "Startdatum",
ms_edit_prefTime: "Bevorzugte Zeit",

ms_edit_impactPreview: "Änderungs-Auswirkungsübersicht",
ms_edit_futureTasks: "Betroffene zukünftige Aufgaben",
ms_edit_tasks: "Aufgaben",

ms_edit_freqImpactTitle: "Auswirkung durch Häufigkeitsänderung: ",
ms_edit_freqImpact: "Neue Aufgaben werden künftig am 15. jedes Monats erstellt.",
ms_edit_assignImpactTitle: "Auswirkung auf Zuweisung: ",
ms_edit_assignImpact: "Keine Änderung. Alle zukünftigen Aufgaben bleiben dem 'HVAC-Team' zugewiesen.",

ms_edit_overdueNotice: "Dieser Plan hat 2 überfällige Aufgaben. Änderungen können deren Berichte beeinflussen.",
ms_edit_applyNewOnly: "Änderungen nur auf neue Aufgaben anwenden (ab nächstem Zyklus)",
ms_edit_applyAllFuture: "Änderungen auf alle zukünftigen (nicht gestarteten) Aufgaben anwenden",

ms_edit_versionHistory: "Versionsverlauf",
ms_edit_madeChanges: "hat Änderungen vorgenommen",
ms_edit_created: "hat den Plan erstellt",
ms_edit_historyExample1: "Priorität von Mittel auf Hoch aktualisiert.",
ms_edit_historyExample2: "Ursprüngliche Planerstellung.",

ms_edit_cancel: "Abbrechen",
ms_edit_save: "Änderungen speichern",

maint_assign_title: "Wartung zuweisen",
maint_assign_subtitle: "Wählen Sie eine Rolle und einen Benutzer aus, um diese Wartungsaufgabe zuzuweisen.",
maint_assign_role: "Rolle zuweisen",
maint_assign_due: "Voraussichtliches Abschlussdatum",
maint_assign_filter_note: "Angezeigte Benutzer basieren auf Objektzugehörigkeiten und Rollenberechtigungen.",
maint_assign_users: "Verfügbare Benutzer",
maint_assign_property: "Zugewiesen zu",
maint_assign_tasks: "Aufgaben heute",
maint_assign_open: "Offene Tickets",
maint_assign_note: "Zuweisungsnotiz (optional)",
maint_assign_note_ph: "Fügen Sie eine Notiz für den zuständigen Mitarbeiter hinzu...",
maint_assign_button: "Aufgabe zuweisen",



mt_create_title: "Wartungsaufgabe erstellen",
mt_create_subtitle: "Füllen Sie die Details aus, um eine neue Wartungsaufgabe zu erstellen.",
mt_create_name: "Aufgabenname",
mt_create_name_ph: "Aufgabenname eingeben",
mt_create_category: "Kategorie",
mt_create_priority: "Priorität",
mt_create_dueDate: "Fälligkeitsdatum",
mt_create_description: "Beschreibung",
mt_create_description_ph: "Aufgabendetails beschreiben...",
mt_create_button: "Aufgabe erstellen",

mt_edit_title: "Wartungsaufgabe bearbeiten",
mt_edit_subtitle: "Aktualisieren Sie die Felder unten und speichern Sie die Änderungen.",
mt_edit_button: "Änderungen speichern",

priority_low: "Niedrig",
priority_medium: "Mittel",
priority_high: "Hoch",
priority_critical: "Kritisch",

select: "Auswählen",


prop_backToList: "Zurück zu Immobilien",
prop_edit_title: "Immobilie bearbeiten",
prop_edit_subtitle: "Aktualisieren Sie Informationen, Struktur und zugewiesenes Personal.",

prop_info: "Immobilieninformationen",
prop_info_sub: "Aktualisieren Sie die wichtigsten Details der Immobilie.",

prop_name: "Immobilienname",
prop_type: "Immobilientyp",
prop_street: "Adresse",
prop_city: "Region / Stadt",
prop_zip: "Postleitzahl",
prop_lat: "GPS-Breitengrad",
prop_long: "GPS-Längengrad",
prop_size: "Grundstücksgröße",
prop_desc: "Beschreibung / Notizen",

prop_structure: "Gebäudestruktur",
prop_floors: "Anzahl der Stockwerke",
prop_units: "Gesamtanzahl Einheiten",
prop_sections: "Gebäudebereiche (Optional)",
prop_utilities: "Technikräume / Nebenflächen (Optional)",

prop_personnel: "Personal zuweisen",
prop_manager: "Facility Manager",
prop_caretakers: "Hausmeister",
prop_providers: "Dienstleister",
prop_security: "Sicherheits- / Zugangsteam",
prop_notes: "Zusätzliche Notizen",

prop_save_changes: "Änderungen speichern",

users_module: "Benutzer",
users_list: "Benutzer",
users_create: "Neuen Benutzer hinzufügen",

users: "Benutzer",
users_sub: "Verwalten Sie alle Benutzer in allen Organisationen.",
users_export: "Benutzer exportieren",
users_add: "Neuen Benutzer hinzufügen",

users_user: "Benutzer",
users_role: "Rolle",
users_org: "Organisation",
users_properties: "Objekte",
users_phone: "Telefon",
users_status: "Status",
users_last_activity: "Letzte Aktivität",
users_actions: "Aktionen",
back_to_users: "Zurück zu Benutzern",

user_create_title: "Neuen Benutzer erstellen",
user_create_subtitle: "Fügen Sie einen neuen Benutzer zum Hauswart-System hinzu.",

user_info_title: "Benutzerinformationen",
user_info_desc: "Grundlegende Benutzerdaten eingeben und Rolle zuweisen.",

user_full_name: "Vollständiger Name",
user_email: "E-Mail-Adresse",
user_phone: "Telefonnummer",
user_photo: "Profilfoto (optional)",
user_password: "Passwort",
user_confirm_password: "Passwort bestätigen",

user_role_title: "Rollenzuweisung",
user_role_desc: "Rollen bestimmen Zugriffsrechte und Sichtbarkeit.",
user_role: "Rolle",
user_customize_permissions: "Berechtigungen anpassen",
user_permissions_for: "Berechtigungen für",
user_permissions_desc: "Voller Zugriff auf Tickets, Objekte, Wartungspläne und Benutzer innerhalb der zugewiesenen Organisation.",

user_access_title: "Zugriffszuteilung",
user_access_desc: "Zugewiesene Objekte begrenzen Aufgaben und Tickets.",
user_assign_org: "Organisation zuweisen",
user_assign_properties: "Objekte zuweisen",

user_status_title: "Status & Aktivierung",
user_status: "Status",
user_send_activation: "Aktivierungs-E-Mail an Benutzer senden",

unsaved_changes: "Ungespeicherte Änderungen",

action_cancel: "Abbrechen",
action_create_user: "Benutzer erstellen",


user_edit_title: "Benutzer bearbeiten",
user_edit_subtitle: "Benutzerdaten, Rollen und Zugriffsrechte aktualisieren.",

action_save_changes: "Änderungen speichern",
// USER DETAIL TABS (DE)
user_tab_overview: "Übersicht",
user_tab_performance: "Leistungsübersicht",
user_tab_attendance: "Anwesenheit",
user_tab_dailyAttendance: "Tägliches Anwesenheitsprotokoll",
user_tab_offboarding: "Offboarding & Zugriffsrechte",

// USER ACTIONS (DE)
action_backToUsers: "Zurück zu den Benutzern",
action_editUser: "Benutzer bearbeiten",
action_assignRole: "Rolle zuweisen",
action_moreActions: "Weitere Aktionen",



user_delete_title: "Benutzer löschen",
user_delete_subtitle: "Diese Aktion ist dauerhaft und kann nicht rückgängig gemacht werden.",

user_delete_warning_title:
  "Durch das Löschen dieses Benutzers werden alle Zugriffe und aktiven Zuweisungen dauerhaft entfernt.",
user_delete_warning_desc:
  "Historische Daten bleiben aus Compliance-Gründen erhalten. Vorsichtig fortfahren.",

user_delete_impact_title: "Vor dem Löschen dieses Benutzers",

user_open_tickets: "Offene Tickets",
user_active_maintenance: "Aktive Wartungen",
user_recurring_tasks: "Wiederkehrende Aufgaben",
user_upcoming_tasks: "Geplante Aufgaben",
user_live_chats: "Aktive Chats",

user_reassign_notice:
  "Diese Elemente müssen vor dem Löschen neu zugewiesen oder abgeschlossen werden.",

user_delete_confirm:
  "Ich verstehe, dass diese Aktion dauerhaft ist und nicht rückgängig gemacht werden kann.",

user_delete_notes_title: "Optionale Admin-Notizen",
user_delete_notes_desc:
  "Fügen Sie eine interne Notiz hinzu, warum dieser Benutzer gelöscht wird. Diese wird in den Audit-Logs gespeichert.",
user_delete_notes_placeholder:
  "z. B. Benutzer hat das Unternehmen am TT.MM.JJJJ verlassen.",

user_delete_irreversible: "Diese Aktion ist unwiderruflich.",

action_delete_user: "Benutzer dauerhaft löschen",
action_backToUserProfile: "Zurück zum Benutzerprofil",

user_orgs: "Organisation(en)",
user_properties: "Zugewiesene Objekte",
user_last_active: "Zuletzt aktiv",
user_created: "Erstellt am",
user_id: "Benutzer-ID",
role_apply_title: "Rollen- und Berechtigungsänderungen anwenden?",
role_apply_subtitle:
  "Diese Änderungen wirken sich sofort auf den Benutzerzugang aus und werden im Audit-System protokolliert.",

role_apply_summary:
  "Sie sind dabei, die folgenden Änderungen auf mehrere Benutzerrollen anzuwenden.",

permission_added: "Berechtigung hinzugefügt",
permission_removed: "Berechtigung entfernt",

role_facility_manager: "Rolle: Facility Manager",
role_technician: "Rolle: Techniker",
role_auditor: "Rolle: Prüfer",

action_confirm_apply: "Bestätigen & Anwenden",
user_overview_basic: "Grundinformationen",
user_overview_access: "Organisations- & Objektzugriff",
user_quick_actions: "Schnellaktionen",
user_recent_activity: "Letzte Aktivitäten",
user_upcoming_assignments: "Bevorstehende Aufgaben",

user_joined_date: "Beitrittsdatum",
user_last_login: "Letzte Anmeldung",
user_mfa_enabled: "MFA aktiviert",
user_assigned_properties: "Zugewiesene Objekte",

action_edit_information: "Informationen bearbeiten",
action_edit_access: "Zugriff bearbeiten",
action_view_full_log: "Vollständiges Protokoll anzeigen",
action_reset_password: "Passwort zurücksetzen",
action_deactivate_user: "Benutzer deaktivieren",
action_view_audit_log: "Audit-Protokoll anzeigen",
action_download_report: "Benutzerbericht herunterladen",


perf_total_tickets: "Gesamt Tickets",
perf_sla_adherence: "SLA Einhaltung",
perf_avg_resolution: "Ø Lösungszeit",
perf_overdue_tasks: "Überfällige Aufgaben",
perf_maintenance: "Wartung",
perf_rework_rate: "Nacharbeitsquote",
perf_graphs: "Leistungsdiagramme",
perf_tasks_completed: "Abgeschlossene Aufgaben",
perf_task_distribution: "Aufgabenverteilung nach Kategorie",
perf_ticket_performance: "Ticket-Leistung",
perf_task_strengths: "Stärken nach Kategorie",
perf_attendance_summary: "Anwesenheitsübersicht",
perf_productivity: "Produktivitätswert",
perf_excellent: "Ausgezeichnet",
perf_sla_compliance: "SLA Konformität",
perf_avg_completion: "Ø Abschlusszeit",
perf_total_orders: "Gesamtaufträge",
perf_attendance: "Anwesenheit",

action_download_performance: "Leistungsbericht herunterladen",
action_filter: "Filter",
action_compare_user: "Mit anderem Benutzer vergleichen",


attendance_overview: "Anwesenheitsübersicht",
attendance_subtitle: "Detaillierte Anwesenheitsinformationen für diesen Benutzer.",

att_working_days: "Arbeitstage",
att_present_days: "Anwesende Tage",
att_absent_days: "Fehltage",
att_late_arrivals: "Verspätete Ankünfte",
att_early_clockouts: "Frühe Abmeldungen",

filter_date_range: "Datumsbereich: Dieser Monat",
filter_organization: "Organisation",
filter_property: "Objekt",
filter_status: "Status: Alle",

att_monthly_heatmap: "Monatliche Anwesenheitsübersicht",
att_statistics: "Anwesenheitsstatistiken",
att_avg_daily_hours: "Durchschn. tägliche Stunden",
att_punctuality_score: "Durchschn. Pünktlichkeitswert",
att_avg_breaks: "Durchschn. Pausen",
att_daily_hours_trend: "Trend der täglichen Arbeitsstunden (letzte 30 Tage)",
att_late_vs_early: "Verspätungen vs. frühe Abgänge",

att_leave_tracker: "Urlaubs- & Ausnahmeübersicht",
att_recent_logs: "Letzte Ein- & Ausstempelungen",
att_compliance: "Compliance-Übersicht",

att_avg_weekly_hours: "Durchschn. Wochenstunden",
att_overtime: "Überstunden",
att_undertime: "Unterstunden",
att_missing_logs: "Fehlende Stempelungen",
att_frequent_late_warning: "Häufige Verspätungen festgestellt.",

quick_actions: "Schnellaktionen",

action_export_attendance: "Anwesenheit exportieren",
action_view_daily_logs: "Tagesprotokolle anzeigen",
action_request_leave: "Urlaub beantragen",
action_view_full_history: "Vollständigen Verlauf anzeigen",
action_reset_filters: "Filter zurücksetzen",
action_approve_leave: "Urlaubsantrag genehmigen",
action_manual_entry: "Manuellen Eintrag hinzufügen",
action_send_reminder: "Erinnerung zum Einstempeln senden",

clock_in: "Einstempeln",
clock_out: "Ausstempeln",
compliant: "Konform",

att_daily_logs: "Tägliche Anwesenheitsprotokolle",
att_daily_logs_sub: "Ein- und Ausstempelungen sowie Schichtdaten für diesen Benutzer.",

att_missing_logs: "Fehlende Protokolle",

table_date: "Datum",
table_day: "Tag",
table_total_hours: "Gesamtstunden",
table_status: "Status",
table_location: "Standort",
table_actions: "Aktionen",

att_status_present: "Anwesend",
att_status_late: "Verspätet",
att_status_missing: "Protokoll fehlt",
att_status_absent: "Abwesend",
att_status_early: "Früher Feierabend",

action_export_logs: "Protokolle exportieren",
action_filter: "Filter",
action_view_map: "Karte ansehen",
action_previous: "Zurück",
action_next: "Weiter",


offboarding_title: "Offboarding & Zugriffsentfernung",
offboarding_subtitle: "Benutzer deaktivieren, Zugriff entziehen und Verantwortlichkeiten neu zuweisen.",

action_deactivate_user: "Benutzer deaktivieren",
action_archive_user: "Benutzer archivieren",
action_delete_user: "Benutzer dauerhaft löschen",

off_last_active: "Zuletzt aktiv",
off_account_created: "Konto erstellt",
off_created_by: "Erstellt von",

off_choose_type: "Deaktivierungstyp auswählen",

off_temp_suspension: "Temporäre Sperrung",
off_temp_suspension_desc: "Benutzer kann sich nicht anmelden; Konto bleibt erhalten.",

off_full_deactivation: "Vollständige Deaktivierung",
off_full_deactivation_desc: "Entfernt den Benutzer aus aktiven Listen; Aufgaben müssen neu zugewiesen werden.",

off_permanent_deletion: "Dauerhafte Löschung",
off_permanent_deletion_desc: "Benutzer und personenbezogene Daten werden dauerhaft entfernt.",
off_irreversible_warning: "Diese Aktion ist nicht rückgängig zu machen und erfordert eine Bestätigung.",

off_reassign_tasks: "Tickets & Aufgaben neu zuweisen",
off_reassign_warning: "Diese Elemente müssen neu zugewiesen oder geschlossen werden.",

table_task_id: "Aufgaben-ID",
table_task_type: "Typ",
table_property: "Objekt",
table_due_date: "Fälligkeitsdatum",
table_reassign_to: "Neu zuweisen an",

off_property_cleanup: "Bereinigung der Objektzuweisungen",
off_unassign_all: "Von allen Objekten entfernen",

off_notes_docs: "Notizen & Dokumentation",
off_reason_label: "Grund für Offboarding",
off_upload_docs: "Unterstützende Dokumente hochladen",
off_hr_comments: "HR-Kommentare",

off_access_removal: "Zugriffsentfernungs-Schritte",
off_disable_login: "Anmeldung deaktivieren",
off_terminate_sessions: "Aktive Sitzungen beenden",
off_revoke_tokens: "API-Tokens widerrufen",
off_remove_roles: "Rollen entfernen",
off_remove_properties: "Objektzuweisungen entfernen",
off_remove_org_access: "Organisationszugriff entfernen",
off_stop_notifications: "Benachrichtigungen stoppen",

off_data_retention: "Datenaufbewahrungsmodus",
off_retain_all: "Alle Daten behalten",
off_retain_all_desc: "Alle benutzergenerierten Daten bleiben erhalten. (Empfohlen)",

off_anonymize_pii: "Protokolle behalten, PII anonymisieren",
off_anonymize_pii_desc: "Personenbezogene Daten werden entfernt.",

off_full_anonymization: "Vollständige Anonymisierung",
off_full_anonymization_desc: "Alle Benutzerdaten werden DSGVO-konform anonymisiert.",

off_summary: "Offboarding-Zusammenfassung",
off_deactivation_type: "Deaktivierungstyp",
off_tasks_reassigned: "Aufgaben neu zugewiesen",
off_properties_reassigned: "Objekte neu zugewiesen",
off_access_steps: "Zugriffsschritte",
off_data_retention_label: "Datenaufbewahrung",

action_review_confirm: "Offboarding prüfen & bestätigen",

/* =========================
   OFFBOARDING – DE
========================= */

offboarding_title: "Offboarding & Zugriffsentzug",
offboarding_subtitle: "Benutzer deaktivieren, Zugriffe entziehen und Verantwortlichkeiten neu zuweisen.",

action_deactivate_user: "Benutzer deaktivieren",
action_archive_user: "Benutzer archivieren",
action_delete_user: "Benutzer dauerhaft löschen",
action_review_confirm: "Offboarding prüfen & bestätigen",

off_last_active: "Zuletzt aktiv",
off_account_created: "Konto erstellt am",
off_created_by: "Erstellt von",

off_choose_type: "Deaktivierungstyp auswählen",

off_temp_suspension: "Temporäre Sperrung",
off_temp_suspension_desc: "Benutzer kann sich nicht anmelden; Konto bleibt erhalten.",

off_full_deactivation: "Vollständige Deaktivierung",
off_full_deactivation_desc: "Entfernt Benutzer aus aktiven Listen; Aufgaben müssen neu zugewiesen werden.",

off_permanent_deletion: "Dauerhafte Löschung",
off_permanent_deletion_desc: "Benutzer und personenbezogene Daten werden dauerhaft entfernt.",
off_irreversible_warning: "Diese Aktion ist nicht rückgängig zu machen und erfordert eine Bestätigung.",

off_reassign_tasks: "Tickets & Aufgaben neu zuweisen",
off_reassign_warning: "Diese Elemente müssen vor der Löschung neu zugewiesen oder geschlossen werden.",

table_task_id: "Aufgaben-ID",
table_task_type: "Typ",
table_property: "Objekt",
table_due_date: "Fälligkeitsdatum",
table_reassign_to: "Neu zuweisen an",

off_property_cleanup: "Objektzuweisungen bereinigen",
off_unassign_all: "Von allen Objekten entfernen",

off_notes_docs: "Notizen & Dokumentation",
off_reason_label: "Grund für Offboarding",
off_upload_docs: "Unterstützende Dokumente hochladen",
off_hr_comments: "HR-Kommentare (optional)",

off_access_removal: "Schritte zum Zugriffsentzug",
off_disable_login: "Login-Zugriff deaktivieren",
off_terminate_sessions: "Aktive Sitzungen beenden",
off_revoke_tokens: "API-Tokens widerrufen",
off_remove_roles: "Rollenzuweisungen entfernen",
off_remove_properties: "Objektzuweisungen entfernen",
off_remove_org_access: "Organisationszugriff entfernen",
off_stop_notifications: "Benachrichtigungen & Alarme stoppen",

off_data_retention: "Datenaufbewahrung",
off_retain_all: "Alle Daten behalten",
off_retain_all_desc: "Alle benutzergenerierten Daten bleiben erhalten. (Empfohlen)",
off_anonymize_pii: "Logs behalten, personenbezogene Daten anonymisieren",
off_anonymize_pii_desc: "Personenbezogene Daten werden entfernt.",
off_full_anonymization: "Vollständige Anonymisierung",
off_full_anonymization_desc: "Alle Benutzerdaten werden DSGVO-konform anonymisiert.",

off_summary: "Offboarding-Zusammenfassung",
off_deactivation_type: "Deaktivierungstyp",
off_tasks_reassigned: "Neu zugewiesene Aufgaben",
off_properties_reassigned: "Neu zugewiesene Objekte",
off_access_steps: "Zugriffsschritte",
off_data_retention_label: "Datenaufbewahrung",


tenants_module: "Mieter",
tenants: "Mieter",
tenants_subtitle: "Verwalten Sie alle Mieter über Organisationen und Immobilien hinweg.",
add_tenant: "Mieter hinzufügen",
export_list: "Liste exportieren",

tenants_total: "Gesamtmieter",
tenants_active: "Aktive Mieter",
tenants_pending: "Ausstehende Onboardings",
tenants_recent: "Kürzlich hinzugefügt",

tenant_name: "Mietername",
move_in: "Einzug",
last_activity: "Letzte Aktivität",


add_new_tenant: "Neuen Mieter hinzufügen",
add_tenant_subtitle: "Erstellen Sie ein Mieterprofil und weisen Sie eine Einheit zu.",
tenants_list: "Mieterliste",

personal_information: "Persönliche Informationen",
full_name: "Vollständiger Name",
enter_full_name: "Vollständigen Namen eingeben",
email_address: "E-Mail-Adresse",
enter_email: "E-Mail-Adresse eingeben",
date_of_birth: "Geburtsdatum",
phone_number: "Telefonnummer",
enter_phone: "Telefonnummer eingeben",
gender: "Geschlecht",
male: "Männlich",
female: "Weiblich",
other: "Andere",
secondary_phone_optional: "Zweite Telefonnummer (Optional)",
enter_secondary_phone: "Zweite Telefonnummer eingeben",
national_id: "National-ID / Ausweis",
enter_national_id: "National-ID eingeben",
emergency_contact_name: "Notfallkontakt Name",
enter_contact_name: "Kontaktname eingeben",
emergency_contact_phone: "Notfallkontakt Telefonnummer",
enter_contact_phone: "Kontakttelefon eingeben",

tenancy_details: "Mietdetails",
tenant_type: "Mietertyp",
primary: "Hauptmieter",
co_tenant: "Mitmieter",
family_member: "Familienmitglied",
lease_start_date: "Mietbeginn",
lease_end_date: "Mietende",
account_status: "Kontostatus",
active: "Aktiv",
pending: "Ausstehend",
suspended: "Gesperrt",
move_in_date: "Einzugsdatum",
move_out_date_optional: "Auszugsdatum (Optional)",
rent_amount_optional: "Mietbetrag (Optional)",
deposit_amount_optional: "Kaution (Optional)",
enter_amount: "Betrag eingeben",
lease_helper_text: "Diese Felder helfen bei der Nachverfolgung der Mietgeschichte.",

property_assignment: "Objektzuweisung",
optional: "Optional",
select_organization: "Organisation auswählen",
select_property: "Objekt auswählen",
select_unit: "Einheit auswählen",
floor: "Etage",
building: "Gebäude",
block: "Block",
north: "Nord",
unit_type: "Wohnungstyp",
assign_primary_responsible: "Mieter als hauptverantwortlich festlegen",
assign_later_note: "Sie können die Objektzuweisung später im Mieterprofil vornehmen.",

cancel: "Abbrechen",
create_tenant: "Mieter erstellen",


edit_tenant: "Mieter bearbeiten",
edit_tenant_subtitle: "Mieterdaten aktualisieren",
update_tenant: "Mieter aktualisieren",

// ===============================
// TENANT DETAIL
// ===============================
tenantProfile_title: "Mieterprofil",
tenantProfile_subtitle:
  "Mieterinformationen, Dokumente und Verlauf anzeigen und verwalten.",

propertyAssigned: "Zugewiesene Immobilie",
unitNumber: "Wohneinheit",
moveInDate: "Einzugsdatum",
leaseExpiry: "Mietende",

// ===============================
// TENANT TABS
// ===============================
tab_overview: "Übersicht",
tab_tenantDetails: "Mieterdetails",
tab_propertyUnit: "Immobilie & Einheit",
tab_tickets: "Tickets",
tab_maintenance: "Wartungshistorie",
tab_documents: "Dokumente",
tab_communication: "Kommunikationsprotokoll",
tab_notes: "Notizen",
tab_activity: "Aktivitätsprotokoll",

// ===============================
// TENANT DETAIL — HEADER ACTIONS
// ===============================
action_backToTenants: "Zurück zu Mietern",
action_editTenant: "Mieter bearbeiten",
action_moveTenant: "Mieter verschieben",
action_deactivate: "Deaktivieren",
action_delete: "Löschen",

// ===============================
// TENANT DETAIL — META LABELS
// ===============================
propertyAssigned: "Zugewiesene Immobilie",
unitNumber: "Wohneinheit",
moveInDate: "Einzugsdatum",
leaseExpiry: "Mietende",



tenant_tab_overview: "Übersicht",
tenant_tab_leaseDetails: "Mietdetails",
tenant_tab_documents: "Dokumente",
tenant_tab_activityLog: "Aktivitätsprotokoll",

tenant_overview_propertyUnit: "Immobilie & Einheit",
tenant_overview_leaseStatus: "Mietstatus",
tenant_overview_tickets: "Tickets",
tenant_overview_maintenance: "Wartung",

tenant_overview_viewProperty: "Immobilie anzeigen",
tenant_overview_viewLeaseDetails: "Mietdetails anzeigen",
tenant_overview_viewAllTickets: "Alle Tickets anzeigen",
tenant_overview_viewMaintenanceHistory: "Wartungsverlauf anzeigen",

tenant_overview_leaseExpires: "Läuft ab",
tenant_overview_active: "Aktiv",
tenant_overview_requests: "Anfragen",

tenant_info_title: "Mieterinformationen",
tenant_info_fullName: "Vollständiger Name",
tenant_info_email: "E-Mail",
tenant_info_phone: "Telefon",
tenant_info_nationalId: "Nationale ID / CNIC",
tenant_info_dateOfBirth: "Geburtsdatum",
tenant_info_gender: "Geschlecht",
tenant_info_emergencyContact: "Notfallkontakt",
tenant_info_emergencyPhone: "Notfalltelefon",
tenant_info_tenantType: "Mietertyp",
tenant_info_accountStatus: "Kontostatus",
tenant_info_moveInDate: "Einzugsdatum",
tenant_info_edit: "Mieterinformationen bearbeiten",



/* ---------------- TENANT DETAILS ---------------- */

    tenant_personalInformation: "Persönliche Informationen",
    tenancyDetails: "Mietdetails",
    propertyAssignment: "Objektzuweisung",
    documents: "Dokumente",
    accountInformation: "Kontoinformationen",
    adminNotes: "Admin-Notizen",

    /* ---------------- FIELDS ---------------- */

    fullName: "Vollständiger Name",
    email: "E-Mail-Adresse",
    dateOfBirth: "Geburtsdatum",
    phoneNumber: "Telefonnummer",
    secondaryPhone: "Zweitnummer",
    gender: "Geschlecht",
    nationalId: "Nationale ID / CNIC",
    emergencyContactName: "Name des Notfallkontakts",
    emergencyContactNumber: "Notfallkontakt Nummer",

    tenantType: "Mietertyp",
    leaseStartDate: "Mietbeginn",
    leaseEndDate: "Mietende",
    moveInDate: "Einzugsdatum",
    moveOutDate: "Auszugsdatum",
    rentAmount: "Mietbetrag",
    depositAmount: "Kaution",
    currentStatus: "Aktueller Status",
    notSpecified: "Nicht angegeben",

    assignedProperty: "Zugewiesenes Objekt",
    assignedUnit: "Zugewiesene Einheit",
    floorBuilding: "Etage / Gebäude",
    tenancyTypeLabel: "Mietart",

    leaseAgreement: "Mietvertrag",
    nationalIdDoc: "Nationale ID",
    tenantApplication: "Mieterantrag",
    additionalDocuments: "Zusätzliche Dokumente",

    username: "Benutzername",
    lastLoginActivity: "Letzte Anmeldung",
    accountCreatedOn: "Konto erstellt am",
    activeSessions: "Aktive Sitzungen",

    /* ---------------- ACTIONS ---------------- */

    editInformation: "Informationen bearbeiten",
    resetAccountPassword: "Kontopasswort zurücksetzen",
    editTenancyDetails: "Mietdetails bearbeiten",
    viewLeaseAgreement: "Mietvertrag anzeigen",
    assignPropertyUnit: "Objekt / Einheit zuweisen",
    removeAssignment: "Zuweisung entfernen",
    manageAllDocuments: "Alle Dokumente verwalten",
    manageSessions: "Sitzungen verwalten",
    suspendAccount: "Konto sperren",
    deleteAccountPermanently: "Konto dauerhaft löschen",
    viewAllNotes: "Alle Notizen anzeigen",
    addNewNote: "Neue Notiz hinzufügen",

    /* ---------------- NOTES TAGS ---------------- */

    noteGeneral: "Allgemein",
    noteWarning: "Warnung",
    noteDispute: "Streitfall",

assignPropertyUnit: "Objekt / Einheit zuweisen",
tenantPropertyHelper:
  "Dieser Mieter kann einer oder mehreren Immobilien und Einheiten zugeordnet sein. Verwenden Sie diese Seite zur Verwaltung der Zuweisungen.",

searchTickets: "Tickets suchen…",
createTicket: "Ticket erstellen",

ticketId: "Ticket-ID",
category: "Kategorie",
propertyUnit: "Objekt / Einheit",
assignedTo: "Zugewiesen an",
status: "Status",
priority: "Priorität",
createdDate: "Erstellt am",
lastUpdated: "Zuletzt aktualisiert",

status_completed: "Abgeschlossen",
status_inProgress: "In Bearbeitung",
status_overdue: "Überfällig",
status_open: "Offen",

priority_low: "Niedrig",
priority_medium: "Mittel",
priority_high: "Hoch",
priority_critical: "Kritisch",


notifications: "Benachrichtigungen",
markAllRead: "Alle als gelesen markieren",
all: "Alle",
unread: "Ungelesen",
tickets: "Tickets",
maintenance: "Wartung",
system: "System",
noNotifications: "Sie haben derzeit keine Benachrichtigungen.",





notifications: "Benachrichtigungen",
viewAllNotifications: "Alle Benachrichtigungen anzeigen",

notification_ticketAssigned: "Ticket zugewiesen",
notification_maintenanceUpdate: "Wartungsupdate",
notification_tenantAdded: "Mieter hinzugefügt",
notification_system: "Systembenachrichtigung",


notifications: "Benachrichtigungen",
viewAll: "Alle anzeigen",
notificationsHelper: "Alle aktuellen System- und Aktivitätsmeldungen",

notification_ticketAssigned: "Neues Ticket zugewiesen",
notification_maintenanceScheduled: "Wartung geplant",
notification_userAdded: "Neuer Benutzer hinzugefügt",
notification_systemUpdate: "Systemaktualisierung",

ticket: "Ticket",
maintenance: "Wartung",
users: "Benutzer",
system: "System",


profile: "Profil",
profile_personalInfo: "Persönliche Informationen",
security: "Sicherheit",
fullName: "Vollständiger Name",
email: "E-Mail",
phone: "Telefonnummer",
language: "Sprache",
currentPassword: "Aktuelles Passwort",
newPassword: "Neues Passwort",
confirmPassword: "Passwort bestätigen",
saveChanges: "Änderungen speichern",
cancel: "Abbrechen",


systemSettings: "Systemeinstellungen",
systemSettingsDesc:
  "Globale Konfiguration, Vorlagen und Systemverhalten verwalten.",

settings_general_title: "Allgemeine Einstellungen",
settings_general_desc: "Zeitzone, Sprache, Systemname",

settings_branding_title: "Branding",
settings_branding_desc: "Logos, Farben, Designoptionen",

settings_localization_title: "Lokalisierung",
settings_localization_desc: "Sprachen und regionale Formate",

settings_notifications_title: "Benachrichtigungsvorlagen",
settings_notifications_desc: "E-Mail-, SMS- und Push-Vorlagen",

settings_email_title: "E-Mail (SMTP)",
settings_email_desc: "SMTP-Server und Zugangsdaten",

settings_push_title: "Push-Benachrichtigungen",
settings_push_desc: "Firebase / APNs Konfiguration",

settings_integrations_title: "Integrationen",
settings_integrations_desc: "Stripe, PayPal, Webhooks, IoT",
generalSettings: "Allgemeine Einstellungen",
generalSettingsDescription: "Konfigurieren Sie globale Systemeinstellungen wie Zeitzone, Sprache und Benennung.",
systemConfiguration: "Systemkonfiguration",
systemConfigurationHint: "Diese Einstellungen wirken sich auf alle Organisationen und Module aus.",
systemName: "Systemname",
systemNamePlaceholder: "Systemnamen eingeben...",
defaultTimezone: "Standardzeitzone",
defaultLanguage: "Standardsprache",
dateFormat: "Datumsformat",
timeFormat: "Zeitformat",
currency: "Währung",
numberFormat: "Zahlenformat",
weekStartDay: "Wochenbeginn",
monday: "Montag",
sunday: "Sonntag",
saveSettings: "Einstellungen speichern",
cancel: "Abbrechen",

branding: "Branding",
brandingDesc: "Passen Sie das visuelle Erscheinungsbild und das Design der Plattform an.",

logoIdentity: "Logo & Identität",
logoIdentityDesc: "Laden Sie Ihre Markenlogos für den hellen und dunklen Modus hoch.",
lightModeLogo: "Logo für hellen Modus",
darkModeLogo: "Logo für dunklen Modus",
uploadHint: "Ziehen & ablegen oder klicken zum Hochladen",
uploadFormat: "PNG, SVG (240×80px empfohlen)",

themeColors: "Theme & Farben",
primaryColor: "Primäre Markenfarbe",
neutralDark: "Neutrales Dunkel",
neutralGrey: "Neutrales Grau",
accentColors: "Akzentfarben (optional)",
addAccent: "Akzentfarbe hinzufügen",

themeMode: "Designmodus",
theme_light: "Hell",
theme_dark: "Dunkel",
theme_auto: "Automatisch (Gerät)",

saveBranding: "Branding-Einstellungen speichern",


localization: "Lokalisierung",
localizationDesc: "Verwalten Sie unterstützte Sprachen und regionale Formate.",
supportedLanguages: "Unterstützte Sprachen",
supportedLanguagesDesc: "Aktivieren oder deaktivieren Sie verfügbare Sprachen.",
addLanguage: "Sprache hinzufügen",
language: "Sprache",
code: "Code",
enabled: "Aktiv",
default: "Standard",
languagePriority: "Sprachpriorität",
languagePriorityDesc: "Ziehen Sie Sprachen, um die Reihenfolge festzulegen.",
saveLocalization: "Lokalisierung speichern",

notificationTemplates: "Benachrichtigungsvorlagen",
notificationTemplatesDesc: "Verwalten Sie E-Mail-, SMS- und Systembenachrichtigungen.",

emailTemplates: "E-Mail-Vorlagen",
emailTemplatesDesc: "Automatisierte Kommunikationsvorlagen anpassen.",

createTemplate: "Neue Vorlage erstellen",
templateName: "Vorlagenname",
type: "Typ",
description: "Beschreibung",
lastUpdated: "Zuletzt aktualisiert",
status: "Status",
actions: "Aktionen",

welcomeEmailDesc: "Wird bei der Registrierung an neue Benutzer gesendet.",

editTemplate: "Vorlage bearbeiten",
subject: "Betreff",
messageBody: "Nachrichtentext",
availableVariables: "Verfügbare Variablen",

active: "Aktiv",
inactive: "Inaktiv",

saveChanges: "Änderungen speichern",
cancel: "Abbrechen",


smtpTitle: "E-Mail (SMTP) Einstellungen",
smtpDesc: "Konfigurieren Sie den SMTP-Server für den Versand von Systembenachrichtigungen und Warnmeldungen.",

smtpConfigTitle: "SMTP-Konfiguration",
smtpConfigDesc: "Geben Sie die Details Ihres E-Mail-Anbieters für transaktionsbasierte Kommunikation an.",

smtpHost: "SMTP-Host",
smtpPort: "SMTP-Port",
smtpUsername: "Benutzername",
smtpPassword: "Passwort",
smtpEncryption: "Verschlüsselungsmethode",
smtpFromEmail: "Absender-E-Mail-Adresse",
smtpFromName: "Absendername",

smtpAdvanced: "Erweiterte Optionen",
smtpTimeout: "Verbindungszeitüberschreitung (Sekunden)",
smtpRetries: "Wiederholungsversuche",
smtpAuthMode: "Authentifizierungsmodus",

smtpTest: "Test-E-Mail",
smtpTestEmail: "Test-E-Mail senden an",
sendTestEmail: "Test-E-Mail senden",

saveSmtp: "SMTP-Einstellungen speichern",
resetDefaults: "Auf Standard zurücksetzen",

pushTitle: "Push-Benachrichtigungseinstellungen",
pushDesc:
  "Konfigurieren Sie Firebase- und APNs-Zugangsdaten für mobile und Web-Push-Benachrichtigungen.",

firebaseTitle: "Firebase-Konfiguration (Android & Web)",
firebaseDesc: "Fügen Sie die von der Firebase-Konsole bereitgestellten Zugangsdaten hinzu.",

firebaseServerKey: "Firebase-Server-Schlüssel",
firebaseSenderId: "Sender-ID",
firebaseProjectId: "Projekt-ID",
firebaseAppId: "Anwendungs-ID",
firebaseApiKey: "API-Schlüssel",

sendTestPush: "Test-Push-Benachrichtigung senden",
deviceToken: "Geräte-Token",

apnsTitle: "APNs-Konfiguration (iOS)",
apnsDesc: "Apple Push-Zertifikat für iOS-Benachrichtigungen hochladen.",

apnsCert: "APNs-Zertifikat (.p12 oder .pem)",
apnsCertPassword: "Zertifikat-Passwort",
apnsTeamId: "Team-ID",
apnsKeyId: "Schlüssel-ID",
apnsBundleId: "Bundle-Kennung",

sendTestPushIos: "Testbenachrichtigung senden (iOS)",

savePush: "Push-Einstellungen speichern",
cancel: "Abbrechen",

// DASHBOARD
dash_title: "Super-Admin-Dashboard",
dash_breadcrumb_current: "Dashboard",

// KPI CARDS
dash_card_orgs: "Organisationen gesamt",
dash_card_properties: "Aktive Immobilien",
dash_card_openTickets: "Offene Tickets",
dash_card_activeUsers: "Aktive Benutzer",
dash_card_activeUsers_sub: "FM / Hauswart / Dienstleister",

// CHARTS
dash_ticketTrend: "Ticket-Verlauf",
dash_maintenanceRate: "Wartungsabschlussrate",

// ALERTS
dash_systemAlerts: "Systemwarnungen",
dash_alert_subRenew_desc: "Ihr Abonnement wird bald verlängert.",
dash_alert_failedPay_desc: "Ein kürzlicher Zahlungsversuch ist fehlgeschlagen.",
dash_alert_apiSpike_desc: "Hoher API-Datenverkehr erkannt.",

// ACTIVITY
section_recent_activity: "Letzte Aktivitäten",
activity_ticket_updated: "Ticketstatus aktualisiert",
activity_org_created: "Neue Organisation erstellt",
activity_sync_done: "System-Synchronisierung abgeschlossen",
activity_just_now: "Gerade eben",
activity_15min: "Vor 15 Minuten",
activity_1h: "Vor 1 Stunde",

// MINI TABLES
dash_recent_tickets: "Letzte Tickets",
dash_recent_orgs: "Letzte Organisationen",
table_ticket: "Ticket",
table_user: "Benutzer",
table_property: "Immobilie",
table_date: "Datum",
table_name: "Name",
table_contact: "Kontakt",
table_email: "E-Mail",
table_created: "Erstellt",

// COMMON
no_data_available: "Keine Daten verfügbar",
completion_percent: "Abschluss",

fm_dash_title: "Facility-Manager-Dashboard",
fm_dash_breadcrumb: "Dashboard",
fm_dash_activeStaff: "Aktives Personal",
fm_dash_alert_overdueTasks: "Einige Wartungsaufgaben sind überfällig.",
fm_activity_task_completed: "Wartungsaufgabe abgeschlossen",

dash_card_facilities: "Facility-Management",
dash_recent_facilities: "Letzte Einrichtungen",
activity_facility_created: "Neue Einrichtung erstellt",

facilityManagers: "Facility Manager",
createFacilityManager: "Neuen Facility Manager erstellen",
searchFacilityManagers: "Facility Manager suchen",
searchFacilityManagersPlaceholder: "Facility Manager durchsuchen...",
noFacilityManagers: "Keine Facility Manager gefunden.",

table_facilityManager: "Facility Manager",
table_contactPerson: "Ansprechpartner",
table_properties: "Objekte",
table_plan: "Abonnement",
table_status: "Status",
table_created: "Erstellt am",
table_actions: "Aktionen",

facilityManagers: "Facility Manager",
facilityManagers_list: "Facility Manager",
facilityManagers_create: "Facility Manager erstellen",

dash_card_facilityManagers: "Facility Manager",
dash_recent_facilityManagers: "Letzte Facility Manager",

table_facilityManager: "Facility Manager",
table_facilityManagers: "Facility Manager",

facilityManagers: "Facility Manager",
facilityManagerId: "Facility-Manager-ID",
createFacilityManager: "Neuen Facility Manager erstellen",
loadingFacilityManager: "Facility Manager wird geladen…",

primaryContact: "Hauptansprechpartner",
properties: "Objekte",
created: "Erstellt am",

edit: "Bearbeiten",
delete: "Löschen",
suspend: "Sperren",
cancel: "Abbrechen",

suspendFacilityManager: "Facility Manager sperren?",
suspendFacilityManagerDesc:
  "Das Sperren dieses Facility Managers blockiert den Zugriff auf Dashboards, mobile Apps und zugewiesene Objekte.",
confirmSuspend: "Sperrung bestätigen",


loadingFacilityManager: "Facility Manager wird geladen...",

tab_overview: "Übersicht",
tab_details: "Details",
tab_billing: "Abrechnung",
tab_users: "Benutzer",
tab_properties: "Objekte",
tab_tickets: "Tickets",
tab_maintenance: "Wartung",
tab_activity: "Aktivitätsprotokolle",



facilityManagerId: "Facility-Manager-ID",
primaryContact: "Hauptansprechpartner",
createdOn: "Erstellt am",
properties: "Objekte",

edit: "Bearbeiten",
suspend: "Sperren",
delete: "Löschen",
cancel: "Abbrechen",

suspendFacilityManagerTitle: "Facility Manager sperren?",
suspendFacilityManagerDesc:
  "Durch das Sperren dieses Facility Managers wird der Zugriff auf Dashboards, mobile Apps und zugewiesene Objekte sofort blockiert.",

suspendBullet1: "Alle aktiven Sitzungen werden abgemeldet.",
suspendBullet2: "Tickets, Wartungsaufgaben und Benutzerzuweisungen bleiben erhalten.",
suspendBullet3: "Sie können den Facility Manager jederzeit reaktivieren.",

suspendOnly: "Nur sperren",
archivePermanently: "Dauerhaft archivieren",
confirmSuspend: "Facility Manager sperren",


fm_total_properties: "Gesamtobjekte",
fm_assigned_users: "Zugewiesene Benutzer",
fm_open_tickets: "Offene Tickets",

fm_ticket_trend: "Ticketverlauf (letzte 30 Tage)",
fm_recent_tickets: "Neueste Tickets",
fm_recent_activity: "Letzte Aktivitäten",

fm_tickets: "Tickets",
fm_ticket_days: ["Tag 1", "Tag 5", "Tag 10", "Tag 15", "Tag 20", "Tag 25", "Tag 30"],

fm_activity_ticket_updated: "Ticket wurde aktualisiert",
fm_activity_user_added: "Neuer Benutzer hinzugefügt",
fm_activity_ticket_closed: "Ticket wurde geschlossen",

status_open: "Offen",
status_in_progress: "In Bearbeitung",
status_completed: "Abgeschlossen",

table_ticket: "Ticket-ID",
table_category: "Kategorie",
table_property: "Objekt",
table_assigned: "Zugewiesen an",
table_status: "Status",
table_date: "Erstellungsdatum",



users_searchPlaceholder: "Benutzer suchen...",
users_allRoles: "Alle Rollen",
users_add: "Benutzer hinzufügen",

users_name: "Benutzername",
users_role: "Rolle",
users_email: "E-Mail",
users_phone: "Telefonnummer",
users_status: "Status",
users_lastActive: "Zuletzt aktiv",

role_technician: "Techniker",
role_tenant: "Mieter",

status_active: "Aktiv",
status_inactive: "Inaktiv",

time_5hoursAgo: "vor 5 Stunden",
time_2weeksAgo: "vor 2 Wochen",

pagination_rows: "Zeilen pro Seite:",
pagination_range: "1–5 von 12",



fm_create_title: "Neuen Facility Manager erstellen",
fm_create_subtitle: "Fügen Sie ein neues Facility-Management-Unternehmen zum Hauswart-System hinzu.",
fm_create_backToList: "Zurück zu Facility Managern",

fm_create_cardTitle: "Einrichtung eines neuen Facility Managers",
fm_create_cardSubtitle: "Geben Sie unten die Daten des Facility Managers ein.",

fm_create_name_label: "Facility-Manager-Name",
fm_create_name_placeholder: "Facility-Manager-Name eingeben",

fm_create_industry_label: "Branche",
fm_create_industry_selectPlaceholder: "Branche auswählen",
fm_create_industry_realEstate: "Immobilien",
fm_create_industry_healthcare: "Gesundheitswesen",
fm_create_industry_education: "Bildung",
fm_create_industry_hospitality: "Hotellerie",

fm_create_address_label: "Adresse",
fm_create_address_placeholder: "Vollständige Adresse eingeben",

fm_create_contactName_label: "Name der Kontaktperson",
fm_create_contactName_placeholder: "z. B. Jane Doe",

fm_create_contactEmail_label: "Kontakt-E-Mail",
fm_create_contactEmail_placeholder: "z. B. jane.doe@example.com",

fm_create_contactPhone_label: "Kontakt-Telefon",
fm_create_contactPhone_placeholder: "Telefonnummer eingeben",

fm_create_plan_label: "Abonnementplan",
fm_create_plan_selectPlaceholder: "Plan auswählen",
fm_create_plan_basic: "Basic",
fm_create_plan_professional: "Professional",
fm_create_plan_enterprise: "Enterprise",

fm_create_status_label: "Status",
fm_create_notes_label: "Notizen (optional)",
fm_create_notes_placeholder: "Relevante Notizen hinzufügen",

fm_create_save: "Facility Manager speichern",

common_cancel: "Abbrechen",

status_active: "Aktiv",
status_trial: "Testphase",
status_suspended: "Gesperrt",


fm_edit_title: "Facility Manager bearbeiten",
fm_edit_subtitle: "Aktualisieren Sie die Informationen des Facility Managers.",
fm_edit_back: "Zurück zu Details",

fm_edit_cardTitle: "Facility-Manager-Daten",
fm_edit_cardSubtitle: "Bearbeiten Sie die untenstehenden Informationen.",

fm_edit_save: "Facility Manager aktualisieren",


technicians: "Techniker",
technicians_subtitle: "Verwalten Sie alle Techniker über Organisationen hinweg",

technicians_total: "Gesamttechniker",
technicians_active: "Aktive Techniker",
technicians_assigned: "Zugewiesene Techniker",
technicians_unassigned: "Nicht zugewiesen",

add_technician: "Techniker hinzufügen",

technician_name: "Techniker",
organization: "Organisation",
properties: "Objekte",
phone: "Telefonnummer",
status: "Status",
last_activity: "Letzte Aktivität",

export_list: "Liste exportieren",
actions: "Aktionen",


action_backToTechnicians: "Zurück zu den Technikern",
action_editTechnician: "Techniker bearbeiten",
action_assignPermissions: "Berechtigungen zuweisen",

tech_tab_overview: "Übersicht",
tech_tab_performance: "Leistung",
tech_tab_attendance: "Anwesenheit",
tech_tab_dailyAttendance: "Tägliche Anwesenheit",
tech_tab_offboarding: "Abmeldung",
back_to_technicians: "Zurück zu den Technikern",

technician_create_title: "Techniker erstellen",
technician_create_subtitle: "Einen neuen Techniker hinzufügen und Zugriff zuweisen.",

tech_info_title: "Technikerinformationen",
tech_info_desc: "Grundlegende persönliche Daten und Anmeldedaten.",

tech_full_name: "Vollständiger Name",
tech_email: "E-Mail-Adresse",
tech_phone: "Telefonnummer",
tech_photo: "Profilfoto",
tech_password: "Passwort",
tech_confirm_password: "Passwort bestätigen",

tech_access_title: "Zugriff & Zuweisung",
tech_access_desc: "Organisationen und Objekte für diesen Techniker zuweisen.",

tech_assign_org: "Zugewiesene Organisation",
tech_assign_properties: "Zugewiesene Objekte",

tech_status_title: "Kontostatus",
tech_status: "Status",
tech_send_activation: "Aktivierungs-E-Mail an Techniker senden",

action_create_technician: "Techniker erstellen",



technician_edit_title: "Techniker bearbeiten",
technician_edit_subtitle: "Technikerdaten und Zuweisungen aktualisieren.",

tech_password_edit: "Neues Passwort",
tech_password_optional: "Leer lassen, um das aktuelle Passwort beizubehalten",

action_update_technician: "Techniker aktualisieren",





technician_delete_title: "Techniker löschen",
technician_delete_subtitle: "Dieser Vorgang entfernt den Techniker dauerhaft aus dem System.",

technician_delete_warning_title: "Dieser Vorgang ist nicht rückgängig zu machen",
technician_delete_warning_desc: "Alle zugewiesenen Aufgaben, Tickets und Zeitpläne sind betroffen.",

technician_delete_impact_title: "Auswirkungsübersicht",

technician_delete_confirm: "Ich verstehe die Konsequenzen und möchte diesen Techniker löschen.",

technician_delete_notes_title: "Löschungsnotizen (optional)",
technician_delete_notes_desc: "Interne Notizen für Protokollierung oder Prüfung.",
technician_delete_notes_placeholder: "Grund für das Löschen dieses Technikers...",

technician_delete_irreversible: "Diese Aktion kann nicht rückgängig gemacht werden.",

action_delete_technician: "Techniker löschen",
action_backToTechnicianProfile: "Zurück zum Technikerprofil",

tech_org: "Organisation",
tech_properties: "Zugewiesene Objekte",
tech_last_active: "Zuletzt aktiv",
tech_joined: "Beigetreten am",
tech_id: "Techniker-ID",

tech_open_tickets: "Offene Tickets",
tech_active_tasks: "Aktive Aufgaben",
tech_scheduled_jobs: "Geplante Einsätze",
tech_pending_reports: "Ausstehende Berichte",
tech_live_chats: "Live-Chats",

tech_reassign_notice: "Alle Zuweisungen müssen vor dem Löschen neu vergeben werden.",

fm_total: "Facility Manager gesamt",
fm_active: "Aktive Facility Manager",
fm_trial: "Testkonten",
fm_suspended: "Gesperrte Konten",
facilityManagers_subtitle: "Facility-Management-Organisationen verwalten",






// Technician – Tasks (Tickets)

tech_tasks_search: "Aufgaben suchen",
tech_tasks_create: "Aufgabe erstellen",

tech_task_id: "Aufgaben-ID",
tech_task_category: "Kategorie",
tech_task_property: "Objekt / Einheit",
tech_task_reported_by: "Gemeldet von",
tech_task_status: "Status",
tech_task_priority: "Priorität",
tech_task_created: "Erstellt",
tech_task_updated: "Zuletzt aktualisiert",


// Technician – Tasks (Tickets)
tech_tab_tasks: "Aufgaben",

tech_tasks_search: "Aufgaben suchen",
tech_tasks_create: "Aufgabe erstellen",

tech_task_id: "Aufgaben-ID",
tech_task_category: "Kategorie",
tech_task_property: "Objekt / Einheit",
tech_task_reported_by: "Gemeldet von",
tech_task_status: "Status",
tech_task_priority: "Priorität",
tech_task_created: "Erstellt",
tech_task_updated: "Zuletzt aktualisiert",

subscriptionInvoices: "Abonnements",
subscriptions_subtitle: "Alle Abonnementpläne der Facility Manager",
subs_total: "Gesamtanzahl Abonnements",
subs_active: "Aktive Abonnements",
subs_expiring: "Demnächst ablaufend",
subs_revenue: "Gesamtumsatz",

invoices: "Rechnungen",
invoices_subtitle: "Alle Abrechnungen und Zahlungen",
invoiceId: "Rechnungsnummer",
facilityManager: "Facility Manager",
plan: "Tarif",
startDate: "Startdatum",
endDate: "Enddatum",
amount: "Betrag",
status: "Status",
date: "Datum",

billing: "Abrechnung",

subscriptionInvoices: "Abonnements",
subscriptions_subtitle: "Alle Abonnementpläne der Facility Manager",

subs_total: "Gesamtanzahl Abonnements",
subs_active: "Aktive Abonnements",
subs_expiring: "Läuft bald ab",
subs_revenue: "Gesamtumsatz",

invoices: "Rechnungen",
invoices_subtitle: "Alle Rechnungen und Zahlungen",

invoiceId: "Rechnungsnummer",
facilityManager: "Facility Manager",
plan: "Tarif",
startDate: "Startdatum",
endDate: "Enddatum",
amount: "Betrag",
status: "Status",
date: "Datum",

  /* ---------------- BILLING ---------------- */
  billing: "Abrechnung",

  /* Subscriptions */
  subscriptionInvoices: "Abonnements",
  subscriptions_subtitle: "Alle Abonnementpläne der Facility Manager",
  subs_total: "Gesamt-Abonnements",
  subs_active: "Aktive Abonnements",
  subs_expiring: "Läuft bald ab",
  subs_revenue: "Gesamtumsatz",

  subscriptionId: "Abonnement-ID",
  subscriptionDetails: "Abonnementdetails",
  stopSubscription: "Abonnement beenden",
  autoRenew: "Automatische Verlängerung",
  nextBilling: "Nächste Abrechnung",

  /* Invoices */
  invoices: "Rechnungen",
  invoices_subtitle: "Alle Rechnungen und Zahlungen",
  invoiceId: "Rechnungsnummer",
  paymentMethod: "Zahlungsmethode",
  downloadInvoice: "Rechnung herunterladen",
  viewInvoice: "Rechnung ansehen",

  /* Common */
  facilityManager: "Facility Manager",
  plan: "Tarif",
  startDate: "Startdatum",
  endDate: "Enddatum",
  amount: "Betrag",
  status: "Status",
  date: "Datum",


/* ===================== */
  /* ABRECHNUNG – RECHNUNGEN */
  /* ===================== */

  invoices: "Rechnungen",
  invoices_subtitle: "Alle Abrechnungsrechnungen und Zahlungen",

  invoices_total: "Gesamte Rechnungen",
  invoices_paid: "Bezahlte Rechnungen",
  invoices_unpaid: "Offene Rechnungen",
  invoices_revenue: "Gesamtumsatz",

  invoiceId: "Rechnungsnummer",
  facilityManager: "Facility Manager",
  date: "Datum",
  amount: "Betrag",
  status: "Status",
  actions: "Aktionen",

  paid: "Bezahlt",
  unpaid: "Unbezahlt",

  all: "Alle",
  january: "Januar",
  february: "Februar",
  march: "März",












  },
};
