import express, { ErrorRequestHandler, Request, Response } from "express";
import moment from "moment";
import dbBlog from "../config/dbBlog";
import { reqRegister } from "../interface/auth.type";
import { User } from "../model/user.model";
const bcrypt = require("bcrypt");
const saltRounds = 10;
export const Login = (req: Request, res: Response) => {
  return res.json({ status: 200, msg: "okkkk" });
};
export const Register = async (req: Request, res: Response) => {
  const form: reqRegister = req.body;
  try {
    const checkUsername = await dbBlog<User>("user").where(
      "username",
      form.username
    );
    if (checkUsername.length > 0) {
      return res.json({ status: 301, results: "user used" });
    } else {
      bcrypt
        .hash(form.password, saltRounds)
        .then(async (hash: any) => {
          const insertUser = await dbBlog<User>("user").insert({
            username: form.username,
            password: hash,
            p_name: form.p_name,
            f_name: form.f_name,
            l_name: form.l_name,
            sex: form.sex,
            role: form.role,
            create_at: moment().format("YYYY-MM-DD HH:MM:ss"),
          });
          return res.json({ status: 200, results: insertUser });
        })
        .catch((err: any) => {
          console.error(err.message);
          return res.json({ status: 500, results: err.message });
        });
    }
  } catch (error: any) {
    return res.json({ status: 500, results: error.message });
  }
};
