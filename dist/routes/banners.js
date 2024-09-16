"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("../controllers/category");
const multer_1 = __importDefault(require("multer"));
const storage_1 = require("../middlewares/storage");
const router = (0, express_1.Router)();
const uploader = (0, multer_1.default)({ storage: storage_1.storage });
router.post("/api/category/create", uploader.single('Cimage'), category_1.CreateCategory);
router.get("/api/category/read", category_1.ReadCategory);
router.get("/api/category/readPublicId/:Cid", category_1.ReadCategoryId);
router.patch("/api/category/update/:Cid", uploader.single('Cimage'), category_1.UpdateCategory);
router.delete("/api/category/delete/:Cid", category_1.DeleteCategory);
exports.default = router;
