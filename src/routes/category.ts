import { Router } from "express";
import { CreateCategory, DeleteCategory, ReadCategory, ReadCategoryId, UpdateCategory } from "../controllers/category";
import multer from 'multer';
import { storage } from './../middlewares/multerConfig';

const router = Router();
const uploader = multer({ storage });

router.get("/api/category/read", ReadCategory)
router.get("/api/category/read/:Cid", ReadCategoryId)
router.post("/api/category/create", uploader.single('file'), CreateCategory)
router.patch("/api/category/update/:Cid", UpdateCategory)
router.delete("/api/category/delete/:Cid", DeleteCategory)

export default router