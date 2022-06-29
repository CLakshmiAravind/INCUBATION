const mongoose = require("mongoose");
PORT=5000
MONGO_URI="mongodb+srv://E2sem2minproject:g90mulEWmThUaLQa@cluster0.p9nv2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
