"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// body-parser
app.use(body_parser_1.default.json({ limit: "50mb", type: "application/json" }));
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
dotenv_1.default.config();
app.use("/", routes_1.routes);
// start the server
app.listen(process.env.PORT, () => {
    console.log(`server running : ${process.env.PORT}`);
});
