import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {

    const { fullName, email, password } = req.body;

    try {

        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 charcter" });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        })

        if (newUser) {
            const saveUser = await newUser.save();
            generateToken(saveUser._id, res)

            res.status(201).json({
                _id: saveUser._id,
                fullName: saveUser.fullName,
                email: saveUser.email,
                role: saveUser.role,
            })
        }
    } catch (error) {
        console.log("Error in Signup controller", error)
        res.status(500).json({ message: "Internal Server error" })
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "Invalid Credentials" })

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials" })

        generateToken(user._id, res)

        return res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email, 
            role: user.role,
        })
    } catch (error) {
       console.log("Error in Login controller" , error)
       res.status(500).json({ message: "Internal Server error" })
    }
};



export const logout = async (_ ,res) =>{   
    res.cookie("med" ,"" , {maxAge : 0})
    res.status(200).json({message : "Logout successfuly!"})
};






