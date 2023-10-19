const requireUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.user = req.user;
    return next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  requireUser,
};
