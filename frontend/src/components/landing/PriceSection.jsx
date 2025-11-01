import { Button } from "../ui/button"

function PriceSection() {
    return (
        <section className="relative py-15 px-2 outline-none bg-[#9f797925]">
            <h1 className="text-4xl text-center mb-4 font-semibold">
                <span className="bg-linear-to-br from-background to-background bg-clip-text text-transparent">
                    100%
                </span>
                <span className="bg-linear-to-br from-primary to-primary/60 bg-clip-text text-transparent ml-4">
                    Free Forever
                </span>
            </h1>
            <p className="text-white/70 text-center mb-12">
                Enjoy all our health services without any hidden charges or subscriptions.
            </p>

            <div className="flex justify-center max-w-7xl mx-auto">
               <div className="bg-linear-to-br from-primary/15 to-primary/5 px-18 py-8 border border-primary/25 rounded-md space-y-6 flex flex-col items-center
                hover:transition-all duration-700 ease-in hover:scale-105">
                   <h1 className="text-white text-2xl text-center">MediConnect Access</h1>
                   <h1 className="text-4xl text-primary text-center">Free</h1>

                    <div className="text-white space-y-2">
                         <p>✅ Book doctor appointments anytime</p>
                         <p>✅ Manage your medical records easily</p>
                         <p>✅ Health assistant</p>
                         <p>✅ 24/7 support & booking system</p>
                    </div>

                    <Button>Get Started</Button>
                   
               </div>
            </div>



        </section>
    )
}

export default PriceSection
