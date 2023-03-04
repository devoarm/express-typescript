import express, { Request, Response } from "express";

export const userRoutes = express.Router();

userRoutes.get("/", (req: Request, res: Response) => {
  return res.json({ status: 200, msg: "Hello User" });
});
userRoutes.post("/login", (req: Request, res: Response) => {
  return res.json({ status: 200, results: req.body });
});
