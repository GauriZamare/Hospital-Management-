
const express = require('express');
const { authenticateUser } = require('../Middleware/AuthenticationUser');
const { bookAppoinment } = require('../Controllers/Appoinment_Controller');
const { appoinmentValidators } = require('../Validators/AppoinmentValidators');
const { validationErrorHandler } = require('../Middleware/ValidationErrorHandler');
const router = express();

router.post("/bookappoinment", authenticateUser, appoinmentValidators, validationErrorHandler, bookAppoinment);


module.exports = router