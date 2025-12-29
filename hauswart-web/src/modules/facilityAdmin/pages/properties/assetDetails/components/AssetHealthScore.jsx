import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";

export default function AssetHealthScore() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // Dummy value — can later be replaced by API
  const score = 78;
  const maxScore = 100;

  const percentage = (score / maxScore) * 100;
  const dashArray = `${percentage}, 100`;

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-4">{dict.prop_asset_health_title}</h3>

      <div className="flex flex-col items-center">
        {/* Circular score ring */}
        <div className="relative h-32 w-32">
          <svg className="h-full w-full" viewBox="0 0 36 36">
            {/* Background ring */}
            <path
              className="text-gray-200"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            ></path>

            {/* Progress ring */}
            <path
              className="text-green-500"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeDasharray={dashArray}
              strokeLinecap="round"
              strokeWidth="4"
            ></path>
          </svg>

          {/* Score number */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-green-500">{score}</span>
            <span className="text-xs text-gray-500">/ {maxScore}</span>
          </div>
        </div>

        {/* Condition label */}
        <p className="mt-2 text-lg font-semibold text-black">
          {dict.prop_asset_health_condition_good}
        </p>
      </div>

      {/* Additional insights */}
      <div className="mt-4 space-y-2 text-sm">
        <Row
          label={dict.prop_asset_health_lastMaintenance}
          value={dict.prop_asset_health_recent}
          valueClass="text-green-600"
        />
        <Row
          label={dict.prop_asset_health_warrantyStatus}
          value={dict.prop_asset_health_expiresSoon}
          valueClass="text-orange-500"
        />
        <Row
          label={dict.prop_asset_health_serviceIssues}
          value={dict.prop_asset_health_low}
          valueClass="text-green-600"
        />
      </div>
    </div>
  );
}

function Row({ label, value, valueClass }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span className={`font-medium ${valueClass}`}>{value}</span>
    </div>
  );
}
