const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "hauswart-dev-secret";
const JWT_EXPIRES_IN = "7d";

exports.sign = (payload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

exports.verify = (token) =>
  jwt.verify(token, JWT_SECRET);
