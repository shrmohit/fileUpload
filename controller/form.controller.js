const { formModel } = require("../models/form.model");

const formwithmulter = async (req, res) => {
  const { name } = req.body;
  const file = req.file;
  if (!name || !file) {
    return res.status(400).json({
      message: "All fields required",
      success: false,
    });
  }

  const formdata = await formModel.create({ name, image: file.filename, });

  return res.status(200).json({
    message: "Image uploaded",
    success: true,
    formdata,
  });
};

module.exports = { formwithmulter }; 
