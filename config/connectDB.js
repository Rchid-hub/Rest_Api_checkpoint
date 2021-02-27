const mongoose = require("mongoose");
require('dotenv').config({path:'./config/.env'})

const connectDB = async () => {

  try {
  mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("mongoose is connected !")
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
