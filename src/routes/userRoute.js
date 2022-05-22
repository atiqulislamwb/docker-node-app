import express from "express";

import {
  getSingleUser,
  register,
  login,
} from "../controllers/userController.js";

const router = express.Router();

router
  .post("/login", login)
  .post("/register", register)

  .get("/:id", getSingleUser);

export default router;
