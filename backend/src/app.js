const express = require("express");
const cors = require("cors");

const authRoutes = require("./api/auth/routes");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://hauswart-final.vercel.app", // ✅ your frontend
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: false, // ✅ keep false since you use JWT in headers (Bearer token)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ IMPORTANT: handle preflight for all routes (Express 5 safe)
app.options(/.*/, cors({ origin: allowedOrigins }));

app.use(express.json());

app.get("/", (req, res) => res.json({ status: "ok", service: "Hauswart API" }));
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);

module.exports = app;
