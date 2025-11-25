import { Calendar, CircleCheckBigIcon, Clock, User } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogContent } from "../ui/dialog"
import { useNavigate } from "react-router-dom";

function ConfirmationModel({ data, onClose }) {

    const navigate = useNavigate();

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="bg-white/3 backdrop-blur-3xl border-white/10 max-w-md h-180">
                <div className="space-y-2 flex flex-col items-center py-3 px-3">
                    <CircleCheckBigIcon className="text-primary bg-white/5 rounded-full p-2 w-12 h-12" />
                    <h2 className="text-white/70 text-xl">Appointment Confirmed!</h2>
                    <p className="text-gray-400">Your appointment has been successfully booked</p>

                    <img
                        src="./succeffull.png"
                        alt="logoName"
                        className="w-48 h-48"
                    />
                </div>

                <div className="bg-white/5 rounded-sm p-2 space-y-2 mb-3">
                    <h3 className="text-white/70 text-center">Quick Summary</h3>

                    <div className="flex items-center gap-2 text-white/70 text-sm">
                        <User className="w-4 h-4" />
                        <span>{data.doctor}</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/70 text-sm">
                        <Calendar className="w-4 h-4" />
                       <h1 className='font-semibold'>{new Date(data.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year : "numeric"
                        })}
                        </h1>
                        
                    </div>

                    <div className="flex items-center gap-2 text-white/70 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{data.time}</span>
                    </div>

                </div>

                <div className="px-3 space-y-4 text-white">
                    <Button onClick={() => navigate("/")} className="text-black w-full">View My Appointment</Button>
                    <button
                        onClick={onClose}
                        className="bg-white/5 w-full py-1 rounded-md border border-white/10"
                    >
                        Close
                    </button>
                </div>

                <p className="px-7 pt-3 text-gray-400 text-center text-sm">
                    Please arrive 15 minutes early for your appointment.
                    <br />
                    Need to reschedule? Contact us 24 hours in advance.
                </p>
            </DialogContent>
        </Dialog>
    );
}

export default ConfirmationModel;
