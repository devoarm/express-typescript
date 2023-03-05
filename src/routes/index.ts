import express from "express";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";

export const routes = express.Router();

routes.use("/user", userRoutes);
routes.use("/auth", authRoutes);
