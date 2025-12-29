export default function EvidenceModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-xl">

        <h2 className="text-xl font-bold mb-2">Add Evidence</h2>
        <p className="text-sm text-gray-500 mb-4">Choose how to upload evidence.</p>

        <div className="space-y-3">
          <button className="w-full h-11 rounded-lg border hover:bg-gray-100">
            Open Gallery
          </button>

          <button className="w-full h-11 rounded-lg border hover:bg-gray-100">
            Open Camera
          </button>
        </div>

        <div className="flex justify-end mt-5">
          <button
            onClick={onClose}
            className="px-4 h-10 rounded-lg text-sm font-semibold text-zinc-600 hover:bg-zinc-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
