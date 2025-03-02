import express from "express";
import { getQuestions } from "../../../controllers";

const questionRoutes: any = express.Router();

questionRoutes.get("/", getQuestions);

export { questionRoutes };
