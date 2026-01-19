const express = require("express");
const router = express.Router();
const authService = require("../../services/auth.service");

/* ===================== */
/* LOGIN */
/* ===================== */
router.post("/login", async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

/* ===================== */
/* REGISTER */
/* ===================== */
router.post("/register", async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* ===================== */
/* FORGOT PASSWORD */
/* ===================== */


router.post("/forgot-password", async (req, res) => {
  try {
    await authService.sendResetOTP(req.body.email);
    res.json({ message: "OTP sent" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
/* ===================== */
/* Verifyotp */
/* ===================== */


router.post("/verify-otp", async (req, res) => {
  try {
    await authService.verifyOTP(req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



/* ===================== */
/* Succes */
/* ===================== */

router.post("/reset-password", async (req, res) => {
  try {
    await authService.resetPassword(req.body);
    res.json({ message: "Password reset successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;
