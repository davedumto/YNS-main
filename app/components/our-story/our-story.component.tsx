'use client'
import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Story1 from "@/public/images/story-1.svg";
import Story2 from "@/public/images/story-2.svg";
import Story3 from "@/public/images/story-3.svg";
import Story4 from "@/public/images/story-4.svg";
import Story5 from "@/public/story5.svg";
import Story6 from "@/public/story6.svg";
import { X, Eye } from "lucide-react";
import Section from "@/components/layout/Section";

// Memoized modal component with fixed tap-to-close and animations
const ImageModal = React.memo<{
  image: string;
  alt: string;
  onClose: () => void;
}>(({ image, alt, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = '0';

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
      document.body.style.top = 'unset';
    };
  }, []);

  // Handle backdrop click/touch
  const handleBackdropInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 md:hidden"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3 }}
      onClick={handleBackdropInteraction}
      onTouchEnd={handleBackdropInteraction}
    >
      <motion.div 
        className="relative w-full max-w-lg"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        <motion.button 
          onClick={onClose}
          className="absolute right-2 top-2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6 text-gray-800" />
        </motion.button>
        
        <motion.div 
          className="relative w-full h-[80vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <Image
            src={image}
            alt={alt}
            className="object-contain w-full h-full rounded-lg"
            style={{ maxHeight: "80vh" }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

ImageModal.displayName = 'ImageModal';

// Optimized story image component - no hover animations
const StoryImage = React.memo<{
  src: string;
  alt: string;
  className: string;
  onClick?: () => void;
  priority?: boolean;
  index: number;
}>(({ src, alt, className, onClick, priority = false, index }) => {
  return (
    <Image
      src={src}
      alt={alt}
      onClick={onClick}
      className={`${className} ${onClick ? 'cursor-pointer md:cursor-default' : ''}`}
      loading={priority ? undefined : "lazy"}
      priority={priority}
      sizes="(max-width: 768px) 33vw, (max-width: 1024px) 50vw, 33vw"
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
        `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f0f0"/></svg>`
      ).toString('base64')}`}
    />
  );
});

StoryImage.displayName = 'StoryImage';

const OurStory: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Memoize gallery images to prevent recreation on every render
  const galleryImages = useMemo(() => [
    { src: Story1, alt: "Students collaborating on creative projects" },
    { src: Story2, alt: "Young innovators developing solutions" },
    { src: Story3, alt: "Community outreach and education programs" },
    { src: Story4, alt: "Critical thinking workshops in action" },
    { src: Story5, alt: "Tomorrow's changemakers learning together" },
    { src: Story6, alt: "Fostering creativity and collaboration" },
  ], []);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Memoize click handler to prevent unnecessary re-renders
  const handleImageClick = useMemo(() => (image: string, alt: string) => {
    if (isMobile) {
      setSelectedImage({ src: image, alt });
    }
  }, [isMobile]);

  const closeModal = useMemo(() => () => {
    setSelectedImage(null);
  }, []);

  return (
    <Section>
      <div className="w-full mt-[75px] mx-auto">
        <header>
          <div className="w-full flex items-start justify-start lg:items-center lg:justify-center">
            <div className="inline-block text-center px-6 py-2 bg-[#FAFAFA] rounded-full w-[129px]">
              <h3 className="text-[#8E9BAE] font-medium font-manrope text-[16px]">
                Gallery
              </h3>
            </div>
          </div>
          <h2 className="text-[30px] lg:text-center md:text-[40px] leading-[48.64px] font-medium mt-[30px] font-cocon">
            Our Stories
          </h2>
          <p className="mt-4 text-[#00000099] text-base leading-[32px] lg:px-[86px] mx-0 text-left lg:text-center md:mx-auto font-manrope">
            Our outreach programs are designed to nurture creativity, critical
            thinking, and collaboration, helping students to become the
            <br className="hidden lg:block" />
            changemakers of tomorrow.
          </p>
          
          {/* Mobile CTA */}
          <div className="mt-6 flex justify-center md:hidden">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100">
              <Eye className="w-4 h-4 text-green-700" aria-hidden="true" />
              <span className="text-sm text-green-700 font-medium font-manrope">
                Tap images to view full size
              </span>
            </div>
          </div>
        </header>

        <div className="mt-16 lg:grid lg:grid-cols-3 gap-5" role="img" aria-label="Photo gallery">
          {/* First Column */}
          <div className="lg:space-y-4 flex gap-1 items-center justify-between lg:block">
            <StoryImage
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              onClick={() => handleImageClick(galleryImages[0].src, galleryImages[0].alt)}
              className="w-[33%] h-[120px] md:h-[200px] lg:h-auto lg:w-full object-cover rounded-lg shadow-lg"
              priority={true} // First few images get priority
              index={0}
            />
            <StoryImage
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              onClick={() => handleImageClick(galleryImages[1].src, galleryImages[1].alt)}
              className="w-[33%] h-[120px] md:h-[200px] lg:h-auto lg:w-full object-cover rounded-lg shadow-lg"
              priority={true}
              index={1}
            />
            <StoryImage
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              onClick={() => handleImageClick(galleryImages[2].src, galleryImages[2].alt)}
              className="w-[33%] h-[120px] md:h-[200px] lg:h-auto lg:w-full object-cover rounded-lg shadow-lg"
              priority={true}
              index={2}
            />
          </div>

          {/* Second Column - Hidden on mobile */}
          <div className="h-full mt-[12px] lg:mt-0 hidden md:block">
            <StoryImage
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              className="w-full h-[149px] md:h-[200px] lg:h-full object-cover lg:rounded-lg shadow-lg"
              index={3}
            />
          </div>

          {/* Third Column */}
          <div className="mt-[12px] lg:mt-0 lg:space-y-4 flex gap-1 items-center justify-between lg:block rounded-lg overflow-hidden">
            <StoryImage
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              onClick={() => handleImageClick(galleryImages[4].src, galleryImages[4].alt)}
              className="w-[50%] h-[120px] md:h-[200px] lg:h-1/2 lg:w-full object-cover lg:rounded-lg shadow-lg"
              index={4}
            />
            <StoryImage
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              onClick={() => handleImageClick(galleryImages[5].src, galleryImages[5].alt)}
              className="w-[50%] h-[120px] md:h-[200px] lg:h-1/2 lg:w-full object-cover lg:rounded-lg shadow-md"
              index={5}
            />
          </div>
        </div>

        {/* Modal with AnimatePresence for smooth exit animations */}
        <AnimatePresence>
          {selectedImage && (
            <ImageModal
              image={selectedImage.src}
              alt={selectedImage.alt}
              onClose={closeModal}
            />
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default OurStory;