const uuid = require("uuid");
// console.log(uuid.v4());
var CryptoJS = require("crypto-js");

var bytes = CryptoJS.AES.decrypt(
  "U2FsdGVkX19jtAWFITV2+7XS6NQPwFsg4eeSMWmj0Ro=",
  "d88c57e9-c075-434b-bede-b8ce4f692e7f"
);
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText);
