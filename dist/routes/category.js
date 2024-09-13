"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("../controllers/category");
const multer_1 = __importDefault(require("multer"));
const multerConfig_1 = require("./../middlewares/multerConfig");
const router = (0, express_1.Router)();
const uploader = (0, multer_1.default)({ storage: multerConfig_1.storage });
router.get("/api/category/read", category_1.ReadCategory);
router.get("/api/category/read/:Cid", category_1.ReadCategoryId);
router.post("/api/category/create", uploader.single('file'), category_1.CreateCategory);
router.patch("/api/category/update/:Cid", category_1.UpdateCategory);
router.delete("/api/category/delete/:Cid", category_1.DeleteCategory);
exports.default = router;
