import mongose from "mongoose";


const userSchema = new mongose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },

    fullName: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },

    appointments: [
        {
            type: mongose.Schema.Types.ObjectId,
            ref: "Appointment"
        }
    ]
},
    {
        timestamps: true
    }

)

const User = mongose.model("User", userSchema);

export default User;
