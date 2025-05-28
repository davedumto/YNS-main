import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string; // NEW PROP for custom background or wrapper styles
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', wrapperClassName = '', id }) => {
  return (
    <section id={id} className={`w-full py-8 md:py-10 lg:py-14 ${wrapperClassName}`}>
      <div className={`container px-4 md:px-6 xl:px-0 mx-auto max-w-7xl ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;