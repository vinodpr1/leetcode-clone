import express from "express";
import { getQuestion, getQuestions } from "../../../controllers";

const questionRoutes: any = express.Router();

questionRoutes.get("/", getQuestion);
questionRoutes.get("/bulk", getQuestions);

export { questionRoutes };
