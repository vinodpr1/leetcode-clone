import express from "express";
import { userRoutes } from "./auth";
import { submissionRoutes } from "./submission";

const apiRoutes: any = express.Router();

apiRoutes.use("/auth", userRoutes);
apiRoutes.use("/submission",submissionRoutes);

export { apiRoutes };
