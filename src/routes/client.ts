import { Router } from "express";
import { CreateUser, CreateUserDashboard, DeleteUser, ReadUser, ReadUserId, UpdateUser } from "../controllers/user";

const router = Router();

router.get("/api/user/read", ReadUser)
router.get("/api/user/read/:Uid", ReadUserId)

router.post("/api/user/create", CreateUserDashboard)
// router.post("/api/user/login", LoginUser)
router.post("/api/user/register", CreateUser)

router.patch("/api/user/update/:Uid", UpdateUser)

router.delete("/api/user/delete/:Uid", DeleteUser)

export default router


