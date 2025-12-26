import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";

export default function AssetDocuments() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const docs = [
    {
      name: "AHU-01_Manual.pdf",
      uploadedBy: "Admin",
      date: "10 Jan 2021",
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8dcce]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">{dict.asset_documents}</h3>

        <button className="h-9 px-4 rounded-lg bg-[#f4eee7] text-sm font-bold hover:bg-[#e8dcce]">
          {dict.asset_uploadDocument}
        </button>
      </div>

      <ul className="space-y-3">
        {docs.map((doc, index) => (
          <li key={index} className="flex justify-between items-center p-3 bg-[#f8f7f5] rounded-lg">
            <div className="flex gap-3 items-center">
              <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>

              <div>
                <p className="font-medium">{doc.name}</p>
                <p className="text-xs text-[#9c7649]">
                  {dict.asset_uploadedBy} {doc.uploadedBy} {dict.asset_on} {doc.date}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="p-1 hover:text-black">
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="p-1 hover:text-black">
                <span className="material-symbols-outlined">download</span>
              </button>
              <button className="p-1 hover:text-red-500">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
