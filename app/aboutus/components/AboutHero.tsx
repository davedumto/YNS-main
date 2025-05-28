'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variant } from "framer-motion";
import Image from "next/image";
import {
  Star1,
  Star2,
  Star3,
  Group1,
  Group2,
  Group3,
  Sticker1,
  Sticker2,
  Sticker3,
} from "@/public/icons";
import { content } from "@/data";

const POSITIONS = ["left", "center", "right"] as const;
type Position = (typeof POSITIONS)[number];

const getResponsiveXTranslation = (position: 'left' | 'center' | 'right', screenWidth: number) => {
  if (screenWidth < 640) {
    return position === 'center' ? "0%" : 
           position === 'left' ? "-110%" : 
           "110%";
  } 
  if (screenWidth < 768) {
    return position === 'center' ? "0%" : 
           position === 'left' ? "-100%" : 
           "100%";
  }
  if (screenWidth < 1024) {
    return position === 'center' ? "0%" : 
           position === 'left' ? "-100%" : 
           "100%";
  }
  if (screenWidth < 1280) {
    return position === 'center' ? "0%" : 
           position === 'left' ? "-100%" : 
           "100%";
  }
  if (screenWidth < 3000) {
    return position === 'center' ? "0%" : 
           position === 'left' ? "-110%" : 
           "110%";
  }

  return position === 'center' ? "0%" : 
         position === 'left' ? "-100%" : 
         "100%";
};

