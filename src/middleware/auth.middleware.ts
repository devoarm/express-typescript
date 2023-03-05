require("dotenv").config();
import express, { Request, Response, NextFunction } from "express";
var jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    var decoded = jwt.verify(token, secret);    
  } catch (error) {
    return res.json({ status: "401", msg: "NoToken" });
  }
  return next();
};

module.exports = verifyToken;
