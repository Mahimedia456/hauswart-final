const db = require("../config/db");
const jwt = require("../config/jwt");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const otpEmailTemplate = require("../utils/otpEmailTemplate");
const sendMail = require("../utils/mailer");


/* ===================== */
/* LOGIN */
/* ===================== */
async function login({ email, password }) {
  const result = await db.query(
    "SELECT id, email, password_hash, role FROM users WHERE email = $1",
    [email]
  );

  if (result.rows.length === 0) {
    throw new Error("Invalid credentials");
  }

  const user = result.rows[0];
  const isMatch = await bcrypt.compare(password, user.password_hash);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({
    id: user.id,
    role: user.role,
  });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  };
}

/* ===================== */
/* REGISTER */
/* ===================== */
async function register({
  fullName,
  email,
  phone,
  password,
  role,
  source, // "web" | "mobile"
  propertyCode,
}) {
  if (source === "web" && role !== "FACILITY_ADMIN") {
    throw new Error("Only Facility Admin can register on web");
  }

  if (source === "mobile" && !["TECHNICIAN", "TENANT"].includes(role)) {
    throw new Error("Invalid mobile role");
  }

  const exists = await db.query(
    "SELECT id FROM users WHERE email = $1",
    [email]
  );

  if (exists.rows.length > 0) {
    throw new Error("Email already registered");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const result = await db.query(
    `
    INSERT INTO users (
      full_name,
      email,
      phone,
      password_hash,
      role,
      property_code
    )
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING id, email, role
    `,
    [
      fullName,
      email,
      phone,
      passwordHash,
      role,
      propertyCode || null,
    ]
  );

  return result.rows[0];
}

/* ===================== */
/* FORGOT PASSWORD – SEND OTP */
/* ===================== */
async function sendResetOTP(email) {
  const userRes = await db.query(
    "SELECT id FROM users WHERE email = $1",
    [email]
  );

  if (!userRes.rows.length) {
    throw new Error("User not found");
  }

  const userId = userRes.rows[0].id;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpHash = crypto.createHash("sha256").update(otp).digest("hex");

  await db.query(
    `
    INSERT INTO password_resets (user_id, otp_code, expires_at)
    VALUES ($1, $2, NOW() + INTERVAL '10 minutes')
    `,
    [userId, otpHash]
  );

  await sendMail({
    to: email,
    subject: "Your Hauswart Password Reset Code",
    html: otpEmailTemplate({ otp }),
  });
}

/* ===================== */
/* VERIFY OTP */
/* ===================== */
async function verifyResetOTP({ email, otp }) {
  const otpHash = crypto.createHash("sha256").update(otp).digest("hex");

  const result = await db.query(
    `
    SELECT pr.id
    FROM password_resets pr
    JOIN users u ON u.id = pr.user_id
    WHERE u.email = $1
      AND pr.otp_code = $2
      AND pr.used = false
      AND pr.expires_at > NOW()
    `,
    [email, otpHash]
  );

  if (!result.rows.length) {
    throw new Error("Invalid or expired OTP");
  }
}

/* ===================== */
/* RESET PASSWORD */
/* ===================== */
async function resetPassword({ email, otp, newPassword }) {
  await verifyResetOTP({ email, otp });

  const passwordHash = await bcrypt.hash(newPassword, 10);

  await db.query(
    `
    UPDATE users
    SET password_hash = $1
    WHERE email = $2
    `,
    [passwordHash, email]
  );

  await db.query(
    `
    UPDATE password_resets
    SET used = true
    WHERE user_id = (SELECT id FROM users WHERE email = $1)
    `,
    [email]
  );
}

module.exports = {
  login,
  register,
  sendResetOTP,
verifyOTP: verifyResetOTP,
  resetPassword,
};
