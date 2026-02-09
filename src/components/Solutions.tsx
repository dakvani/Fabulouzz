import React, { useState, cloneElement } from 'react';
import { ChevronRight } from 'lucide-react';
import { SOLUTIONS } from '@/data/solutions';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SOLUTIONS[0].id);

  return (
    <section id="solutions" className="py-16 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle subtitle="What We Do" title="Comprehensive Tech Solutions" />

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="lg:w-2/5 grid grid-cols-2 gap-2 md:gap-3 auto-rows-min content-start">
            {SOLUTIONS.map((sol, index) => (
              <Reveal key={sol.id} delay={index * 50} direction="left" className="w-full">
                <button
                  onClick={() => setActiveTab(sol.id)}
                  className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 border flex items-center gap-2 md:gap-3 group relative overflow-hidden backdrop-blur-md ${
                    activeTab === sol.id
                      ? 'bg-primary/20 border-primary/50 shadow-lg shadow-primary/10'
                      : 'bg-secondary/50 border-border hover:border-primary/30 hover:bg-secondary/80'
                  }`}
                >
                  <div className={`relative z-10 transition-colors duration-300 shrink-0 ${activeTab === sol.id ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`}>
                    {cloneElement(sol.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <div className={`relative z-10 font-bold text-xs sm:text-sm leading-tight ${activeTab === sol.id ? 'text-foreground' : 'text-foreground/80'}`}>{sol.title}</div>
                  {activeTab === sol.id && (
                    <ChevronRight className="ml-auto text-primary relative z-10 animate-pulse shrink-0" size={14} />
                  )}
                </button>
              </Reveal>
            ))}
          </div>

          <div className="lg:w-3/5">
            <Reveal direction="right" delay={200}>
              <div className="bg-card/60 backdrop-blur-xl rounded-2xl p-5 sm:p-8 md:p-12 border border-border shadow-2xl h-full transition-all duration-500 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-3xl"></div>

                {SOLUTIONS.map((sol) => (
                  sol.id === activeTab && (
                    <div key={sol.id} className="animate-in fade-in slide-in-from-bottom-8 duration-500 relative z-10">
                      <div className="flex items-center gap-3 md:gap-5 mb-6 md:mb-8">
                        <div className="p-3 md:p-5 bg-secondary border border-border text-primary rounded-xl md:rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 scale-75 md:scale-100">
                          {sol.icon}
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{sol.title}</h3>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed border-l-4 border-primary pl-4 md:pl-6">
                        {sol.description}
                      </p>

                      <h4 className="font-bold text-foreground uppercase tracking-wide text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary"></span>
                        Available Services
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {sol.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 md:gap-3 bg-secondary/50 p-3 md:p-4 rounded-xl shadow-sm border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <div className={`text-primary flex-shrink-0 transition-all duration-300 scale-90 md:scale-100 ${item.anim}`}>
                              {item.icon}
                            </div>
                            <span className="font-medium text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-colors">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
