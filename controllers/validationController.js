import { body } from "express-validator";

import queries from "../models/queries.js";

const userDetailsValidations = [
  body("username")
    .escape()
    .notEmpty()
    .withMessage()
    .isLength({ min: 3, max: 32 })
    .withMessage()
    .matches(/^\w+$/)
    .withMessage(),
  body("password")
    .escape()
    .notEmpty()
    .withMessage()
    .isLength({ min: 3, max: 32 })
    .withMessage(),
];

const commentsContentValidations = [
  body("post")
    .escape()
    .notEmpty()
    .withMessage()
    .isLength({ min: 3, max: 255 })
    .withMessage(),
];

export default {
  userDetailsValidations,
  commentsContentValidations,
};
