import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth_middleware.js";
import { createDoctor, deleteDoctor, editDoctor, getDoctor } from "../controllers/doctor_controller.js";


const router = express.Router();



router.post("/create" , /*protectRoute , adminRoute */ createDoctor)
router.get("/getDoctor" , /*protectRoute */ getDoctor)
router.put("/editDoctor/:id" , /*protectRoute , adminRoute */ editDoctor )
router.delete("/deleteDoctor/:id" , /*protectRoute , adminRoute */ deleteDoctor )








export default router;