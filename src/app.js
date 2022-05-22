import express from "express";

import cors from "cors";
import dotenv from "dotenv";

import {
  errorHandlerMiddleware,
  notFoundHandlerMiddleware,
} from "./middlewares/allErrorMiddleware.js";
import User from "./models/userModel.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "This is a thyself Api" });
});
app.get("/allusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

app.use("/api/v1/users", userRoute);
app.use(errorHandlerMiddleware);
app.use(notFoundHandlerMiddleware);
export default app;
