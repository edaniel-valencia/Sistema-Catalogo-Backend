"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_1 = require("../controllers/email");
const router = (0, express_1.Router)();
router.post("/api/email/send", email_1.SendEmail);
exports.default = router;
