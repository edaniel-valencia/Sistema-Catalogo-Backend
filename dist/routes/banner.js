"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const banner_1 = require("../controllers/banner");
const multer_1 = __importDefault(require("multer"));
const storage_1 = require("../middlewares/storage");
const router = (0, express_1.Router)();
const uploader = (0, multer_1.default)({ storage: storage_1.storage });
router.post("/api/banner/create", uploader.single('Bimage'), banner_1.CreateBanner);
router.get("/api/banner/read", banner_1.ReadBanner);
router.get("/api/banner/read/:Bid", banner_1.ReadBannerId);
router.patch("/api/banner/update/:Bid", uploader.single('Bimage'), banner_1.UpdateBanner);
router.delete("/api/banner/delete/:Bid", banner_1.DeleteBanner);
router.get("/api/banner/readPublic", banner_1.ReadBannerPublic);
exports.default = router;
