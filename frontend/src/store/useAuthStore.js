import { axiosInstance } from "../lib/axios"
import { create } from "zustand";


export const useAuthStore = create((set) => ({

    authUser: null,
    isCheckingAuth: true,
    isSignUp: false,
    isLogin: false,


    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set({ authUser: res.data })
        } catch (error) {
            console.log("Error in authCheck", error);
            set({ authUser: null });
        } finally {
           set({ isCheckingAuth: false })
        }

    }


}))


