import express from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import strategy from "./strategies/jwt.js";
import indexRouter from "./routes/indexRouter.js";

dotenv.config();

passport.use(strategy);

const app = express();

// Allow access of form data in the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse Cookies for easy access by subroutes
app.use(cookieParser());

// Wrapper for authenticating and getting user from Web Token
/// This allows continuation into subroutes regardless of authentication,
/// and so each subroute becomes responsible for authentication based on the results provided here
const adminOrigins = process.env.ADMIN_ORIGINS.split(",");
function authenticateUser(req, res, next) {
  if (adminOrigins.includes(req.get("origin"))) {
    req.requiresAdmin = true;
  }

  if (!req.cookies) next();

  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    req.user = user;

    next();
  })(req, res, next);
}

// Handle Routes
const origins = process.env.ORIGINS.split(",") + adminOrigins;
app.use(cors({ origin: origins, credentials: true }));
app.use("/", authenticateUser, indexRouter);

// Start Server
const PORT = process.env.PORT | 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Starting Application. Listening on port ${PORT}`);
});
