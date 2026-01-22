import { Strategy } from "passport-jwt";

import query from "../models/queries.js";

const opts = {
  jwtFromRequest: extractToken,
  secretOrKey: process.env.TOKEN_SECRET,
};

function extractToken(req) {
  if (!req?.cookies?.payload || !req?.cookies?.signature) return "";

  return req.cookies.payload + "." + req.cookies.signature;
}

async function action(jwt_payload, done) {
  const { id, username } = jwt_payload;
  const user = await query.getUserFromTokenPayload(id, username);

  return done(null, user);
}

export default new Strategy(opts, action);
