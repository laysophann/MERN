const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connectd: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
