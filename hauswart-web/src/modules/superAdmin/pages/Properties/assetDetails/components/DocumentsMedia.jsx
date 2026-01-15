export default function DocumentsMedia({ dict }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">

      <h3 className="text-lg font-bold mb-4">{dict.prop_assetDocs_title}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {/* DUMMY FILE */}
        <FileItem name="User_Manual.pdf" type="pdf" dict={dict} />
        <ImageItem name="installation.jpg" dict={dict} />
      </div>

      <div className="border-2 border-dashed rounded-lg p-6 text-center">
        <span className="material-symbols-outlined text-4xl text-gray-400">cloud_upload</span>
        <p className="mt-2">{dict.prop_assetDocs_uploadDrag}</p>
        <button className="mt-4 bg-primary/10 px-4 py-2 font-bold text-primary rounded-lg">
          {dict.prop_assetDocs_uploadBtn}
        </button>
      </div>

    </div>
  );
}

function FileItem({ name, type, dict }) {
  return (
    <div className="group relative flex flex-col gap-2">
      <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="material-symbols-outlined text-red-500 text-4xl">picture_as_pdf</span>
      </div>
      <p className="text-xs truncate">{name}</p>

      <HoverActions dict={dict} />
    </div>
  );
}

function ImageItem({ name, dict }) {
  return (
    <div className="group relative flex flex-col gap-2">
      <div className="h-24 bg-gray-200 rounded-lg"></div>
      <p className="text-xs truncate">{name}</p>

      <HoverActions dict={dict} />
    </div>
  );
}

function HoverActions({ dict }) {
  return (
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2 rounded-lg">
      <button className="icon-btn">{dict.prop_assetDocs_view}</button>
      <button className="icon-btn">{dict.prop_assetDocs_download}</button>
      <button className="icon-btn text-red-400">{dict.prop_assetDocs_delete}</button>
    </div>
  );
}
