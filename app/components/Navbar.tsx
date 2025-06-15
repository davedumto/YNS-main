"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import  LogoMain  from "@/public/images/logo-main.png";
import { useNavigationLoader } from "@/app/hooks/useNavigation";

const navlinks = [
  { route: "Home", link: "/", id: "home" },
  { route: "About us", link: "/aboutus", id: "about" },
  { route: "Resources", link: "/resources", id: "resources" },
  { route: "Contact us", link: "/contact-us", id: "contact-us" },
  { route: "Blog", link: "/blog", id: "blog" },
  { route: "Join Movement", link: "/join-movement", id: "join-movement" },
];

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const underlineRef = useRef(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [hoverStyle, setHoverStyle] = useState({ width: 0, left: 0 });

  const pathname = usePathname();
  const { startLoading } = useNavigationLoader();

  // Handle navigation with loading
  const handleNavigation = (targetPath: string) => {
    // Only start loading if navigating to a different route
    if (pathname !== targetPath) {
      startLoading();
    }
  };

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Function to check if a route is active
  const isRouteActive = (linkPath: string) => {
    if (linkPath === "/") {
      return pathname === "/";
    }
    // For blog routes, check if pathname starts with /blog
    if (linkPath === "/blog") {
      return pathname.startsWith("/blog");
    }
    return pathname === linkPath;
  };

  // Find the active route using the new logic
  const activeRoute = navlinks.find((link) => isRouteActive(link.link));

  // Handle mouse enter to update the hover style
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;
    setHoverStyle({ width: offsetWidth, left: offsetLeft });
  };

  // Handle mouse leave to revert to active link style
  const handleMouseLeave = () => {
    if (activeRoute) {
      const activeLinkElement = document.getElementById(activeRoute.id);
      if (activeLinkElement) {
        const { offsetLeft, offsetWidth } = activeLinkElement;
        setHoverStyle({ width: offsetWidth, left: offsetLeft });
      }
    }
  };

  // Ensure the underline reflects the active link when the component mounts
  useEffect(() => {
    if (activeRoute) {
      const activeLinkElement = document.getElementById(activeRoute.id);
      if (activeLinkElement) {
        const { offsetLeft, offsetWidth } = activeLinkElement;
        setHoverStyle({ width: offsetWidth, left: offsetLeft });
      }
    }
  }, [pathname, activeRoute]);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setShowMobileMenu(false);
  }, []);

  // Close mobile menu on scroll (mobile only)
  useEffect(() => {
    if (!isMobile || !showMobileMenu) return;

    const handleScroll = () => {
      closeMobileMenu();
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showMobileMenu, isMobile, closeMobileMenu]);

  // Close mobile menu when clicking outside (mobile only)
  useEffect(() => {
    if (!isMobile || !showMobileMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the mobile menu
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    // Add click event listener to document
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMobileMenu, isMobile, closeMobileMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (showMobileMenu && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMobileMenu, isMobile]);

  return (
    <>
      <div className="w-full bg-white lg:px-[3em] xl:px-[8em] px-10 py-6 flex justify-between gap-6 lg:py-8 sticky top-0 z-40 ">
        <Link href="/" onClick={() => handleNavigation("/")}>
          <Image width={80} height={80} src={LogoMain} alt="Logo" />
        </Link>

        {/* Desktop menu */}
        <div
          className="relative hidden md:flex items-center justify-between gap-2 lg:gap-8 text-black"
          onMouseLeave={handleMouseLeave}
        >
          <span
            ref={underlineRef}
            className="absolute bottom-0 h-0.5 sm:h-[3px] bg-dark-green transition-all duration-300"
            style={hoverStyle}
          ></span>

          {navlinks.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              id={item.id} // Add id to each link for active link tracking
              className={`relative group text-sm lg:text-base font-semibold transition-all p-[6px] text-nowrap duration-200 ${
                isRouteActive(item.link) ? "text-black" : "text-ash"
              } hover:text-black`}
              onMouseEnter={handleMouseEnter}
              onClick={() => handleNavigation(item.link)}
            >
              {item.route}
            </Link>
          ))}
        </div>

        {/* Action buttons */}
        <div className="hidden md:flex items-center group">
          <Link href={"/join-movement"} onClick={() => handleNavigation("/join-movement")}>
            <Button
              size={"lg"}
              className="rounded-3xl bg-dark-green transform transition-all duration-300 ease-in-out group-hover:scale-120 group-hover:text-base hover:bg-dark-green"
            >
              Get Started
            </Button>
          </Link>

          <Button
            size={"icon"}
            className="rounded-full hidden lg:inline-flex bg-dark-green ml-[-6px] transform transition-transform duration-500 ease-in-out group-hover:rotate-90"
          >
            <Image
              src="/arrow.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="p-2"
            />
          </Button>
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
        >
          <motion.img
            src={showMobileMenu ? "/hamburger-close.svg" : "/hamburger.svg"}
            alt="Menu"
            width={32}
            height={32}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Mobile Menu Content */}
            <motion.div
              ref={mobileMenuRef}
              className="fixed top-0 left-0 w-screen h-auto bg-black z-50 flex flex-col gap-8 items-center justify-between px-4 py-6"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                // Prevent event bubbling to avoid closing when clicking inside the menu
                e.stopPropagation();
              }}
            >
              {/* Logo inside the dropdown */}
              <div className="flex w-full justify-between">
                <Image
                  src="/images/logo-main2.png"
                  alt="Logo"
                  width={60}
                  height={40}
                  className="w-[70px] h-[50px]"
                />
                {/* Close button inside dropdown */}
                <button onClick={closeMobileMenu} className="">
                  <motion.img
                    src="/hamburger-close.svg"
                    alt="Close"
                    width={32}
                    height={32}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </button>
              </div>

              <nav className="flex flex-col h-full justify-center items-center gap-8 w-full">
                {navlinks.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className={`text-lg font-semibold ${
                      isRouteActive(item.link) ? "text-[#98BC6D]" : "text-white"
                    } hover:text-gray-400`}
                    onClick={() => {
                      handleNavigation(item.link);
                      closeMobileMenu();
                    }}
                  >
                    {item.route}
                  </Link>
                ))}
                <Link 
                  href={"/join-movement"} 
                  className="w-full"
                  onClick={() => {
                    handleNavigation("/join-movement");
                    closeMobileMenu();
                  }}
                >
                  <Button
                    size={"lg"}
                    className="rounded-[50px] border-2 border-white !py-2.5 !text-base bg-dark-green w-full"
                  >
                    Get Started
                  </Button>
                </Link>

                <div className="flex justify-end w-full gap-[75px]">
                  <div className="flex gap-4 items-center">
                    <Link href={"https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}>
                      <Image
                        src="/instagram-filled.svg"
                        alt="instagram logo"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link href={"https://www.facebook.com/profile.php?id=61563309331437&mibextid=LQQJ4d&mibextid=LQQJ4d"}>
                      <Image
                        src="/facebook-filled.svg"
                        alt="Facebook logo"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link href={"https://www.linkedin.com/company/young-and-skilled-initiative/"}>
                      <Image
                        src="/linkedin-filled.svg"
                        alt="LinkedIn logo"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                </div>
              </nav>
              <p className="text-xs font-normal text-gray-400">
                Copyright © 2024 Young & Skilled Initiative all rights reserved
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;