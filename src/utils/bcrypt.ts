import bcrypt from "bcrypt";

const encryptPassword = (password: string) => {
  return bcrypt.hashSync(password, 5);
};

export { encryptPassword };
