const { User } = require("./models");
var jwt = require("jsonwebtoken");

const register = async (req, res) => {
  var isExist = await User.findOne({
    $or: [{ username: req.body.username }, { email: req.body.email }],
  });
  if (isExist) {
    return res.json({
      status: "Error",
      message: "This Username or email already exist.",
    });
  }

  // isExist = await User.findOne({ email: req.body.email });
  // if (isExist) {
  //   return res.json({
  //     status: "Error",
  //     message: "This email already exist.",
  //   });
  // }

  var newUser = await User.create(req.body);
  return res.json({ status: "User created successfully", newUser });
};

const loginMiddleWare = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      status: "Error",
      message: "The Username and password required",
    });
  }
  var user = await User.findOne({
    $or: [{ username: username }],
  });
  if (!user) {
    return res.json({
      status: "Error",
      message: "This Username does not exist.",
    });
  }
  if (!user.isAuthenticated(password)) {
    return res.json({
      status: "Error",
      message: "This password does not match.",
    });
  }
  var token = jwt.sign({ _id: user._id }, user.salt);
  req.body.token = token;
  req.body.user = user;
  next();
};

const login = async (req, res) => {
  return res.json({ status: "Done", data: req.body });
};

const reset = async (req, res) => {
  var user = await User.findOne({ username: req.body.username });
  user.password = req.body.newPassword;
  await user.save();
  return res.json({ status: "Done", user });
};

module.exports = { register, login, loginMiddleWare, reset };
