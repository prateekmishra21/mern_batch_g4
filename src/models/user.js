const mongoose = require("mongoose");
const uuid = require("uuid");
var CryptoJS = require("crypto-js");

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    encry_password: {
      type: String,
      trim: true,
      required: true,
    },
    salt: String,
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this.salt = uuid.v4();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {});

userSchema.methods = {
  authenticate: function (plainpassword) {
    return this.encry_password === this.securePassword(plainpassword);
  },
  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    var ciphertext = CryptoJS.SHA256(plainpassword, this.salt).toString();
    return ciphertext;
  },
};

const Users = mongoose.model("Users", userSchema);
module.exports = { Users };
