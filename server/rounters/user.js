import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  const users = ["Anbu", "Arul", "Azar"];
  return res.json({
    users: users,
  });
});

userRouter.get("/family", (req, res) => {
  const users = ["Kumar", "Rajesh", "Agila"];
  return res.json({
    users: users,
  });
});

export default userRouter;
