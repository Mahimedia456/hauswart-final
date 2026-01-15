export default function RoleCard({ label, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex items-center gap-3 bg-white p-4 shadow-md rounded-[12px] border border-[#E9E9E9] hover:border-[#F38B14] transition-all"
    >
      <span className="material-symbols-outlined text-[#F38B14] text-3xl">{icon}</span>

      <p className="text-[#111111] font-medium">{label}</p>
    </div>
  );
}
