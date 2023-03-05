import express from "express";
import { Login, Register } from "../controller/auth.controller";

export const authRoutes = express.Router();

authRoutes.post("/login", Login);
authRoutes.post("/register", Register);
