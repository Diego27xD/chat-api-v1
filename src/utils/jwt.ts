import { sign } from "jsonwebtoken";

const JWT_TOKEN_KEY = process.env.JWT_TOKEN_SECRET;
const generateTokenAccess = async (id: string) => {
  return sign({ id }, JWT_TOKEN_KEY!, { expiresIn: "30d" });
};

export { generateTokenAccess };
