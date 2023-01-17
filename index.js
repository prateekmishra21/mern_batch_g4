const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRouter = require("./src/auth/router");

const app = express();

// Database Connection
mongoose.connect("mongodb://localhost:27017/blog_g4");
mongoose.connection.on("connected", () => {
  console.log("DB CONNECTED WITH BLOG_G4");
});

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);

app.listen(4000, () => {
  console.log("SERVER STARTED ON PORT 4000");
});
