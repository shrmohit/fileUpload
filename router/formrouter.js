const { formwithmulter } = require("../controller/form.controller");
const { upload } = require("../middleware/multer.middleware")
const express = require("express");

const router = express.Router();

router.post("/formwithimageupload", upload.single('image'), formwithmulter);

module.exports = router;
