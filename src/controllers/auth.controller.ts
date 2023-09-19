import { Request, Response } from "express";

const signUp = (_req: Request, res: Response) => {
  try {
    res.status(200).json({
      msg: "Entraste al registro",
      status: 200,
    });
  } catch (e) {
    throw new Error("Error al registrarse");
  }
};

export { signUp };
