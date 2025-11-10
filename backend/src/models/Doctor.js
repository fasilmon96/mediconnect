import mongoose from "mongoose";
import { generateAvatar } from "../lib/utils.js";



export const doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true,
    },

    speciality: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
    },

    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true,
    },

    isActive: {
        type: Boolean,
        default: true
    },

    appointments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment"
        }
    ]

},
    {
        timestamps: true
    }
);

doctorSchema.pre("save", function (next) {
    if (!this.imageUrl) {
        this.imageUrl = generateAvatar(this.name, this.gender);
    }
    next();
});



const Doctor = mongoose.model("Doctor", doctorSchema)

export default Doctor;





