"use client";

import { useState, memo, useEffect, useMemo } from "react";
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

// Memoized data to prevent recreation on every render
const bentoImages: BentoImage[] = [
  {
    id: 1,
    original: Bento1,
    variant: Variant1,
    mobile: Bento1mob,
    alt: "Creative Learning Resources - Interactive tools for fostering creativity",
  },
  {
    id: 2,
    original: Bento2,
    variant: Variant2,
    mobile: Bento2mob,
    alt: "Critical Thinking Tools - Develop analytical and problem-solving skills",
  },
  {
    id: 3,
    original: Bento3,
    variant: Variant3,
    mobile: Bento3mob,
    alt: "Collaboration Platform - Connect and work together effectively",
  },
  {
    id: 4,
    original: Bento4,
    variant: Variant4,
    mobile: Bento4mob,
    alt: "Student Development Hub - Comprehensive growth and learning center",
  },
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

const BentoCard = memo(
  ({
    image,
    isHovered,
    onHover,
    onLeave,
    priority = false,
  }: {
    image: BentoImage;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
    priority?: boolean;
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
        priority={priority}
        loading={priority ? undefined : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPgo="
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
      {/* Preload variant image for smooth hover effect */}
      {!isHovered && (
        <link
          rel="preload"
          as="image"
          href={image.variant.src || image.variant}
        />
      )}
    </div>
  )
);

BentoCard.displayName = "BentoCard";

const Header = memo(() => (
  <div className="flex flex-col gap-4">
    <h1 className="bg-gray-50 text-gray-500 py-4 px-6 text-base xl:w-32 font-medium rounded-full mx-auto">
      Resources
    </h1>
    <h2 className="font-cocon font-bold xl:text-[40px] text-[30px] text-center xl:w-[25em] mx-auto">
      Unlock your potential and embark on a journey of growth
    </h2>
    <p className="font-manrope text-gray-500 text-base md:text-xl text-center xl:w-[60em] mx-auto">
      We are building a learning platform to improve creativity, critical
      thinking, and collaboration—empowering students to become the changemakers
      of tomorrow.
    </p>
  </div>
));

Header.displayName = "Header";

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

  // Memoize pagination function to prevent recreation
  const paginate = useMemo(() => (newDirection: number) => {
    setPage(([prevPage, prevDirection]) => [
      (prevPage + newDirection + bentoImages.length) % bentoImages.length,
      newDirection,
    ]);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, page, paginate]);

  const wrap = useMemo(() => (index: number, length: number) => {
    return ((index % length) + length) % length;
  }, []);

  // Memoize current image to prevent unnecessary calculations
  const currentImage = useMemo(() => 
    bentoImages[wrap(page, bentoImages.length)], 
    [page, wrap]
  );

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
              src={currentImage.mobile}
              alt={currentImage.alt}
              className="w-full rounded-xl shadow-md"
              priority={page === 0}
              loading={page === 0 ? undefined : "lazy"}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPgo="
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 80vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Preload adjacent images for smoother transitions */}
        {bentoImages.map((image, index) => {
          const isAdjacent = Math.abs(index - page) === 1 || 
                           (page === 0 && index === bentoImages.length - 1) ||
                           (page === bentoImages.length - 1 && index === 0);
          
          return isAdjacent ? (
            <link
              key={`preload-${index}`}
              rel="preload"
              as="image"
              href={image.mobile.src || image.mobile}
            />
          ) : null;
        })}
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
              backgroundColor: index === page ? "#15803d" : "#d1d5db",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
});

MobileGallery.displayName = "MobileGallery";

const Resources: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Memoize hover handlers to prevent recreation
  const handleHover = useMemo(() => (id: number) => () => {
    setHoveredImage(id);
  }, []);

  const handleLeave = useMemo(() => () => {
    setHoveredImage(null);
  }, []);

  return (
    <div>
      <div className="lg:flex-col">
        <Header />

        <div className="lg:px-8 lg:py-16 xl:flex-col gap-16 mt-8 px-12 hidden xl:block">
          <div className="flex-col flex xl:flex-row lg:justify-center gap-16">
            {bentoImages.slice(0, 2).map((image, index) => (
              <BentoCard
                key={image.id}
                image={image}
                isHovered={hoveredImage === image.id}
                onHover={handleHover(image.id)}
                onLeave={handleLeave}
                priority={index === 0}
              />
            ))}
          </div>
          <div className="flex flex-col xl:flex-row gap-16 mt-16">
            {bentoImages.slice(2).map((image) => (
              <BentoCard
                key={image.id}
                image={image}
                isHovered={hoveredImage === image.id}
                onHover={handleHover(image.id)}
                onLeave={handleLeave}
                priority={false}
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