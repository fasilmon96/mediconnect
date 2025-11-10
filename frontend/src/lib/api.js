import { axiosInstance } from "./axios"

 export const createDoctor = async (doctorData) =>{
    const response = await axiosInstance.post("/doctors/create" , doctorData);
    return response.data;
 }


 export const fetchDoctors = async()=>{
     const response = await axiosInstance.get("/doctors/getDoctor");
     return response.data.doctors
 }


 export const updateDoctors = async (data) => {
    const response = await axiosInstance.put(`/doctors/editDoctor/${data.id}`, data);
    return response.data
 }