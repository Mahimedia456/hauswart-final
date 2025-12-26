import { useState } from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

// Dummy message data
const dummyMessages = [
  {
    id: 1,
    sender: "John Doe",
    role: "Tenant",
    time: "9:30 AM",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBd3ukT0H4fujnsmrqxNUflGMd7Uj-muAign6eBP8s4BtdHeuISbWQSBtawmBcfF2H55OOCDHRT-7pQ2tL4qA27b2mwB-F9xXtAi_YO7raO7UlnVxXit8_2nLWA5PiMU4zwHPlmD1hTGLnVLlFVIK59L45D1MYkJXeF1fXwPTHgGed4GRl_3Da83DaIqwcS0rLvlTPPZ9WuqQ-zUmpgufsxnWZ74yOLAEL_P0B0z2bnwufu6jwh4ICQbtSe-GPZq0kZpdCoRh8zjvo",
    message:
      "The server room AC is making a loud noise again. Can someone please check it out?",
    type: "text",
  },
  {
    id: 2,
    sender: "Mike Johnson",
    role: "Technician",
    time: "9:32 AM",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQZ_3HybkJ9nZ2tmZ0FUcnVfjSNyK9NjhNlVdTi2cNob7STdzHi0x0S0apLcrxLqChvIXkjfmLL4BYqfCZXVhqY2xMbvQCzXbUK2PbpO55AOc0oVXgARn_z__iQKapzQjYe45WV2-_7jZ5Fth1v-s8eWcSBrHLFOA7fvEAhhnDiTQ1fZLbtNp4KnQOAJp-dxsUYXKp0bvI5ne5Y8eY7P5YTr0JJtmcRdSTYwDfkUJgec58b40PGaM-gJI5ZqF6VDnz19hoATd6h7E",
    message: "On my way to check it.",
    type: "text",
  },
  {
    id: 3,
    sender: "System Message",
    role: "system",
    time: "9:45 AM",
    message: "Technician arrived onsite.",
    type: "system",
  },
  {
    id: 4,
    sender: "Super Admin",
    role: "Super Admin",
    time: "9:50 AM",
    isSelf: true,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ_FOjZYKgNYhVkyATJvpy2M4xm0JbQCDQeil8h62hYcAKeHWWkMOW5i7N2lCqXCvv-csSmLwOSrL1C7-qhGkm2VnSl_M7XCZN0kIN2d4jWm9W29ECG_Gt5AOUWHgyyzUzsvlmrxwLD4TCYLixI7GwlEaNUK6HEMLh1_9p2HKGJ6_-7Bs6F28I8fQ93oovpGcjuO6_oeFgA9qa5WzsGq8UWVDsGxjg2PPTyeut2tN9u89DuUJQnXC-4uQ5iKUaySy2lV7SvJ3WeGo",
    message:
      "Thanks, Mike. Please upload a photo of the unit and a voice note once you've assessed it.",
    type: "text",
  },
];

