const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");
});
app.use("**", (req, res, next) => {
  return res.status(200).json({
    message: "API Not Found",
  });
});

app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});

module.exports = app;
