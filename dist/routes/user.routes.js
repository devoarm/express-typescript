"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
exports.userRoutes = express_1.default.Router();
exports.userRoutes.get("/", (req, res) => {
    return res.json({ status: 200, msg: "Hello User" });
});
exports.userRoutes.post("/login", (req, res) => {
    return res.json({ status: 200, results: req.body });
});
