import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Provide a name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Provide a email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  message: {
    type: String,
    required: [true, "Provide a message"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
