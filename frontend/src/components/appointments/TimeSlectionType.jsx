import { APPOINTMENT_TYPES } from '@/lib/utils'
import { ChevronLeft, Clock } from 'lucide-react'
import React from 'react'
import { getNext5Days } from '@/lib/utils'
import { getAvailableTimeSlots } from '@/lib/utils'
import { Button } from '../ui/button'

function TimeSlectionType({ selectedType, setSelectedType, selectedDate, setSelectedDate, selectedTime, setSelectedTime, onContinoue ,onBack}) {

    const bookDate = getNext5Days();
    const getTime = getAvailableTimeSlots();

     const handleDateSelect = (date) => {
    setSelectedDate(date);
    // reset time when the date changes
    setSelectedTime("");
  };



    return (
        <div className='text-white mb-6'>
            <div className='flex items-center gap-5 text-3xl font-semibold'>
                <button onClick={onBack} className='flex gap-2 text-lg items-center bg-white/1 hover:bg-white/15 px-2 p-1 rounded-md'>
                    <ChevronLeft className='w-6 h-6' /> Back
                </button>
                <h1>Select Date & Time</h1>
            </div>
            <div className='grid lg:grid-cols-2 mt-6 gap-10'>
                <div className='mb-6'>
                    <h1 className='text-xl font-semibold'>Appointment Type</h1>
                    {/* first */}
                    {APPOINTMENT_TYPES.map((type) => {
                        const isSelected = selectedType?.id === type.id  
                        return (
                            <div
                                onClick={() => setSelectedType(type)} 
                                key={type.id}
                                className=
                                {`bg-black/1 border border-white/10 px-4 py-8 rounded-sm mt-3 flex justify-between items-center ${isSelected ? "ring-2 ring-primary" : "ring-2 ring-white/1"
                                    }`}
                            >
                                <div>
                                    <h1 className='text-xl font-semibold'>{type.name}</h1>
                                    <p className='text-gray-400'>{type.duration}</p>
                                </div>
                                <p className='text-primary'>{type.price}</p>

                            </div>
                        )
                    })}

                </div>
                <div className='mb-6'>
                    <h1 className='text-xl font-semibold'>Available Date</h1>
                    <div className='grid grid-cols-2 mt-3 gap-2'>
                        {bookDate.map((date) => {
                            const isSelectedDate = selectedDate === date
                            return (
                                <button key={date}
                                    onClick={() => handleDateSelect(date)}
                                    className={`border border-white/10 p-2 rounded-sm text-center cursor-pointer ${isSelectedDate ? "bg-primary text-black" : "bg-white/2"}`}
                                >
                                   <h1 className='font-semibold'>{new Date(date).toLocaleDateString("en-US", {
                                      weekday : "short",
                                      month : "short",
                                      day :  "numeric"
                                   })}
                                   </h1>

                                </button>
                            )
                        })}
                    </div>
                    {selectedDate !== null && (
                        <div className='mt-3'>
                            <h1>Available Time</h1>
                            <div className='grid grid-cols-3 mt-3 gap-2'>
                                {getTime.map((time) => {
                                    const isSelectedTime = selectedTime === time
                                    return (
                                        <button key={time}
                                            className={`cursor-pointer flex items-center rounded-sm p-2 border border-white/10 justify-center gap-2 ${isSelectedTime ? "bg-primary text-black" : " bg-white/2"
                                                }`}
                                            onClick={() => setSelectedTime(time)}
                                        >
                                            <Clock className={`w-4 h-4 ${isSelectedTime ? " text-black" : " text-white"}`} />
                                            <h3>{time}</h3>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {selectedTime !==null && (
                <div className='flex justify-end'>
                    <Button
                        onClick={onContinoue} className="text-black">Review Booking</Button>
                </div>
            )}
        </div>
    )
}

export default TimeSlectionType
