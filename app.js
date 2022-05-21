var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./database/config");
require("./auth/auth");

var userRouter = require("./routes/user");
var wordRouter = require("./routes/word");
var authRouter = require("./routes/auth");
var errorHandler = require ("./utils/errorHandler");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRouter);
app.use("/users", userRouter);
app.use("/words", wordRouter);
app.use(errorHandler);

module.exports = app;
