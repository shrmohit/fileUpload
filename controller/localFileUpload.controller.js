const { localFileUploadModel } = require('../models/localFileUpload.model');
const path = require('path');

const localFileUploadController = async (req, res) => {
  try {
    // file upload

    const file = req.files.file;

    // file save path
    const fileFolder = path.join(__dirname, '/files/', file.name);
    // current folder path = __dirname and path.join ka use path ko join karne ke liye karte hai
    //path.join(__dirname,folder name ,file name)

    // add path to move function
    file.mv(fileFolder, (err) => {
      console.log(err);
    });

    // successfull respose
    return res.status(200).json({
      message: 'File uploaded Successfully',
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = localFileUploadController;
