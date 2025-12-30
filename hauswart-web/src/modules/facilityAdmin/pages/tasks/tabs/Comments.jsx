import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function Comments() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [message, setMessage] = useState("");

  const comments = [
    {
      id: 1,
      type: "system",
      text: dict.task_created_system,
    },
    {
      id: 2,
      type: "system",
      text: dict.task_assigned_technician,
      icon: "assignment_ind",
    },
    {
      id: 3,
      author: "Sarah Jenkins",
      role: dict.facility_manager,
      roleTone: "primary",
      time: dict.two_hours_ago,
      message:
        "Please check the HVAC unit on the 3rd floor. It's making a rattling noise. I've attached a photo of the unit tag for reference.",
      attachments: ["image"],
      align: "left",
    },
    {
      id: 4,
      author: "Bob Smith",
      role: dict.technician,
      roleTone: "blue",
      time: dict.one_hour_ago,
      message:
        "Received. I'll head up there in 10 minutes. Do I need a key for the maintenance room?",
      align: "right",
    },
    {
      id: 5,
      author: "Sarah Jenkins",
      role: dict.facility_manager,
      roleTone: "primary",
      time: dict.just_now,
      message:
        "Yes, pick it up from security. Here is the access code document if they ask.",
      files: ["Access_Codes_v2.pdf"],
      align: "left",
    },
  ];

  return (
    <div className="flex flex-col h-full">

      {/* THREAD */}
      <div className="flex-1 overflow-y-auto space-y-6 p-6 bg-[#fcfaf8]">

        {comments.map((c) =>
          c.type === "system" ? (
            <SystemMessage key={c.id} text={c.text} icon={c.icon} />
          ) : (
            <CommentBubble key={c.id} data={c} />
          )
        )}

        <div className="h-4" />
      </div>

      {/* COMPOSER */}
      <div className="border-t bg-white p-6">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder={dict.write_comment_placeholder}
          className="w-full resize-none rounded-lg border p-4 text-sm focus:border-[#F38B14] focus:ring-1 focus:ring-[#F38B14]"
        />

        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-500">
            <IconBtn icon="attach_file" title={dict.add_attachment} />
            <IconBtn icon="image" title={dict.add_image} />
            <IconBtn icon="sentiment_satisfied" title={dict.add_emoji} />
            <span className="text-xs italic text-gray-400 ml-2">
              {dict.enter_to_send}
            </span>
          </div>

          <button
            disabled={!message.trim()}
            className="flex items-center gap-2 bg-[#F38B14] hover:bg-black text-white px-5 py-2.5 rounded-lg text-sm font-bold disabled:opacity-50"
          >
            {dict.send_comment}
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SystemMessage({ text, icon }) {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-100 border rounded-lg px-4 py-2 text-xs text-gray-500 flex items-center gap-2">
        {icon && (
          <span className="material-symbols-outlined text-[16px]">
            {icon}
          </span>
        )}
        {text}
      </div>
    </div>
  );
}

function CommentBubble({ data }) {
  const isRight = data.align === "right";

  return (
    <div className={`flex gap-4 ${isRight ? "justify-end" : ""}`}>
      {!isRight && <Avatar />}

      <div className="max-w-[85%] relative group">
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">{data.author}</span>
              <RoleBadge tone={data.roleTone}>{data.role}</RoleBadge>
            </div>
            <span className="text-xs text-gray-400">{data.time}</span>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            {data.message}
          </p>

          {data.attachments && (
            <div className="mt-3">
              <div className="h-20 w-32 rounded-lg bg-gray-200" />
            </div>
          )}

          {data.files && (
            <div className="mt-3 flex gap-2">
              {data.files.map((f) => (
                <FilePill key={f} name={f} />
              ))}
            </div>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition flex gap-1 bg-white p-1 rounded shadow border">
          <IconBtn icon="edit" />
          <IconBtn icon="delete" danger />
        </div>
      </div>

      {isRight && <Avatar />}
    </div>
  );
}

function Avatar() {
  return (
    <div className="h-10 w-10 rounded-full bg-gray-200 border" />
  );
}

function RoleBadge({ children, tone }) {
  const map = {
    primary: "border-[#F38B14] text-[#F38B14]",
    blue: "border-blue-500 text-blue-600",
  };

  return (
    <span className={`px-2 py-0.5 text-[10px] border rounded-full font-bold uppercase ${map[tone]}`}>
      {children}
    </span>
  );
}

function FilePill({ name }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg border bg-gray-50 text-xs">
      <span className="material-symbols-outlined text-red-500">
        description
      </span>
      <span className="font-bold">{name}</span>
    </div>
  );
}

function IconBtn({ icon, title, danger }) {
  return (
    <button
      title={title}
      className={`p-1 rounded hover:bg-gray-100 ${
        danger ? "hover:text-red-500" : "hover:text-[#F38B14]"
      }`}
    >
      <span className="material-symbols-outlined text-[18px]">
        {icon}
      </span>
    </button>
  );
}
