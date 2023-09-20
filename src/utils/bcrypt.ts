import bcrypt, { compareSync } from "bcrypt";

const encryptPassword = (password: string) => {
  return bcrypt.hashSync(password, 5);
};

const verifiedPassword = (password: string, passHash: string) => {
  return compareSync(password, passHash);
};
export { encryptPassword, verifiedPassword };
