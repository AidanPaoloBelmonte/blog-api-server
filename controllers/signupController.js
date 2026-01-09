import bcrypt from "bcryptjs";

import query from "../models/queries.js";

async function get(req, res) {
  return res.send("GET signup");
}

async function post(req, res) {
  const { username, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const success = await query.registerUser(username, hashedPassword, email);

    if (!success) {
      throw new Error("There was a problem during registration.");
    }

    res.status(201).send();
  } catch (err) {
    console.log(err);

    res.status(401).json({ message: err });
  }
}

export default {
  get,
  post,
};
