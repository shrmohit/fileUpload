const mongoose = require('mongoose');

require('dotenv').config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('db connected');
  } catch (error) {
    console.log('db connection fail', error);
  }
};

module.exports = connectdb;
