const { Student } = require("../models/models");
var jwt = require("jsonwebtoken");
const { SECREAT_KEY } = require("../default");

var students = ["S1", "S2", "S3", "S4", "New Student"];
const getStudentsOld = (request, response) => {
  var id = request.query.id;
  //TodO: mETHOD - 1
  // if (id) {
  //   return response.send(students[id]);
  // } else {
  //   return response.send(students);
  // }

  // tOdo: Method 2
  return response.json({
    data:
      id === undefined
        ? students
        : students[id] === undefined
        ? "No Data found for this ID"
        : students[id],
  });
};

const getStudents = async (request, response) => {
  var { id, name, email } = request.query;

  if (id) {
    try {
      var allStudents = await Student.findById(id);
      console.log(allStudents.isUserExist(89578973));
    } catch {
      allStudents = null;
    }
  } else if (name) {
    var allStudents = await Student.findOne({ name: name });
  } else {
    var allStudents = await Student.find();
  }

  var allStudents = await Student.find({ age: { $gt: 2, $lt: 10 } });
  var allStudents = await Student.find({
    $and: [{ name: "Node", age: { $lt: 4 } }, { email: "vnkdsnk" }],
  });

  var allStudents = await Student.find({
    name: { $regex: "Node", $options: "i" },
  });

  return response.json(allStudents);
};

const createNewStudent = async (request, response) => {
  // var newStudent = await Student.create(request.body);
  var newStudent = await Student.create(request.body);
  return response.json({ status: "Student Created", data: newStudent });
};

const updateStudent = async (request, response) => {
  var studentId = request.query.id;
  try {
    var student = await Student.findById(studentId);
    if (!student) {
      return response
        .status(404)
        .json({ status: "Error", msg: "Id does not exist" });
    }
  } catch {
    return response
      .status(404)
      .json({ status: "Error", msg: "Id does not exist" });
  }

  await Student.findByIdAndUpdate(studentId, request.body);
  return response.json({ data: "Student Updated" });
};

const deleteStudent = async (request, response) => {
  var studentId = request.query.id;
  var deleteObj = await Student.findByIdAndDelete(studentId);
  return response.json({ data: "Student Deleted", data: deleteObj });
};

const Login = async (req, res) => {
  const { username, password } = req.body;
  var user = await Student.findOne({ username: username });
  if (!user) {
    return res.json({ status: "You entered wrong Username" });
  }

  if (!user.authenticate(password)) {
    return res.json({ status: "You entered wrong Password" });
  }

  user.updatedAt = new Date();
  var user = await user.save();

  user.enc_password = undefined;

  return res.json({ status: "LoggedIn", user });
};

module.exports = {
  createNewStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  Login,
};
