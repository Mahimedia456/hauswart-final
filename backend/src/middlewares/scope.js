module.exports = function scope(req, res, next) {
  const { organizationId } = req.user;

  if (!organizationId) {
    return res.status(403).json({ message: "Organization scope missing" });
  }

  next();
};
