const uuid = require("uuid");
// console.log(uuid.v4());
var CryptoJS = require("crypto-js");
var text = CryptoJS.SHA256("Hello", "12NSJNKJSBKJ").toString();
// console.log(text);

var key = uuid.v4();
var jwt = require("jsonwebtoken");
var token = jwt.sign({ _id: "8439hiughy89g389y43" }, key);
console.log(token);

console.log(jwt.verify(token, key));
