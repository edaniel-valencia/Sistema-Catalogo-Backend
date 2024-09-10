"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const multerConfig_1 = require("../middlewares/multerConfig");
const router = (0, express_1.Router)();
router.get("/api/user/read", user_1.ReadUser);
router.get("/api/user/read/:Uid", user_1.ReadUserId);
router.post("/api/user/create", multerConfig_1.upload.single('Uimagen'), user_1.CreateUserDashboard);
// router.post("/api/user/login", LoginUser)
router.post("/api/user/register", multerConfig_1.upload.single('Uimagen'), user_1.CreateUser);
router.patch("/api/user/update/:Uid", user_1.UpdateUser);
router.delete("/api/user/delete/:Uid", user_1.DeleteUser);
exports.default = router;
