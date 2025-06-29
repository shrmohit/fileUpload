const { formModel } = require("../models/form.model")

export const formwithmulter = async (req, res) => {
  const { name, image } = req.body
  if (!name || !image) {
    return res.status(400).json({
      message: "all fields required",
      success: false
    })
  }

  const formdata = await formModel.create({
    name, image
  })

  return res.status(200).json({
    message: "image upload",
    success: true,
    formdata
  })
}