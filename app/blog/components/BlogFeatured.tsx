import { blogCards } from "@/data";
import { IntercomMessenger, Star4 } from "@/public/icons"; // Ensure these are valid imports (SVGs or paths)
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Section from "@/components/layout/Section";

// Slugify utility function
const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
};

const BlogFeatured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="slider-container text-black w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-6 pb-16 md:py-8 font-manrope">
      <Slider {...settings}>
        {blogCards.map((card, index) => (
          <div key={index} className="md:pb-6 px-2">
            <div className="flex flex-col md:flex-row">
              <div className="relative md:w-1/2">
                {/* Generate link using the card's title */}
                <Link href={`/blog/${generateSlug(card.title)}`}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={500}  // Add a specific width and height
                    height={300} // Adjust according to your layout
                    className="w-full h-full object-cover rounded-[1.25rem] cursor-pointer"
                  />
                </Link>
                <p className="text-[0.5625rem] md:text-base absolute top-0 left-0 px-4 py-2 rounded-tl-[1.25rem] bg-dark-green text-white">
                  Featured
                </p>
              </div>
              <div className="relative md:px-4 lg:px-14 py-3 lg:py-5 flex flex-col gap-4 text-left md:w-1/2">
                <div className="flex gap-5">
                  {card.category.map((cat, idx) => (
                    <span key={idx} className="text-base font-medium text-gray-400">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-medium font-cocon leading-9">
                  {card.title}
                </h3>
                <div className="relative">
                  <p className="text-[#55534E] font-normal text-base leading-8">
                    {card.description}
                  </p>
                  {/* Use Image component for IntercomMessenger */}
                  {/* <Image
                    width={20}
                    height={20}
                    src={IntercomMessenger}
                    alt="messenger"
                    className="absolute w-20 cursor-pointer -top-14 -right-0 md:-right-5 lg:-right-14"
                  /> */}
                </div>
                <p className="text-gray-400 text-base">{card.date}</p>

                <Link href={`/blog/${generateSlug(card.title)}`} className="flex gap-4 text-base">
                  Read Article <ArrowRight className="text-[#55534E] text-base" />
                </Link>

                {/* Use Image component for Star4 */}
                <Image
                  width={20}
                  height={20}
                  src={Star4}
                  alt="star"
                  className="absolute w-20 cursor-pointer bottom-0 right-4"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogFeatured;
