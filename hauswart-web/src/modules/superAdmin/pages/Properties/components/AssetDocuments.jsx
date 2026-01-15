import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import { useState } from "react";

export default function AssetDocuments({ documents = [] }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [files, setFiles] = useState(documents);

  // HANDLE UPLOAD
  function handleUpload(e) {
    const newFiles = Array.from(e.target.files).map((f) => ({
      id: Date.now() + Math.random(),
      name: f.name,
      type: f.type.includes("pdf") ? "pdf" : "image",
      preview: URL.createObjectURL(f),
    }));

    setFiles([...files, ...newFiles]);
  }

  // HANDLE DELETE
  function handleDelete(id) {
    setFiles(files.filter((f) => f.id !== id));
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-4">{dict.prop_asset_docs_title}</h3>

      {/* DOCUMENT GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">

        {files.map((doc) => (
          <div key={doc.id} className="group relative flex flex-col items-center gap-2">

            {/* PREVIEW */}
            {doc.type === "pdf" ? (
              <div className="flex h-24 w-full items-center justify-center rounded-lg bg-gray-100">
                <span className="material-symbols-outlined text-4xl text-red-600">picture_as_pdf</span>
              </div>
            ) : (
              <img
                src={doc.preview}
                alt={doc.name}
                className="h-24 w-full object-cover rounded-lg"
              />
            )}

            {/* FILENAME */}
            <p className="w-full truncate text-xs text-center">{doc.name}</p>

            {/* HOVER ACTIONS */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2 rounded-lg">

              {/* VIEW */}
              <button className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40">
                <span className="material-symbols-outlined text-white">visibility</span>
              </button>

              {/* DOWNLOAD */}
              <a
                href={doc.preview}
                download={doc.name}
                className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40"
              >
                <span className="material-symbols-outlined text-white">download</span>
              </a>

              {/* DELETE */}
              <button
                onClick={() => handleDelete(doc.id)}
                className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40"
              >
                <span className="material-symbols-outlined text-white">delete</span>
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* UPLOAD AREA */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl text-gray-400">cloud_upload</span>

        <p className="mt-2 text-sm text-gray-500">{dict.prop_asset_docs_uploadText}</p>

        <label className="mt-4 bg-primary/10 text-primary px-4 py-2 rounded-lg cursor-pointer font-bold text-sm hover:bg-primary/20">
          {dict.prop_asset_docs_uploadButton}
          <input
            type="file"
            accept="image/*,application/pdf"
            className="hidden"
            multiple
            onChange={handleUpload}
          />
        </label>
      </div>
    </div>
  );
}
