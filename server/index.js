import express from "express";
import router from "./rounters/main.js";

const server = express();
const SERVER_PORT = 8888;

server.get("/", (req, res) => {
  return res.json({
    sucess: true,
    message: "Hello World, Welcome to backend",
  });
});

server.use(router);
server.listen(SERVER_PORT, () => {
  console.log(`Server is Running On : http//localhost:${SERVER_PORT}`);
});
