import express from "express";


const router = express.Router();


router.get("/signup" , (req , res)=>{
    res.send ("sign")
});

router.get("/login" , (req , res)=>{
    res.send ("loginsucsse")
});

router.get("/logout" , (req , res)=>{
    res.send ("logoutsucssess")
});






export default router;