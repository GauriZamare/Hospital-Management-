const { body } = require("express-validator");
const validateLogin = [
    body("email").notEmpty().withMessage("Email Cannot be empty").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password is required"),
];

const validateaddUser = [
    body('fname').notEmpty().withMessage("First Name connot be empty"),
    body('lname').notEmpty().withMessage("Last Name connot be empty"),
    body('email').notEmpty().withMessage("Email connot be empty").isEmail().withMessage("Invalid Email Formate"),
    body('password').notEmpty().withMessage("Password connot be empty"),
]

module.exports = { validateLogin, validateaddUser }