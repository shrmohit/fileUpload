const localFileUploadController = require('../controller/localFileUpload.controller.js');

const express = require('express');
const router = express.Router();

router.post('/upload', localFileUploadController);

module.exports = router;
