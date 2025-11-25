import { Calendar, UserCheck2, Users } from "lucide-react"
import { useFetchDoctors } from "@/hooks/useDoctor";

function AdminStats({doctors , totalAppointments}) {




  return (
    <div className="grid grid-cols-4 space-x-6">
      {/* card1 */}
      <div className="relative bg-[#7f7b7b02] backdrop-blur-lg mt-8 rounded-xl border border-white/10 px-3 py-12 flex">
        <div className="bg-linear-to-r from-primary/25 to-primary/5 p-2 flex items-center rounded-xl text-white/70">
          <Users size={30} />
        </div>
        <div className="pl-4">
          <h1 className="text-2xl font-semibold text-white/70">{doctors.length}</h1>
          <p className="text-gray-400">Total Doctors</p>
        </div>
      </div>
      {/* card2 */}
      <div className="relative bg-[#7f7b7b02] backdrop-blur-lg mt-8 rounded-xl border border-white/10 px-3 py-12 flex">
        <div className="bg-linear-to-r from-primary/25 to-primary/5 p-2 flex items-center rounded-xl text-white/70">
          <UserCheck2 size={30} />
        </div>
        <div className="pl-4">
          <h1 className="text-2xl font-semibold text-white/70">{doctors.filter((doc)=>doc.isActive === true).length}</h1>
          <p className="text-gray-400">Active Doctors</p>
        </div>
      </div>
      {/* card3 */}
      <div className="relative bg-[#7f7b7b02] backdrop-blur-lg mt-8 rounded-xl border border-white/10 px-3 py-12 flex">
        <div className="bg-linear-to-r from-primary/25 to-primary/5 p-2 flex items-center rounded-xl text-white/70">
          <Calendar size={30} />
        </div>
        <div className="pl-4">
          <h1 className="text-2xl font-semibold text-white/70">{totalAppointments.length}</h1>
          <p className="text-gray-400">Total Appointments</p>
        </div>
      </div>
      {/* card4 */}
      <div className="relative bg-[#7f7b7b02] backdrop-blur-lg mt-8 rounded-xl border border-white/10 px-3 py-12 flex">
        <div className="bg-linear-to-r from-primary/25 to-primary/5 p-2 flex items-center rounded-xl text-white/70">
          <Calendar size={30} />
        </div>
        <div className="pl-4">
          <h1 className="text-2xl font-semibold text-white/70">{totalAppointments.filter((app)=> app.status === "COMPLETED").length}</h1>
          <p className="text-gray-400">Completed Appointments</p>
        </div>
      </div>
    </div>
  )
}

export default AdminStats
