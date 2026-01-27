import query from "../models/queries.js";

async function get(req, res) {
  if (!req.params?.id) {
    return res.status(400);
  }

  try {
    const { id } = req.params;
    const includeComments = req?.query?.comments ?? false;
    const user = await query.getUser(parseInt(id), includeComments);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const comments = await query.getCommentsFromUser(parseInt(id));
    if (comments) {
      user.comments = comments;
    }

    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500);
  }
}

async function getComments(req, res) {
  if (!req.params?.id) {
    return res.status(400);
  }

  try {
    const { id } = req.params;
    if (id && parseInt(id) != req.user.id) {
      return res.status(403).json({ error: "Request Denied" });
    }

    const comments = query.getCommentsFromUser(parseInt(id));

    if (comments) {
      return res.status(200).json({ comments });
    }

    return res.status(404).json({ error: "User not found" });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
}

async function del(req, res, next) {
  if (!req.params?.id) {
    return res.status(400);
  }

  try {
    const { id } = req.params;
    if (id && parseInt(id) != req.user.id) {
      return res.status(403).json({ error: "Request Denied" });
    }

    await query.deleteUser(parseInt(id));
  } catch (err) {
    return res.status(404).json({ error: err });
  }

  next();
}

export default {
  get,
  del,
};
