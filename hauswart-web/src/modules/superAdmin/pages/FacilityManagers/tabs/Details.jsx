// src/modules/superAdmin/pages/Organizations/tabs/Details.jsx

export default function Details() {
  const details = {
    industry: "Real Estate",
    address: "123 Innovation Street, Frankfurt, Germany",
    timezone: "Europe/Berlin",
    registration: "DE-90812345",
  };

  return (
    <div className="space-y-6">

      <div className="bg-white/80 border border-slate-200 rounded-xl p-6 shadow">

        <h3 className="text-lg font-semibold text-slate-900 mb-4">Organization Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Detail label="Industry Type" value={details.industry} />
          <Detail label="Address" value={details.address} />
          <Detail label="Timezone" value={details.timezone} />
          <Detail label="Registration Number" value={details.registration} />
        </div>

      </div>

    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase text-slate-500 font-medium">{label}</p>
      <p className="text-slate-800 text-sm mt-1">{value}</p>
    </div>
  );
}
