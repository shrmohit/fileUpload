// create app
const express = require('express');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const fileUpload = require('express-fileupload');
app.use(fileUpload());

// database connection
const connectdb = require('./config/database.js');

// routes
const localFileUploadRoute = require('./router/localFileUpload.router.js');
app.use('/api/v1/users', localFileUploadRoute);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectdb();
  console.log(`Server is running port at http://localhost:${PORT}`);
});
