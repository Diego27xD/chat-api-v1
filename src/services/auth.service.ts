import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces/user";
import { encryptPassword } from "../utils/bcrypt";
import { ErrorRequestHandler } from "express";
import { getErrorMessage, reportError } from "../handlers/error.handle";
const prisma = new PrismaClient();

const registerUser = async ({ name, username, email, password }: User) => {
  try {
    return await prisma.user.create({
      data: { name, username, email, password: encryptPassword(password) },
    });
  } catch (error) {
    throw new Error(`${error}`);
  } finally {
    await prisma.$disconnect();
  }
};

export { registerUser };
