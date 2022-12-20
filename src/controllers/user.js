const { Users } = require("../models/user");

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

const login = (request, response) => {};

const isAuthenticate = (request, response) => {};

module.exports = { signup, login, isAuthenticate };
