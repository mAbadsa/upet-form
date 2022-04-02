import { Request, Response } from "express";

const clientError = (req: Request, res: Response) => {
  res.status(404).json({
    message: "Not Found",
    statusCode: 404,
  });
};

export default clientError;

