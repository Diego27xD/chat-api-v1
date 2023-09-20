import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "./router";
import "dotenv/config";

export const app: Express = express();

const PORT = process.env.PORT;

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes(app);
app.set("port", PORT);
