import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function TenantPropertyUnit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="space-y-6">

      {/* TOP ACTION */}
      <div className="flex justify-end">
        <button
          onClick={() => navigate(`/super-admin/tenants/${id}/assign-property`)}
          className="h-12 px-5 rounded-xl bg-[#F38B14] text-white font-bold hover:bg-black transition"
        >
          {dict.assignPropertyUnit}
        </button>
      </div>

      <p className="text-sm text-slate-500 text-right">
        {dict.tenantPropertyHelper}
      </p>

      {/* PROPERTY GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">

        <PropertyCard
          status="active"
          title="The Grand Plaza"
          address="123 Market St"
          unit="#1402"
          floor="14"
          block="Tower B"
          since="Oct 15, 2022"
          tenantType="Primary Tenant"
          lease="Jan 1, 2023 → Dec 31, 2024"
        />

        <PropertyCard
          status="vacating"
          title="Riverside Apartments"
          address="45 River Run"
          unit="#G-05"
          floor="Ground"
          block="Block C"
          since="Mar 01, 2021"
          tenantType="Co-Tenant"
          lease="Mar 1, 2023 → Feb 29, 2024"
        />

      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* PROPERTY CARD                                                              */
/* -------------------------------------------------------------------------- */

function PropertyCard({
  status,
  title,
  address,
  unit,
  floor,
  block,
  since,
  tenantType,
  lease,
}) {
  const statusMap = {
    active: "bg-green-100 text-green-700",
    vacating: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-6">

      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <span
            className={`inline-block mt-1 px-2 py-0.5 text-xs font-semibold rounded-full ${statusMap[status]}`}
          >
            {status}
          </span>
        </div>

        <button className="text-slate-400 hover:text-slate-700">
          ⋮
        </button>
      </div>

      {/* DETAILS */}
      <div className="grid grid-cols-2 gap-6 text-sm">
        <Info label="Address" value={address} />
        <Info label="Assigned Since" value={since} />
        <Info label="Unit Number" value={unit} />
        <Info label="Tenant Type" value={tenantType} />
        <Info label="Floor" value={floor} />
        <Info label="Lease Period" value={lease} />
        <Info label="Building Block" value={block} />
      </div>

      {/* ACTIONS */}
      <div className="pt-4 border-t border-slate-200 flex gap-4">
        <ActionButton icon="🎫" text="View Tickets" />
        <ActionButton icon="🛠️" text="View Maintenance" />
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-slate-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function ActionButton({ icon, text }) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm font-semibold">
      <span>{icon}</span>
      {text}
    </button>
  );
}
