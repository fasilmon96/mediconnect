import { createAppointment, getAppointment, updateAppointmentStatus } from "@/lib/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";


export const useAddAppointment = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey : ["add-appointment"],
        mutationFn : createAppointment,
        onSuccess : ()=>{
            queryClient.invalidateQueries(["fetch-appointment"]);
        }
    })
};


export const useFecthAppointment = () =>{
    return useQuery({
            queryKey : ["fetch-appointment"],
            queryFn : getAppointment,       
    })
}

export const useUpdateAppointmentStatus = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey : ["update-appointment-status"],
        mutationFn : updateAppointmentStatus,
        onSuccess : () =>{
            toast.success("Appointment status updated successfully");
            queryClient.invalidateQueries(["fetch-appointment"]);
        }

    })
}