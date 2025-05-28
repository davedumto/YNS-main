import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq_list } from "./faq-list";
import Section from "@/components/layout/Section";

// Define the type for the props, making `className` optional
interface FAQProps {
  className?: string; // className is optional
}

const FAQ: React.FC<FAQProps> = ({ className }) => {
  return (
    <Section>
          <div className={`w-full  mb-[40px] container mx-auto  ${className}`}>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:gap-[100px]">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-[30px] lg:text-[50px] font-bold font-cocon leading-[50px]">
            Frequently Asked <span className="text-[#00000099]">Questions</span>
          </h2>
          <p className="mt-[16px] w-full md:w-[65%] leading-[32px] font-manrope text-[16px] font-normal text-[#00000099]">
            Find quick answers to common queries in our FAQs section, designed
            to address your most pressing questions and provide you with the
            information you need.
          </p>
        </div>

        <div className="w-full mt-[32px] lg:mt-0 lg:w-[50%]">
          {faq_list.map(({ question, answer }) => (
            <Accordion
              className="mb-[16px] lg:mb-[34px] outline-none"
              key={question}
              type="single"
              collapsible
            >
              <AccordionItem
                className="lg:w-full bg-[#F6F6F6] border-none rounded-[10px] px-[32px] transition-colors duration-200 ease-in-out hover:bg-[#1A1A1A] hover:text-white"
                value={question}
              >
                <AccordionTrigger className="no-underline hover:no-underline text-[9.8px] lg:text-[16px] font-cocon font-medium">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-[9.8px] lg:text-[16px]">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
    </Section>

  );
};

export default FAQ;
