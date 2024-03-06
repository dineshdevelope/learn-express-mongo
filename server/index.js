import express from "express";
import router from "./rounters/main.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const server = express();
const SERVER_PORT = 8888;
dotenv.config();

server.use(express.json());
server.use(router);

server.get("*", (req, res) => {
  return res.json({
    sucess: false,
    message: "Hello World, Welcome to backend",
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`Server is Running On : http//localhost:${SERVER_PORT}`);
});

if (process.env.MONGODB_URL) {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connection Sucessfulley Established");
  } catch (error) {
    console.log(("Error From MongoDB", error));
  }
} else {
  console.error("ENV is not set");
}
