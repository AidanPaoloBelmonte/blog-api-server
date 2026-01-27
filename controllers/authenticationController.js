function user(req, res, next) {
  if (!req?.user)
    return res
      .status(401)
      .json({ error: "You must be Logged in to access this route!" });

  next();
}

export default {
  user,
};
