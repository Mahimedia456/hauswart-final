export default function DocumentFolderItem({ folder, activeFolder, onClick }) {
  const isActive = activeFolder === folder.name;

  return (
    <li className="relative">
      {/* Active bar */}
      {isActive && <div className="absolute left-0 top-0 h-full w-0.5 bg-primary"></div>}

      {/* Main folder */}
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-2 rounded-lg text-sm 
          ${isActive ? "text-primary bg-gray-100 font-semibold" : "text-gray-700 hover:bg-gray-100"}`}
      >
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">folder</span>
          {folder.name}
        </span>

        <span className="material-symbols-outlined text-lg">
          {folder.children.length ? (isActive ? "expand_more" : "chevron_right") : "chevron_right"}
        </span>
      </button>

      {/* Subfolders */}
      {isActive && folder.children.length > 0 && (
        <ul className="pl-6 mt-1 space-y-1">
          {folder.children.map((sub, idx) => (
            <li key={idx}>
              <button className="flex items-center gap-2 p-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                <span className="material-symbols-outlined text-lg">folder</span>
                {sub}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
