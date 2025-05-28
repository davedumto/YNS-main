"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import star from "@/public/star.png";
import star2 from "@/public/testimonial_star.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          className
        )}
        {...props}
        onClick={handleToggle}
      >
        {children}
        {isOpen ? <Image
          alt="dropdown-icon"
          className={cn(
            " h-[23px] w-[23px] lg:h-[26.48px] lg:w-[26.48px] shrink-0 transition-transform duration-500",
            isOpen ? "rotate-180" : "rotate-0" // Rotate image based on state
          )}
          width={49.68}
          height={49.68}
          src={star2}
        /> : <Image
          alt="dropdown-icon"
          className={cn(
            " h-[23px] w-[23px] lg:h-[26.48px] lg:w-[26.48px] shrink-0 transition-transform duration-500",
            isOpen ? "rotate-180" : "rotate-0" // Rotate image based on state
          )}
          width={49.68}
          height={49.68}
          src={star}
        />}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
