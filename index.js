const server = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// ToDo: Database Connection
mongoose.connect("mongodb://localhost:27017/mern_g4");
mongoose.connection.on("connected", () => {
  console.log("DB CONNECTED");
});

// Data Connection End

const {
  getStudents,
  createNewStudent,
  updateStudent,
  deleteStudent,
  Login,
} = require("./src/controllers/index");
const { authRouter } = require("./src/router/users");
const app = server();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);

app.get("/students", getStudents);
app.post("/create-new-student", createNewStudent);
app.post("/login", Login);
app.put("/update-student", updateStudent);
app.delete("/delete-student", deleteStudent);

app.listen(4000, () => {
  console.log("Sever Started on port 4000");
});
