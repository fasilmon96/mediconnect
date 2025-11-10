
import { useAuthStore } from "@/store/useAuthStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Loader, UserPlus } from "lucide-react"
import { useState } from "react";



function Login({ open, close }) {

  const { login, isloading } = useAuthStore();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    login({email :userData.email ,password: userData.password});
    setUserData({
      email : "" , 
      password : ""
    })
  }




  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="sm:max-w-[500px] bg-linear-to-br from-primary to-primary/80 outline-primary
       ">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text font-semibold text-white/70">Login</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
    
          <div className="flex flex-col space-y-3 mb-3">
            <label className="text-xl font-semibold text-white">Email *</label>
            <input type="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              placeholder="Enter your Email..."
              className="placeholder:text-white/90 bg-black/20 text-sm py-2.5 px-2 outline-none rounded-md border border-background text-white"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label className="text-xl font-semibold text-white">Password *</label>
            <input type="password"
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              placeholder="Enter your password..."
              className="placeholder:text-white/90 bg-black/20 text-sm py-2.5 px-2 outline-none rounded-md border border-background text-white"
            />
          </div>

        <button
              type="submit"
              disabled = {isloading}
              className="bg-[#32373271] hover:bg-primary w-full flex justify-center mt-12 p-3 rounded-2xl text-white font-semibold"
            >
              {isloading ? (
                <>
                 <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden = "true"/>
                 Loadng....
                </>
              ) : (
                <>
                 <UserPlus className="mr-2 h-5 w-5" aria-hidden = "true"/>
                 Login in
                </>
              )
            }
            </button>

        </form>


      </DialogContent>
    </Dialog>

  )
}

export default Login
