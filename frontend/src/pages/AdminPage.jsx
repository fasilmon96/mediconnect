import AdminStats from "@/components/admin/AdminStats"
import DoctorMangement from "@/components/admin/DoctorMangement";
import RecentAppointments from "@/components/admin/RecentAppointments";
import { useAuthStore } from "@/store/useAuthStore"
import { useFecthAppointment } from "@/hooks/useAppointment";
import { useFetchDoctors } from "@/hooks/useDoctor";

function AdminPage() {

   const {authUser} = useAuthStore();

     const { data: doctors = [] } = useFetchDoctors();

   const {data } = useFecthAppointment();

   const totalAppointments =  data?.totalAppointments ?? [];



  return (
    <div className="relative py-20 px-14 max-w-7xl mx-auto">
       <div className="bg-linear-to-bl from-primary/10 to-primary/5 rounded-4xl backdrop-blur-2xl border border-primary/30 ">
          <div className="flex justify-between px-12 py-6 items-center">
             {/* first */}
             <div className="space-y-10">
             <div className="px-2 py-1 inline-flex items-center bg-linear-to-r bg-primary/15 to-primary/5 rounded-md space-x-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-linear-to-r bg-primary/15 to-primary/5"></div>
                <span className="text-primary">Admin Dashboard</span>
             </div>
             <div>
                <h1 className="text-5xl font-bold bg-linear-to-br bg-background/70 to-background/55 bg-clip-text text-transparent mb-2">Welcome back, {authUser.fullName}!</h1>
                <p className="text-gray-400">Manage doctors, oversee appointments, and monitor your dental practice performance.</p>
             </div>
          </div>
           <div className=" flex justify-center items-center bg-linear-to-r from-primary/15 to-primary/5 rounded-full backdrop-blur-2xl border border-primary/10 w-30 h-30">
              <img
               src="/settings.png" 
               alt="settings" 
               className="object-contain w-20 h-20"
               />       
           </div>
           {/* second */}
          </div>
       </div>

       <AdminStats 
       totalAppointments = {totalAppointments}
       doctors = {doctors}
       />

       <DoctorMangement/>

       <RecentAppointments
        totalAppointments = {totalAppointments}
       />
       
    </div>
  )
}

export default AdminPage
