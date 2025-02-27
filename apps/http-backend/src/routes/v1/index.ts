import express from "express";
import { userRoutes } from "./auth";

const authRoutes: any = express.Router();

authRoutes.use("/auth", userRoutes);

export { authRoutes };
