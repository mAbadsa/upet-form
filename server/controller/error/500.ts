import { Request, Response, NextFunction } from "express";
import { resData } from "../../types/response.t";

// eslint-disable-next-line no-unused-vars
const serverError = (
  error: { [key: string]: any },
  req: Request,
  res: Response<resData>,
  next: NextFunction
) => {
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV !== "development") console.log(error);
  return res.status(error.status || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
    statusCode: error.status || 500,
  });
};

export default serverError;