export default function ChatHub() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: dict.you,
        role: "Super Admin",
        isSelf: true,
        time: "now",
        message: input.trim(),
        type: "text",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ_FOjZYKgNYhVkyATJvpy2M4xm0JbQCDQeil8h62hYcAKeHWWkMOW5i7N2lCqXCvv-csSmLwOSrL1C7-qhGkm2VnSl_M7XCZN0kIN2d4jWm9W29ECG_Gt5AOUWHgyyzUzsvlmrxwLD4TCYLixI7GwlEaNUK6HEMLh1_9p2HKGJ6_-7Bs6F28I8fQ93oovpGcjuO6_oeFgA9qa5WzsGq8UWVDsGxjg2PPTyeut2tN9u89DuUJQnXC-4uQ5iKUaySy2lV7SvJ3WeGo",
      },
    ]);

    setInput("");
  };

  return (
    <div className="flex gap-6">

      {/* LEFT SIDEBAR (Participants + Filters) */}
      <div className="w-1/4 flex flex-col gap-6">

        {/* Participants */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          
          {/* HEADER + ACTION BUTTONS */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold">{dict.participants}</h3>

            <div className="flex gap-2">

              {/* ADD USERS */}
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center gap-1 text-sm text-gray-700">
                <span className="material-symbols-outlined text-sm">person_add</span>
                {dict.addUsers ?? "Add Users"}
              </button>

              {/* ASSIGN CHAT HANDLER */}
              <button className="p-2 bg-primary text-white hover:bg-black rounded-lg flex items-center gap-1 text-sm">
                <span className="material-symbols-outlined text-sm">supervisor_account</span>
                {dict.assignChat ?? "Assign Chat"}
              </button>

            </div>
          </div>

          {/* LIST OF PARTICIPANTS */}
          <div className="space-y-2">
            {[
              { name: "John Doe", role: dict.tenant },
              { name: "Jane Smith", role: dict.facilityManager },
              { name: "Mike Johnson", role: dict.technician },
              { name: dict.superAdmin, role: dict.superAdmin },
            ].map((p, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-2 rounded-lg ${
                  p.role === dict.superAdmin ? "ring-2 ring-primary bg-orange-50" : "hover:bg-gray-100"
                }`}
              >
                <div className="size-10 bg-gray-300 rounded-full"></div>
                <div className="flex flex-col">
                  <p className="font-medium text-sm">{p.name}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 w-fit">{p.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <h3 className="font-bold text-lg mb-2">{dict.filters}</h3>

          <div className="flex flex-wrap gap-2 mb-4">
            <button className="px-3 py-1 text-sm bg-primary text-white rounded-full">
              {dict.allMessages}
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 rounded-full">
              {dict.attachmentsOnly}
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 rounded-full">
              {dict.adminMessages}
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 rounded-full">
              {dict.voiceNotes}
            </button>
          </div>

          <input
            className="w-full px-3 py-2 bg-gray-100 rounded-lg text-sm"
            placeholder={dict.searchMessages}
          />
        </div>
      </div>

      {/* MIDDLE CHAT THREAD */}
      <div className="w-1/2 flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div>
            <p className="font-bold">{dict.ticketTitle} #4830</p>
            <p className="text-sm text-gray-500">{dict.locationSample}</p>
          </div>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            {dict.inProgress}
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-[#F7F7F7]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.isSelf ? "justify-end" : "justify-start"}`}
            >
              {!msg.isSelf && msg.type !== "system" && (
                <img src={msg.avatar} className="size-8 rounded-full" alt="avatar" />
              )}

              <div className={`max-w-[70%] flex flex-col ${msg.isSelf ? "items-end" : "items-start"}`}>
                {msg.type !== "system" && (
                  <div className="text-xs text-gray-500 mb-1">
                    <span className="font-bold">{msg.sender}</span> • {msg.time}
                  </div>
                )}

                {msg.type === "system" ? (
                  <div className="text-center text-xs text-gray-500 w-full">{msg.message}</div>
                ) : (
                  <div
                    className={`p-3 rounded-xl ${
                      msg.isSelf
                        ? "bg-black text-white rounded-br-none ring-2 ring-primary"
                        : msg.role === dict.technician
                        ? "bg-orange-100 text-orange-900 rounded-tl-none"
                        : "bg-blue-100 text-blue-900 rounded-tl-none"
                    }`}
                  >
                    {msg.message}
                  </div>
                )}
              </div>

              {msg.isSelf && <img src={msg.avatar} className="size-8 rounded-full" alt="avatar" />}
            </div>
          ))}
        </div>

        {/* INPUT BAR */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center bg-gray-100 rounded-xl p-2">
            <button className="p-2 text-gray-500 hover:text-primary rounded-full">
              <span className="material-symbols-outlined">attach_file</span>
            </button>

            <input
              className="flex-1 bg-transparent px-3 focus:ring-0 outline-none text-sm"
              placeholder={dict.writeMessage}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={sendMessage} className="p-2 bg-primary text-white rounded-lg hover:bg-black">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT DETAILS PANEL */}
      <div className="w-1/4 flex flex-col gap-6">
        <div className="p-4 bg-white rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2">{dict.messageDetails}</h3>
          <p className="text-sm text-gray-500">{dict.noMessageSelected}</p>
        </div>
      </div>
    </div>
  );
}
