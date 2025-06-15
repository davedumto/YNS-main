import React from "react";
import Arrow from "../../../public/abtarrow.svg";
import Image from "next/image";
import Circle from "../../../public/circles.svg";
import Section from "@/components/layout/Section";

const interest = () => {
  return (
    <div className="  flex justify-center py-[2em] md:py-[4em]  bg-[#F6DEAE] px-[2em] lg:px-[5em] ">
      <Section>
        <div className="  items-center flex flex-col lg:flex-row gap-[3em] container  mx-auto   ">
          <div className=" bg-[#114F3C] h-full flex flex-col font-cocon text-white  md:p-[4em] p-[2em] gap-[1em] justify-between items-center   xl:w-[24em] rounded-3xl  w-full">
            <h1 className="text-[30px] xl:text-[40px] px-3">what we do?</h1>
            <Image src={Arrow} alt="" />
          </div>
          <div className="flex flex-col md:flex-row  bg-[#98BC6D] gap-[1em] md:gap-[2em] lg:gap-[2em] p-[1em] rounded-[2em]">
            <div className="w-auto xl:w-[50em]   p-[1em]  flex flex-col gap-[1em] justify-around ">
              <h1 className="font-cocon font-[500] text-[25px] md:text-[30px] text-[#114f3c]">
                Empowering Communities Through Skill-Based Outreach:
              </h1>
              <p className="text-wrap text-white text-[16px] md:text-[20px] font-manrope font-[400] leading-[32px]">
                Our outreach programs bring practical skills to students in
                underserved communities—covering areas like web development,
                data analysis, graphic design, music production, and more.
                Whether you`re discovering a passion, building a future career,
                or learning for impact, our hands-on sessions are designed to
                inspire and equip changemakers across Nigeria.
              </p>
            </div>
            <div className=" hidden xl:block  ">
              <Image src={Circle} className="h-full" alt="arrow image" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default interest;
