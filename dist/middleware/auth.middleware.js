"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
const verifyToken = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        var decoded = jwt.verify(token, secret);
    }
    catch (error) {
        return res.json({ status: "401", msg: "NoToken" });
    }
    return next();
};
module.exports = verifyToken;
