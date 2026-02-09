import React, { useState, useEffect, useMemo } from 'react';
import { Award, Users, Phone } from 'lucide-react';
import { INDIA_PROJECTS, MIDDLE_EAST_PROJECTS, type Project } from '@/data/sectors';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

type Region = 'india' | 'middle-east';

const TABS: { key: Region; label: string; flag: string }[] = [
  { key: 'india', label: 'India', flag: '🇮🇳' },
  { key: 'middle-east', label: 'Middle East', flag: '🇸🇦' },
];

const ProjectChip: React.FC<{ project: Project; isActive: boolean }> = ({ project, isActive }) => (
  <div
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
      <img src={project.logo} alt={project.name} className="h-4 sm:h-5 md:h-6 w-auto object-contain rounded-sm" />
    ) : project.icon ? (
      <span className="text-current">{project.icon}</span>
    ) : null}
    {project.name}
  </div>
);

const MiddleEastCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <Reveal delay={index * 100} direction="up">
    <div className="p-5 sm:p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
      <h4 className="font-bold text-base md:text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{project.name}</h4>
      {project.description && (
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.description}</p>
      )}
    </div>
  </Reveal>
);

const Projects: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<Region>('india');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const currentProjects = useMemo(
    () => activeRegion === 'india' ? INDIA_PROJECTS : MIDDLE_EAST_PROJECTS,
    [activeRegion]
  );

  useEffect(() => {
    if (activeRegion !== 'india') return;
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * currentProjects.length));
    }, 1200);
    return () => clearInterval(interval);
  }, [activeRegion, currentProjects.length]);

  return (
    <section id="projects" className="py-16 md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 mb-10 md:mb-12 relative z-10">
        <SectionTitle subtitle="Our Track Record" title="Major Projects Executed" />
      </div>

      {/* Region Tabs */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 mb-8 md:mb-10">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-secondary/60 backdrop-blur-sm border border-border p-1 gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => { setActiveRegion(tab.key); setActiveIndex(null); }}
                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${
                  activeRegion === tab.key
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                <span className="text-lg">{tab.flag}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <Reveal direction="scale" delay={100} key={activeRegion}>
          {activeRegion === 'india' ? (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {currentProjects.map((project, idx) => (
                <ProjectChip key={idx} project={project} isActive={activeIndex === idx} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {currentProjects.map((project, idx) => (
                <MiddleEastCard key={idx} project={project} index={idx} />
              ))}
            </div>
          )}
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
