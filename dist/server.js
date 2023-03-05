"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
// body-parser
app.use(body_parser_1.default.json({ limit: "50mb", type: "application/json" }));
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
//routes
app.use("/", routes_1.routes);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
