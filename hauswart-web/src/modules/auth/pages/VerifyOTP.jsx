// src/modules/auth/pages/VerifyOTP.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../config/api";


export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
const [error, setError] = useState("");

const submit = async (e) => {
  e.preventDefault();

  if (otp.length !== 6) {
    return setError("Enter 6 digit OTP");
  }

  const email = sessionStorage.getItem("reset_email");
  if (!email) {
    return navigate("/auth/forgot-password");
  }

  try {
    await api.post("/auth/verify-otp", {
      email,
      otp,
    });

    sessionStorage.setItem("reset_otp", otp);
    navigate("/auth/reset-password");
  } catch (err) {
    setError(err?.response?.data?.message || "Invalid OTP");
  }
};
{error && <p className="text-red-500 text-sm">{error}</p>}

  return (
    <div className="
      w-full max-w-md p-10 rounded-2xl bg-white/60
      backdrop-blur-xl border border-white/40
      shadow-[0_8px_25px_rgba(0,0,0,0.08)]
    ">
      <h2 className="text-2xl font-bold text-center mb-4">Enter OTP</h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
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
          Verify
        </button>
      </form>
    </div>
  );
}
