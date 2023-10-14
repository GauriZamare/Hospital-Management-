const express = require('express');
const router = express.Router();
const fileController = require('../Controllers/fileController');


router.post('/upload',fileController.upload.single('file'), fileController.uploadFile);
router.get('/download/:filename', fileController.downloadFile);

module.exports = router;
