const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");




//define schema
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address",
    ],
  },
  password: String,
  createdOn: String,
});

adminSchema.methods.matchPassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};


module.exports = new mongoose.model("admins", adminSchema);
