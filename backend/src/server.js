import express from "express";
import "dotenv/config";
import AuthRoute from "./router/auth_route.js";




const app = express();
const PORT = process.env.PORT || 5000;

 app.use(express.json());



 app.use("/api/auth", AuthRoute);



app.listen(PORT , () => {
  console.log("Server is running http://localhost:" + PORT)
})