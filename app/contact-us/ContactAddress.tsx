import Image from "next/image";
import Link from "next/link";

const ContactAddress = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:px-36 px-8 items-center py-24">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold lg:text-[45px] text-[32px] lg:w-[90%] w-full leading-none">
          Port Harcourt, Rivers State
        </h2>
        
        {/* Email */}
        <div className="flex gap-3 items-center">
          <Image src="../images/mail.svg" alt="mail" height={100} width={20} />
          <Link 
            href="mailto:youngskilledinitiative@gmail.com"
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            youngskilledinitiative@gmail.com
          </Link>
        </div>
        
        {/* Phone */}
        <div className="flex gap-3 items-center">
          <Image src="../images/phone.svg" alt="phone" height={100} width={20} />
          <Link 
            href="tel:+2348136535361"
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            +234 813 653 5361
          </Link>
        </div>
      </div>
      
      <Image src="/images/bridge.png" alt="bridge" height={100} width={500} />
    </div>
  );
};

export default ContactAddress;