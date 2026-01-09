import express from "express";
import passport from "passport";
import dotenv from "dotenv";

import indexRouter from "./routes/indexRouter.js";

dotenv.config();

const app = express();

// Allow access of form data in the request body
app.use(express.urlencoded({ extended: true }));

// Handle Routes
app.use("/", indexRouter);

// Start Server
const PORT = process.env.PORT | 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Started Application. Listening on port ${PORT}`);
});
