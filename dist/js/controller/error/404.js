"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clientError = function (req, res) {
    res.status(404).json({
        message: "Not Found",
        statusCode: 404,
    });
};
exports.default = clientError;
