const {
  localFileUploadController,
  fileToCloudinary,
  videoToCloudinary,
} = require('../controller/localFileUpload.controller.js');

const express = require('express');
const router = express.Router();

router.post('/localFileUploadController', localFileUploadController);
router.post('/fileToCloudinary', fileToCloudinary);
router.post('/videoToCloudinary', videoToCloudinary);

module.exports = router;
