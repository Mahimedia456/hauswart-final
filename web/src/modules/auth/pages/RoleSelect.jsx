// src/modules/auth/pages/RoleSelect.jsx
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";
import RoleCard from "../components/RoleCard.jsx";

export default function RoleSelect() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const chooseRole = (role) => {
    localStorage.setItem("selected_role", role);
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-6 py-10 font-display flex flex-col items-center">

      <div className="
        w-full max-w-md p-10 rounded-2xl
        bg-white/70 backdrop-blur-xl border border-slate-200
        shadow-[0_8px_25px_rgba(0,0,0,0.08)]
      ">
        <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          {dict.roleSelect_title}
        </h1>

        <div className="grid gap-4">
          <RoleCard label={dict.role_facilityManager} icon="admin_panel_settings" onClick={() => chooseRole("FM")} />
          <RoleCard label={dict.role_caretaker} icon="construction" onClick={() => chooseRole("CARETAKER")} />
          <RoleCard label={dict.role_serviceProvider} icon="business_center" onClick={() => chooseRole("SP")} />
          <RoleCard label={dict.role_tenant} icon="home" onClick={() => chooseRole("TENANT")} />
        </div>
      </div>
    </div>
  );
}
