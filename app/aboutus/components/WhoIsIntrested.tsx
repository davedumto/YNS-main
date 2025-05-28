"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import inStar1 from "@/public/images/inStar1.svg";
import inStar2 from "@/public/images/inStar2.svg";
import inStar3 from "@/public/images/inStar3.svg";
import InterestCard from "./interestcard";
import Section from "@/components/layout/Section";

const mobileVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 25 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 25 },
      opacity: { duration: 0.2 },
    },
  }),
};

const WhoIsInterested = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  const interestData = [
    {
      title: "Gaining new skills",
      description: "Whether you're looking to upskill for your current job or start a new career, we can help.",
      imageUrl: inStar1,
      bgColor: "bg-[#114F3C]"
    },
    {
      title: "Networking with like minds",
      description: "Connect with professionals who share your goals and open doors for career growth and opportunities.",
      imageUrl: inStar2,
      bgColor: "bg-[#98BC6D]"
    },
    {
      title: "Gaining new skills", // Note: this title appears to be duplicated in the original
      description: "Whether you're looking to upskill for your current job or start a new career, we can help.",
      imageUrl: inStar3,
      bgColor: "bg-[#EF4C0D]"
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paginate = React.useCallback((newDirection: number) => {
    setPage(([prevPage, prevDirection]) => [
      (prevPage + newDirection + interestData.length) % interestData.length,
      newDirection
    ]);
  }, [interestData.length]);

  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile, page, paginate]);

  const wrap = (index: number, length: number) => {
    return ((index % length) + length) % length;
  };

  return (
    <Section>
      <div className="w-full h-full bg-white container max-w-[1500px] mx-auto px-[0.5em] lg:px-0 ">
        <div className="pt-10 flex flex-col gap-8">
          <div className="w-full md:max-w-[803px] flex flex-col gap-5">
            <h1 className="font-cocon text-[30px] md:text-[40px]">
              Who we are interested in?
            </h1>
            <p className="font-manrope leading-[32px] text-[16px] font-normal">
              We`re looking for curious, motivated individuals who are
              passionate about learning and growth. If you`re interested in
            </p>
          </div>
          
          {/* Original Desktop View */}
          <div className="hidden md:flex flex-col justify-between items-center md:flex-row gap-5 ">
            {interestData.map((item, index) => (
              <InterestCard
                key={index}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                bgColor={item.bgColor}
              />
            ))}
          </div>

          {/* Mobile Carousel - Only shows on mobile */}
          <div className="md:hidden">
            {/* Carousel Container with proper spacing */}
            <div className="relative w-full mb-8">
              {/* Increased height and made it flexible */}
              <div className="relative min-h-[400px] h-auto w-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={mobileVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) * velocity.x;
                      if (swipe < -10000) {
                        paginate(1);
                      } else if (swipe > 10000) {
                        paginate(-1);
                      }
                    }}
                    className="absolute inset-0 w-full flex justify-center items-start pt-4"
                  >
                    <div className="w-full max-w-sm px-4">
                      <InterestCard
                        title={interestData[wrap(page, interestData.length)].title}
                        description={interestData[wrap(page, interestData.length)].description}
                        imageUrl={interestData[wrap(page, interestData.length)].imageUrl}
                        bgColor={interestData[wrap(page, interestData.length)].bgColor}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Indicator Tabs - Now properly spaced below the carousel */}
            <div className="flex gap-2 justify-center">
              {interestData.map((_, index) => (
                <motion.div
                  key={index}
                  className="h-1 rounded-full cursor-pointer"
                  onClick={() => {
                    const direction = index > page ? 1 : -1;
                    setPage([index, direction]);
                  }}
                  animate={{
                    width: index === page ? 48 : 32,
                    backgroundColor: index === page ? '#114F3C' : '#d1d5db'
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhoIsInterested;