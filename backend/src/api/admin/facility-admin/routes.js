const express = require("express");
const auth = require("../../../middlewares/auth");
const role = require("../../../middlewares/role");
const scope = require("../../../middlewares/scope");

const router = express.Router();

router.use(auth, role(["FACILITY_ADMIN"]), scope);

router.get("/dashboard", (req, res) => {
  res.json({
    message: "Facility Admin Dashboard",
    organizationId: req.user.organizationId,
  });
});

module.exports = router;
