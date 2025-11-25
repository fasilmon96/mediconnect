import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore"
import { Routes, Route, Navigate } from "react-router-dom";


import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import LoaderUI from "./components/landing/LoaderUI";
import AdminPage from "./pages/AdminPage";
import NavBar from "./components/NavBar";
import AppointmentPage from "./pages/AppointmentPage";

function App() {

  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  
  if (isCheckingAuth) return <LoaderUI/>

  return (
    <div >
        {authUser && <NavBar user = {authUser}/>}
        <Routes>
           <Route path="/" element ={authUser ? <DashboardPage/> : <HomePage/>}/>
           <Route path="/appointment" element = {authUser ? <AppointmentPage/> : <Navigate to={"/"}/>}/>
           <Route path="/admin" element = {authUser?.role === "admin" ? <AdminPage/> : <Navigate to={"/"}/>}/>
           <Route path="/*" element = {!authUser ? <HomePage/> : <Navigate to={"/"}/>}/>
           
        </Routes>
    </div>
  )
}

export default App
