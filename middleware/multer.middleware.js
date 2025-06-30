// step 1. import multer after running command npm i multer 
const multer = require("multer")

// step2.
const storage = multer.diskStorage({
  // destination cb => callbaack
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  // filename
  filename: (req, file, cb) => {
    cb(null, Math.floor(Math.random() * 100) + file.originalname)
  }
})

// step3. 
const upload = multer({ storage })
module.exports = { upload }