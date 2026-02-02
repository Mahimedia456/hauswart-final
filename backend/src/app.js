const express = require("express");
const cors = require("cors");

const authRoutes = require("./api/auth/routes");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL, // set on Vercel backend
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman/curl

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ❌ REMOVE THIS if you had it:
// app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", service: "Hauswart API" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/health/db", async (req, res) => {
  res.json({ status: "ok", db: "connected" });
});

app.use("/api/auth", authRoutes);

module.exports = app;
