import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";
export default function AssetNotes() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const notes = [
    {
      user: "John Smith",
      date: "2 days ago",
      text: dict.asset_note_dummy,
      avatar: "https://via.placeholder.com/50"
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8dcce]">

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">{dict.asset_notes}</h3>
        <button className="h-9 px-4 rounded-lg bg-[#f4eee7] text-sm font-bold hover:bg-[#e8dcce]">
          {dict.asset_addNote}
        </button>
      </div>

      <div className="space-y-4">
        {notes.map((note, index) => (
          <div key={index} className="flex gap-3">
            <div
              className="size-8 rounded-full bg-cover"
              style={{ backgroundImage: `url('${note.avatar}')` }}
            ></div>

            <div>
              <p className="text-sm font-medium">
                {note.user}
                <span className="ml-2 text-xs text-[#9c7649]">{note.date}</span>
              </p>

              <p className="text-sm bg-[#f8f7f5] p-2 rounded-lg mt-1">{note.text}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
