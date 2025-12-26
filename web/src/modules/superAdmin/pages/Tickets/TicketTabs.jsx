import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function TicketTabs({ activeTab, setActiveTab, ticketId }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const tabs = [
    { id: "overview", label: dict.ticket_overview || "Overview" },
    { id: "detail", label: dict.ticket_details || "Details" },
    { id: "chat", label: dict.ticket_chat || "Chat" },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 px-4 py-2 flex gap-2 overflow-x-auto shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
            ${activeTab === tab.id 
              ? "bg-[#F38B14] text-white shadow-sm" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
