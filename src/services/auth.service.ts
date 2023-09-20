import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces/user";
import { encryptPassword, verifiedPassword } from "../utils/bcrypt";
import { Auth } from "../interfaces/auth";
import { generateTokenAccess } from "../utils/jwt";

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

const loginUser = async ({ email, username, password }: Auth) => {
  try {
    const user = await findUserRegistrated(email, username);
    if (!user) return { status: 404, msg: LOGIN_ERRORS["USER_NOT_FOUND"] };

    const isCorrectPassword = verifiedPassword(password, user.password);
    if (!isCorrectPassword)
      return { status: 401, msg: LOGIN_ERRORS["INVALID_PASSWORD"] };

    const token = await generateTokenAccess(user.id);

    return {
      status: 200,
      data: {
        username: user.username,
        token: token,
      },
    };
  } catch (error) {
    throw new Error(`${error}`);
  } finally {
    await prisma.$disconnect();
  }
};

const findUserRegistrated = async (email: string, username: string) => {
  return await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: {
            contains: email,
          },
        },
        {
          username: {
            contains: username,
          },
        },
      ],
    },
  });

  /* if (!user)
    return res.json({
      mgs: "El usuario no está registrado",
      ok: false,
      status: 404,
    }); */
};

const LOGIN_ERRORS = {
  USER_NOT_FOUND: "USER_NOT_FOUND",
  INVALID_PASSWORD: "INVALID_PASSWORD",
};
export { registerUser, loginUser };
