import React, { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/testimonialCarousel";
import Image from "next/image";
import { testimonials } from "@/data";
import Section from "@/components/layout/Section";

// Define the type for the testimonial data
interface TestimonialData {
  quote: string;
  company: string;
  extra: string;
  bgColor: string;
  description: string;
  quoteImage: string;
  image: string;
  name: string;
  position: string;
}

// Memoized testimonial card component
const TestimonialCard = React.memo<{
  testimonial: TestimonialData;
  index: number;
  isPriority: boolean;
}>(({ testimonial, index, isPriority }) => {
  // Generate blur placeholder based on background color
  const blurDataURL = useMemo(() => {
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${testimonial.bgColor || '#f0f0f0'}"/>
       </svg>`
    ).toString('base64')}`;
  }, [testimonial.bgColor]);

  return (
    <Card className="border-none rounded-none shadow-none h-full">
      <CardContent className="p-0 h-full w-full md:w-[27rem] lg:w-[31.375rem]">
        <div
          className="rounded-[20px] p-7 text-white flex flex-col h-48 justify-between"
          style={{ backgroundColor: testimonial.bgColor }}
        >
          <blockquote className="text-sm md:text-lg font-medium font-cocon">
            &quot;{testimonial.quote}&quot;
          </blockquote>
          <div className="flex justify-between items-end">
            <Image
              src={testimonial.company}
              alt={`${testimonial.name}'s company logo`}
              width={100}
              height={30}
              className={`w-auto ${
                index === 1 ? "h-8" : index === 2 ? "h-7" : "h-10"
              }`}
              priority={isPriority}
              loading={isPriority ? undefined : "lazy"}
              placeholder="blur"
              blurDataURL={blurDataURL}
              sizes="(max-width: 768px) 80px, 100px"
            />
            <Image
              src={testimonial.extra}
              alt=""
              role="presentation"
              width={100}
              height={30}
              className={`animate-spin-slow w-auto ${
                index === 2 ? "h-7" : "h-12"
              }`}
              loading="lazy"
              placeholder="blur"
              blurDataURL={blurDataURL}
              sizes="(max-width: 768px) 40px, 60px"
            />
          </div>
        </div>

        <div className="bg-[#F6F6F6] rounded-[20px] py-7 px-5 h-[15.625rem] md:h-72 flex gap-3 justify-between items-start">
          <Image
            src={testimonial.quoteImage}
            alt=""
            role="presentation"
            width={60}
            height={60}
            className="w-auto h-8 md:h-16"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZTBlMGUwIi8+Cjwvc3ZnPgo="
            sizes="(max-width: 768px) 32px, 64px"
          />

          <div className="flex gap-7 flex-col h-full justify-between">
            <p className="mt-4 text-xs md:text-base">
              {testimonial.description}
            </p>
            <div className="flex items-center">
              <Image
                src={testimonial.image}
                alt={`${testimonial.name} - ${testimonial.position}`}
                width={56}
                height={56}
                className="w-auto h-14 md:h-20 rounded-full"
                priority={isPriority}
                loading={isPriority ? undefined : "lazy"}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjgiIGN5PSIyOCIgcj0iMjgiIGZpbGw9IiNkMGQwZDAiLz4KPC9zdmc+Cg=="
                sizes="(max-width: 768px) 56px, 80px"
              />
              <div className="ml-4">
                <p className="font-medium text-xs md:text-base">
                  {testimonial.name}
                </p>
                <p className="text-[10px] md:text-sm text-gray-600">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

TestimonialCard.displayName = "TestimonialCard";

// Memoized header component
const TestimonialHeader = React.memo(() => (
  <div className="flex flex-col gap-7">
    <p className="font-medium text-sm md:text-base font-manrope leading-4 text-center bg-[#FAFAFA] text-[#8E9BAE] rounded-[30px] py-2 px-6 w-fit">
      Our Success Stories
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
      <div className="md:w-[70%] flex flex-col gap-7">
        <h2 className="text-[#2F2F2F] font-cocon text-3xl md:text-5xl font-medium">
          What&apos;s your excuse now?
        </h2>
        <p className="text-base leading-7 font-manrope">
          Hear from students who have transformed their futures with the
          Young and Skilled Initiative. Our program has helped students
          secure jobs, launch businesses, and pursue further education
          with confidence.
        </p>
      </div>
      <div className="md:w-[30%] hidden md:flex justify-end">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </div>
  </div>
));

TestimonialHeader.displayName = "TestimonialHeader";

export function Testimonial() {
  // Memoize testimonials to prevent unnecessary re-processing
  const memoizedTestimonials = useMemo(() => testimonials, []);

  return (
    <Section id="testimonial">
      <Carousel className="w-full bg-white py-10 flex flex-col gap-8 md:gap-y-14 relative">
        <TestimonialHeader />

        <CarouselContent className="-ml-4">
          {memoizedTestimonials.map((testimonial, index) => (
            <CarouselItem key={`testimonial-${index}`} className="md:basis-auto">
              <TestimonialCard
                testimonial={testimonial}
                index={index}
                isPriority={index < 2} // First 2 testimonials get priority loading
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Mobile navigation */}
        <div className="flex md:hidden justify-center">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        {/* Preload adjacent testimonial images for smooth scrolling */}
        {memoizedTestimonials.slice(2, 4).map((testimonial, index) => (
          <React.Fragment key={`preload-${index}`}>
            <link
              rel="preload"
              as="image"
              href={testimonial.image}
            />
            <link
              rel="preload"
              as="image"
              href={testimonial.company}
            />
          </React.Fragment>
        ))}
      </Carousel>
    </Section>
  );
}