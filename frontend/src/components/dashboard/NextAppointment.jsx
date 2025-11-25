import { Calendar, Clock, User } from "lucide-react"
import { format } from "date-fns"

function NextAppointment({ navigate, appointments }) {

  return (
    <div className="bg-black/2 max-w-lg mx-auto mt-12 p-4 border border-white/20 rounded-md">
      {appointments && appointments.length > 0 ? (
        <div>
          <div className="flex items-center space-x-2 mb-5">
            <Calendar className="text-primary w-5 h-5" />
            <h3 className="text-white/70 font-semibold text-xl">Next Appointment</h3>
          </div>
          <div className="space-y-4 text-white/80 font-semibold text-xl mb-32">
            <div className="flex justify-between items-center mb-9">
              <div className="inline-flex items-center gap-2 bg-linear-to-b from-primary/15 to-primary/5 px-3 py-0.5 rounded-lg border border-primary/30">
                <div className="w-2 h-2 rounded-full animate-pulse bg-primary"></div>
                <h3 className="text-primary text-md">Upcoming</h3>
              </div>
              <h2 className="text-sm text-white/70 bg-white/9 w-fit px-2">CONFIRMED</h2>
            </div>
            <div className="flex gap-3">
              <User
                className="bg-primary/15 rounded-lg p-1.5 w-8 h-8"
              />
              <div className="leading-4">
                <p>{appointments[0]?.doctor?.name}</p>
                <p className="text-gray-400 text-sm">{appointments[0]?.reason}</p>
              </div>
            </div>
            <div className="flex  gap-3">
              <Calendar
                className="bg-primary/15 rounded-lg p-1.5 w-8 h-8"
              />
              <div className="leading-4">
                <p>
                  {new Date(appointments[0]?.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year : "numeric"
                  })}
                </p>
                <p className="text-gray-400 text-sm">
                    {new Date(appointments[0]?.date).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </p>
              </div>
            </div>
            <div className="flex  gap-3">
              <Clock
                className="bg-primary/15 rounded-lg p-1.5 w-8 h-8"
              />
              <div className="leading-4">
                <p>{appointments[0]?.time}</p>
                <p className="text-gray-400 text-sm">Local time</p>
              </div>
            </div>

          </div>
        </div>

      ) : (
        <div>
          <div className="flex space-x-2 mb-12">
            <Calendar className="text-primary w-5 h-5" />
            <h3 className="text-white/70 font-semibold">Next Appointment</h3>
          </div>
          <div className="flex space-y-2 flex-col justify-center items-center pt-8 pb-20">
            <Calendar className="bg-black/15 w-12 h-12 p-2 rounded-md text-white/30" />
            <h6 className="text-white/70">No upcoming appointments</h6>
            <button
              onClick={() => navigate("/appointment")}
              className="bg-white/3 border border-white/10 w-full p-1 rounded-sm text-white/70">Schedule Your Next Visit</button>
          </div>
        </div>
      )}


    </div>
  )
}

export default NextAppointment
