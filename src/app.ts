import express from "express";
import cors from "cors";
import "dotenv/config";

export const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.set("port", PORT);
