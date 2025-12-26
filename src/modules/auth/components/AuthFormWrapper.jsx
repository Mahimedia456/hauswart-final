export default function AuthFormWrapper({ title, subtitle, children }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FAFAFA] px-4 font-sans relative">

      {/* Hauswart Logo */}
      <div className="mb-8 flex items-center justify-center gap-3">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M10 3.333H30L36.667 10V30L30 36.667H10L3.333 30V10L10 3.333Z" className="fill-[#F38B14]" />
          <path d="M20 28.333V21.667" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M20 15V11.667" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M15 20H11.667" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M28.333 20H25" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        <span className="text-2xl font-bold tracking-tight text-[#111111]">
          Hauswart
        </span>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] p-10 rounded-[12px]">

        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#111111]">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-sm text-[#666666]">{subtitle}</p>
          )}
        </div>

        {children}
      </div>

      <p className="absolute bottom-6 text-xs text-[#666666]">© 2024 Hauswart. All rights reserved.</p>
    </div>
  );
}
