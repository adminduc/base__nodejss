import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./configs/database.js";
import dotenv from "dotenv";
dotenv.config();
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
  return res.status(404).json({
    message: "API không tồn tại, bỏ cái thói rình mò API người khác đi",
  });
});

// Required listening Express server
app.listen(process.env.PORT, (req, res) =>
  console.log("Listen server running port " + process.env.PORT)
);

export const viteNodeApp = app;
