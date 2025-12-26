import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

const DUMMY_PROPERTIES = [
  {
    id: "prop-1",
    name: "Hauswart Tower",
    organization: "Global Holdings Inc.",
    type: "Commercial",
    floors: 45,
    units: 320,
    fm: "Elena Rodriguez",
    status: "Active",
    statusTone: "green",
    created: "2025-03-12",
  },
  {
    id: "prop-2",
    name: "Maplewood Gardens",
    organization: "GreenLeaf Properties",
    type: "Residential",
    floors: 12,
    units: 84,
    fm: "Marcus Chen",
    status: "Active",
    statusTone: "green",
    created: "2025-03-10",
  },
  {
    id: "prop-3",
    name: "Oakridge Industrial Park",
    organization: "First National REIT",
    type: "Industrial",
    floors: 3,
    units: 15,
    fm: "Sarah Jenkins",
    status: "Active",
    statusTone: "green",
    created: "2025-03-05",
  },
  {
    id: "prop-4",
    name: "The Grand Plaza",
    organization: "Global Holdings Inc.",
    type: "Mixed Use",
    floors: 25,
    units: 150,
    fm: "Aisha Khan",
    status: "Archived",
    statusTone: "gray",
    created: "2025-02-28",
  },
];

export default function PropertiesList() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [search, setSearch] = useState("");

  const filtered = DUMMY_PROPERTIES.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const tone = (t) => {
    if (t === "green") return "bg-green-100 text-green-800";
    if (t === "gray") return "bg-slate-200 text-slate-700";
    return "bg-slate-100 text-slate-600";
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <header className="flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{dict.properties}</h1>
          <p className="text-slate-500 mt-1">{dict.properties_subtitle}</p>
        </div>

        <button
          onClick={() => navigate("/super-admin/properties/create")}
          className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[#F38B14] text-white text-sm font-semibold hover:bg-black transition"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          {dict.createProperty}
        </button>
      </header>

      {/* FILTER BAR */}
      <section className="bg-white/80 border border-slate-200 rounded-2xl shadow p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Select label={dict.filter_org}>
            <option>{dict.filter_org}</option>
            <option>Global Holdings Inc.</option>
            <option>GreenLeaf Properties</option>
          </Select>

          <Select label={dict.filter_propertyType}>
            <option>{dict.filter_propertyType}</option>
            <option>{dict.type_residential}</option>
            <option>{dict.type_commercial}</option>
            <option>{dict.type_industrial}</option>
            <option>{dict.type_mixed}</option>
          </Select>

          <Select label={dict.filter_assignedFM}>
            <option>{dict.filter_assignedFM}</option>
            <option>John Doe</option>
            <option>Jane Smith</option>
          </Select>

          <Select label={dict.filter_status}>
            <option>{dict.filter_status}</option>
            <option>{dict.status_active}</option>
            <option>{dict.status_archived}</option>
          </Select>

          <SearchInput
            label={dict.searchProperty}
            placeholder={dict.searchPropertyPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* TABLE */}
      <section className="bg-white/80 border border-slate-200 rounded-2xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
              <tr>
                <Th>{dict.col_propertyName}</Th>
                <Th>{dict.col_organization}</Th>
                <Th>{dict.col_type}</Th>
                <Th>{dict.col_floorsUnits}</Th>
                <Th>{dict.col_facilityManager}</Th>
                <Th>{dict.col_status}</Th>
                <Th>{dict.col_createdDate}</Th>
                <Th right>{dict.col_actions}</Th>
              </tr>
            </thead>

            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center text-slate-400 py-10">
                    {dict.noProperties}
                  </td>
                </tr>
              )}

              {filtered.map((p, idx) => (
                <tr
                  key={p.id}
                  className={`border-t hover:bg-orange-50/50 cursor-pointer ${
                    idx % 2 ? "bg-slate-50/30" : "bg-white"
                  }`}
                  onClick={() => navigate(`/super-admin/properties/${p.id}`)}
                >
                  <Td strong>{p.name}</Td>
                  <Td>{p.organization}</Td>
                  <Td>
                    <span className="px-3 py-1 text-xs rounded-full bg-slate-200">
                      {p.type}
                    </span>
                  </Td>
                  <Td>
                    {p.floors} {dict.label_floors} / {p.units} {dict.label_units}
                  </Td>
                  <Td>{p.fm}</Td>
                  <Td>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${tone(p.statusTone)}`}>
                      {p.status}
                    </span>
                  </Td>
                  <Td>{p.created}</Td>
                  <Td>
                    <button
                      className="text-slate-500 hover:text-slate-900"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

/* SHARED COMPONENTS */
function Select({ label, children, ...props }) {
  return (
    <div>
      <select
        {...props}
        className="w-full bg-slate-50 h-11 px-3 rounded-lg border border-slate-200 text-sm"
      >
        {children}
      </select>
    </div>
  );
}

function SearchInput({ label, placeholder, value, onChange }) {
  return (
    <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
      <input
        className="w-full bg-slate-50 h-11 pl-10 pr-3 rounded-lg border border-slate-200 text-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function Th({ children, right }) {
  return (
    <th
      className={`px-6 py-3 font-medium ${right ? "text-right" : "text-left"}`}
    >
      {children}
    </th>
  );
}

function Td({ children, strong, right }) {
  return (
    <td
      className={`px-6 py-3 ${
        strong ? "font-semibold text-slate-900" : "text-slate-700"
      } ${right ? "text-right" : ""}`}
    >
      {children}
    </td>
  );
}
