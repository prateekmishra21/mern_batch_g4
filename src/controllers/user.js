const { Users } = require("../models/user");
var jwt = require("jsonwebtoken");
const { SECREAT_KEY } = require("../default");

const signup = async (request, response) => {
  const { name, username, password } = request.body;

  if (!username || !password) {
    return response.json({
      status: "Error",
      msg: "Username and password required",
    });
  }

  var isUserExist = await Users.findOne({ username: username });
  if (isUserExist) {
    return response.json({
      status: "Error",
      msg: "Username already Exist.",
    });
  }

  var newUser = await Users.create(request.body);
  newUser.encry_password = undefined;
  newUser.salt = undefined;

  return response.json({
    status: "User Registered Successfully",
    user: newUser,
  });
};

const login = async (request, response) => {
  const { username, password } = request.body;
  if (!username || !password) {
    return response.json({
      status: "Error",
      msg: "Username and password required",
    });
  }

  var user = await Users.findOne({ username: username });
  if (!user) {
    return response.json({
      status: "Error",
      msg: "Username not found",
    });
  }

  if (!user.authenticate(password)) {
    return response.json({
      status: "Error",
      msg: "You entered wrong password.",
    });
  }

  var token = jwt.sign({ _id: user._id }, SECREAT_KEY);

  return response.json({ status: "Done", user, token });
};

const isAuthenticate = async (request, response, next) => {
  var token = request.headers.authorization;
  if (!token) {
    return response.json({ status: "Un-Authenticated" });
  }
  var user;
  try {
    user = jwt.verify(token, SECREAT_KEY);
  } catch {
    return response.json({ status: "Un-Authenticated" });
  }

  user = await Users.findById(user._id);

  next();
  // return response.json({ status: "Done", user });
};

module.exports = { signup, login, isAuthenticate };
