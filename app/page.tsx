import Image from "next/image";

import Navbar from "./components/Navbar";
import { Testimonial } from "./components/Testimonial";
import Footer from "./components/Footer";
import Resources from "./components/resources/resources";
import Newsletter from "./components/newsletter/newsletter";
import AboutUs from "./components/about/about-us.component";
import Hero from "./components/hero/hero";
import NewsInsightsAndBlog from "./components/NewsInsightsAndBlog";
import PersonalizedLearning from "./components/personalizedLerning/personalizedLearning";
import OurStory from "./components/our-story/our-story.component";
import FAQ from "./components/faq/faq";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <AboutUs />
      <PersonalizedLearning />

      <main className="flex min-h-screen flex-col items-center justify-between px-6 md:px-16 lg:px-24 py-6 md:py-8">
        <Resources />

        <OurStory />
        <Testimonial />
        <Newsletter />
        <NewsInsightsAndBlog />
        <FAQ className={undefined} />
      </main>
      <div className="px-5 md:px-9 lg:px-[2.5rem]">
        <Footer />
      </div>
    </>
  );
}
