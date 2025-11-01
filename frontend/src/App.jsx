// import { useEffect } from "react";
// import { useAuthStore } from "./store/useAuthStore"
import { Routes, Route, Navigate } from "react-router-dom";


import HomePage from "./pages/HomePage";
// import DashboardPage from "./pages/DashboardPage";
// import AdminPage from "./pages/AdminPage";
// import { Button } from "./components/ui/button";

function App() {


  // const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth])


  // if (isCheckingAuth) return <p>checking.....</p>


  return (
    <div >
      <HomePage/>
        {/* <Routes>
           <Route path="/" element ={authUser ? <DashboardPage/> : <HomePage/>}/>
        </Routes> */}
    </div>
  )
}

export default App
