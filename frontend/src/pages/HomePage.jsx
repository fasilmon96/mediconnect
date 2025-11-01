import AboutPage from "@/components/landing/About"
import Footer from "@/components/landing/Footer"
import Header from "@/components/landing/Header"
import HeroSection from "@/components/landing/HeroSection"
import HowItWorks from "@/components/landing/HowItWorks"
import PriceSection from "@/components/landing/PriceSection"


function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks/>
      <PriceSection/>
      <AboutPage/>
      <Footer/>

    </>
  )
}

export default HomePage
