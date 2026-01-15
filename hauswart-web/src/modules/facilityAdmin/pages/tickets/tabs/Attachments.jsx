import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import { useState } from "react";

export default function Attachments() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // --------------------------
  // Dummy Attachments
  // --------------------------
  const attachments = [
    {
      id: 1,
      name: "damaged-pipe-01.jpg",
      type: "Image (JPEG)",
      size: "4.2 MB",
      dimensions: "4032x3024",
      uploadedBy: "John Mills",
      date: "12 Nov 2025 — 4:32 PM",
      preview:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuARs-NV5E...",
      tags: ["Before Repair", "Evidence"],
    },
    {
      id: 2,
      name: "Inspection_Report_Q4.pdf",
      type: "PDF",
      size: "1.8 MB",
      dimensions: "-",
      uploadedBy: "Admin",
      date: "11 Nov 2025 — 11:15 AM",
      preview:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAnrerBlYGQ...",
      tags: [],
    },
    {
      id: 3,
      name: "pipe-repaired-final.jpg",
      type: "Image (JPEG)",
      size: "3.4 MB",
      dimensions: "3048x2048",
      uploadedBy: "John Mills",
      date: "12 Nov 2025 — 5:01 PM",
      preview:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ4mP-OPcC...",
      tags: ["After Repair"],
    },
  ];

  const [selected, setSelected] = useState(attachments[0]);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between flex-wrap items-center">
        <div>
          <h1 className="text-3xl font-black text-[#1c150d]">
            {dict.attachmentsForTicket} #{4830}
          </h1>
          <p className="text-[#9c7c49]">
            {dict.attachmentsSubtitle}
          </p>
        </div>

        <div className="flex gap-3">
          <button className="h-10 px-4 rounded-xl bg-gray-100 hover:bg-black/10 font-semibold">
            ← {dict.backToTicket}
          </button>

          <button className="h-10 px-4 rounded-xl bg-[#F38B14] text-white font-semibold hover:bg-black">
            {dict.uploadFiles}
          </button>
        </div>
      </div>

      {/* LAYOUT: LEFT LIST + RIGHT DETAILS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT PANEL */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* FILTER BAR */}
          <div className="p-4 bg-white border rounded-xl flex flex-col gap-4">

            {/* Search + Sort */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1">
                <input
                  className="w-full h-12 rounded-xl bg-gray-100 pl-12 text-gray-800"
                  placeholder={dict.searchPlaceholder}
                />
                <span className="material-symbols-outlined absolute left-4 top-3 text-gray-500">
                  search
                </span>
              </div>

              <button className="h-12 px-4 rounded-xl bg-gray-100 flex items-center gap-1">
                {dict.sortNewest}
                <span className="material-symbols-outlined">expand_more</span>
              </button>

              <button className="text-sm font-medium text-[#9c7c49]">
                {dict.clearFilters}
              </button>
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-3">
              {["fileType", "taggedAs", "uploadedBy", "dateRange"].map((key) => (
                <button
                  key={key}
                  className="h-8 px-4 rounded-full bg-gray-100 flex items-center gap-1"
                >
                  {dict[key]}
                  <span className="material-symbols-outlined text-base">
                    expand_more
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ATTACHMENT GALLERY */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {attachments.map((file) => (
              <div
                key={file.id}
                onClick={() => setSelected(file)}
                className={`cursor-pointer rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-all ${
                  selected.id === file.id
                    ? "border-2 border-[#F38B14] ring-4 ring-[#F38B14]/20"
                    : "border-gray-200"
                }`}
              >
                <div
                  className="aspect-video bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: `url('${file.preview}')` }}
                ></div>

                <div className="p-3 text-sm">
                  <p className="font-bold truncate">{file.name}</p>
                  <p className="text-gray-500">
                    {dict.uploadedBy}: {file.uploadedBy}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{file.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-6 bg-white border rounded-xl shadow-sm sticky top-6 h-fit">

          {/* Preview */}
          <div
            className="aspect-video rounded-xl bg-gray-200 bg-cover bg-center relative"
            style={{ backgroundImage: `url('${selected.preview}')` }}
          >
            <button className="absolute top-3 right-3 rounded-full w-9 h-9 bg-black/50 text-white flex items-center justify-center">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>

          {/* Details */}
          <div className="mt-6 space-y-2 text-sm">
            <h3 className="text-lg font-bold">{dict.fileDetails}</h3>

            <Detail label={dict.fileName} value={selected.name} />
            <Detail label={dict.fileType} value={selected.type} />
            <Detail label={dict.fileSize} value={selected.size} />
            <Detail label={dict.dimensions} value={selected.dimensions} />
            <Detail label={dict.uploadedBy} value={selected.uploadedBy} />
            <Detail label={dict.uploadDate} value={selected.date} />
          </div>

          {/* TAGS */}
          <div className="mt-6">
            <h3 className="text-lg font-bold">{dict.tags}</h3>

            <div className="flex flex-wrap gap-2 mt-2">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#F38B14]/20 text-[#F38B14] font-medium flex items-center gap-1"
                >
                  {tag}
                  <span className="material-symbols-outlined text-base cursor-pointer">
                    close
                  </span>
                </span>
              ))}

              <button className="px-3 py-1 rounded-full bg-gray-100 flex items-center gap-1">
                <span className="material-symbols-outlined text-base">add</span>
                {dict.addTag}
              </button>
            </div>
          </div>

          {/* TIMELINE TOGGLE */}
          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-bold">{dict.timeline}</h3>

            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="h-4 w-4 text-[#F38B14]" />
              <span className="text-sm">
                {dict.addToTimeline}
              </span>
            </label>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col gap-3 mt-6 border-t pt-4">
            <button className="h-10 rounded-xl bg-[#F38B14] text-white font-bold hover:bg-black">
              {dict.updateAttachment}
            </button>
            <button className="h-10 rounded-xl border border-gray-400 text-gray-700">
              {dict.download}
            </button>
            <button className="h-10 rounded-xl border border-red-500 text-red-600">
              {dict.deleteFile}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Small detail row component
function Detail({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">{label}:</span>
      <span>{value}</span>
    </div>
  );
}
