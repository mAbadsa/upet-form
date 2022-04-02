"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("../controller");
var validation_1 = require("../middleware/validation");
var router = (0, express_1.Router)();
router.post("/signup", validation_1.signupValidation, controller_1.signup);
exports.default = router;
