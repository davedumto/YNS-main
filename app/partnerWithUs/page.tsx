
import FAQ from "../components/faq/faq"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import CTA from "./components/CTA"
import Hero from "./components/Hero"
import OurPartners from "./components/OurPartners"
import WhyPartnerWithUS from "./components/WhyPartnerWithUS"

const page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurPartners />
      <div className="px-5 md:px-9 lg:px-[3.2rem]">
        <WhyPartnerWithUS />
        <CTA />
        <FAQ />
      </div>
      <Footer />
    </>
  )
}

export default page
