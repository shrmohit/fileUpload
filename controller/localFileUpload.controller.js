const { localFileUploadModel } = require('../models/localFileUpload.model');
const path = require('path');
const cloudinary = require('cloudinary').v2;

// upload file in local storage
exports.localFileUploadController = async (req, res) => {
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

function isFileTypeSupported(type, fileSupportType) {
  // for match used include
  return fileSupportType.includes(type);
}

async function uploadFileToCloudinary(file, folder) {
  const options = { folder, resource_type: 'auto' };
  // if (quality) {
  //   options.quality = quality;
  // }
  console.log('temp file path', file.tempFilePath);

  return await cloudinary.uploader.upload(file.tempFilePath, options);
}
//upload to cloudinary
exports.fileToCloudinary = async (req, res) => {
  //fetch data
  const { name, email, tags } = req.body;
  console.log(name, email, tags);

  const file = req.files.file;
  console.log(file);

  // validation
  const fileSupportType = ['jpg', 'jpeg', 'png'];
  const fileType = file.name.split('.')[1].toLowerCase();

  if (!isFileTypeSupported(fileType, fileSupportType)) {
    return res.status(400).json({
      message: 'File Type not Match',
      success: false,
    });
  }

  // upload to cloudinay
  const response = await uploadFileToCloudinary(
    file,
    'codehelp',
    80,
    2000,
    1000
  );
  console.log(response);

  await localFileUploadModel.create({
    email,
    name,
    tags,
    file: response.secure_url,
  });

  return res.status(200).json({
    message: 'Image Upload Successfully',
    success: true,
  });
};

// upload video to cloudinary
exports.videoToCloudinary = async (req, res) => {
  try {
    // fetch data
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.file;
    console.log(file);

    //validation
    const fileSupportType = ['mp4', 'mp3'];
    const fileType = file.name.split('.')[1].toLowerCase();

    if (!isFileTypeSupported(fileType, fileSupportType)) {
      return res.status(400).json({
        message: 'File type not Support',
        success: false,
      });
    }

    // upload to cloudinary
    const response = await uploadFileToCloudinary(file, 'codehelp');
    console.log(response);

    await localFileUploadModel.create({
      name,
      email,
      tags,
      file: response.secure_url,
    });

    return res.status(200).json({
      message: 'Video Upload',
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
