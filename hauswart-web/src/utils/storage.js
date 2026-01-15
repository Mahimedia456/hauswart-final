// TOKEN
export function getStoredToken() {
  return localStorage.getItem("haus_token") || null;
}

export function setStoredToken(token) {
  localStorage.setItem("haus_token", token);
}

export function clearStoredToken() {
  localStorage.removeItem("haus_token");
}

// ROLE
export function getStoredRole() {
  return localStorage.getItem("haus_role") || null;
}

export function setStoredRole(role) {
  localStorage.setItem("haus_role", role);
}

export function clearStoredRole() {
  localStorage.removeItem("haus_role");
}

// CLEAR BOTH
export function clearStoredAuth() {
  clearStoredToken();
  clearStoredRole();
}
