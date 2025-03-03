import express from "express";
import { Submit } from "../../../controllers";

const submissionRoutes: any = express.Router();

submissionRoutes.post("/submit", Submit);

export { submissionRoutes };
