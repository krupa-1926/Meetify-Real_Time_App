import mongoose, { Schema } from "mongoose";
// const bcrypt = require("bcryptjs")

const userScheme = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String },
});
// userSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 10)
// })

const User = mongoose.model("User", userScheme);

export { User };
