import DoctorSelectionStep from "@/components/appointments/DoctorSelectionStep";
import ProgressSteps from "@/components/appointments/ProgressSteps"
import { useState } from "react"
import { useFetchDoctors } from "@/hooks/useDoctor";
import TimeSlectionType from "@/components/appointments/TimeSlectionType";
import ConfirmAppointment from "@/components/appointments/ConfirmAppointment";
import { useAddAppointment } from "@/hooks/useAppointment";
import { useFecthAppointment } from "@/hooks/useAppointment";
import { format } from "date-fns";
import ConfirmationModel from "@/components/appointments/ConfirmationModel";

function AppointmentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [booked , setBooked]  = useState(null);

  const { data: doctors = [] } = useFetchDoctors();

  const { data } = useFecthAppointment();

  const Appointments = data?.appointments ?? [] ;

  const createMutation = useAddAppointment();
  




  const handleSubmitAppointment = () => {
    const payload = {
      doctor: selectedDoctor.id,
      date: selectedDate,
      time: selectedTime,
      reason: selectedType.name,
    };

    createMutation.mutate(payload ,{
       onSuccess : () =>{
         setBooked({...payload , doctor: selectedDoctor.name})
       }
    })
 
  };



  if (!doctors) return;

  const handleContinue = () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      setCurrentStep(3)
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
    } else if (currentStep === 3) {
      setCurrentStep(2)
    }
  }


  return (
    <div className="px-12 max-w-7xl mx-auto pt-28">
      <div className="mb-8">
        <h1 className="text-3xl text-white font-semibold">Book an Appointment</h1>
        <p className="text-gray-400">Find and book with verified doctors in your area</p>
      </div>
      <ProgressSteps currentStep={currentStep} />

      {currentStep === 1 && (
        <DoctorSelectionStep
          doctors={doctors}
          selectedDoctor={selectedDoctor}
          setSelectedDoctor={setSelectedDoctor}
          onContinoue={handleContinue}
        />
      )}


      {currentStep === 2 && (
        <TimeSlectionType
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
          onContinoue={handleContinue}
          onBack={handleBack}

        />
      )}


      {currentStep === 3 && (
        <ConfirmAppointment
          onBack={handleBack}
          selectedDoctor={selectedDoctor}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          selectedType={selectedType}
          onSubmit={handleSubmitAppointment}
          isPending={createMutation.isPending}
        />
      )} 


    {booked  && (
         <ConfirmationModel
          data={booked}
          onClose={()=>setBooked(null)}
         />
      )} 

     
  


      {Appointments.length > 0 && (

        <div className="my-12">
          {/* first */}
          <h1 className="text-2xl text-white font-semibold mb-3">Your UpComing Appointments</h1>

          <div className="grid grid-cols-3 gap-6 mt-12">
            {Appointments.map((app) => {

                return (
                  <div className="bg-white/1 border border-white/10 p-3 rounded-md gap-6">
                    <div className="flex items-center gap-2 mb-5">
                      <img
                        src={app.doctor?.imageUrl}
                        alt="profileNamw"
                        className="w-10 h-10 object-contain rounded-full"
                      />
                      <div>
                        <h1 className="text-white font-semibold text-xl">{app.doctor?.name}</h1>
                        <p className="text-gray-400 text-xs leading-2">{app.doctor?.speciality}</p>
                      </div>

                    </div>
                    <div className="space-y-1">
                      <h1 className="text-gray-400">📅 {format(new Date(app.date), "MMM d, yyyy")}</h1>
                      <p className="text-gray-400">🕒 {app.time}</p>
                    </div>
                  </div>
                )
              }
              )}

          </div>



        </div>
      )}


    </div>
  )
}

export default AppointmentPage
