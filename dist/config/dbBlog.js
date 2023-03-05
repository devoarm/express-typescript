"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const dbBlog = (0, knex_1.default)({
    client: "mysql2",
    connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "ntng",
        database: "web_blog",
    },
    pool: {
        min: 0,
        max: 7,
        afterCreate: (conn, done) => {
            conn.query("SET NAMES utf8mb4", (err) => {
                done(err, conn);
            });
        },
    },
});
exports.default = dbBlog;
