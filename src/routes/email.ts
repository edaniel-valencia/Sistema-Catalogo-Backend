import { Router } from "express";
import { SendEmail } from "../controllers/email";

const router = Router();


router.post("/api/email/send", SendEmail)


export default router



