import { Strategy, ExtractJwt } from "passport-jwt";

import query from "../models/queries.js";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKEN_SECRET,
};

async function action(jwt_payload, done) {
  const { id, username } = jwt_payload;
  const isTokenValid = await query.validateToken(id, username);

  if (isTokenValid) {
    return done(null, true);
  }

  return done(null, false);
}

export default new Strategy(opts, action);
