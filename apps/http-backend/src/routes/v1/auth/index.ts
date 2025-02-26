import express from "express";
import { SignIn, SignUp } from "../../../controllers";

const userRoutes:any = express.Router();

userRoutes.post("/signin", SignIn);
userRoutes.post("/signup", SignUp);

export {userRoutes}

