var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./database/config");
require("./auth/auth");

var userRouter = require("../backendAPI/routes/user");
var wordRouter = require("../backendAPI/routes/word");
var authRouter = require("../backendAPI/routes/auth");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRouter);
app.use("/users", userRouter);
app.use("/words", wordRouter);

module.exports = app;
