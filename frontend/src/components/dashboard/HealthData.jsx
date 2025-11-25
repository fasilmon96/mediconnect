import { Brain, MessageSquareIcon } from "lucide-react"
function HealthData({ navigate, userAppointment , user  }) {

    return (
        <div className="bg-background/1 border border-white/10 p-6 rounded-md">
            <div className="flex space-x-3">
                <Brain className="text-primary" />
                <h1 className="text-white font-semibold text-lg">Your Health Care</h1>
            </div>
            <p className="text-gray-400 text-sm mb-3">Keep track of your health care journey</p>
            <div className="grid grid-cols-3 space-x-6 mb-6">
                <div className="bg-background/10 border border-white/5 py-2 px-6 rounded-md text-center">
                    <h1 className="text-lg text-primary font-semibold">
                        {userAppointment.filter((app)=> app.status === "COMPLETED").length}
                    </h1>
                    <p className="text-sm text-gray-400">Completed Visite</p>
                </div>
                <div className="bg-background/10 border border-white/5 py-2 px-6 rounded-md text-center">
                    <h1 className="text-lg text-primary font-semibold">{userAppointment.length}</h1>
                    <p className="text-sm text-gray-400">Total Appointments</p>
                </div>
                <div className="bg-background/10 border border-white/5 py-2 px-6 rounded-md text-center">
                    <h1 className="text-lg text-primary font-semibold">
                        {new Date(user.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </h1>
                    <p className="text-sm text-gray-400">Member Since</p>
                </div>
            </div>
            <div className="bg-linear-to-br from-primary/15 to-primary/5 rounded-md border border-primary/15 p-3">
                <div className="flex  space-x-3">
                    <MessageSquareIcon
                        className="text-primary bg-primary/20 p-1 w-7 h-7 rounded-sm"
                    />
                    <div>
                        <h1 className="text-primary font-bold text-lg">Ready to get strated?</h1>
                        <p className="text-gray-400 text-md">Book your first appointment.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={() => navigate("/appointment")}
                        className="mt-5 bg-background/1 hover:bg-primary/10 border border-white/10 p-2 rounded-md w-full text-white/70" >
                        Book Appointment
                    </button>
                </div>

                <div>
                </div>
            </div>
        </div>
    )
}

export default HealthData
