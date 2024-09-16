import { Router } from "express";
import { CreateCategory, DeleteCategory, ReadCategory, ReadCategoryId, UpdateCategory } from "../controllers/category";
import multer from 'multer';
import { storage } from '../middlewares/storage';

const router = Router();
const uploader = multer({ storage });
router.post("/api/category/create", uploader.single('Cimage'), CreateCategory)

router.get("/api/category/read", ReadCategory)
router.get("/api/category/readPublicId/:Cid", ReadCategoryId)
router.patch("/api/category/update/:Cid",  uploader.single('Cimage'),  UpdateCategory)
router.delete("/api/category/delete/:Cid", DeleteCategory)

export default router

