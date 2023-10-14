const { body } = require('express-validator');

// First name
const validateFname = body('fname')
  .not().isEmpty().withMessage('First name is required.')
  .isString().withMessage('First name must be a string.')
  .isLength({ min: 2, max: 50 }).withMessage('First name must be between 2 and 50 characters long.');

// Last name
const validateLname = body('lname')
  .not().isEmpty().withMessage('Last name is required.')
  .isString().withMessage('Last name must be a string.')
  .isLength({ min: 2, max: 50 }).withMessage('Last name must be between 2 and 50 characters long.');

// Phone number
const validatePhone = body('phone')
  .not().isEmpty().withMessage('Phone number is required.')
  .isNumeric().withMessage('Phone number must be a number.');

// Age
const validateAge = body('age')
  .not().isEmpty().withMessage('Age is required.')
  .isNumeric().withMessage('Age must be a number.')
  .isInt().withMessage('Age must be an integer.')
  .isLength({ min: 1, max: 120 }).withMessage('Age must be between 1 and 120 years old.');

// Doctor name
const validateDoctorName = body('doctor_name')
  .not().isEmpty().withMessage('Doctor name is required.')
  .isString().withMessage('Doctor name must be a string.')
  .isLength({ min: 2, max: 50 }).withMessage('Doctor name must be between 2 and 50 characters long.');

// Date
const validateDate = body('date')
  .not().isEmpty().withMessage('Date is required.')
  .isDate().withMessage('Date must be a valid date.');

// Time
const validateTime = body('time')
  .not().isEmpty().withMessage('Time is required.')
  .isTime().withMessage('Time must be a valid time.');

 const appoinmentValidators=[validateFname,
    validateLname,
    validatePhone,
    validateAge,
    validateDoctorName,
    validateDate,
    validateTime,] 

// Export the validators
module.exports = {
    appoinmentValidators
};