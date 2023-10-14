const express = require("express");
const { login, addUser, getUserInfo } = require('../Controllers/Auth_Controller');
const { authenticateUser } = require("../Middleware/AuthenticationUser");
const { validateLogin, validateaddUser } = require("../Validators/Auth_Validators");
const { validationErrorHandler } = require("../Middleware/ValidationErrorHandler");
const authRouter = express.Router();

// Auth Routes
// added the validations and error handler middle ware
authRouter.post("/login", validateLogin, validationErrorHandler, login);
authRouter.post("/register", validateaddUser, validationErrorHandler, addUser);


// basicinfo get route
authRouter.get("/basicinfo/:email", authenticateUser, getUserInfo)

module.exports = authRouter;