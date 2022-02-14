import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "./routes";

const SERVER_PORT = 3000;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(SERVER_PORT, () =>
  console.log(`🔥 Server is running on port ${SERVER_PORT}`)
);
