import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import User from "../interface/User";

const UserSchema = new Schema<User>({
  firstName: {
    type: String,
    required: [true, "Please enter your first name."],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name."],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter your phone."],
    match: [
      /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
      "Please enter valid phone number.",
    ],
  },
  email: {
    type: String,
    required: [true, "Please enter your email."],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please Add a password."],
    minlength: 8,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Encrypt passworb using bcryptjs
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(this.password, salt);
  this.password = hashPassword;
  next();
});

// Match user entered password to hash password in database
UserSchema.methods.matchPassword = async function (EnteredPassword: string) {
  return await bcrypt.compare(EnteredPassword, this.password);
};

export default model("User", UserSchema);

