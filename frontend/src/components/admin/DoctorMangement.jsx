import { Plus, Stethoscope } from "lucide-react"
import { useState } from "react"
import AddDoctor from "./AddDoctor";
import DoctorList from "./DoctorList";


function DoctorMangement() {

   const [add , setAdd] = useState(false);

  return (
    <div className="relative bg-[#7f7b7b00] backdrop-blur-sm rounded-sm mt-10 mb-10 border border-white/20">
      <div className="flex justify-between px-6 pt-6">
         {/* first */}
        <div>
          <div className="text-primary flex gap-3">
            <Stethoscope size={30} />
            <h1 className="text-white text-xl">Doctor Management</h1>
          </div>
          <p className="text-white/70">Manage and oversee all doctors in your practice</p>
        </div>
        {/* second */}  
         
         <div onClick={()=>setAdd(true)} className="flex items-center bg-linear-to-br from-primary/55 to-primary/45 px-2 h-8 rounded-md cursor-pointer gap-2">
           <Plus size={20}/>
           <h3>Add Doctor</h3>
         </div>
      </div>

      <AddDoctor open ={add} close = {()=>setAdd(false)}/>

      <DoctorList/>
       
    </div>
  )
}

export default DoctorMangement




  