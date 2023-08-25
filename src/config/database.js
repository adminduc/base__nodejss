import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://duc:duc@cluster0.z55kawt.mongodb.net/base_node",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`
        ===========================
        MongoDB Connected !!!
        NAME_DB::: ${conn.connection.name}
        URL::: 
        ===========================
        `);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};
