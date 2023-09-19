import { AuthRouter } from "./components";
import { Express, Router } from "express";
const listRouter: [string, Router][] = [["/api/v1/auth", AuthRouter]];

export const routes = (app: Express) => {
  listRouter.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
