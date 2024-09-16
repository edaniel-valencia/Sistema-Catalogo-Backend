import { Router } from "express";
import { CreateBanner, DeleteBanner, ReadBanner, ReadBannerId, ReadBannerPublic, UpdateBanner } from "../controllers/banner";
import multer from 'multer';
import { storage } from '../middlewares/storage';

const router = Router();
const uploader = multer({ storage });

router.post("/api/banner/create", uploader.single('Bimage'), CreateBanner)

router.get( "/api/banner/read", ReadBanner)
router.get( "/api/banner/read/:Bid", ReadBannerId)

router.patch("/api/banner/update/:Bid",  uploader.single('Bimage'),  UpdateBanner)

router.delete("/api/banner/delete/:Bid", DeleteBanner)




router.get( "/api/banner/readPublic", ReadBannerPublic)


export default router

