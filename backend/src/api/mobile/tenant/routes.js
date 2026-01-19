const express = require("express");
const auth = require("../../../middlewares/auth");
const role = require("../../../middlewares/role");

const router = express.Router();

router.use(auth, role(["TENANT"]));

router.get("/requests", (req, res) => {
  res.json({ message: "Tenant Requests List" });
});

module.exports = router;
