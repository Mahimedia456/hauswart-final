// src/modules/auth/pages/ResetPassword.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (password.length < 4) return;
    navigate("/auth/login");
  };

  return (
    <div className="
      w-full max-w-md p-10 rounded-2xl bg-white/60
      backdrop-blur-xl border border-white/40
      shadow-[0_8px_25px_rgba(0,0,0,0.08)]
    ">
      <h2 className="text-2xl font-bold text-center mb-4">
        Create new password
      </h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
          className="
            w-full h-11 px-4 rounded-xl bg-white/80 border border-slate-300 
            outline-none focus:ring-2 focus:ring-[#F38B14]
          "
        />

        <button
          type="submit"
          className="
            w-full h-11 rounded-xl bg-[#F38B14] text-white font-medium 
            hover:bg-black transition shadow-md shadow-orange-300/30
          "
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
