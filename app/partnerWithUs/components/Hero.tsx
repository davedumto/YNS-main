"use client"

const Hero: React.FC = () => {
  const float: string =
    "py-5 px-6 border-[#8E9BAE] border-[1px] hidden lg:block font-lato rounded-[44.98px] text-center text-[#8E9BAE] absolute"
  return (
    <section className=" grid place-content-center relative">
      <div
        className={`${float} left-[113px] xl:left-[183px] top-[23px] rotate-[-9.3deg] `}
      >
        Collaboration
      </div>
      <div
        className={`${float} left-[51.62px] xl:left-[131.62px] top-[186.4px] rotate-[3.14deg]`}
      >
        Future-Ready
      </div>
      <div
        className={`${float} left-[110.36px] xl:left-[190.36px] bottom-[80.47px] xl:bottom-[111.47px] rotate-[16.06deg]`}
      >
        Skill Building
      </div>
      <main className="w-[20.438rem] md:w-[32rem] xl:w-[45.063rem] pt-[49px] pb-[72px] lg:pb-[158.03px]">
        <h1 className="font-cocon font-medium text-[48px] xl:text-[74.65px] leading-[57.6px] xl:leading-[90.77px] text-center ">
          Partnerships that Drive{" "}
          <span className="bg-gradient-to-r text-transparent bg-clip-text custom-gradient">
            Innovation
          </span>
          <style jsx>{`
            .custom-gradient {
              background-image: linear-gradient(
                -55.02deg,
                #f6deae 0%,
                #f6deae 26%,
                #98bc6d 26%,
                #98bc6d 48%,
                #f2a300 48%,
                #f2a300 68%,
                #114f3c 68%,
                #114f3c 82%,
                #ef4c0d 82%,
                #ef4c0d 100%
              );
            }
          `}</style>
        </h1>
        <p className="font-manrope pt-4 text-center text-[#00000099]">
          Partnerships empower us to expand our impact and deliver rich learning
          experiences.
        </p>
        <div className="flex justify-center">
          <button className="mt-7 lg:mt-12 px-10 py-[14px] xl:py-5 font-lato text-sm lg:text-xl rounded-[44.98px] text-[#FFFFFF] bg-[#1A1A1A]">
            Become a partner today
          </button>
        </div>
      </main>
      <div
        className={`${float} right-[110.7px] xl:right-[120.7px] top-5 rotate-[21.45deg]`}
      >
        Opportunity
      </div>
      <div
        className={`${float} right-[110.7px] xl:right-[146.63px] top-[200px] rotate-[-2.9deg]`}
      >
        Innovation
      </div>
      <div
        className={`${float} right-[170.14px] xl:right-[229.14px] bottom-[80.47px] xl:bottom-[108px] rotate-[-16.01deg]`}
      >
        Empowerment
      </div>
    </section>
  )
}

export default Hero
