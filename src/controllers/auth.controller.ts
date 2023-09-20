import { Request, Response } from "express";
import { User } from "../interfaces/user";
import { loginUser, registerUser } from "../services/auth.service";
import { getErrorMessage, reportError } from "../handlers/error.handle";
import { Auth } from "../interfaces/auth";

const signUp = async (req: Request, res: Response) => {
  try {
    await registerUser(req.body as User);

    res.status(200).json({
      status: 200,
      ok: "ok",
    });
  } catch (error) {
    return reportError({ message: getErrorMessage(error) }, res);
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
    const result = await loginUser(req.body as Auth);

    res.status(result.status!).json({
      ok: true,
      result,
    });
  } catch (error) {
    return reportError({ message: getErrorMessage(error) }, res);
  }
};

export { signUp, signIn };
