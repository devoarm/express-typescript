import express, { Application, Request, Response } from "express";
import { routes } from "./routes";
import dotenv from "dotenv";

import bodyParser from "body-parser";

const app: Application = express();

// body-parser
app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
dotenv.config();

app.use("/", routes);
// start the server
app.listen(process.env.PORT, () => {
    console.log(
      `server running : ${process.env.PORT}`
    );
  });
