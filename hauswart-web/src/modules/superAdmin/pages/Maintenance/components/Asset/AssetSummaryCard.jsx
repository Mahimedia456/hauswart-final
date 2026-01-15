import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";

export default function AssetSummaryCard() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const asset = {
    name: "Air Handling Unit - AHU-01",
    id: "ASSET-734-B1",
    category: "HVAC",
    status: "Active",
    image: "https://via.placeholder.com/300",
    model: "Trane TVR-200",
    serial: "SN-987654321",
    manufacturer: "Trane Inc.",
    installDate: "15 Jan 2021",
    warrantyExpiry: "14 Jan 2024",
    lastMaintenance: "01 Aug 2023",
    nextMaintenance: "01 Nov 2023",
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8dcce]">
      <div className="flex gap-6">
        
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-xl font-bold">{asset.name}</h2>
          <p className="text-[#9c7649] mb-4">{dict.asset_id}: {asset.id}</p>

          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{asset.category}</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">{dict.asset_status_active}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <p><strong>{dict.asset_model}:</strong> {asset.model}</p>
            <p><strong>{dict.asset_serial}:</strong> {asset.serial}</p>
            <p><strong>{dict.asset_manufacturer}:</strong> {asset.manufacturer}</p>
            <p><strong>{dict.asset_installDate}:</strong> {asset.installDate}</p>
            <p className="text-green-700"><strong>{dict.asset_warrantyExpiry}:</strong> {asset.warrantyExpiry}</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-48">
          <div
            className="aspect-video bg-gray-200 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url('${asset.image}')` }}
          ></div>

          <button className="w-full mt-2 px-3 py-1 bg-[#f4eee7] rounded-lg text-sm hover:bg-[#e8dcce]">
            {dict.asset_changeImage}
          </button>
        </div>
      </div>
    </div>
  );
}
