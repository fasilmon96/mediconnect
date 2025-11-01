import express from "express";
import AuthRoute from "./router/auth_route.js";
import DoctorRoute from "./router/doctor_route.js";
import AppointmentRoute from "./router/appointment_route.js";
import  {ENV} from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";


 





const app = express();

const PORT = ENV.PORT || 5000 ;

 app.use(express.json());
 app.use(cors({origin : ENV.CLIENT_URL ,credentials : true}));
 app.use(cookieParser());




 app.use("/api/auth", AuthRoute);
 app.use("/api/doctors", DoctorRoute);
 app.use("/api/appointments" , AppointmentRoute)



app.listen(PORT , () => {
  console.log("Server is running http://localhost:" + PORT)
  connectDB();
})