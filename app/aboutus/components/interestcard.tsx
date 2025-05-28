import React from "react";
import Image from "next/image";

interface InterestCardProps {
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string;
}

const InterestCard: React.FC<InterestCardProps> = ({ title, description, imageUrl, bgColor }) => {
  return (
    <div className={`h-[377px] relative rounded-[10px] ${bgColor}`}>
      <div className="px-8 py-10 flex flex-col gap-9">
        <h1 className="font-bold text-[40px] leading-[44px] font-cocon text-white">
          {title}
        </h1>
        <p className="text-[16px] text-white font-normal leading-[32px] font-manrope">
          {description}
        </p>
        <Image
          src={imageUrl}
          width={76}
          height={76}
          alt="star image"
          className="absolute right-4 bottom-8"
        />
      </div>
    </div>
  );
};

export default InterestCard;