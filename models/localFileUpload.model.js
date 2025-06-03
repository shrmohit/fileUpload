const mongoose = require('mongoose');

const localFileUploadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  file: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  tags: {
    type: String,
    required: false,
  },
});

const localFileUploadModel = mongoose.model('Upload', localFileUploadSchema);
module.exports = { localFileUploadModel };
