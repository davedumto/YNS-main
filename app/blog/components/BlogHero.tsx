"use client";
import { Star } from "@/public/images";
import Image from "next/image";
import React, { useState } from "react";

const BlogHero = () => {
  const categories = ["All", "Education", "Career", "Company", "Courses"];
  const backgroundImage = "/images/blog-hero.png"; // Update this with your image path
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-dark-green text-white py-14 md:py-24 relative px-6 md:px-16 lg:px-24 mb-8"
    >
      <div className="flex flex-col gap-12 text-left font-manrope">
        {/* Title */}
        <div className="flex flex-col gap-4 ">
          <div className="relative flex gap-6 md:gap-8 lg:gap-14 w-fit ">
            <h1 className="text-[2.5rem] md:text-5xl lg:text-7xl  font-medium font-cocon">
              News Insights <br className="md:hidden" />&{" "}
              <span className="bg-nine-color-blocks text-transparent bg-clip-text">
                Blog
              </span>
            </h1>

            <div>
              <Image
                src={Star}
                width={100}
                height={100}
                alt="star"
                className="absolute -top-8 md:bottom-4 lg:bottom-6 animate-spin-slow w-auto h-14 md:h-18 lg:h-24"
              />
            </div>
          </div>
          {/* Subtitle */}
          <p className="text-base leading-8">
            Latest community tips for you. Dive into our latest posts, explore
            various learning categories, and stay informed <br className="hidden lg:inline-block"/> about the best
            practices in education.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap  gap-y-3 gap-x-4 lg:gap-x-5">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)} // Set the clicked category as active
              className={`${
                activeCategory === index
                  ? "bg-white text-black"
                  : "bg-white/30 text-white"
              } py-3 lg:py-4 backdrop-blur-4 px-8 md:px-7 lg:px-10 rounded-[2.75rem] hover:bg-white hover:text-black transition-all duration-500 ease-in-out`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
