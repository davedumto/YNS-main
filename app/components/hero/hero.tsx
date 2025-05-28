import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Group } from "@/public";
import { Hero_Mobile } from "@/public/icons";



export default function Hero() {

  
  return (
    <div className="flex flex-col justify-between gap-5 w-full relative px-5 sm:px-[4em] pt-[1em] items-center sm:mt-6 sm:mb-[6em] ">
      {/* text section  */}
      <div className="flex flex-col gap-16 w-full">
        <div className="flex flex-col justify-between w-full relative xl:px-[4em] pt-[1em] items-center sm:mt-6">
          {/* text section */}
          <div className=" flex flex-col gap-16">
            <div className="flex flex-col justify-center sm:gap-3 lg:gap-6 xl:gap-8 z-[20] w-full sm:max-w-screen-md absolute sm:-top-7">
              <h1
                className="relative w-fit sm:tracking-tight sm:text-balance  sm:mt-3 
              lg:-mt-3 xl:-mt-5 font-cocon font-medium sm:!leading-[48px] text-[30px] 
              leading-8 lg:!leading-[64px] xl:!leading-[84px] text-black sm:text-4xl 
              xl:text-[74.65px] lg:text-[58px] max-w-[200px] sm:max-w-[440px] lg:max-w-[800px]"
              >
                <span className="bg-six-color-gradient text-transparent bg-clip-text">
                  Empowering
                </span>{" "}
                Students
                <span className="inline-flex sm:hidden lg:inline-flex px-2 sm:p-0">
                  <Image
                    src={Group}
                    alt=""
                    width={140}
                    className="xl:w-[180px] sm:w-[140px] lg:h-14 w-14 h-5 "
                  />
                </span>{" "}
                to Excel in the <br className="hidden md:block" /> Dynamic{" "}
                <br className="hidden sm:lock lg:hidden" /> World{" "}
              </h1>
              <p
                className="font-normal leading-5 h-full text-xs sm:text-lg sm:leading-7 font-helvetica text-primary 
              max-w-[130px] sm:max-w-[240px] lg:max-w-[400px] xl:max-w-[550px]"
              >
                Unlock your potential with learning programs designed for the
                leaders of <br className="block sm:hidden" /> tomorrow.
              </p>
              <div className=" hidden lg:flex flex-row gap-3.5 ">
                <Link href="#newsletter">
                  <Button
                    variant="primary"
                    className="hover:bg-green-700 lg:!w-[120px] xl:!w-[188px] hover:text-slate-200 text-base font-manrope"
                  >
                    Get started
                  </Button>
                </Link>
                <Link href={"/join-movement"}>
                  <Button
                    variant="light"
                    className="hover:bg-green-700 lg:!w-[180px] xl:!w-[188px] text-dark-green bg-gray-100 font-manrope text-lg hover:text-white transition ease-linear duration-100"
                  >
                    Join the Program
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative sm:flex flex-col gap-0 hidden ">
              <Image
                src="/images/Star1.svg"
                alt="star1"
                width={100}
                height={100}
                className="absolute -right-12 -top-12 hidden sm:block animate-spin-slow"
              />
              <Image
                src="/icons/hero.svg"
                width={1220}
                height={672}
                alt="homepage image"
              />
              <Image
                src="/images/Star2.svg"
                width={100}
                height={100}
                className="absolute left-20 -bottom-12 hidden lg:block animate-spin-slow"
                alt="star2"
              />
              <Button
                asChild
                variant="light"
                className="absolute right-6 xl:right-10 py-[2em] !w-[150px] lg:!w-[150px] bottom-8"
              >
                <Link href="/aboutus#team" className="flex items-center">
                  <div className=" flex gap-2 justify-center items-center">
                    <Image
                      src="/images/play.svg"
                      alt=""
                      className="w-[34px]"
                      width={60}
                      height={60}
                    />
                    <h1 className="text-sm lg:text-base text-black font-semibold font-helvetica">
                      Our team
                    </h1>
                  </div>
                </Link>
              </Button>
            </div>
            <Image src={Hero_Mobile} alt="" className="block sm:hidden" />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-4 lg:hidden w-full px-[1.74em]">
        <Link href="#newsletter">
          <Button
            variant="primary"
            className=" w-full hover:bg-green-700 hover:text-slate-200 text-base font-manrope"
          >
            Get started
          </Button>
        </Link>

        <Link href={"/join-movement"}>
          <Button
            variant="light"
            className=" !w-full shadow-sm hover:bg-green-700 text-dark-green bg-gray-100 font-manrope text-lg hover:text-white transition ease-linear duration-100"
          >
            Join the Program
          </Button>
        </Link>
      </div>
    </div>
  );
}
