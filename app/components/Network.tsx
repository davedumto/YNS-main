import Lady from "@/public/lady.svg";
import Image from "next/image";
import Man from "@/public/man.svg";

const Network = () => {
  return (
    <>
      <div className="w-full bg-[#FAFAFA] px-[21px] md:px-[102px] py-[77px] mb-[41px] ">
        <div className="w-full flex items-center justify-center gap-[3em] flex-col xl:flex-row  ">
          <div className=" w-full xl:w-[40%] text-center lg:text-left ">
            <div className="w-full mb-[15px] ">
              <h3 className="font-cocon font-bold text-[30px] lg:text-[50px] w-[auto] leading-[34px] md:leading-[48.64px] capitalize ">
                Go for Community
                <br className="md:hidden" /> {""}and Networking
              </h3>
            </div>

            <div className="w-full mb-[15px] ">
              <p className="font-manrope font-normal text-balance text-[16px] w-[auto]  text-[#00000099]">
                Join a vibrant community of like-minded students and gain access
                to valuable networking opportunities.
              </p>
            </div>

            <div className="w-full mt-[30px] md:mt-0 ">
              <button className="bg-[#114F3C] text-white w-[193px] px-[40px] py-[18px] md:py-[20px] rounded-full font-manrope font-normal text-[16px]">
                Network Now
              </button>
            </div>
          </div>
          <div className=" w-full xl:w-[50%] relative mt-[45px] xl:mt-0 ">
            <div className="w-[200px] h-[220px] top-5  md:w-[418px] md:h-[380px] lg:h-[418px] lg:w-[480px] xl:h-[341px] xl:w-[380px] 2xl:w-[480px]  2xl:h-[341px] rounded-[14.94px] border border-dotted border-[#8E9BAE] absolute  md:top-[50px] lg:top-[75px] left-[60px]  " />
            <div className="z-10 relative  w-[200px] md:w-full  xl:w-[350px] 2xl:w-fit ">
              <Image
                src={Lady}
                alt="Lady image"
                className="w-full md:w-[70%] md:h-[initial] lg:w-[initial] "
              />

              <div className="flex items-center justify-start gap-[10px] bg-white rounded-[300px] px-[6px] py-[5px] xl:py-[12px]  h-[33px] w-[108px] md:w-[185px] md:h-[52px] absolute top-5  md:top-5 md:right-20  lg:top-12 lg:right-44 xl:-right-16 2xl:-right-28">
                <div className="bg-[#114F3C] rounded-full w-[25px] h-[25px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px] ">
                  <p className="text-white text-center font-medium text-[15px] md:text-[18px] xl:text-[24px]">
                    J
                  </p>
                </div>
                <p className="text-[#1A1A1A] text-center font-medium text-[10px]  md:text-[14px] xl:text-[16px]">
                  James Ade
                </p>
              </div>
            </div>
            <div className="z-10 relative -top-10 w-[200px] -right-24 md:w-full md:-top-16 md:-right-44  lg:-right-48 xl:-right-44 2xl:-right-52 xl:w-[350px]  2xl:w-fit ">
              <Image
                src={Man}
                alt="Man image"
                className="w-full md:w-[70%] md:h-[initial]  lg:w-[initial]"
              />
              <div className="flex items-center justify-start gap-[10px]  bg-[#1A1A1A] rounded-[300px] px-[6px] py-[5px] xl:py-[12px] h-[33px] w-[112px] md:w-[185px] md:h-[52px] absolute bottom-0 top-28 -left-5 md:top-[auto] md:bottom-[30px] md:-left-20  lg:bottom-[7px] xl:bottom-[20px] lg:-left-16 xl:-left-24 2xl:bottom-[80px] 2xl:left-18">
                <div className="bg-[#EF4C0D] rounded-full w-[25px] h-[25px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px] ">
                  <p className="text-white text-center font-medium text-[15px] md:text-[18px] xl:text-[24px]">
                    G
                  </p>
                </div>
                <p className="text-white text-center font-medium text-[10px] md:text-[14px] xl:text-[16px] ">
                  Gale Hillman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Network;
