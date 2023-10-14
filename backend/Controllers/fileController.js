const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = './uploads';
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueFilename = uuidv4() + path.extname(file.originalname);
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage });

const uploadFile = (req, res) => {
    //console.log(req.file);
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ fileUrl });
};

const downloadFile = (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, '../uploads', filename);

  res.download(filePath, (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
};

module.exports = { uploadFile, downloadFile,upload };

