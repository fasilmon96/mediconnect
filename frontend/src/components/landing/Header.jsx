import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-[#222222] backdrop-blur-md h-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="MediConnect Logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold text-white">MediConnect</h1>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xl font-medium  text-white/50">
          <a href="#how" className="hover:text-white/70 transition">How it Works</a>
          <a href="#pricing" className="hover:text-white/70 transition">Pricing</a>
          <a href="#about" className="hover:text-white/70 transition">About</a>
        </nav>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Login
          </Button>
          <Button
            className="bg-primary hover:bg-primary/70 text-black rounded-lg px-4 py-2"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
