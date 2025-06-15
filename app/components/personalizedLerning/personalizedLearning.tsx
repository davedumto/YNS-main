import Image from "next/image";
import React from "react";
import Star from "@/public/cstar.svg";
import Star2 from "@/public/stargreen.svg";
import Man from "@/public/man.gif";
import Logo from "@/public/orangelogo.svg";
import Link from "next/link";

const PersonalizedLearning: React.FC = () => {
  return (
    <div className="bg-black mb-[4em] lg:mb-[9em] lg:px-[6em]">
      <div className="flex flex-col lg:flex-row justify-between 2xl:justify-center lg:px-[5em] items-center w-full lg:p-10 px-[2em] container mx-auto">
        
        {/* First Text Section - Desktop */}
        <div className="lg:flex-col font-cocon text-white lg:w-[30%] mb-3 mt-[1em] hidden lg:block">
          <h1 className="font-[500] lg:text-[40px] text-[30px]">
            Personalized
          </h1>
          <h1 className="text-[#FFFFFF80] font-[500] lg:text-[40px] text-[30px]">
            Learning
          </h1>
        </div>

        {/* Mobile Title */}
        <div className="mt-[1em] lg:hidden">
          <h1 className="text-white font-cocon text-center text-[30px] mb-[0.5em]">
            Personalized Learning
          </h1>
        </div>

        {/* Decorative Star - Desktop */}
        <Image
          src={Star}
          alt=""
          role="presentation"
          className="w-20 h-20 object-contain hidden lg:block animate-spin-slow 2xl:w-[20%]"
          loading="lazy"
        />

        {/* Description */}
        <div className="lg:w-[30%] text-center mb-6">
          <p className="text-[#D2D2D2] font-[400] text-[16px] font-manrope">
            Our programs are tailored to meet the unique needs and interests of
            each student, ensuring a personalized and impactful learning
            experience.
          </p>
        </div>
      </div>

      {/* Mobile Star */}
      <div className="flex items-left lg:hidden mb-7 ml-[2em] w-10 lg:w-full">
        <Image
          src={Star}
          alt=""
          role="presentation"
          className="animate-spin-slow"
          loading="lazy"
        />
      </div>

      {/* Main Content Section */}
      <div className="flex lg:pl-[2em] 2xl:pl-0">
        <div className="mx-auto relative">
          
          {/* Instagram Link Star */}
          <div className="absolute -left-[5em]">
            <Link
              href="https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              aria-label="Follow us on Instagram"
            >
              <Image
                src={Star2}
                alt=""
                role="presentation"
                className="mt-[15em] left-0 hidden lg:block"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Main GIF - Optimized but keeping original behavior */}
          <div className="px-5">
            <Image
              src={Man}
              alt="Student learning animation"
              className="rounded-[2em] lg:-mb-[7em] -mb-[4em]"
              priority
              unoptimized
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          {/* Logo Decoration */}
          <div className="absolute -right-[4em] -top-[4em]">
            <Image
              src={Logo}
              alt=""
              role="presentation"
              className="hidden lg:block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedLearning;