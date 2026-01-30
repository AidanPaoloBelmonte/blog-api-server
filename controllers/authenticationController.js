function user(req, res, next) {
  if (!req?.user)
    return res
      .status(401)
      .json({ error: "You must be Logged in to access this route!" });

  next();
}

function admin(req, res, next) {
  if (!req?.requiresAdmin && !req?.user?.isAdmin)
    return res.status(403).json({
      error: "You do not have the necessary privelages to acces this route!",
    });

  next();
}

export default {
  user,
  admin,
};
