require("dotenv").config();
require("./config/database").connect();
const userRoute = require("./routes/users");
const authRoute = require("./routes/authPage");
const express = require("express");

const app = express();

app.use(express.json());
app.use('/api', userRoute);
app.use('/api', authRoute);

module.exports = app;