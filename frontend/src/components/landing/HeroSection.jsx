import { Dot, StarIcon } from "lucide-react";
import { Button } from "../ui/button";


function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      {/* GRID BG  */}
      <div className="absolute inset-0 bg-linear-to-br via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] [mask:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* GRADIENT ORBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-linear-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-linear-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* left content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r 
                      from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary">Health Assistant</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-linear-to-br from-background via-background to-background/40 bg-clip-text text-transparent">
                    Your Health
                  </span>
                  <br />
                  <span className="bg-linear-to-br bg-primary bg-clip-text text-transparent">
                    Just a Click Away
                  </span>
                </h1>
                <p className="text-white/50">
                  Book appointments, consult doctors, and manage your health effortlessly from anywhere.
                </p>
                <div className="space-x-4 backdrop-blur-sm">
                  <Button>
                    Book Appointment
                  </Button>
                  <Button>
                    Learn More
                  </Button>
                </div>
              </div>
              {/* useravatar */}
              <div className="flex gap-4 items-center justify-start">
                <div className="flex -space-x-3">
                  <img
                    className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    width={48}
                    height={48}
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                    alt="Jessica Davis" />
                  <img
                    className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    width={48}
                    height={48}
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                    alt="Sam Miller" />
                  <img
                    className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    width={48}
                    height={48}
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                    alt="Anna Lopz" />
                  <img
                    className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    width={48}
                    height={48}
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                    alt="Mike Rodriguez" />
                  <img
                    className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    width={48}
                    height={48}
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                    alt="Katie Lee" />
                </div>
                <div className="flex flex-col">
                  <p className="text-md text-muted-foreground">
                    Trusted by <span className="font-semibold text-primary">1,200+</span> patients
                  </p>
                  {/* {rating} */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-foreground">4.9/5</span>
                  </div>
                </div>

              </div>
            </div>
            <img
              src="/doctor.png"
              alt="Doctor name"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;