const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected ${connection.connection.host}`);
  } catch (error) {
    console.error(`Err ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
