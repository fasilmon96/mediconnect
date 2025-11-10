import { LoaderCircle } from 'lucide-react'
import React from 'react'

function LoaderUI() {
  return (
        <div className='min-h-screen  flex flex-col justify-center items-center space-y-12 text-white font-semibold text-2xl
         bg-linear-to-br from-primary/35 via-primary/23 to-primary/15'>
           <LoaderCircle className='h-30 w-30 animate-spin bg-linear-to-r bg text-primary'/>
           <p>Loading please wite...</p>
        </div>
  )
}

export default LoaderUI
