const express = require("express");
const { login, addUser } = require('../Controllers/Auth_Controller');
const { authenticateUser } = require("../Middleware/AuthenticationUser");
const { validateLogin, validateaddUser } = require("../Validators/Auth_Validators");
const { validationErrorHandler } = require("../Middleware/ValidationErrorHandler");
const router = express.Router();

// Auth Routes
router.post("/login", validateLogin, validationErrorHandler, login);
router.post("/register", validateaddUser, validationErrorHandler, addUser);


// test
router.get("/test", authenticateUser, (req, res) => { res.send("Hey Done") })

module.exports = router;