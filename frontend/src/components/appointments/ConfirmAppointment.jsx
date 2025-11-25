import { ChevronLeft } from "lucide-react"
import { Button } from "../ui/button"

function ConfirmAppointment({
    onBack,
    selectedDoctor,
    selectedDate,
    selectedTime,
    selectedType,
    onSubmit,
    isPending
}) {
    return (
        <div className="text-white">
            <div className='flex items-center gap-5 text-3xl font-semibold mb-12'>
                <button onClick={onBack} className='flex gap-2 text-lg items-center bg-white/1 hover:bg-white/15 px-2 p-1 rounded-md'>
                    <ChevronLeft className='w-6 h-6' /> Back
                </button>
                <h1>Confirm Your Appointment</h1>
            </div>
            <div className="bg-white/4 border border-white/10 rounded-md p-5 max-w-3xl">
                <h1 className="font-semibold text-lg mb-6">Appointment Summary</h1>
                <div className="flex items-center gap-2 mb-3">
                    <img
                        src={selectedDoctor.image}
                        alt={selectedDoctor.name}
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold text-xl">{selectedDoctor.name}</h3>
                        <p className="text-gray-400">{selectedDoctor.speciality}</p>
                    </div>
                </div>
                <div className="border-t border-white/10">
                    <div className="grid grid-cols-2 mt-4">
                        {/* first */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-gray-400">Appointment Type</h3>
                                <h2>{selectedType.name}</h2>
                            </div>
                            <div>
                                <h3 className="text-gray-400">Date</h3>
                                <p className="font-medium">
                                    {new Date(selectedDate).toLocaleDateString("en-Us", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-gray-400">Location</h3>
                                <h2>Medi Centre</h2>
                            </div>
                        </div>
                        {/* second */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-gray-400">Duration</h3>
                                <h2>{selectedType.duration}</h2>
                            </div>
                            <div>
                                <h3 className="text-gray-400">Time</h3>
                                <h2>{selectedTime}</h2>
                            </div>
                            <div>
                                <h3 className="text-gray-400">Cost</h3>
                                <h2 className="text-primary">{selectedType.price}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-12 gap-5 flex">
                <button onClick={onBack} className="bg-white/3 px-4 py-2 rounded-md border border-white/10">Modify Appointment</button>
                <Button onClick={onSubmit} className="py-5 px-7 text-black"
                 disabled = {isPending}
                >
                    {isPending ? "Booking...." : "Confirm Booking"}
                </Button>
            </div>
        </div>
    )
}

export default ConfirmAppointment
