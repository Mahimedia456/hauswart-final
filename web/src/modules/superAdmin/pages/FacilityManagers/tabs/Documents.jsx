import { useState } from "react";
import DocumentFolderItem from "../components/DocumentFolderItem";

export default function Documents() {
  const [activeFolder, setActiveFolder] = useState("Contracts");

  // ---------------------------
  // Folder Structure
  // ---------------------------
  const folders = [
    { name: "Compliance Documents", children: [] },
    {
      name: "Contracts",
      children: ["Vendor Agreements", "Client Contracts"],
    },
    { name: "Property Manuals", children: [] },
    { name: "Uploaded Files", children: [] },
    { name: "Tenant Documents", children: [] },
    { name: "Archived", children: [] },
  ];

  // ---------------------------
  // Dummy Documents
  // ---------------------------
  const documents = [
    {
      file: "MSA_Vendor_Innovatech.pdf",
      type: "PDF",
      icon: "picture_as_pdf",
      color: "text-red-600",
      category: "Contracts",
      uploadedBy: { name: "Jese Leos", avatar: "https://i.pravatar.cc/40?img=1" },
      uploadedDate: "2024-07-21",
      expiry: "2026-07-21",
    },
    {
      file: "Service_Level_Agreement.docx",
      type: "Word",
      icon: "description",
      color: "text-blue-600",
      category: "Contracts",
      uploadedBy: { name: "Robert Brown", avatar: "https://i.pravatar.cc/40?img=2" },
      uploadedDate: "2024-06-15",
      expiry: "-",
    },
    {
      file: "Invoice_Q2_2024.xlsx",
      type: "Excel",
      icon: "grid_on",
      color: "text-green-600",
      category: "Contracts",
      uploadedBy: { name: "Jese Leos", avatar: "https://i.pravatar.cc/40?img=1" },
      uploadedDate: "2024-06-11",
      expiry: "-",
    },
    {
      file: "Building_Main_Entrance.jpg",
      type: "Image",
      icon: "image",
      color: "text-purple-600",
      category: "Uploaded Files",
      uploadedBy: { name: "Admin", avatar: "https://i.pravatar.cc/40?img=3" },
      uploadedDate: "2024-05-30",
      expiry: "-",
    },
  ];

  return (
    <div className="space-y-6">

      {/* ------------------------- GRID LAYOUT ------------------------- */}
      <div className="grid grid-cols-12 gap-6">

        {/* ------------------------- LEFT FOLDERS ------------------------- */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6 h-full border border-gray-200">

            <h2 className="text-lg font-semibold text-gray-900 mb-4">Folders</h2>

            <ul className="space-y-1">
              {folders.map((folder, index) => (
                <DocumentFolderItem
                  key={index}
                  folder={folder}
                  activeFolder={activeFolder}
                  onClick={() => setActiveFolder(folder.name)}
                />
              ))}
            </ul>

          </div>
        </div>

        {/* ------------------------- RIGHT DOCUMENT LIST ------------------------- */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">

            {/* ------------------- SEARCH + FILTERS ------------------- */}
            <div className="p-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200">

              <div className="flex items-center gap-4 flex-1 min-w-[200px]">
                {/* Search */}
                <div className="relative w-full max-w-xs">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    search
                  </span>
                  <input
                    type="search"
                    placeholder="Search files..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 bg-gray-100 focus:ring-primary focus:border-primary text-sm"
                  />
                </div>

                {/* Filters */}
                <select className="rounded-lg border-gray-300 bg-gray-100 focus:ring-primary text-sm py-2 px-3">
                  <option>File Type</option>
                  <option>PDF</option>
                  <option>Image</option>
                  <option>Word</option>
                  <option>Excel</option>
                </select>

                <select className="rounded-lg border-gray-300 bg-gray-100 focus:ring-primary text-sm py-2 px-3">
                  <option>Uploaded By</option>
                  <option>Admin</option>
                  <option>John Doe</option>
                </select>
              </div>

              {/* Upload button */}
              <button className="flex items-center gap-2 bg-primary text-white rounded-lg px-5 h-10 hover:bg-black transition">
                <span className="material-symbols-outlined text-base">upload_file</span>
                Upload Document
              </button>
            </div>

            {/* ------------------- DOCUMENT TABLE ------------------- */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-500">
                <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
                  <tr>
                    <Th>File Name</Th>
                    <Th>Type</Th>
                    <Th>Category</Th>
                    <Th>Uploaded By</Th>
                    <Th>Uploaded Date</Th>
                    <Th>Expiry Date</Th>
                    <Th className="text-right">Actions</Th>
                  </tr>
                </thead>

                <tbody>
                  {documents.map((doc, index) => (
                    <tr
                      key={index}
                      className={`border-b hover:bg-gray-50 ${
                        index % 2 === 1 ? "bg-gray-50/50" : "bg-white"
                      }`}
                    >
                      <Td strong>{doc.file}</Td>

                      <td className="px-6 py-4">
                        <span className={`flex items-center gap-2 ${doc.color}`}>
                          <span
                            className="material-symbols-outlined !text-xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            {doc.icon}
                          </span>
                          {doc.type}
                        </span>
                      </td>

                      <Td>{doc.category}</Td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <img
                            src={doc.uploadedBy.avatar}
                            className="h-6 w-6 rounded-full"
                          />
                          <span className="font-medium text-gray-800">
                            {doc.uploadedBy.name}
                          </span>
                        </div>
                      </td>

                      <Td>{doc.uploadedDate}</Td>
                      <Td>{doc.expiry}</Td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 text-gray-500 hover:text-gray-800">
                            <span className="material-symbols-outlined !text-xl">download</span>
                          </button>
                          <button className="p-1.5 text-gray-500 hover:text-gray-800">
                            <span className="material-symbols-outlined !text-xl">visibility</span>
                          </button>
                          <button className="p-1.5 text-red-500 hover:text-red-700">
                            <span className="material-symbols-outlined !text-xl">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ------------------- PAGINATION ------------------- */}
            <div className="p-4 flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>Rows per page:</span>
                <select className="border-gray-300 bg-transparent rounded-lg py-1 text-sm focus:ring-primary">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>

              <div className="flex items-center gap-4">
                <span>1–10 of 124</span>
                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50" disabled>
                    <span className="material-symbols-outlined !text-lg">chevron_left</span>
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <span className="material-symbols-outlined !text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

/* ----------------- Helpers ----------------- */
function Th({ children, className }) {
  return (
    <th className={`px-6 py-3 font-semibold text-left ${className}`}>
      {children}
    </th>
  );
}

function Td({ children, strong }) {
  return (
    <td className={`px-6 py-4 ${strong ? "font-medium text-gray-900" : ""}`}>
      {children}
    </td>
  );
}
