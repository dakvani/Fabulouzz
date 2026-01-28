import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { SOLUTIONS } from '@/data/solutions';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SOLUTIONS[0].id);

  return (
    <section id="solutions" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle subtitle="What We Do" title="Comprehensive Tech Solutions" />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/3 flex flex-col gap-3">
            {SOLUTIONS.map((sol, index) => (
              <Reveal key={sol.id} delay={index * 100} className="w-full">
                <button
                  onClick={() => setActiveTab(sol.id)}
                  className={`w-full text-left p-4 md:p-5 rounded-xl transition-all duration-300 border flex items-center gap-4 group relative overflow-hidden backdrop-blur-md ${
                    activeTab === sol.id
                      ? 'bg-primary/20 border-primary/50 shadow-lg shadow-primary/10 translate-x-2'
                      : 'bg-secondary/50 border-border hover:border-primary/30 hover:bg-secondary/80 hover:translate-x-1'
                  }`}
                >
                  <div className={`relative z-10 transition-colors duration-300 ${activeTab === sol.id ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`}>
                    {sol.icon}
                  </div>
                  <div className={`relative z-10 font-bold text-lg ${activeTab === sol.id ? 'text-foreground' : 'text-foreground/80'}`}>{sol.title}</div>
                  {activeTab === sol.id && (
                    <ChevronRight className="ml-auto text-primary relative z-10 animate-pulse" size={20} />
                  )}
                </button>
              </Reveal>
            ))}
          </div>

          <div className="lg:w-2/3">
            <div className="bg-card/60 backdrop-blur-xl rounded-2xl p-6 md:p-12 border border-border shadow-2xl h-full transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

              {SOLUTIONS.map((sol) => (
                sol.id === activeTab && (
                  <div key={sol.id} className="animate-in fade-in slide-in-from-bottom-8 duration-500 relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="p-4 md:p-5 bg-secondary border border-border text-primary rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        {sol.icon}
                      </div>
                      <h3 className="text-2xl md:text-4xl font-bold text-foreground">{sol.title}</h3>
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed border-l-4 border-primary pl-6">
                      {sol.description}
                    </p>

                    <h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Available Services
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sol.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-secondary/50 p-4 rounded-xl shadow-sm border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className={`text-primary flex-shrink-0 transition-all duration-300 ${item.anim}`}>
                            {item.icon}
                          </div>
                          <span className="font-medium text-foreground/80 group-hover:text-foreground transition-colors">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
