function HowItWorks() {
    return (
        <section className="relative py-12 outline-none bg-[#54353520]">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl text-primary mb-2 font-semibold">How It Works</h2>
                <p className="text-white/70"> Your healthcare journey made simple in just three steps.</p>
            </div>
             <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div  className="bg-linear-to-br from-primary/15 to-primary/5 border border-primary/10 rounded-md mt-12 text-center p-4
                  backdrop-blur-sm space-y-3 outline-1 outline-primary/20 transition-all duration-700 ease-in hover:scale-105">
                    <div className="text-5xl">🗓️</div>
                    <h3 className="text-2xl font-semibold text-primary">Book Appointment</h3>
                    <p className="text-white/70">Choose your doctor and select a time that works best for you.</p>
                </div>  
                <div  className="bg-linear-to-br from-primary/15 to-primary/5 border border-primary/10 rounded-md mt-12 text-center p-4
                  backdrop-blur-sm space-y-3 outline-1 outline-primary/20  transition-all duration-700 ease-in hover:scale-105">
                    <div className="text-5xl">💬</div>
                    <h3 className="text-2xl font-semibold text-primary">Consult Online</h3>
                    <p className="text-white/70">Meet your doctor via secure video consultation from anywhere.</p>
                </div>  
                <div  className="bg-linear-to-br from-primary/15 to-primary/5 border border-primary/10 rounded-md mt-12 text-center p-4
                  backdrop-blur-sm space-y-3 outline-1 outline-primary/20 transition-all duration-700 ease-in hover:scale-105">
                    <div className="text-5xl">❤️</div>
                    <h3 className="text-2xl font-semibold text-primary">Get Care</h3>
                    <p className="text-white/70">Receive personalized treatment plans and ongoing care support.</p>
                </div>  
             </div>
        </section>

    )
}

export default HowItWorks
