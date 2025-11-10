import { createDoctor, fetchDoctors, updateDoctors } from "@/lib/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"


export const useAddDoctor = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["add-doctor"],
        mutationFn: createDoctor,
        onSuccess: () => {
            toast.success("Doctor Added Successfully!")
            queryClient.invalidateQueries(["fetch-doctors"]);

        }
    })
}


export const useFetchDoctors = () => {
    return useQuery({
        queryKey: ["fetch-doctors"],
        queryFn: fetchDoctors

    })
}

export const useUpdateDoctor = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["update-doctor"],
        mutationFn: updateDoctors,
        onSuccess: () => {
            toast.success("Edit Successfully!");
            queryClient.invalidateQueries(["fetch-doctors"]);

        }
    })
}