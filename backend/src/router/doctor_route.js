import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth_middleware.js";
import { createDoctor, deleteDoctor, editDoctor, getDoctor } from "../controllers/doctor_controller.js";


const router = express.Router();


 router.use(protectRoute);

router.post("/create" , adminRoute , createDoctor)
router.get("/getDoctor"   , getDoctor)
router.put("/editDoctor/:id" , adminRoute , editDoctor )








export default router;