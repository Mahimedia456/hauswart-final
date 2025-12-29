import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";


export default function PropertyDetailsTab() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // ------------------------------
  // Dummy Data (replace with API later)
  // ------------------------------
  const data = {
    name: "Sunset Residency Tower A",
    type: "Residential",
    size: "120,000 sq ft / 11,148 sq m",
    description:
      "A modern residential complex in the heart of the city, offering luxury apartments with state-of-the-art amenities. Features a rooftop pool, gym, and 24/7 security.",

    address: "1234 Sunshine Avenue, Metropolis, CA 90210, United States",
    regionCity: "California / Metropolis",
    zip: "90210",
    gps: "34.0522° N, 118.2437° W",

    structure: {
      floors: 25,
      units: 150,
      sections: "Tower A, Tower B (Annex)",
      utilities: "Boiler Room, Electrical Room, Rooftop HVAC",
      basement: "2 Levels, 200 spaces",
      rooftopAccess: "Keycard access via Service Elevator",
      year: 2018,
      fireZone: "Zone 4A",
    },

    personnel: [
      {
        name: "Jane Doe",
        role: "Facility Manager",
        email: "jane.doe@example.com",
        phone: "(123) 456-7890",
        area: "All Floors & Common Areas",
        badgeColor: "bg-primary/20 text-primary",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA_J51aNBIDq5PH-eFRYf_iz2DUhSCrYSlFaJbw_elcrHtB-OCeKkkld6sfj3fh8d1MDsdyd4emfUxaEVazFP5qAFsBD_SfHbWxD8jh9t85rMCUKqT_V4cLI6EHg9vw4Hu7ESpYiohyZA9Uw3RkYUAjNmOpfSnGQ8jZLH6ULEHBZ_e9H0YF71bXTxTozpX7_0W2duy7tjO6hkvg1cMlVGYwu-cP1kx6-DzrvBvASwtB-GV4wAbygywXc9gqSdDYHdynJYlySOGD1ew",
      },
      {
        name: "John Smith",
        role: "Caretaker",
        email: "john.smith@example.com",
        phone: "(234) 567-8901",
        area: "Floors 1–10",
        badgeColor: "bg-gray-200 text-gray-700",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC5KeAi8DnbpmCV11RhaLy9CXxphB_FKPhD1TvrIcAFzpQqq9kJfZAyI4rJeJWdfcYddYj1w8-4M6ddJfU1mrMPeEcbbX9YDlODdru4AbVYMJkdBNcBmdSRvW-C5aLTGOxAZMA72BWph11AgxFWKLf5YDwQQDnnzk_9rCP9tNZg1_aIsok5ZCkdDUgnbEZMA_3tPB2S-CTDJs5kY6lNSyQWFVmbyN2YU62RaP5nqqmtqJygaqOASWP36nr7R0i68N7InI35cOh0dbw",
      },
      {
        name: "Emily White",
        role: "Technician",
        email: "emily.white@example.com",
        phone: "(345) 678-9012",
        area: "HVAC & Electrical",
        badgeColor: "bg-blue-100 text-blue-800",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC7wXtPVhPftijeSadhMZqwiJK0GpsEmrtGQJuJCw0Jz2sjYPqbwfvp_eXgtj8gChoHGD3KmNbjbxDy6a-kQQWCvnMq_z1T_wC0FxEVg1rhm2M2SLDs7VbECM703mfaQJANx63GtUvt_VbrlTFNuAzd_rkoINmccazKmsShLkYVcvdjbKPW8SCeAhvJnsv0BfDhlCEzpGN1dyFBS71F4y5eMHWDzm2iVnyt1sQFdyH4_oIpYbJQmZ97k3DAvGZ1GE-VfBd13YWhf5I",
      },
    ],

    compliance: [
      {
        title: "Fire Safety Certificate",
        status: dict.prop_details_valid,
        statusColor: "bg-success/20 text-success",
        dateLabel: dict.prop_details_expires,
        date: "12/31/2024",
      },
      {
        title: "Electrical Inspection Report",
        status: dict.prop_details_valid,
        statusColor: "bg-success/20 text-success",
        dateLabel: dict.prop_details_expires,
        date: "08/15/2025",
      },
      {
        title: "HVAC Inspection",
        status: dict.prop_details_upcoming,
        statusColor: "bg-warning/20 text-warning",
        dateLabel: dict.prop_details_lastService,
        date: "06/01/2023",
      },
      {
        title: "Municipality Registration",
        status: dict.prop_details_registered,
        statusColor: "bg-success/20 text-success",
        dateLabel: dict.prop_details_expires,
        date: "01/01/2026",
      },
      {
        title: "Insurance Coverage",
        status: dict.prop_details_active,
        statusColor: "bg-success/20 text-success",
        dateLabel: dict.prop_details_renewal,
        date: "07/30/2024",
      },
    ],

    metadata: {
      createdBy: "Super Admin (admin@hauswart.com)",
      updatedBy: "Jane Doe (Facility Manager)",
      lastActivity: "Ticket #582 closed",
      propertyId: "PROP-a1b2c3d4-e5f6-7890",
      createdOn: "Jan 15, 2022, 09:30 AM",
      updatedOn: "June 5, 2024, 02:45 PM",
      organizationId: "ORG-z9y8x7w6-v5u4-3210",
    },

    notes: {
      text:
        "Follow up with the city regarding the permit for the rooftop antenna installation. Awaiting response since May 20th. Also, remind the new caretaker, John Smith, about the protocol for waste management.",
      author: "Super Admin",
      date: "May 28, 2024",
    },
  };

  return (
    <div className="flex flex-col gap-8">

      {/* BASIC INFORMATION */}
      <SectionCard title={dict.prop_details_basicInfo} actionLabel={dict.prop_details_edit}>
        <TwoColumn>
          <Field label={dict.prop_details_propertyName} value={data.name} />
          <Field label={dict.prop_details_propertyType} value={data.type} />
          <Field label={dict.prop_details_propertySize} value={data.size} />
          <Field label={dict.prop_details_description} value={data.description} />
          <Field label={dict.prop_details_address} value={data.address} />
          <Field label={dict.prop_details_regionCity} value={data.regionCity} />
          <Field label={dict.prop_details_zip} value={data.zip} />
          <Field label={dict.prop_details_gps} value={data.gps} />
        </TwoColumn>
      </SectionCard>

      {/* BUILDING STRUCTURE */}
      <SectionCard title={dict.prop_details_buildingStructure}>
        <TwoColumn>
          <Field label={dict.prop_details_numberFloors} value={data.structure.floors} />
          <Field label={dict.prop_details_totalUnits} value={data.structure.units} />
          <Field label={dict.prop_details_sections} value={data.structure.sections} />
          <Field label={dict.prop_details_utilities} value={data.structure.utilities} />
          <Field label={dict.prop_details_basementParking} value={data.structure.basement} />
          <Field label={dict.prop_details_rooftopAccess} value={data.structure.rooftopAccess} />
          <Field label={dict.prop_details_yearConstruction} value={data.structure.year} />
          <Field label={dict.prop_details_fireZone} value={data.structure.fireZone} />
        </TwoColumn>

        <div className="mt-6 text-right">
          <button className="text-sm font-bold text-primary hover:text-black">
            {dict.prop_details_manageStructure}
          </button>
        </div>
      </SectionCard>

      {/* ASSIGNED PERSONNEL */}
      <SectionCard title={dict.prop_details_assignedPersonnel}>
        <div className="flex flex-col gap-4">
          {data.personnel.map((p, i) => (
            <div key={i} className="flex items-center gap-4 py-2">
              <img src={p.avatar} className="size-10 rounded-full" />
              <div className="flex-1 grid grid-cols-6 gap-4 items-center">
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-medium">{p.name}</p>
                  <span className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${p.badgeColor}`}>
                    {p.role}
                  </span>
                </div>
                <p className="text-sm text-text-secondary hidden sm:block">{p.email}</p>
                <p className="text-sm text-text-secondary hidden sm:block">{p.phone}</p>
                <p className="text-sm text-text-secondary col-span-2">{p.area}</p>
                <a className="text-sm font-bold text-primary hover:text-black justify-self-end">
                  {dict.prop_details_manageAssignments}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a className="text-sm font-medium text-text-secondary hover:text-text-main">
            {dict.prop_details_goToAssignedStaff}
          </a>
        </div>
      </SectionCard>

      {/* COMPLIANCE */}
      <SectionCard title={dict.prop_details_compliance}>
        <div className="space-y-4">
          {data.compliance.map((c, i) => (
            <div key={i}>
              <div className="flex justify-between items-center">
                <p className="text-sm text-text-secondary">{c.title}</p>
                <div className="text-right">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold ${c.statusColor}`}>
                    {c.status}
                  </span>
                  <p className="text-xs text-text-secondary mt-1">
                    {c.dateLabel} {c.date}
                  </p>
                </div>
              </div>

              {i < data.compliance.length - 1 && (
                <hr className="border-border-color my-3" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-right">
          <a className="text-sm font-bold text-primary hover:text-black">
            {dict.prop_details_manageDocuments}
          </a>
        </div>
      </SectionCard>

      {/* SYSTEM METADATA */}
      <SectionCard title={dict.prop_details_systemMetadata}>
        <TwoColumn>
          <Field label={dict.prop_details_createdBy} value={data.metadata.createdBy} />
          <Field label={dict.prop_details_createdOn} value={data.metadata.createdOn} />

          <Field label={dict.prop_details_lastUpdatedBy} value={data.metadata.updatedBy} />
          <Field label={dict.prop_details_updatedOn} value={data.metadata.updatedOn} />

          <Field label={dict.prop_details_lastActivity} value={data.metadata.lastActivity} />
          <Field label={dict.prop_details_propertyId} value={data.metadata.propertyId} />

          <Field label={dict.prop_details_organizationId} value={data.metadata.organizationId} />
        </TwoColumn>
      </SectionCard>

      {/* INTERNAL NOTES */}
      <SectionCard title={dict.prop_details_internalNotes}>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-700">{data.notes.text}</p>
          <p className="text-xs text-gray-500 mt-2">
            {dict.prop_details_lastNoteBy} {data.notes.author} — {data.notes.date}
          </p>
        </div>

        <div className="mt-4 text-right">
          <button className="px-3 py-2 bg-component-bg rounded-DEFAULT text-sm font-bold text-text-main hover:bg-border-color transition">
            {dict.prop_details_addNote}
          </button>
        </div>
      </SectionCard>

    </div>
  );
}

/* -------------------------------
   SMALL REUSABLE COMPONENTS
-------------------------------- */

function SectionCard({ title, actionLabel, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border-color">
      <div className="px-6 py-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">{title}</h2>
        {actionLabel && (
          <button className="text-sm font-medium text-text-secondary hover:text-text-main">
            {actionLabel}
          </button>
        )}
      </div>
      <hr className="border-border-color" />
      <div className="p-6">{children}</div>
    </div>
  );
}

function TwoColumn({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div>
      <p className="text-sm text-text-secondary">{label}</p>
      <p className="font-medium text-text-main">{value}</p>
    </div>
  );
}
