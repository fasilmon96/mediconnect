import express from "express";
import { createAppointment, getAppointment, updateAppointment } from "../controllers/appointment_controller.js";
import { adminRoute, protectRoute } from "../middleware/auth_middleware.js";

 const router = express.Router();

 router.use(protectRoute);

 router.post("/add" , createAppointment)
 router.get("/fetch" , getAppointment)
 router.put("/update/:id" , adminRoute, updateAppointment) 








 export default router;