import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import * as path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/database";
import Router from "./routes/index";
const app = express();
dotenv.config();

const { PORT, MONGO_URI } = process.env;
// Khởi tạo kết nối với cơ sở dữ liệu
connectDB(MONGO_URI);

app.use(express.json());
// Bỏ block fetch api CORS
app.use(cors());
app.use(morgan("tiny"));

// Theme home
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get("/", (req, res) => {
  // docs https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
  return res.sendFile(path.join(__dirname, "./public/index.html"));
});
// Navigate Router
app.use("/api", (req, res) => {
  return res.status(200).json({
    message: "Ngaos quyen luc",
  });
});

// Notfound api
app.use((req, res, next) => {
  //   const error = new Error("API not found");
  //   error.status = 404;
  //   next(error);
  return res.status(404).json({
    message: "API không tồn tại, bỏ cái thói rình mò API người khác đi",
  });
});

// Required listening Express server
app.listen(PORT, (req, res) =>
  console.log("Listen server running port " + PORT)
);

export const viteNodeApp = app;

// import express from "express";
// import morgan from "morgan";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// // import Router from "./routes/index.js";
// import connectDB from "./config/database";
// mongoose.set("strictQuery", false);
// dotenv.config();
// const { PORT, MONGO_URI } = process.env;
// const app = express();

// app.use(morgan("tiny"));
// app.use(cors());
// connectDB();
// // app.use("/", Router);
// app.use("**", (req, res, next) => {
//   return res.status(200).json({
//     message: "API Not Found",
//   });
// });

// app.listen(8080, (req, res) => {
//   console.log("Listening on port 8080");
// });

// // module.exports = app;
// export const viteNodeApp = app;