const AboutHero = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        paginate(1);
      } else {
        handleNext();
      }
    }, 3000);  // Reduced time for smoother feel
    return () => clearInterval(interval);
  }, [isMobile, page]);

  const handleNext = () => {
    setPositionIndexes((prev) => prev.map((x) => (x + 2) % 3));
  };

  const handleBack = () => {
    setPositionIndexes((prev) => prev.map((x) => (x + 1) % 3));
  };

  const paginate = (newDirection: number) => {
    if (isMobile) {
      setPage(([prevPage, prevDirection]) => {
        const nextPage = prevPage + newDirection;
        return [nextPage, newDirection];
      });
    } else {
      newDirection > 0 ? handleNext() : handleBack();
    }
  };

  const getPosition = (index: number): Position => {
    return POSITIONS[positionIndexes[index]];
  };

  // Enhanced mobile variants with better transitions and positioning
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
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 25 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const cards = [
    {
      bg: "bg-orange-500",
      title: content[0].title,
      highlight: content[0].highlight,
      group: Group1,
      sticker: Sticker1,
      star: Star1,
      highlightColor: "text-light-green"
    },
    {
      bg: "bg-green-900",
      title: content[1].title,
      highlight: content[1].highlight,
      group: Group2,
      sticker: Sticker2,
      star: Star2,
      highlightColor: "text-light-green"
    },
    {
      bg: "bg-green-300",
      title: content[2].title,
      highlight: content[2].highlight,
      group: Group3,
      sticker: Sticker3,
      star: Star3,
      highlightColor: "text-dark-green"
    }
  ];

  const wrap = (index: number, length: number) => {
    return ((index % length) + length) % length;
  };

  // This ensures the card always exists for any page number
  const getCardContent = (pageIndex: number) => {
    return cards[wrap(pageIndex, cards.length)];
  };

  const cardVariants = {
    center: { 
      x: getResponsiveXTranslation('center', screenWidth),
      scale: 1.05,
      zIndex: 5,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
        duration: 0.8
      }
    },
    left: { 
      x: getResponsiveXTranslation('left', screenWidth),
      scale: 0.95,
      zIndex: 3,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
        duration: 0.8
      }
    },
    right: { 
      x: getResponsiveXTranslation('right', screenWidth),
      scale: 0.95,
      zIndex: 3,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
        duration: 0.8
      }
    }
  };

  return (
    <div className="font-cocon flex flex-col gap-10 sm:gap-16 pt-10 lg:pt-0 xl:px-9 lg:pb-16">
      <h1 className="text-center text-7xl">
        Who are{" "}
        <span className="bg-clip-text text-transparent bg-eight-color-block">
          We?
        </span>
      </h1>

      <div className="relative h-[450px] sm:h-[600px] w-full max-w-[1400px] mx-auto overflow-hidden mb-[6em] lg:mb-0">
        <div className="relative w-full h-full flex justify-center items-center">
          <AnimatePresence 
            initial={false} 
            custom={direction}
            mode="popLayout"
          >
            {isMobile ? (
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
                className="absolute inset-0 flex justify-center items-center px-4 "
              >
                <div 
                  className={`${cards[wrap(page, 3)].bg} rounded-2xl text-white p-4 lg:p-7
                    w-full max-w-[380px] h-[450px] flex flex-col items-center justify-center relative `}
                >
                  <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-4xl sm:text-3xl lg:text-[3.25rem] font-medium leading-[44px] lg:leading-[64px] text-center max-w-[280px]">
                      {cards[wrap(page, 3)].title}{" "}
                      <span className={cards[wrap(page, 3)].highlightColor}>
                        {cards[wrap(page, 3)].highlight}
                      </span>
                    </h1>
                  </div>

                  <div className="absolute bottom-2 sm:bottom-8 px-3 lg:px-7 flex w-full justify-between">
                    <Image
                      src={cards[wrap(page, 3)].group}
                      alt={`Group${wrap(page, 3) + 1}`}
                      className="xl:w-auto lg:w-[140px] sm:w-24 w-[180px]"
                    />
                    <Image
                      src={cards[wrap(page, 3)].sticker}
                      alt={`Sticker${wrap(page, 3) + 1}`}
                      className="xl:w-[105px] lg:w-[100px] sm:w-20 w-28"
                    />
                  </div>
                  <Image
                    alt={`Star${wrap(page, 3) + 1}`}
                    src={cards[wrap(page, 3)].star}
                    className="absolute right-1 lg:right-9 top-12 sm:top-16 lg:top-[160px] animate-spin-slow"
                  />
                </div>
              </motion.div>
            ) : (
              // Desktop view with responsive card variants
              cards.map((card, index) => {
                const currentPosition = getPosition(index);
                return (
                  <motion.div
                    key={index}
                    className={`absolute ${card.bg} rounded-xl text-white p-4 lg:p-7
                      ${currentPosition === "center"
                        ? 'lg:w-[420px] h-[260px] sm:h-[320px] sm:w-[360px] lg:h-[440px] xl:w-[480px] xl:h-[500px]' 
                        : 'lg:w-[380px] h-[260px] sm:w-[320px] lg:h-[410px]'}
                      flex flex-col gap-14 items-center`}
                    variants={cardVariants}
                    animate={currentPosition}
                    style={{ transformOrigin: "center" }}
                  >
                    <div className="flex flex-col items-center">
                      <h1 className={`text-3xl lg:text-[3.25rem] font-medium lg:leading-[64px] 
                        ${currentPosition === "center" ? 'max-w-[280px]' : ''}`}>
                        {card.title}{" "}
                        <span className={card.highlightColor}>
                          {card.highlight}
                        </span>
                      </h1>
                    </div>

                    <div className="absolute bottom-2 sm:bottom-8 px-3 lg:px-7 flex w-full justify-between">
                      <Image
                        src={card.group}
                        alt={`Group${index + 1}`}
                        className={`xl:w-auto lg:w-[140px] sm:w-24 
                          ${currentPosition === "center" ? 'w-[180px]' : ''}`}
                      />
                      <Image
                        src={card.sticker}
                        alt={`Sticker${index + 1}`}
                        className={`xl:w-[105px] lg:w-[100px] sm:w-20 
                          ${currentPosition === "center" ? 'w-28' : ''}`}
                      />
                    </div>
                    <Image
                      alt={`Star${index + 1}`}
                      src={card.star}
                      className={`absolute right-1 lg:right-9 top-12 
                        ${currentPosition === "center" 
                          ? 'sm:top-16 lg:top-[160px]' 
                          : 'lg:top-2'} 
                        animate-spin-slow`}
                    />
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;