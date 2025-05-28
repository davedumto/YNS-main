"use client";

import { useState, memo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Bento1 from "@/public/bento1.svg";
import Bento2 from "@/public/Bento 2.svg";
import Bento3 from "@/public/Bento 3.svg";
import Bento4 from "@/public/bento4.svg";
import Variant1 from "@/public/variant1.svg";
import Variant2 from "@/public/variant2.svg";
import Variant3 from "@/public/variant3.svg";
import Variant4 from "@/public/variant4.svg";
import Bento1mob from "@/public/Bento1mob.svg";
import Bento2mob from "@/public/Bento2mob.svg";
import Bento3mob from "@/public/Bento3mob.svg";
import Bento4mob from "@/public/Bento4mob.svg";

type BentoImage = {
  id: number;
  original: typeof Bento1;
  variant: typeof Variant1;
  mobile: typeof Bento1mob;
  alt: string;
};

const bentoImages: BentoImage[] = [
  { id: 1, original: Bento1, variant: Variant1, mobile: Bento1mob, alt: "Bento 1" },
  { id: 2, original: Bento2, variant: Variant2, mobile: Bento2mob, alt: "Bento 2" },
  { id: 3, original: Bento3, variant: Variant3, mobile: Bento3mob, alt: "Bento 3" },
  { id: 4, original: Bento4, variant: Variant4, mobile: Bento4mob, alt: "Bento 4" },
];

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

const BentoCard = memo(({ 
  image, 
  isHovered, 
  onHover, 
  onLeave 
}: { 
  image: BentoImage; 
  isHovered: boolean; 
  onHover: () => void; 
  onLeave: () => void;
}) => (
  <div
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className="transition-all duration-700 ease-in-out transform hover:scale-105"
  >
    <Image
      src={isHovered ? image.variant : image.original}
      alt={image.alt}
      className={`w-full h-auto transition-opacity duration-700 ${
        isHovered ? "opacity-100" : "opacity-90"
      }`}
    />
  </div>
));

BentoCard.displayName = 'BentoCard';

const Header = memo(() => (
  <div className="flex flex-col gap-4">
    <h1 className="bg-gray-50 text-gray-500 py-4 px-6 text-base xl:w-32 font-medium rounded-full mx-auto">
      Resources
    </h1>
    <h2 className="font-cocon font-bold xl:text-[40px] text-[30px] text-center xl:w-[25em] mx-auto">
      Unlock your potential and embark on a journey of growth
    </h2>
    <p className="font-manrope text-gray-500 text-base md:text-xl text-center xl:w-[60em] mx-auto">
      Our learning programs are designed to nurture creativity, critical
      thinking, and collaboration, helping students to become the
      changemakers of tomorrow
    </p>
  </div>
));

Header.displayName = 'Header';

const MobileGallery = memo(() => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile, page]);

  const paginate = (newDirection: number) => {
    setPage(([prevPage, prevDirection]) => [
      (prevPage + newDirection + bentoImages.length) % bentoImages.length,
      newDirection
    ]);
  };

  const wrap = (index: number, length: number) => {
    return ((index % length) + length) % length;
  };

  if (!isMobile) return null;

  return (
    <div className="xl:hidden flex flex-col items-center gap-8">
      <div className="relative h-[450px] mt-20 w-full overflow-hidden">
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
            className="absolute inset-0 flex justify-center items-center px-4"
          >
            <Image 
              src={bentoImages[wrap(page, bentoImages.length)].mobile}
              alt={bentoImages[wrap(page, bentoImages.length)].alt}
              className="w-full rounded-xl shadow-md"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator Tabs */}
      <div className="flex gap-2 pb-8">
        {bentoImages.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 rounded-full cursor-pointer`}
            onClick={() => {
              const direction = index > page ? 1 : -1;
              setPage([index, direction]);
            }}
            animate={{
              width: index === page ? 48 : 32,
              backgroundColor: index === page ? '#15803d' : '#d1d5db'
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
});

MobileGallery.displayName = 'MobileGallery';

const Resources = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div>
      <div className="lg:flex-col">
        <Header />
        
        <div className="lg:px-8 lg:py-16 xl:flex-col gap-16 mt-8 px-12 hidden xl:block">
          <div className="flex-col flex xl:flex-row lg:justify-center gap-16">
            {bentoImages.slice(0, 2).map((image) => (
              <BentoCard
                key={image.id}
                image={image}
                isHovered={hoveredImage === image.id}
                onHover={() => setHoveredImage(image.id)}
                onLeave={() => setHoveredImage(null)}
              />
            ))}
          </div>
          <div className="flex flex-col xl:flex-row gap-16 mt-16">
            {bentoImages.slice(2).map((image) => (
              <BentoCard
                key={image.id}
                image={image}
                isHovered={hoveredImage === image.id}
                onHover={() => setHoveredImage(image.id)}
                onLeave={() => setHoveredImage(null)}
              />
            ))}
          </div>
        </div>
      </div>
      <MobileGallery />
    </div>
  );
};

export default Resources;