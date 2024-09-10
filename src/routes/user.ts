import { Router } from "express";
import { CreateUser, CreateUserDashboard, DeleteUser, LoginUser, ReadUser, ReadUserId, UpdateUser } from "../controllers/user";
import { upload } from "../middlewares/multerConfig";

const router = Router();

router.get("/api/user/read", ReadUser)
router.get("/api/user/read/:Uid", ReadUserId)

router.post("/api/user/create", upload.single('Uimagen'),  CreateUserDashboard)
router.post("/api/user/login", LoginUser)
router.post("/api/user/register",  upload.single('Uimagen'), CreateUser)

router.patch("/api/user/update/:Uid", UpdateUser)

router.delete("/api/user/delete/:Uid", DeleteUser)

export default router


