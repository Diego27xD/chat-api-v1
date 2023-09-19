import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces/user";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

const findUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email } = req.body as User;

    const existUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            username: {
              contains: username,
            },
          },
          {
            email: {
              contains: email,
            },
          },
        ],
      },
    });

    if (existUser) {
      return res
        .status(201)
        .json({ msg: "Username or email is already registered" });
    }

    next();
  } catch (error) {
    res.status(500).json({
      msg: "Error de conexion",
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
};

export { findUser };
