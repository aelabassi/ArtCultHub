import { RequestHandler, ErrorRequestHandler } from "express";

export const notFoundMiddleware: RequestHandler = (req, res, next) => {
    res.status(404);
    next(new Error(`Not Found - ${req.originalUrl}`));
}

export const errorHandlerMiddleware: ErrorRequestHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message ?? error,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack
    });
}
