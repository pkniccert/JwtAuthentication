require("dotenv").config();
require("./config/database").connect();
const auth = require("./middleware/auth");
const userRoute = require("./routes/users");
const express = require("express");

const app = express();

app.use(express.json());
app.use('/api', userRoute);


app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome");
});

module.exports = app;