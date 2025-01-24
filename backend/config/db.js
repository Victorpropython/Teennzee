const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
  try {
    // Use environment variable for the connection string
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      //useCreateIndex: true, // Suppress deprecation warnings
    });

    console.log(colors.green(`MongoDB connected successfully!: ${conn.connection.host}`.cyan.underline));
  } catch (err) {
    console.error(`MongoDB connection failed: ${err.message}`.red);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
