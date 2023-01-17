const mongoose = require("mongoose");
const uuid = require("uuid");
var CryptoJS = require("crypto-js");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
    },
    name: String,
    email: String,
    ency_password: String,
    salt: String,
  },
  { timestamps: true }
);

userSchema.virtual("password").set(function (planpassword) {
  this.salt = uuid.v4();
  this.ency_password = this.securePassword(planpassword);
});
userSchema.methods = {
  securePassword: function (planpassword) {
    return CryptoJS.SHA256(planpassword, this.salt).toString();
  },
  isAuthenticated: function (planpassword) {
    return this.ency_password === this.securePassword(planpassword);
  },
};

const User = mongoose.model("User", userSchema);
module.exports = { User };
