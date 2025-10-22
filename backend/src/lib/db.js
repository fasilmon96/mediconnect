import mongoose from "mongoose";
import { ENV } from "./env.js";



export const connectDB = async () =>{
     try {
        const {MONGO_URI}  = ENV;
      
         const conn = await mongoose.connect(MONGO_URI);
         console.log(`MongoDB Connected:${conn.connection.host}`)

     } catch (error) {
        console.log("Error Connecting to MongoDB", error)
        process.exit(1);
     }
}