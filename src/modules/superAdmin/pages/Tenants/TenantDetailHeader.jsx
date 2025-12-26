import { useNavigate, useParams } from "react-router-dom";
import { t } from "../../../../i18n/translations";
import { useLanguage } from "../../../../context/LanguageContext";

export default function TenantDetailHeader({ tenant }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!tenant) return null;

  return (
    <div className="bg-white/80 rounded-2xl border border-slate-200 p-6 shadow-md space-y-6">

      {/* TOP */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <button
            onClick={() => navigate("/super-admin/tenants")}
            className="text-sm text-slate-500 hover:text-slate-800 mb-2 flex items-center gap-1"
          >
            ← {dict.action_backToTenants}
          </button>

          <h2 className="text-2xl font-bold text-slate-900">
            {tenant.name}
          </h2>

          <p className="text-sm text-slate-600">
            {tenant.email} · {tenant.phone}
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
              {tenant.status}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              {tenant.tenantType}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              {tenant.organization}
            </span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => navigate(`/super-admin/tenants/${id}/edit`)}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-white border border-slate-200 hover:bg-slate-100"
          >
            {dict.action_editTenant}
          </button>

          <button
            className="px-4 py-2 rounded-xl text-sm font-medium bg-white border border-slate-200 hover:bg-slate-100"
          >
            {dict.action_moveTenant}
          </button>

          <button
            className="px-4 py-2 rounded-xl text-sm font-medium bg-[#F38B14]/10 text-[#F38B14] hover:bg-[#F38B14]/20"
          >
            {dict.action_deactivate}
          </button>

          <button
            onClick={() => navigate(`/super-admin/tenants/${id}/delete`)}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-[#F38B14] text-white hover:bg-black"
          >
            {dict.action_delete}
          </button>
        </div>
      </div>

      {/* META CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Meta label={dict.propertyAssigned} value={tenant.property} />
        <Meta label={dict.unitNumber} value={tenant.unit} />
        <Meta label={dict.moveInDate} value={tenant.moveIn} />
        <Meta label={dict.leaseExpiry} value={tenant.leaseEnd} />
      </div>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-lg font-bold text-slate-900">{value}</p>
    </div>
  );
}
