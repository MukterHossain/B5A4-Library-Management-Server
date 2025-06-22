"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const ErrorHandler = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
err, req, res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
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
exports.ErrorHandler = ErrorHandler;
