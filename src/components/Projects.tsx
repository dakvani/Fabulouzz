import React, { useState, useEffect } from 'react';
import { Award, Users, Phone } from 'lucide-react';
import { PROJECTS } from '@/data/sectors';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * PROJECTS.length);
      setActiveIndex(randomIndex);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <SectionTitle subtitle="Our Track Record" title="Major Projects Executed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          {PROJECTS.map((project, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`
                  px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-base font-bold transition-all duration-700 ease-in-out border cursor-default backdrop-blur-sm
                  ${isActive
                    ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/40 scale-110 z-10'
                    : 'bg-secondary/50 text-muted-foreground border-border hover:border-primary/30 hover:text-foreground hover:bg-secondary'
                  }
                `}
              >
                {project}
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 relative z-10">
        <Reveal>
          <div className="bg-card/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl border border-border max-w-5xl mx-auto text-center transform hover:scale-[1.01] transition-transform duration-500">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8">Why Choose Fabulouzz?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="p-6 rounded-2xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-md mx-auto mb-6 text-primary">
                  <Award size={32} />
                </div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Quality Assured</h4>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">Premium components and certified installation standards guaranteed.</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-md mx-auto mb-6 text-primary">
                  <Users size={32} />
                </div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Expert Team</h4>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">Skilled engineers with deep industry knowledge and experience.</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-md mx-auto mb-6 text-primary">
                  <Phone size={32} />
                </div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Reliable Support</h4>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">Ongoing maintenance and 24/7 responsive customer service.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
