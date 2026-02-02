// config/env.js

// Expo only exposes variables prefixed with EXPO_PUBLIC_
const BASE_URL =
  process.env.EXPO_PUBLIC_API_URL || "http://localhost:5001";

export const API_BASE_URL = `${BASE_URL}/api`;

export const APP_NAME = "Hauswart";
export const APP_VERSION = "1.0.0";

export const STORAGE_KEYS = {
  TOKEN: "hauswart_token",
  ROLE: "hauswart_role",
  USER: "hauswart_user",
};
