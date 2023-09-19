import express, { Express } from "express";
import cors from "cors";
import { routes } from "./router";
import "dotenv/config";

export const app: Express = express();
console.log(typeof app);
const PORT = process.env.PORT || 6000;
routes(app);
app.use(cors());
app.set("port", PORT);
