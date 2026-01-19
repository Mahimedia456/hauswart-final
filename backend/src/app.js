const express = require("express");
const cors = require("cors");

const authRoutes = require("./api/auth/routes");

const app = express();

app.use(
 cors({
    origin: true, // ALLOW ALL ORIGINS (DEV ONLY)
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/health/db", async (req, res) => {
  res.json({ status: "ok", db: "connected" });
});

app.use("/api/auth", authRoutes);

module.exports = app;
