// src/components/ui/FormLayout.jsx

export function Header({ title, subtitle, backLabel, onBack }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-black text-slate-900">{title}</h1>
        <p className="text-slate-500 mt-1">{subtitle}</p>
      </div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-black"
      >
        ← {backLabel}
      </button>
    </div>
  );
}

export function Card({ children }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-10">
      {children}
    </div>
  );
}

export function Section({ title, description, children }) {
  return (
    <section>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      {description && (
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function Grid({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>;
}

export function Input({ label, ...props }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium">
      {label}
      <input
        {...props}
        className="h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#F38B14]/60 focus:border-[#F38B14]"
      />
    </label>
  );
}

export function Select({ label, options, ...props }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium">
      {label}
      <select
        {...props}
        className="h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#F38B14]/60 focus:border-[#F38B14]"
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

export function Textarea({ label, rows = 4, ...props }) {
  return (
    <label className="flex flex-col gap-2 md:col-span-2 text-sm font-medium">
      {label}
      <textarea
        rows={rows}
        {...props}
        className="px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#F38B14]/60 focus:border-[#F38B14]"
      />
    </label>
  );
}

export function Footer({ onCancel, submitLabel }) {
  return (
    <div className="sticky bottom-0 bg-white/80 backdrop-blur border-t px-6 py-4 flex justify-between">
      <button
        onClick={onCancel}
        className="text-sm font-semibold text-slate-500 hover:text-black"
      >
        Cancel
      </button>
      <button className="px-6 py-2 rounded-lg bg-[#F38B14] text-white font-bold hover:bg-black">
        {submitLabel}
      </button>
    </div>
  );
}
