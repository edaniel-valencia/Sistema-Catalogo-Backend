import { Router } from "express";
import { CreateProduct, DeleteProduct, ReadProductId, ReadProduct, UpdateProduct, ReadCaregoryProduct } from "../controllers/product";
import validateToken from "./validateToken";
import multer from 'multer';
import { storage } from '../middlewares/storage';


const uploader = multer({ storage });

const router = Router();

router.get("/api/product/read", validateToken, ReadProduct)
router.get("/api/product/readPublic",  ReadProduct)
router.get("/api/product/category/:categoryId",  ReadCaregoryProduct)
router.get("/api/product/read/:Pid", ReadProductId)
router.post("/api/product/create", uploader.single('Pimage'),  CreateProduct)
router.patch("/api/product/update/:Pid", uploader.single('Pimage'),  UpdateProduct)
router.delete("/api/product/delete/:Pid", DeleteProduct)

export default router