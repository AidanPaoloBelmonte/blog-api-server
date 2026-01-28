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
function authenticateUser(req, res, next) {
  if (!req.cookies) next();

  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    req.user = user;

    next();
  })(req, res, next);
}

// Handle Routes
app.use(
  cors({
    origin: ["http://localhost:5137"],
    credentials: true,
  }),
);
app.use("/", authenticateUser, indexRouter);

// Start Server
const PORT = process.env.PORT | 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Starting Application. Listening on port ${PORT}`);
});
