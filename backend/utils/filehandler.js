const multer = require('multer');
const path = require('path');

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory for storing uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

// File filter to allow specific file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf/; // Allowed file types
  const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = allowedTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error('Only images (jpeg, jpg, png) and PDFs are allowed!'), false);
  }
};

// Multer upload middleware with file size limit (5 MB)
exports.upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB size limit
  fileFilter,
});
