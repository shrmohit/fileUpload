const {
  localFileUploadController,
  fileToCloudinary,
} = require('../controller/localFileUpload.controller.js');

const express = require('express');
const router = express.Router();

router.post('/localFileUploadController', localFileUploadController);
router.post('/fileToCloudinary', fileToCloudinary);

module.exports = router;
