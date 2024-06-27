const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

console.log(process.env.mongo_connect);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.listen(8000, () => {
  console.log("Server Started!!");
});
