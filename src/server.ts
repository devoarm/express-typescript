import express, { Application, Request, Response } from "express";
import { routes } from "./routes";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const port = process.env.PORT;

const app: Application = express();

// body-parser
app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//routes
app.use("/", routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
