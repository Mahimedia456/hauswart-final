import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";
import { useNavigate } from "react-router-dom";

export default function PushNotificationSettings() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  return (
    <div className="p-8">
      {/* BACK */}
      <button
        onClick={() => navigate("/super-admin/system-settings")}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-black mb-4"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        {dict.systemSettings}
      </button>

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">
          {dict.pushTitle}
        </h1>
        <p className="text-slate-500 mt-1">{dict.pushDesc}</p>
      </div>

      {/* FIREBASE */}
      <div className="bg-white border rounded-xl p-8 mb-8">
        <h2 className="text-xl font-semibold text-slate-900">
          {dict.firebaseTitle}
        </h2>
        <p className="text-slate-500 mb-6">{dict.firebaseDesc}</p>

        <div className="grid grid-cols-2 gap-6">
          <textarea
            className="col-span-2 input"
            placeholder={dict.firebaseServerKey}
          />
          <input className="input" placeholder={dict.firebaseSenderId} />
          <input className="input" placeholder={dict.firebaseProjectId} />
          <input className="input" placeholder={dict.firebaseAppId} />
          <input className="input" placeholder={dict.firebaseApiKey} />
        </div>

        <div className="mt-6">
          <input className="input mb-3" placeholder={dict.deviceToken} />
          <button className="btn-primary">
            {dict.sendTestPush}
          </button>
        </div>
      </div>

      {/* APNS */}
      <div className="bg-white border rounded-xl p-8 mb-8">
        <h2 className="text-xl font-semibold text-slate-900">
          {dict.apnsTitle}
        </h2>
        <p className="text-slate-500 mb-6">{dict.apnsDesc}</p>

        <div className="border-dashed border-2 rounded-lg p-8 text-center text-slate-500 mb-6">
          {dict.apnsCert}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <input className="input" placeholder={dict.apnsCertPassword} />
          <input className="input" placeholder={dict.apnsTeamId} />
          <input className="input" placeholder={dict.apnsKeyId} />
          <input
            className="col-span-2 input"
            placeholder={dict.apnsBundleId}
          />
        </div>

        <div className="mt-6">
          <input className="input mb-3" placeholder={dict.deviceToken} />
          <button className="btn-primary">
            {dict.sendTestPushIos}
          </button>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-6">
        <button
          onClick={() => navigate(-1)}
          className="text-slate-500 hover:text-black"
        >
          {dict.cancel}
        </button>
        <button className="btn-primary">
          {dict.savePush}
        </button>
      </div>
    </div>
  );
}
