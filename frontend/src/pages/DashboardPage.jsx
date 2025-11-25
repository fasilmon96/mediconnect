import HealthData from "@/components/dashboard/HealthData";
import NextAppointment from "@/components/dashboard/NextAppointment";
import { getGreeting } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFecthAppointment } from "@/hooks/useAppointment";
function DashboardPage() {

  const wishData = getGreeting();
  const { authUser } = useAuthStore();
  const navigate = useNavigate();

  const { data } = useFecthAppointment();

  const userAppointment = data?.allUserAppointments ?? []

  const appointments = data?.appointments ?? []

  return (
    <div className="relative py-20 px-14 max-w-7xl mx-auto top-0 right-0 left-0">
      <div className="bg-linear-to-br from-primary/15 to-primary/5 border border-primary/30 p-8 rounded-xl flex justify-between items-center">
        <div>
          <div className="bg-linear-to-br from-primary/30 to-primary/20 inline-flex w-fit items-center space-x-3 px-2 rounded-sm mb-3">
            <div className="w-2 h-2 rounded-full animate-pulse bg-primary"></div>
            <p className="text-primary font-semibold">Online & Reddy</p>
          </div>
          <h1 className="text-3xl text-white font-semibold">{wishData},  {authUser.fullName}!</h1>
          <p className="text-gray-400 text-lg">Your personal Health assistant is ready to help you mintain perfect oral health.</p>
        </div>
        <div className="w-25 h-25 bg-linear-to-br from-primary/30 to-primary/20 rounded-full flex items-center justify-center">
          <img
            src="/logo.png"
            alt="logo"
            className="h-20 w-20 object-contain"
          />
        </div>
      </div>

      <div className="flex mt-12 space-x-10">
        <div className="relative bg-background/2 border border-background/10 w-fit px-6 py-12 rounded-md hover:bg-primary/15 group">
          <div className="flex space-x-3 items-center">
            <Calendar className="bg-primary/30 w-12 h-12 p-2 rounded-sm text-primary transition-transform duration-300 group-hover:scale-110" />
            <div>
              <h3 className="text-xl font-semibold text-white">Book Appointment</h3>
              <p className="text-gray-400 text-sm">Schedule with verified doctors in your area</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className=" space-x-2 flex items-center">
              <div className="w-2 h-2 animate-pulse bg-primary rounded-full"></div>
              <p className="text-gray-400 text-sm">Verified doctor professionals</p>
            </div>
            <div className=" space-x-2 flex items-center">
              <div className="w-2 h-2 animate-pulse bg-primary rounded-full"></div>
              <p className="text-gray-400 text-sm">Flexible scheduling</p>
            </div>
            <div className=" space-x-2 flex items-center">
              <div className="w-2 h-2 animate-pulse bg-primary rounded-full"></div>
              <p className="text-gray-400 text-sm">Instant confirmations</p>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => navigate("/appointment")}
              className="bg-background/3 flex space-x-3 items-center w-full justify-center 
            p-1 border border-white/10 rounded-md">
              <Calendar className="text-white/70 w-4 h-4" />
              <p className="text-white/70">Schedule Now</p>
            </button>
          </div>
        </div>
        <HealthData
          navigate={navigate}
          userAppointment={userAppointment}
          user={authUser}
        />
      </div>
      <NextAppointment navigate={navigate}
       appointments={appointments}
      />
    </div>
  )
}

export default DashboardPage
