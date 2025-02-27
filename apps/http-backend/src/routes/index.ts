import express from "express";
import { authRoutes } from "./v1";

const appRoutes: any = express.Router();

appRoutes.use("/v1", authRoutes);

export { appRoutes };
