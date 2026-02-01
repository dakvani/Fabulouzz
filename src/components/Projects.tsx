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
    <section id="projects" className="py-16 md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 mb-10 md:mb-12 relative z-10">
        <SectionTitle subtitle="Our Track Record" title="Major Projects Executed" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <Reveal direction="scale" delay={100}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {PROJECTS.map((project, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className={`
                    px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-[10px] sm:text-xs md:text-sm lg:text-base font-bold transition-all duration-700 ease-in-out border cursor-default backdrop-blur-sm flex items-center gap-1.5 sm:gap-2
                    ${project.isMajor
                      ? isActive
                        ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/40 scale-105 md:scale-110 z-10'
                        : 'bg-primary/20 text-foreground border-primary/50 hover:border-primary hover:bg-primary/30'
                      : isActive
                        ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/40 scale-105 md:scale-110 z-10'
                        : 'bg-secondary/50 text-muted-foreground border-border hover:border-primary/30 hover:text-foreground hover:bg-secondary'
                    }
                  `}
                >
                  {project.logo ? (
                    <img 
                      src={project.logo} 
                      alt={project.name} 
                      className="h-4 sm:h-5 md:h-6 w-auto object-contain rounded-sm"
                    />
                  ) : project.icon ? (
                    <span className="text-current">{project.icon}</span>
                  ) : null}
                  {project.name}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="container mx-auto px-4 sm:px-6 mt-16 md:mt-20 relative z-10">
        <Reveal direction="up" delay={200}>
          <div className="bg-card/60 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-xl border border-border max-w-5xl mx-auto text-center transform hover:scale-[1.01] transition-transform duration-500">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 md:mb-8">Why Choose Fabulouzz?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {[
                { icon: <Award />, title: 'Quality Assured', desc: 'Premium components and certified installation standards guaranteed.' },
                { icon: <Users />, title: 'Expert Team', desc: 'Skilled engineers with deep industry knowledge and experience.' },
                { icon: <Phone />, title: 'Reliable Support', desc: 'Ongoing maintenance and 24/7 responsive customer service.' }
              ].map((item, idx) => (
                <Reveal key={idx} delay={300 + idx * 100} direction="up">
                  <div className="p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary rounded-full flex items-center justify-center shadow-md mx-auto mb-4 md:mb-6 text-primary">
                      <div className="w-6 h-6 md:w-8 md:h-8">{item.icon}</div>
                    </div>
                    <h4 className="font-bold text-base sm:text-lg md:text-xl mb-2 md:mb-3 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
