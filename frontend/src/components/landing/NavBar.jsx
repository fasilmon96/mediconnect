import { Calendar, HomeIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../ui/button'
import { useAuthStore } from '@/store/useAuthStore'

function NavBar({user}) {

   const {authUser,logout} = useAuthStore();


  return (
    <nav className='fixed z-50 bg-[#222222] border-b border-muted-foreground/33 h-16 top-0 left-0 right-0'>
      <div className='flex items-center justify-between max-w-7xl mx-auto px-6 h-full'>
        <div className='flex items-center space-x-3'>
          <img src="/logo.png"
            width={48}
            height={48}
            alt="logo"
            className='w-12 h-12 mr-10'
          />
          <NavLink
            to={"/"}
            end
            className={({ isActive }) =>
              `flex items-center space-x-2 text-md transition-colors ${isActive
                ? "text-white hover:text-primary"
                : "text-white/60"
              }`
            }
          >
            <HomeIcon className="w-5 h-5" />
            <h2>Dashboard</h2>
          </NavLink>

          {/* Appointment link */}
          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              `flex items-center space-x-2 text-md transition-colors ${isActive
                ? "text-white hover:text-primary"
                : "text-white/60"
              }`
            }
          >
            <Calendar className="w-4 h-4" />
            <h2>Appointments</h2>
          </NavLink>

        </div>

        <div className='flex items-center space-x-3'>
          <div className='text-white'>
            <h1 className='text-end'>{user.fullName}</h1>
            <p>{user.email}</p>
          </div>
          <img
            src="/profile.png"
            alt="profile"
            className='w-10 h-10 rounded-full'
          />
          <Button onClick = {logout} >Logout</Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
