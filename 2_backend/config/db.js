const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`MongoDB connection error: ${error.message}`);

    process.exit(1);
  }
};
module.exports = connectMongoDB;
