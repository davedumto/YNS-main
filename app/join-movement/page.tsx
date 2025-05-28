"use client";
import React from "react";
import Navbar from "../components/Navbar";
import MovementHero from "./components/MovementHero";
import NewsInsightsAndBlog from "../components/NewsInsightsAndBlog";
import Faq from "../components/faq/faq";
import Footer from "../components/Footer";

const JoinMovement = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-col justify-center items-center  sm:px-[6.25em] px-5">
        <MovementHero />
        <NewsInsightsAndBlog />
        <Faq />
      </div>
      <div className="px-5 sm:px-[3.25em]">
        <Footer />
      </div>
    </div>
  );
};

export default JoinMovement;
