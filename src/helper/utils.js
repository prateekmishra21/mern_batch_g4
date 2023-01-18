const jwt = require("jsonwebtoken");
const { Key } = require("../auth/controllers");
const { User } = require("../auth/models");

const isAuthenticated = async (req, res, next) => {
  var token = req.headers.authorization;
  if (!token) {
    return res.json({ status: "Error", message: "Token Required" });
  }

  try {
    var user = jwt.verify(token, Key);
    if (user && user._id) {
      user = await User.findById(user._id);
      if (!user) {
        return res.json({ status: "Error", message: "InValid User " });
      }
      req.body.user_id = user._id;
      req.user = user;
      next();
    } else {
      return res.json({ status: "Error", message: "InValid Token " });
    }
  } catch {
    return res.json({ status: "Error", message: "InValid Token " });
  }
};

module.exports = { isAuthenticated };
