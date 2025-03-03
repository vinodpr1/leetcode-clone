import express from "express";
import { SignIn, SignUp, getBulkUser, getProfile } from "../../../controllers";

const userRoutes: any = express.Router();

userRoutes.post("/signin", SignIn);
userRoutes.post("/signup", SignUp);
userRoutes.get("/bulk", getBulkUser);
userRoutes.get("/profile", getProfile);

export { userRoutes };
