import express from "express";
import AuthRoute from "./router/auth_route.js";
import DoctorRoute from "./router/doctor_route.js";
import AppointmentRoute from "./router/appointment_route.js";
import  {ENV} from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";


const app = express();

const __dirname = path.resolve();
const PORT = ENV.PORT || 5000 ;

 app.use(express.json());
 app.use(cors({origin : ENV.CLIENT_URL ,credentials : true}));
 app.use(cookieParser());




 app.use("/api/auth", AuthRoute);
 app.use("/api/doctors", DoctorRoute);
 app.use("/api/appointments" , AppointmentRoute)
 


if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist",)));
  
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "..frontend","dist","index.html"));
  });

}




app.listen(PORT , () => {
  console.log("Server is running http://localhost:" + PORT)
  connectDB();
})