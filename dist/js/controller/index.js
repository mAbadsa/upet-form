"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.serverError = exports.clientError = void 0;
var error_1 = require("./error");
Object.defineProperty(exports, "clientError", { enumerable: true, get: function () { return error_1.clientError; } });
Object.defineProperty(exports, "serverError", { enumerable: true, get: function () { return error_1.serverError; } });
var user_1 = require("./user");
Object.defineProperty(exports, "signup", { enumerable: true, get: function () { return user_1.signup; } });
