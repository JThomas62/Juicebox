function requireUser(req, res, next) {
  if (req.user) {
    req.currentUser = req.user;
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = {
  requireUser
};