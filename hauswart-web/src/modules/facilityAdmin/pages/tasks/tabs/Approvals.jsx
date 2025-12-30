// src/modules/facilityAdmin/pages/Tasks/tabs/Approvals.jsx
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";
import { UpdateTaskStatusModal } from "@/components/modals";

export default function Approvals() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [statusOpen, setStatusOpen] = useState(false);

  return (
    <>
      <div className="space-y-4">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">
            {dict.approvals || "Approvals"}
          </h3>

          <button
            onClick={() => setStatusOpen(true)}
            className="px-4 py-2 rounded-xl bg-[#F38B14] text-white text-sm font-semibold hover:bg-black"
          >
            {dict.update_status || "Update Status"}
          </button>
        </div>

        {/* LIST */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <p className="text-sm text-slate-600">
            Waiting for task status approval.
          </p>
        </div>
      </div>

      {/* STATUS MODAL */}
      <UpdateTaskStatusModal
        open={statusOpen}
        onClose={() => setStatusOpen(false)}
        onSubmit={(data) => {
          console.log("APPROVAL STATUS", data);
          setStatusOpen(false);
        }}
      />
    </>
  );
}
