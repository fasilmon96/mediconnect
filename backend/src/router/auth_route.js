import express from "express";
import { login, logout, signup } from "../controllers/auth_controller.js";
import { protectRoute } from "../middleware/auth_middleware.js";


const router = express.Router();


router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/check", protectRoute , (req , res) => res.status(200).json(req.user))




export default router;