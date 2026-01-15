import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";

export default function AssetMaintenanceHistory() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const history = [
    {
      date: "01 Aug 2023, 09:15",
      user: "John Smith",
      text: dict.asset_history_item1,
      icon: "done",
      color: "bg-green-500",
    },
    {
      date: "01 May 2023, 11:30",
      user: "Admin",
      text: dict.asset_history_item2,
      icon: "attach_file",
      color: "bg-blue-500",
    },
    {
      date: "01 May 2023, 10:00",
      user: "Jane Doe",
      text: dict.asset_history_item3,
      icon: "done",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8dcce]">
      <h3 className="text-lg font-bold mb-4">{dict.asset_history}</h3>

      <div className="relative pl-6">

        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#e8dcce]"></div>

        {history.map((item, index) => (
          <div className="relative mb-6" key={index}>
            <div className={`absolute left-0 top-1.5 size-5 rounded-full flex items-center justify-center ${item.color}`}>
              <span className="material-symbols-outlined text-white text-sm">{item.icon}</span>
            </div>

            <div className="ml-2">
              <p className="text-[#9c7649] text-sm">
                {item.date} {dict.asset_by} <span className="font-bold text-black">{item.user}</span>
              </p>
              <p className="font-medium">{item.text}</p>
              <button className="text-sm text-[#F38B14] hover:underline">
                {dict.asset_viewTaskDetails}
              </button>
            </div>
          </div>
        ))}

      </div>

      <button className="mt-6 w-full h-10 px-4 rounded-lg bg-[#f4eee7] font-bold hover:bg-[#e8dcce]">
        {dict.asset_viewFullHistory}
      </button>
    </div>
  );
}
