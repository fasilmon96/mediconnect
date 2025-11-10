import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios"
import { create } from "zustand";


export const useAuthStore = create((set) => ({

    authUser: null,
    isCheckingAuth: true,
    isloading: false,


    checkAuth: async () => {
        try {
            const response = await axiosInstance.get("/auth/check");
            set({ authUser: response.data })
        } catch (error) {
            console.log("Error in authCheck", error);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false })
        }

    },


    signup: async (data) => {
        set({ isloading: true })
        try {
            const response = await axiosInstance.post("/auth/signup", data);
            set({ authUser: response.data })
            toast.success("Signup successfully!")
        } catch (error) {
            toast.error(error.response?.data?.message, { id: "singup-error" });
            set({ authUser: null })
        }

        finally {
            set({ isloading: false })
        }
    },


    login: async ({ email, password }) => {
        set({ isloading: true })
        try {
            const response = await axiosInstance.post("/auth/login", { email, password })
            set({ authUser: response.data })
            toast.success("Login Successfully!")
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
        finally {
            set({ isloading: false })
        }
    },

      logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast.success("Logout Successfully!")
        } catch (error) {
            toast.error( "An error occured during logout");
        }
    },
}))


