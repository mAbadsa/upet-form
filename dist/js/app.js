"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express_1 = __importStar(require("express"));
var path_1 = require("path");
var morgan_1 = __importDefault(require("morgan"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var connect_1 = __importDefault(require("./db/connect"));
var router_1 = __importDefault(require("./router"));
var controller_1 = require("./controller");
var app = (0, express_1.default)();
(0, connect_1.default)();
app.set("PORT", process.env.PORT || 8080);
app.disable("x-powered-by");
var middleware = [
    (0, express_1.json)(),
    (0, express_1.urlencoded)({
        extended: false,
    }),
    (0, cookie_parser_1.default)(),
    express_1.default.static((0, path_1.join)(__dirname, "..", "..", "client", "build")),
    (0, morgan_1.default)("dev"),
];
app.use(middleware);
app.use("/api/v1", router_1.default);
if (process.env.NODE_ENV === "production") {
    console.log("Out");
    app.use(express_1.default.static((0, path_1.join)(__dirname, "..", "..", "client", "build")));
    console.log((0, path_1.join)(__dirname, "..", "..", "client", "build"));
    app.get("*", function (req, res) {
        console.log(__dirname, "..", "..", "client", "build", "index.html");
        res.sendFile((0, path_1.join)(__dirname, "..", "..", "client", "build", "index.html"));
    });
}
app.use(controller_1.clientError);
app.use(controller_1.serverError);
exports.default = app;
