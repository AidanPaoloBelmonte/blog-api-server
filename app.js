import express from "express";
import passport from "passport";
import dotenv from "dotenv";

import strategy from "./strategies/jwt.js";
import indexRouter from "./routes/indexRouter.js";

dotenv.config();

passport.use(strategy);

const app = express();

// Allow access of form data in the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Attach passport instance to allow subroutes to use it if they so need
app.use((req, res, next) => {
  req.context = {
    passport,
  };

  next();
});

// Handle Routes
app.use("/", indexRouter);

// Start Server
const PORT = process.env.PORT | 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Starting Application. Listening on port ${PORT}`);
});
