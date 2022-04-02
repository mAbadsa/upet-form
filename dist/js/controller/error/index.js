"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientError = exports.serverError = void 0;
var _500_1 = __importDefault(require("./500"));
exports.serverError = _500_1.default;
var _404_1 = __importDefault(require("./404"));
exports.clientError = _404_1.default;
