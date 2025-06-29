const mongoose = require("mongoose")

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true })

const formModel = mongoose.model("form", formSchema)

module.exports = { formModel }