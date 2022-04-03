"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line no-unused-vars
var serverError = function (error, req, res, next) {
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV !== "development")
        console.log(error);
    return res.status(error.status || 500).json({
        success: false,
        message: error.message || "Internal Server Error",
        statusCode: error.status || 500,
    });
};
exports.default = serverError;
