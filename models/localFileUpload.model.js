const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

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

// EMAIL SEND POST MIDDLEWARE

localFileUploadSchema.post('save', async function (doc) {
  try {
    // console.log(doc);

    // create transporter
    // isko config me create karna hai
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // info mail send karna
    let info = transporter.sendMail({
      from: `codehelp`,
      to: doc.email,
      subject: 'New file upload on cloudinary',
      html: `<h2>Hello jee</h2> <p>File Upload view here : <a href="${doc.file}">${doc.file}</a> </p>`,
    });

    console.log('info', info);
  } catch (error) {
    console.log(error);
  }
});

const localFileUploadModel = mongoose.model('Upload', localFileUploadSchema);
module.exports = { localFileUploadModel };
