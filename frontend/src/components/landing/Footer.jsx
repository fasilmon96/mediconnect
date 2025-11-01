import React from 'react'
import { Button } from '../ui/button'

function Footer() {
    return (
        <footer className='relative outline-none py-16 bg-black'>
            <div className='grid lg:grid-cols-4 max-w-7xl mx-auto mb-13'>
                {/* first */}
                <div>
                    <h1 className='text-xl text-primary font-semibold mb-3'>MediConnect</h1>
                    <p className='text-white/70'>
                        Your trusted platform for online doctor consultation, appointment booking,
                        and health guidance.
                    </p>
                </div>
                {/* second */}
                <div className='ml-12'>
                    <h1 className='font-semibold text-white/70 mb-3'>Product</h1>
                    <ul className='space-y-2 text-white/70 w-full'>
                        <li><a href="#" className='hover:text-primary transition'>How it Works</a></li>
                        <li><a href="#" className='hover:text-primary transition'>Pricing</a></li>
                        <li><a href="#" className='hover:text-primary transition'>About</a></li>
                    </ul>
                </div>

                {/* {third} */}

                <div className='ml-12'>
                    <h1 className='font-semibold text-white/70 mb-3'>Support</h1>
                    <ul className='space-y-2 text-white/70 w-full'>
                        <li><a href="#" className='hover:text-primary transition'>Help Center</a></li>
                        <li><a href="#" className='hover:text-primary transition'>Contact Us</a></li>
                        <li><a href="#" className='hover:text-primary transition'>Privacy Policy</a></li>
                        <li><a href="#" className='hover:text-primary transition'>Terms of Service</a></li>
                    </ul>
                </div>

                {/* four */}
                <div className='text-white/70'>
                    <h1 className='font-semibold mb-3'>Stay Updated</h1>
                    <p>Subscribe for health tips & updates</p>

                    <input
                        type="email"
                        placeholder='Enter your email'
                        className='bg-linear-to-br from-foreground to-foreground p-1.5 pl-3 rounded-sm outline-none mt-3 rounded-r-none placeholder-white/70'
                    />
                    <Button className= "rounded-l-none">Subscribe</Button>
                </div>

            </div>

            <div className='border-t border-muted-foreground/40 text-white/70'>
                <h2 className='text-center mt-8'>© 2025 MediConnect. All rights reserved.</h2>
            </div>

        </footer>
    )
}

export default Footer
