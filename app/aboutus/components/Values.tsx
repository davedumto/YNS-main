import React from "react";
import { coreValues } from "@/data";
import { CoreValue } from "@/types";
import Image from "next/image";
import Section from "@/components/layout/Section";

const Values: React.FC = () => {
  return (
    <Section>
      <div className="font-cocon mx-auto px-[2em] md:px-[0em] py-[4em] bg-white w-full">
        <h1 className="text-[40px] mb-[1em]">Core Values</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2em] justify-items-center w-full">
          {coreValues.map((value: CoreValue) => (
            <div
              key={value.id}
              className={`relative w-full max-w-[295px] h-[215px] xl:h-[265px] px-6 ${value.backgroundColor} ${value.padding} flex items-end justify-center text-white font-medium text-3xl xl:text-[40px] xl:leading-[48px] rounded-[10px]`}
            >
              <p>{value.title}</p>
              <Image
                src={value.sticker}
                alt="sticker"
                width={100}
                height={100}
                className="absolute top-[-27px] right-[-15px] w-[100px] h-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Values;