import express from "express";
const router = express.Router();

router.get("/about", (req, res) => {
  return res.json({ message: "About Info Here" });
});

router.get("/about/:user", (req, res) => {
  console.log(req.params.user);
  return res.json({ message: `Welcome ${req.params.user}` });
});
router.get("*", (req, res) => {
  return res.json({
    success: false,
    message: "Its is Empty... Go Back to you Life!",
  });
});

export default router;
