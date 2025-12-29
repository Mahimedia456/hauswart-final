// src/modules/auth/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";

export default function Register() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Caretaker");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!terms) return setError("You must agree to the Terms & Privacy Policy.");
    if (password !== confirmPassword)
      return setError("Passwords do not match.");

    // Continue to OTP screen
    navigate("/auth/verify-otp");
  };

  return (
    <div
      className="
      min-h-screen w-full flex items-center justify-center px-4
      bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100
    "
    >
      <div
        className="
        w-full max-w-md p-10 rounded-2xl
        bg-white/60 backdrop-blur-xl
        border border-white/40 shadow-[0_8px_25px_rgba(0,0,0,0.08)]
      "
      >
        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 bg-[#F38B14] rounded-xl flex items-center justify-center shadow-lg shadow-orange-300/30">
            <span className="material-symbols-outlined text-white text-3xl">
              person_add
            </span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-slate-900">
          Create Your Hauswart Account
        </h2>
        <p className="text-center text-slate-600 mt-1">
          Join the leading facility management platform.
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <div className="flex items-center rounded-xl bg-white/80 border border-slate-300">
              <span className="material-symbols-outlined px-3 text-slate-500">
                person
              </span>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="flex-1 h-11 px-2 bg-transparent outline-none"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="flex items-center rounded-xl bg-white/80 border border-slate-300">
              <span className="material-symbols-outlined px-3 text-slate-500">
                mail
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-11 px-2 bg-transparent outline-none"
                placeholder="you@company.com"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <div className="flex items-center rounded-xl bg-white/80 border border-slate-300">
              <span className="material-symbols-outlined px-3 text-slate-500">
                phone
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 h-11 px-2 bg-transparent outline-none"
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-2">Select Role</label>

            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-slate-500">
                badge
              </span>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="
                  w-full h-11 pl-12 pr-10 rounded-xl bg-white/80 border border-slate-300 
                  outline-none focus:ring-2 focus:ring-[#F38B14]
                "
              >
                <option>Caretaker</option>
                <option>Facility Manager</option>
                <option>Service Provider</option>
                <option>Tenant</option>
              </select>

              <span className="material-symbols-outlined absolute right-3 top-3 text-slate-500">
                expand_more
              </span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="flex items-center rounded-xl bg-white/80 border border-slate-300">
              <span className="material-symbols-outlined px-3 text-slate-500">
                lock
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 h-11 px-2 bg-transparent outline-none"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <div className="flex items-center rounded-xl bg-white/80 border border-slate-300">
              <span className="material-symbols-outlined px-3 text-slate-500">
                lock
              </span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="flex-1 h-11 px-2 bg-transparent outline-none"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="h-4 w-4 rounded text-[#F38B14]"
            />
            <p className="text-sm">
              I agree to the{" "}
              <span className="text-[#F38B14] underline cursor-pointer">
                Terms & Privacy Policy
              </span>
            </p>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* CTA */}
          <button
            type="submit"
            className="
              w-full h-11 rounded-xl bg-[#F38B14] text-white font-semibold
              hover:bg-black transition shadow-md shadow-orange-300/30
            "
          >
            Create Account
          </button>
        </form>

        <p
          className="text-center mt-4 text-[#F38B14] cursor-pointer underline"
          onClick={() => navigate("/auth/login")}
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}
