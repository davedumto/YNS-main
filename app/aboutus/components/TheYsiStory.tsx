'use client'
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  YsiPic1,
  YsiTapStar,
  YsiStar,
} from "../../../public/images/ysiStory";

const TheYsiStory = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-[#1A1A1A] pt-[4.8rem] pb-[5.5rem] px-[2rem] lg:px-[9rem] flex lg:gap-[3rem] xl:gap-[4.656rem] flex-wrap lg:flex-nowrap items-center justify-center">
      <section className="">
        <figure className="relative h-[452px] lg:h-[520px] w-[360px] lg:w-[410px]">
          <div className="absolute left-[10px]">
            <Founders pic={YsiPic1} name={"Ugorji Sunday Kalu"} />
          </div>
          <div>
            <Link href="https://www.instagram.com/fada_usk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <Image
                src={YsiTapStar}
                alt="tap star"
                className="absolute z-20 left-[-2rem] bottom-[-3rem] lg:left-[-3.5rem] lg:bottom-[-3.5rem] xl:left-[-4rem] xl:bottom-[-4rem] w-28 lg:w-[146px] xl:w-[159.34px]"
              />
            </Link>
          </div>
        </figure>
      </section>

      <section className="mt-20 lg:mt-0">
        <article className="relative lg:w-[30.5rem] xl:w-[35.5rem]">
          <Image
            src={YsiStar}
            alt="star image"
            className="absolute right-0 w-16 lg:w-[80px] animate-spin-slow"
          />
          <h1 className="text-[#EF4C0D] text-[35px] md:text-[50px] font-medium font-[Cocon]">
            The YSI story
          </h1>
          <div className="text-[#F6DEAE] pt-[27px]">
            <p className="font-bold text-xl leading-8 text-center lg:text-left italic">
              The Spark That Ignited YOUNG AND SKILLED ADVANCEMENT INITIATIVE:
            </p>
            <div className="relative mt-[1em] text-[#d0c3a8]">
              <p className={`leading-8 font-medium text-justify ${!isExpanded ? 'line-clamp-4 md:line-clamp-none' : ''}`}>
                Growing up, I was fascinated by the endless possibilities of
                technology. I saw firsthand how it could empower individuals to
                achieve their dreams. However, I also noticed a significant gap in
                accessible, quality education, especially for young people in
                underserved communities. {"That's"} when the seed for Young and Skilled was planted. I
                wanted to create a platform that would provide young minds with
                the tools, knowledge, and support they needed to succeed in the
                digital age. I envisioned a place where they could explore their
                passions, develop in-demand skills, and build a brighter future
                for themselves. From humble beginnings, Young and Skilled has
                evolved into a thriving community of learners and educators. Our
                mission remains the same: to empower the next generation through
                education and innovation.
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-[#EF4C0D] mt-4 md:hidden"
              >
                {isExpanded ? (
                  <>
                    Read Less
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

interface FoundersProps {
  pic: StaticImageData;
  name: string;
  tilt?: string;
}

const Founders: React.FC<FoundersProps> = ({ pic, name, tilt }) => {
  return (
    <div className="relative h-[500px] lg:h-[524px] w-[350px] lg:w-[400px]">
      <Image src={pic} alt="Founders Image" />
      <div
        className={`absolute bottom-16 lg:bottom-6 left-[16px] lg:left-[18px] ${tilt} w-[320px] lg:w-[364px] py-5 h-[62px] lg:h-[79px] bg-[#F2A300] flex gap-3 lg:gap-5 rounded-[10px] items-center justify-between px-[17px]`}
      >
        <p className="font-[Cocon] font-medium text-[20px] text-center">
          {name}
        </p>
        <p className="w-[124px] lg:w-[144px] text-white text-md lg:text-lg leading-[21px]">
          Founder <span className="font-bold">YS initiative</span>
        </p>
      </div>
    </div>
  );
};

export default TheYsiStory;