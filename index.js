const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRouter = require("./src/auth/router");
const blogRouter = require("./src/blog/router");

const app = express();

// Database Connection
mongoose.connect(
  "mongodb+srv://merng16:TeAi1mU5MFpuj7F5@cluster0.yprwra3.mongodb.net/blog_app?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", () => {
  console.log("DB CONNECTED WITH BLOG_G4");
});

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/blog", blogRouter);

app.get("", (req, res) => {
  return res.send(
    "<center><h3>Hello All. This is Node Application</h3></center>"
  );
});

app.listen(4000, () => {
  console.log("SERVER STARTED ON PORT 4000");
});
