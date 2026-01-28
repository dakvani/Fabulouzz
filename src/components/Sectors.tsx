import React from 'react';
import { SECTORS } from '@/data/sectors';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

const Sectors: React.FC = () => {
  return (
    <section id="sectors" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle subtitle="Industries We Serve" title="Empowering Key Sectors" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {SECTORS.map((sector, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="group relative overflow-hidden rounded-3xl bg-secondary/50 backdrop-blur-sm p-6 md:p-8 text-center border border-border hover:border-primary/50 transition-all duration-500 hover:bg-secondary hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 h-full flex flex-col justify-center items-center">
                <div className="relative z-10 mb-6 transition-all duration-500 scale-75 md:scale-100">
                  {sector.renderScene()}
                </div>

                <h3 className="relative z-10 font-bold text-sm md:text-lg text-foreground/80 group-hover:text-primary transition-colors duration-300">
                  {sector.name}
                </h3>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
