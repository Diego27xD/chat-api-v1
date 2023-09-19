import { Response } from "express";

export const reportError = (
  { message }: { message: string },
  res: Response
) => {
  res.status(500).json({
    status: 500,
    ok: false,
    msg: message,
  });
};

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};
