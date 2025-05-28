import React from "react";
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

// Define the type for the testimonial data if needed
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

export function Testimonial() {
  return (
    <Section id="testimonial">
      <Carousel className="w-full bg-white py-10 flex flex-col gap-8 md:gap-y-14 relative">
        <div className="flex flex-col gap-7">
          <p className="font-medium text-sm md:text-base font-manrope leading-4 text-center bg-[#FAFAFA] text-[#8E9BAE] rounded-[30px] py-2 px-6 w-fit">
            Our Success Stories
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
            <div className="md:w-[70%] flex flex-col gap-7">
              <p className="text-[#2F2F2F] font-cocon text-3xl md:text-5xl font-medium">
                What&apos;s your excuse now?
              </p>
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

        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-auto">
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
                        alt={testimonial.description}
                        width={100} // Adjust to custom width
                        height={30} // Adjust to custom height
                        className={`w-auto ${
                          index === 1 ? "h-8" : index === 2 ? "h-7" : "h-10"
                        }`}
                      />
                      <Image
                        src={testimonial.extra}
                        alt={testimonial.description}
                        width={100} // Adjust to custom width
                        height={30} // Adjust to custom height
                        className={`animate-spin-slow w-auto ${
                          index === 2 ? "h-7" : "h-12"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="bg-[#F6F6F6] rounded-[20px] py-7 px-5 h-[15.625rem] md:h-72 flex gap-3 justify-between items-start">
                    <Image
                      src={testimonial.quoteImage}
                      alt={""}
                      width={60} // Adjust to custom width
                      height={60} // Adjust to custom height
                      className="w-auto h-8 md:h-16"
                    />

                    <div className="flex gap-7 flex-col h-full justify-between">
                      <p className="mt-4 text-xs md:text-base">
                        {testimonial.description}
                      </p>
                      <div className="flex items-center">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={56} // Adjust to custom width
                          height={56} // Adjust to custom height
                          className="w-auto h-14 md:h-20 rounded-full"
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
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex md:hidden justify-center">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
}