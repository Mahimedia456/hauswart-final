// src/layouts/RootLayout.jsx
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RootLayout() {
  const { token } = useAuth();
  const location = useLocation();

  const isAuthRoute = location.pathname.startsWith("/auth");
  const isPublic =
    location.pathname === "/" ||
    location.pathname === "/auth/onboarding";

  // Allow splash + onboarding + all auth pages
  if (isAuthRoute || isPublic) {
    return <Outlet />;
  }

  // Block dashboard pages for non-logged-in users
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  // For logged-in users → continue normally
  return <Outlet />;
}
