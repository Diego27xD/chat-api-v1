import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces/user";
import { registerUser } from "../services/auth.service";
import { getErrorMessage, reportError } from "../handlers/error.handle";

const prisma = new PrismaClient();

const signUp = async (req: Request, res: Response) => {
  try {
    await registerUser(req.body as User);

    res.status(200).json({
      status: 200,
      ok: "ok",
    });
  } catch (error) {
    return reportError({ message: getErrorMessage(error) }, res);
  } finally {
    await prisma.$disconnect();
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

export { signUp };
