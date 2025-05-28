import Navbar from "../components/Navbar";
import HeroPage from "./HeroPage";
import PageForm from "./PageForm";
// import FAQ from "../components/faq/faq";
import Footer from "../components/Footer";
import ContactAddress from "./ContactAddress";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div>
        {/* You can add any custom class names here for styling */}
        <HeroPage className="relative" />
        <PageForm className="relative md:-mt-20 m-0" />{" "}
        {/* Adjust margin-top to overlap the HeroPage */}
      </div>
      <ContactAddress />
      {/* <FAQ className={'md:px-32 px-8'} /> */}
      <div className="px-5 md:px-9 lg:px-[2.5rem]">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
