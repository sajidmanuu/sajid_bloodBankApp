const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    console.log('process.env.MONGO_URL',process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
