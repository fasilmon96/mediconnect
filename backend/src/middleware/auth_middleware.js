import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";


export const protectRoute =  async (req , res , next) =>{
   
     try {
        const token = req.cookies.jwt
        if(!token) return res.status(400).json({message : "Unauthorized - No toke provided"})
       
         const decoded = jwt.verify(token , ENV.JWT_SECRET)
         if(!decoded) return res.status(400).json({message : "Unauthorized - Invalid token"})
        
        const user = await User.find(decoded.userId).select("-password");
       
         if(!user) return res.status(400).json({message : "User not found"});

         req.user = user;

         next();

     } catch (error) {
        console.log("Error in protectRoute middleware:", error)
        res.status(500).json({message : "Internal Server Error"})
     }

};

