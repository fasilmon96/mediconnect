import mongoose from "mongoose";




const appointmentSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },

    date: {
        type: Date,
        required: true
    },

    time: {
        type: String,
        require: true,
    },

    duration: {
        type: Number,
        default: 30,
    },

    status: {
        type: String,
        enum: ["CONFIRMED", "COMPLETED"],
        default: "CONFIRMED",

    },

    reason: {
        type: String
    }
},

    {
        timestamps: true
    }

)


const Appointment = mongoose.model("Appointment", appointmentSchema)


export default Appointment;