import Appointment from "../models/Appointment.js";
import Doctor from "../models/Doctor.js";

export const createAppointment = async (req, res) => {

    try {

        const { doctor, date, time, reason } = req.body;

        const user = req.user._id;

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
            { $push: { appointments: appointment._id } },
            { new: true }

        )

        res.status(201).json({ message: "Appointment create successfully!" });
    } catch (error) {
        console.log("Error appointment controller", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
};

export const getAppointment = async (req, res) => {
    try {

        const userId = req.user._id;
        const now = new Date();

        const allAppointments = await Appointment.find({})
            .populate("user", "fullName email")
            .populate("doctor", "name speciality imageUrl");

        const allUserAppointments = await Appointment.find({user : userId})
            .populate("user", "fullName email")
            .populate("doctor", "name speciality imageUrl");

        const upcomingAppointmentsFilter = {
            user: userId,
            $expr: {
                $gt: [
                    {
                        $dateFromString: {
                            dateString: {
                                $concat: [
                                    { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                                    " ",
                                    "$time"
                                ]
                            },
                            format: "%Y-%m-%d %H:%M",
                            timezone: "Asia/Kolkata",
                        }
                    },
                    now
                ]
            }
        };

        const upcomingAppointments = await Appointment.find(upcomingAppointmentsFilter)
            .populate("user", "fullName email")
            .populate("doctor", "name speciality imageUrl")
            .sort({
                date: 1,
                time: 1
            });


        res.status(200).json({
            allUserAppointments : allUserAppointments,
            totalCount: allAppointments.length,
            totalAppointments: allAppointments,
            appointments: upcomingAppointments
        });

    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ message: "Server error", error: error.message });
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

        const appointment = await Appointment.findByIdAndUpdate(
            id,
            { status },          
            { new: true }     
        );

        if (!appointment) return res.status(400).josn({ message: "Appointment not found" });

    
        res.status(200).json({
            message: `Appointment marked as ${status}`,
            appointment
        })


    } catch (error) {
        console.log("Error updateAppointment controller", error);
        res.status(500).json({ message: "Internal Server Error" });

    }
}