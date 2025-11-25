import { axiosInstance } from "./axios"

 export const createDoctor = async (doctorData) =>{
    const response = await axiosInstance.post("/doctors/create" , doctorData);
    return response.data;
 }


 export const fetchDoctors = async()=>{
     const response = await axiosInstance.get("/doctors/getDoctor");
     return response.data.doctors
 }


 export const updateDoctors = async ({id , data}) => {
    const response = await axiosInstance.put(`/doctors/editDoctor/${id}`, data);
    return response.data
 }


 export const createAppointment = async (appData) =>{
   const response = await axiosInstance.post("/appointments/add" , appData)
   return response.data;
 }


 export const getAppointment = async () =>{
   const response = await axiosInstance.get("/appointments/fetch");
   return response.data;
   
 }


 export const updateAppointmentStatus = async ({id  , status}) =>{
    const response = await axiosInstance.patch(`/appointments/update/${id}` ,{status});
    return response.data.appointment;
 }