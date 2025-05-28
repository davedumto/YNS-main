import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Company links
  const companyLinks = [
    { name: "About us", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
    { name: "Partners", href: "/partners" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookies Policy", href: "/cookies-policy" },
  ];

  // Resources links
  const resourcesLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help-center" },
    // { name: "Partners", href: "/partners" },
    { name: "Courses", href: "/courses" },
    { name: "Learn", href: "/learn" },
  ];

  // Legal links
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ];

  // Social media links with brand colors
  const socialLinks = [
    // {
    //   name: "X",
    //   href: "https://twitter.com/youngskilled",
    //   icon: "/x-filled.svg",
    //   hoverColor: "hover:bg-black", // X/Twitter dark color
    // },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61563309331437&mibextid=LQQJ4d&mibextid=LQQJ4d",
      icon: "/facebook-filled.svg",
      hoverColor: "hover:bg-blue-600",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/young-and-skilled-initiative/",
      icon: "/linkedin-filled.svg",
      hoverColor: "hover:bg-blue-700", 
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: "/instagram-filled.svg",
      hoverColor: "hover:bg-pink-600", 
    },
  ];

  return (
    <div className="sm:p-[3em] text-white">
      <div className="lg:px-[45px] px-6 py-12 sm:py-[94px] bg-dark-green w-full rounded-t-3xl sm:rounded-[20px]">
        <div className="flex flex-col gap-[125px] w-full">
          <div className="lg:flex justify-between gap-[6em] w-full h-full items-start ">
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              width={200}
              height={50}
              className="flex justify-start items-start pb-[30px] lg:p-0 lg:w-[15em] w-[6em]"
            />

            <div className="sm:flex grid grid-cols-2 sm:text-lg sm:gap-0 gap-x-14 gap-y-7 text-base flex-row w-full justify-between">
              <div className="flex flex-col gap-[30px] xl:text-lg lg:text-xl">
                <span className="text-lighter-yellow">Company</span>
                <ul className="flex flex-col gap-2">
                  {companyLinks.map((link, index) => (
                    <li key={`company-${index}`}>
                      <Link
                        href={link.href}
                        className="transition-all duration-200 hover:text-lighter-yellow hover:underline focus:text-lighter-yellow focus:outline-none"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-[30px] xl:text-xl">
                <span className="text-lighter-yellow">Resources</span>
                <ul className="flex flex-col gap-2">
                  {resourcesLinks.map((link, index) => (
                    <li key={`resource-${index}`}>
                      <Link
                        href={link.href}
                        className="transition-all duration-200 hover:text-lighter-yellow hover:underline focus:text-lighter-yellow focus:outline-none"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-[30px] xl:text-xl">
                <span className="text-lighter-yellow">Legal</span>
                <ul className="flex flex-col gap-2">
                  {legalLinks.map((link, index) => (
                    <li key={`legal-${index}`}>
                      <Link
                        href={link.href}
                        className="transition-all duration-200 hover:text-lighter-yellow hover:underline focus:text-lighter-yellow focus:outline-none"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-[30px] text-lg xl:text-xl">
                <span className="text-lighter-yellow">Socials</span>
                <div className="sm:flex flex-col grid grid-cols-2 sm:gap-2.5 w-fit gap-y-2 gap-x-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={`social-${index}`}
                      href={social.href}
                      className={`group p-[13px] bg-white rounded-full flex w-fit items-center justify-center transition-all duration-300 ${social.hoverColor} hover:scale-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-lighter-yellow`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.name} page`}
                    >
                      <Image
                        src={social.icon || "/placeholder.svg"}
                        alt={`${social.name} logo`}
                        width={24}
                        height={24}
                        className="transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:rotate-6"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[84px] items-center">
            <Image
              src="/images/watermark.svg"
              alt="Watermark"
              width={1194}
              height={173}
            />
            <p className="text-base sm:text-xl font-normal text-gray-400">
              Copyright © {currentYear} Young & Skilled Initiative
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
