import jwt from "jsonwebtoken";
import { ENV } from "./env.js";


export const generateToken = (userId , res) =>{
   const {JWT_SECRET} = ENV
   if(!JWT_SECRET) throw new Error("JWT_SECRET is not secured");

   const token = jwt.sign({id : userId}, JWT_SECRET , {
    expiresIn : "7d"
});
  
  res.cookie("med" , token ,{
    maxAge : 7 *24*60*60*1000,
    httpOnly : true ,
    sameSite : "strict",
    secure : ENV.NODE_ENV === "development" ? false : true,
  })
  return token
  
};


export const  generateAvatar = (name , gender) =>{

   const username = name.replace(/\s+/g, "").toLowerCase();
   const base = "https://avatar.iran.liara.run/public";
   
   if(gender === "female") return `${base}/girl?username=${username}`
   
   return `${base}/boy?username=${username}`
}
 