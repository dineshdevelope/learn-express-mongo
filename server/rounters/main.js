import express from "express";
import { createTutorialRequest } from "../models/user-request.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Hello Backend",
  });
});

router.post("/create", async (req, res) => {
  const dataFromClient = { ...req.body, createdAt: Date.now() };
  //console.log(typeof dataFromClient, dataFromClient);
  const creationResult = await createTutorialRequest(dataFromClient);
  console.log("Creation Result From Main.js", creationResult);
  return res.json(dataFromClient);
});
export default router;
