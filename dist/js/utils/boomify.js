"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boomify = function (statusCode, message) {
    var error = new Error();
    error.message = message;
    error.status = statusCode;
    return error;
};
exports.default = boomify;
