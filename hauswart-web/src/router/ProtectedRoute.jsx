import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { token, role, loading } = useAuth();

  // wait for auth hydration
  if (loading) return null;

  // not logged in
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  // role not allowed
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/auth/login" replace />;
  }

  // ✅ SUPPORT BOTH PATTERNS
  return children ? children : <Outlet />;
}
