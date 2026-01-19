const express = require("express");
const auth = require("../../../middlewares/auth");
const role = require("../../../middlewares/role");

const router = express.Router();

router.use(auth, role(["SUPER_ADMIN"]));

router.get("/dashboard", (req, res) => {
  res.json({ message: "Super Admin Dashboard Data" });
});

module.exports = router;
