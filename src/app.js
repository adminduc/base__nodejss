// const express = require("express");
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// const cors = require("cors");
// const app = express();

// app.use(morgan("tiny"));
// app.use(cors());

// const connectDB = async (req, res) => {
//   try {
//     const conn = await mongoose.connect(
//       "mongodb+srv://duc:duc@cluster0.z55kawt.mongodb.net/base_node",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//     return true;
//   } catch (err) {
//     console.error(`Error: ${err.message}`);
//     process.exit(1);
//   }
// };
// connectDB();
// app.use("/", async function (req, res) {
//   console.log(connectDB());
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(`Hello World! `);
// });
// app.use("**", (req, res, next) => {
//   return res.status(200).json({
//     message: "API Not Found",
//   });
// });

// app.listen(8080, (req, res) => {
//   console.log("Listening on port 8080");
// });

// module.exports = app;

import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./configs/database.js";
const app = express();

app.use(express.json());
// Bỏ block fetch api CORS
app.use(cors());
app.use(morgan("tiny"));

// Navigate Router

connectDB();
app.use("/", async function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello World! `);
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
app.listen(8080, (req, res) =>
  console.log("Listen server running port " + 8080)
);

export const viteNodeApp = app;
