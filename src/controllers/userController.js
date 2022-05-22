import User from "../models/userModel.js";

export const register = async (req, res) => {
  const { username, email, message } = req.body;

  const emailAlreadyExist = await User.findOne({ email });
  if (emailAlreadyExist) {
    res.status(400).send({ msg: "Email already exist" });
  }

  const user = await User.create({ ...req.body });

  res.status(200).json({ user });
};

export const login = async (req, res) => {
  const { username, email, message } = req.body;
  if (!username) {
    res.status(401).send({ msg: "Please provide email and password" });
  }

  const user = User.findOne({ username });
  if (!user) {
    res.status(401).send({ msg: "Invalid Credential" });
  }

  res.status(200).json({ user });
};

export const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  if (!user) {
    res.status(400).send({ msg: `no user with this id ${req.params.id}` });
  }

  res.status(201).json({ user });
};

export const showCurrentUser = async (req, res) => {
  res.status(202).json({ user: req.user });
};
