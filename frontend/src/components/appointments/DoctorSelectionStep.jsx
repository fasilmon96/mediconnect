import { MapPin, Phone } from "lucide-react"
import { Button } from "../ui/button"
import SkeletonUI from "../SkeletonUI";

function DoctorSelectionStep({ doctors, onContinoue, selectedDoctor, setSelectedDoctor }) {

    if (!doctors || doctors.length === 0) return <SkeletonUI />;

    
   return (
      <div className="space-y-6">
         <h1 className="text-2xl font-semibold text-white">Choose Your Doctor</h1>
          
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.filter((doct)=> doct.isActive === true).map((doc) => {
               const isSelected = selectedDoctor?.id === doc.id;
               return (
                  <div key={doc.id}
                     onClick={() => setSelectedDoctor(doc)}
                     className={`cursor-pointer rounded-lg p-6 transition-all duration-300
                   ${isSelected
                           ? "ring-2 ring-primary"
                           : "bg-black/1 border border-white/10"
                        }`}
                  >
                     <div className="flex gap-2">
                        <img
                           src={doc.image}
                           alt={doc.name}
                           className="w-14 h-14 rounded-full"
                        />
                        <div className="flex flex-col">
                           <h2 className="text-white text-lg font-semibold">{doc.name}</h2>
                           <h6 className="text-primary text-sm font-semibold mb-1">{doc.speciality}</h6>
                           <p className="text-white text-sm">⭐5 <span className="text-gray-400">({doc.appointmentCount} appointments)</span></p>
                        </div>
                     </div>
                     <div className="mt-12 space-y-3">
                        <div className="flex gap-2 items-center">
                           <MapPin className="h-3 w-3 text-gray-400" />
                           <span className="text-sm text-gray-400">MediConnect</span>
                        </div>
                        <div className="flex gap-2 items-center">
                           <Phone className="h-3 w-3 text-gray-400" />
                           <span className="text-sm text-gray-400">{doc.phone}</span>
                        </div>
                        <p className="text-sm text-gray-400">Experienced doctor proffessional providing quality care.</p>
                        <h4 className="text-xs font-semibold text-black/50 bg-blue-300 px-2 py-1 rounded-full w-fit">Licensed Proffessional</h4>
                     </div>
                  </div>
               )

            })}
         </div>
         {
            selectedDoctor && (
               <div className="flex justify-end">
                  <Button onClick={onContinoue} className="text-black">Continoue to Time Section</Button>
               </div>
            )
         }
      </div>
   )
}

export default DoctorSelectionStep
