"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var port = app_1.default.get("PORT");
app_1.default.listen(port, function () {
    // eslint-disable-next-line no-console
    console.log("Server is running on http://localhost:".concat(port));
});