const express = require("express");
const { authenticateUser } = require("../Middleware/AuthenticationUser");
const { updateProfile, getProfile } = require("../Controllers/ProfileController");
const validateUpdateProfile = require("../Validators/Profile_Validators");
const { validationErrorHandler } = require("../Middleware/ValidationErrorHandler");
const router = express.Router();


router.post("/update-profile", authenticateUser, validateUpdateProfile, validationErrorHandler, updateProfile);

router.get("/:email",authenticateUser,getProfile)

module.exports = router 