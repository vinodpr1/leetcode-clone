import { prismaClient } from "@repo/db/prismaClient";
import { UserServices } from "../services";
import jwt, { JwtPayload } from "jsonwebtoken";
import { authSchema, userSchema } from "@repo/common/types";
import { Request, Response } from "express";

const userServices = new UserServices();

export const SignUp = async (req: Request, res: Response) => {
  try {
    const zodRes = userSchema.safeParse(req.body);
    if (!zodRes.success) {
      return res.status(400).json({
        message: "Validation failed",
        success: false,
        error: zodRes.error.errors.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }
    const token = await userServices.SignUp(req.body);
    return res.status(200).json({
      message: "signin successfully",
      success: true,
      data: {
        token: token,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "can't signin successfully",
      success: false,
      err: error || "Authentication failed",
    });
  }
};

export const SignIn = async (req: Request, res: Response) => {
  try {
    const zodRes = authSchema.safeParse(req.body);
    if (!zodRes.success) {
      return res.status(400).json({
        message: "Validation failed",
        success: false,
        error: zodRes.error.errors.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }
    const token = await userServices.SignIn(req.body);
    return res.status(200).json({
      message: "signin successfully",
      success: true,
      data: {
        token: token,
      },
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "can't signin successfully",
      success: false,
      err: error || "Authentication failed",
    });
  }
};

export const getBulkUser = async (req: Request, res: Response) => {
  try {
    const user = await userServices.getBulkUser();
    return res.status(400).json({
      message: "users find successfully",
      success: false,
      data: {
        user: user,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "can't find users",
      success: false,
      err: error || "Error Occured",
    });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const data = jwt.verify(req.cookies.authToken, "vinodpr") as JwtPayload;
    const user = await prismaClient.user.findUnique({
      where: { id: data.id },
      omit: { password: true },
    });
    return res.status(200).json({
      message: "user find successfully",
      success: true,
      data: {
        user: user,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "can't find user",
      success: false,
      err: error || "Error Occured",
    });
  }
};
