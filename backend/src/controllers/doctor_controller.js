import { generateAvatar } from "../lib/utils.js";
import Doctor from "../models/Doctor.js";




export const createDoctor = async (req, res) => {

    try {

        const { name, email, phone, speciality, bio, gender } = req.body;

        if (!name, !email, !phone, !speciality, !bio, !gender) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const doctor = new Doctor({
            name,
            email,
            phone,
            speciality,
            bio,
            gender

        })
        await doctor.save();
        res.status(201).json({ message: "doctor create successful" })


    } catch (error) {
        console.log("Error doctor create", error)
        res.status(500).json({ message: "Internal Server Error" });
    }

};


export const getDoctor = async (_, res) => {

    try {
        const doctors = await Doctor.find({});
        res.json({ doctors })
    } catch (error) {
        console.log("Error in getDoctorController", error)
        res.status(500).json({ message: "Internal Server Error" })
    }

};


export const editDoctor = async (req, res) => {
    try {

        const { id } = req.params;
        const updates = req.body;

        const doctor = await Doctor.findByIdAndUpdate(
            id,
            updates,
            { new: true }
        );
        if (!doctor) return res.status(401).json({ message: "Doctor not found" });

        if (updates.name || updates.gender) {
            doctor.imageUrl = generateAvatar(doctor.name, doctor.gender)
            await doctor.save();
        };

        res.status(200).json({message : "Edit succesfully"})


    } catch (error) {

    }

};


export const deleteDoctor = async (req , res) => {

    try {
        const {id} = req.params;

        const doctor = await Doctor.findByIdAndDelete(id);

        if(!doctor) return res.status(401).json({message : "Doctor not found"});

        res.status(200).json({message : "Doctor deleted successfully"})
    } catch (error) {
        console.log("Error in deleteDoctor:" , error);
        res.status(500).json({message : "Internal Server Error"});
    }


}


