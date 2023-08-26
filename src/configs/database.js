import mongoose from "mongoose";
const connectDB = async (req, res) => {
  mongoose.set("strictQuery", false);
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://duc:duc@cluster0.z55kawt.mongodb.net/base_node",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};
export default connectDB;
