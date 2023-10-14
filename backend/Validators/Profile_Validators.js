const { check } = require('express-validator');
// Validation middleware for fname and lname
const nameValidation = [
    check('fname').notEmpty().withMessage("first name is required").isAlpha().withMessage('First name must contain only alphabetic characters'),
    check('lname').notEmpty().withMessage("last name is required").isAlpha().withMessage('Last name must contain only alphabetic characters'),
];

// Validation middleware for email
const emailValidation = check('email').notEmpty().withMessage("email is required").isEmail().withMessage('Invalid email format');

// Validation middleware for phone
const phoneValidation = check('phone').notEmpty().withMessage("phoneis required").isMobilePhone().withMessage('Invalid phone number format');

// Validation middleware for gender
const genderValidation = check('gender').notEmpty().withMessage("gender is required").isIn(['Male', 'Female', 'Other']).withMessage('Invalid gender');

// Validation middleware for age
const ageValidation = check('age').notEmpty().withMessage("age is required").isInt({ min: 0, max: 120 }).withMessage('Invalid age');

// Validation middleware for height and weight
const heightValidation = check('height').notEmpty().withMessage("height is required").isFloat({ min: 0 }).withMessage('Invalid height');
const weightValidation = check('weight').notEmpty().withMessage("weight is required").isFloat({ min: 0 }).withMessage('Invalid weight');

// Validation middleware for medical history (assuming it's a string)
const medicalHistoryValidation = check('medicalhistory').notEmpty().withMessage("medicalhistory is required").isString().withMessage('Medical history must be a string');

// Validation middleware for docurl (assuming it's a URL)
//const docUrlValidation = check('docurl').notEmpty().withMessage("docurl is required");

// Combine all validation middleware into one array
const validateUpdateProfile = [
    ...nameValidation,
    emailValidation,
    phoneValidation,
    genderValidation,
    ageValidation,
    heightValidation,
    weightValidation,
    medicalHistoryValidation,
  //  docUrlValidation,
];
module.exports = validateUpdateProfile;  