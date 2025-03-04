import { prismaClient } from "@repo/db/prismaClient";
import { UserServices } from "../services";
import jwt, { JwtPayload } from "jsonwebtoken";
import { authSchema, userSchema } from "@repo/common/types";

const userServices = new UserServices();

export const SignUp = async (req: any, res: any) => {
  try {
    const zodRes = userSchema.safeParse(req.body);
    if (!zodRes.success) {
      return res.status(400).json({ error: zodRes.error.errors });
    }
    const user = await userServices.SignUp( req.body);
    return res.status(200).json({
      message: "signup successfully",
      token: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "can't signup successfully",
      err: error,
    });
  }
};

export const SignIn = async (req: any, res: any) => {
  try {
    const zodRes = authSchema.safeParse(req.body);
    if (!zodRes.success) {
      return res.status(400).json({ error: zodRes.error.errors });
    }
    const user = await userServices.SignIn(req.body);
    return res.status(200).json({
      message: "signin successfully",
      token: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "can't signin successfully",
      err: error,
    });
  }
};

export const getBulkUser = async (req: any, res: any) => {
  try {
    const user = await userServices.getBulkUser();
    res.status(200).json({
      message: "User fetched successfully",
      user: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Users can't fetched successfully",
      err: error,
    });
  }
};

export const getProfile = async (req: any, res: any) => {
  try {
    const data = jwt.verify(req.cookies.authToken, "vinodpr") as JwtPayload;
    const user = await prismaClient.user.findUnique({
      where: { id: data.id },
      omit: { password: true },
    });
    res.status(200).json({
      message: "User fetched successfully",
      user: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Users can't fetched successfully",
      err: error,
    });
  }
};
