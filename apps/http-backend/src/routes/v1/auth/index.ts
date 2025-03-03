import express from "express";
import { SignIn, SignUp, getBulkUser } from "../../../controllers";

const userRoutes: any = express.Router();

userRoutes.post("/signin", SignIn);
userRoutes.post("/signup", SignUp);
userRoutes.get("/bulk", getBulkUser);

export { userRoutes };
