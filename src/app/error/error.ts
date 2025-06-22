import { Request, Response, NextFunction } from "express";

export const ErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";
  let errorDetails = err;

  if (err.name === "ValidationError") {
    errorDetails = {
      name: err.name,
      errors: err.errors,
    };
  }
  res.status(statusCode).json({
    message,
    success: false,
    error: errorDetails || "Internal Server Error",
  });
};
