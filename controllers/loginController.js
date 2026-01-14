import jwt from "jsonwebtoken";

import query from "../models/queries.js";

async function get(req, res) {
  return res.send("GET login");
}

async function post(req, res) {
  let { username, password } = req.body;

  const userStatus = await query.validateLoginRequest(username, password);

  if (!userStatus.status) {
    return res.status(202).json({ error: userStatus.msg });
  }

  // Token Configuration
  const opts = { expiresIn: process.env?.TOKEN_DURATION | 86400 };
  const secret = process.env.TOKEN_SECRET;
  const token = jwt.sign({ id: userStatus.content.id, username }, secret, opts);

  return res.status(200).json({
    message: userStatus.msg,
    token,
  });
}

export default {
  get,
  post,
};
