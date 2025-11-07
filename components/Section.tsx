
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-md md:text-lg gradient-text font-semibold">{subtitle}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
