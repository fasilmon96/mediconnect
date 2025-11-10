import { Edit, Mail, Phone } from "lucide-react"
import { useState } from "react"
import EditDoctor from "./EditDoctor";
import { useFetchDoctors } from "@/hooks/useDoctor";

function DoctorList() {

   const [openEdit, setOpenEdit] = useState(false);
   const [selectedDoctor, setSelectedDoctor] = useState(null)

   const { data: doctors = [] } = useFetchDoctors();


   return (

      <div className="relative p-6 space-y-4 ">

         {doctors.map((doc) => (

            <div key={doc.id} className="bg-background/1 border border-white/10 rounded-xl px-4 py-6 flex justify-between">
               {/* first */}
               <div className="space-x-4 flex items-center space-y-2">
                  <img
                     src={doc.image}
                     width={12}
                     height={12}
                     className="bg-white rounded-full w-12 h-12 object-contain"
                     alt="" />
                  <div>
                     <h1 className="text-white text-xl font-semibold">{doc.name}</h1>
                     <p className="text-gray-400">{doc.speciality}<span className="bg-background/40 p-1 rounded-sm ml-3 text-white/70">{doc.gender}</span></p>
                     <div className="flex space-x-3">
                        <p className="text-gray-400 flex space-x-1 items-center"><Mail size={12} /><span className="text-gray-400 text-xs">{doc.email}</span></p>
                        <p className="text-gray-400 flex space-x-1 items-center"><Phone size={12} /><span className="text-gray-400 text-xs">{doc.phone}</span></p>
                     </div>
                  </div>
               </div>
               {/* second */}
               <div className="text-white/70 flex items-center space-x-5">
                  <div className="text-white/70">
                     <h1 className="text-center text-primary">{doc.appointmentCount}</h1>
                     <p>Appointments</p>
                  </div>
                  <h2 className= {doc.isActive ? `${"bg-emerald-50 text-emerald-500 text-center w-fit rounded-sm px-2 border border-white/20"}`:
                   "bg-gray-400 text-black/60 text-center w-fit rounded-sm px-2 border border-white/20"}>{doc.isActive? "Active" : "Inactive"}</h2>
                  <p onClick={() => {
                     setSelectedDoctor(doc)
                     setOpenEdit(true);
                  }}
                     className="cursor-pointer text-white/70 flex space-x-1 items-center bg-background/25 border border-white/20 rounded-sm w-fit px-2 py-1"><Edit size={16} /><span className="text-white/70 text-sm">Edit</span></p>

               </div>

            </div>
         ))}


         {
            openEdit && selectedDoctor && (

               <EditDoctor
                  openEdit={openEdit}
                  data={selectedDoctor}
                  closeEdit={() => setOpenEdit(false)}

               />
            )
         }


      </div>
   )
}

export default DoctorList
