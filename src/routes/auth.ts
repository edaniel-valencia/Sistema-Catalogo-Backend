import { Router } from "express";
import { Login } from "../controllers/auth";

const router = Router();


router.post("/api/auth/login", Login)


export default router



