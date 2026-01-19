const express = require("express");
const auth = require("../../../middlewares/auth");
const role = require("../../../middlewares/role");

const router = express.Router();

router.use(auth, role(["TECHNICIAN"]));

router.get("/tasks", (req, res) => {
  res.json({ message: "Technician Tasks List" });
});

module.exports = router;
