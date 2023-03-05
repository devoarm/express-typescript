"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = exports.Login = void 0;
const moment_1 = __importDefault(require("moment"));
const dbBlog_1 = __importDefault(require("../config/dbBlog"));
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Login = (req, res) => {
    return res.json({ status: 200, msg: "okkkk" });
};
exports.Login = Login;
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const form = req.body;
    try {
        const checkUsername = yield (0, dbBlog_1.default)("user").where("username", form.username);
        if (checkUsername.length > 0) {
            return res.json({ status: 301, results: "user used" });
        }
        else {
            bcrypt
                .hash(form.password, saltRounds)
                .then((hash) => __awaiter(void 0, void 0, void 0, function* () {
                const insertUser = yield (0, dbBlog_1.default)("user").insert({
                    username: form.username,
                    password: hash,
                    p_name: form.p_name,
                    f_name: form.f_name,
                    l_name: form.l_name,
                    sex: form.sex,
                    role: form.role,
                    create_at: (0, moment_1.default)().format("YYYY-MM-DD HH:MM:ss"),
                });
                return res.json({ status: 200, results: insertUser });
            }))
                .catch((err) => {
                console.error(err.message);
                return res.json({ status: 500, results: err.message });
            });
        }
    }
    catch (error) {
        return res.json({ status: 500, results: error.message });
    }
});
exports.Register = Register;
