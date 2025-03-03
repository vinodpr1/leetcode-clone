import express from "express";
import { userRoutes } from "./auth";
import { submissionRoutes } from "./submission";
import { questionRoutes } from "./questions";

const apiRoutes: any = express.Router();

apiRoutes.use("/auth", userRoutes);
apiRoutes.use("/submission", submissionRoutes);
apiRoutes.use("/questions", questionRoutes);

export { apiRoutes };
