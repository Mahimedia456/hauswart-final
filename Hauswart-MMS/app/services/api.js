import axios from "axios";
import { API_BASE_URL } from "../config/env";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: log errors in dev
api.interceptors.response.use(
  (res) => res,
  (err) => {
    // You can keep it quiet or log
    // console.log("API Error:", err?.response?.data || err.message);
    return Promise.reject(err);
  }
);

export default api;
