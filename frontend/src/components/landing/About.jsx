import React from 'react'
import { Button } from '../ui/button'

function About() {
    return (
        <section className='relative py-14 outline-none bg-[#611e210e]'>
            <h1 className='text-4xl font-semibold text-center'>
                <span className='bg-linear-to-br from-background to-background bg-clip-text text-transparent'>
                    About
                </span>
                <span className='bg-linear-to-br from-primary to-primary/40 bg-clip-text text-transparent ml-3'>
                    MediConnect
                </span>
            </h1>
            <p className='text-white/70 text-center max-w-2xl mx-auto mt-3'>
                We’re transforming healthcare by making doctor appointments simple, accessible,
                and powered by modern technology.
            </p>

            <div className='grid lg:grid-cols-2 px-2 max-w-7xl mx-auto mt-23'>
                {/* {left} */}
                  <div className='space-y-8'>
                   <h1 className='text-3xl font-semibold text-primary'>Our Mission</h1>
                    <p className='max-w-xl text-white/70'>
                        MediConnect was created to bridge the gap between patients and healthcare professionals.
                        With  just a few clicks, users can book appointments, manage medical records, and health
                        insights-all in one place.
                    </p>
                   <h1 className='text-3xl font-semibold text-primary'>Why Choose Us?</h1>
                    <ul className='text-white/70 list-disc list-inside space-y-2'>
                        <li>24/7 doctor appointment booking system</li>
                        <li>Secure data handling & privacy first</li>
                        <li>Simple interface for everyone</li>
                    </ul>
                     <Button>Lern More</Button>
                </div>
                {/* Right */}
                <div className='border-l border-muted-foreground/20'>
                    <img 
                    src="\doctorsteam.png" 
                    alt="doctorsteam" />
                </div>
            </div>
        </section>
    )
}

export default About
