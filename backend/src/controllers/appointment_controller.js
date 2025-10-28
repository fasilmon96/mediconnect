import Appointment from "../models/Appointment.js";
import Doctor from "../models/Doctor.js";

export const createAppointment = async (req, res) => {

    try {

        const { user, doctor, date, time, reason } = req.body;

        if (!user || !doctor || !date || !time || !reason) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const appointment = new Appointment({
            user,
            doctor,
            date,
            time,
            reason
        })
        await appointment.save();

        await Doctor.findByIdAndUpdate(
            doctor,
            {$push :{appointments : appointment._id}},
            {new : true}

        )

        res.status(201).json({ message: "Appointment create successfully!" });
    } catch (error) {
        console.log("Error appointment controller", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
};


export const getAppointment = async (req, res) => {

    try {
        const appointments = await Appointment.find({})
            .populate("user", "fullName email")
            .populate("doctor", "name speciality")

        if (!appointments || appointments.length === 0) {
            return res.status(400).json({ message: "No appointments found" });
        }


        res.status(200).json({
            count: appointments.length,
            appointments
        })

    } catch (error) {
        console.log("Error getAppointment controller", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
};



export const updateAppointment = async (req, res) => {

    try {

        const { id } = req.params;

        const { status } = req.body;

        if (req.user?.role !== "admin") {
            res.status(400).json({ message: "Only admin can update appointments" });
        }

        if (!status) {
            return res.status(401).json({ message: "Status field is required" });
        }

        const appointment = await Appointment.findByIdAndUpdate(id);

        if (!appointment) return res.status(400).josn({ message: "Appointment not found" });

        appointment.status = status

        await appointment.save();

        res.status(200).json({
            message: `Appointment marked as ${status}`,
            appointment
        })


    } catch (error) {
        console.log("Error updateAppointment controller", error);
        res.status(500).json({ message: "Internal Server Error" });
  
}
}