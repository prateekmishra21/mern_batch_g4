const { Student } = require("../models/models");

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
  var studentId = request.query.id;
  if (studentId) {
    try {
      var allStudents = await Student.findById(studentId);
    } catch {
      allStudents = null;
    }
  } else {
    var allStudents = await Student.find();
  }

  return response.json(allStudents);
};

const createNewStudent = async (request, response) => {
  await Student.create();
  return response.json({ data: "Student Created" });
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
  await Student.findByIdAndDelete(studentId);
  return response.json({ data: "Student Deleted" });
};

module.exports = {
  createNewStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};
