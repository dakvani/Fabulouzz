import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { SOLUTIONS } from '@/data/solutions';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [phase, setPhase] = useState<'heading' | 'typing' | 'waiting' | 'exiting'>('heading');

  const fullTextToType = SOLUTIONS[currentIdx].items.map(item => `> ${item.name}`).join('\n');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'heading') {
      setDisplayedText('');
      timeout = setTimeout(() => {
        setPhase('typing');
        setIsTyping(true);
      }, 1000);
    } else if (phase === 'typing') {
      if (displayedText.length < fullTextToType.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullTextToType.slice(0, displayedText.length + 1));
        }, 30);
      } else {
        setIsTyping(false);
        setPhase('waiting');
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => {
        setPhase('exiting');
      }, 3000);
    } else if (phase === 'exiting') {
      timeout = setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % SOLUTIONS.length);
        setPhase('heading');
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [phase, displayedText, fullTextToType, currentIdx]);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-10 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Column: Typography */}
          <div className="text-left space-y-3 sm:space-y-4 md:space-y-5">
            <Reveal direction="left">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_hsl(var(--primary))]"></div>
                <span className="text-primary font-mono text-[9px] sm:text-[10px] md:text-xs tracking-wider uppercase font-bold">WE ARE EXPERTS IN</span>
              </div>
            </Reveal>

            <div className={`transition-all duration-500 ease-out transform ${phase === 'exiting' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-3 sm:mb-4 md:mb-5 leading-[1.15] drop-shadow-xl min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] flex items-center">
                {SOLUTIONS[currentIdx].title}
              </h1>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] shadow-inner font-mono text-foreground/80 text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-primary via-transparent to-transparent opacity-50"></div>
                <pre className="whitespace-pre-wrap font-mono">
                  {displayedText}
                  <span className={`inline-block w-1.5 sm:w-2 h-3 sm:h-4 md:h-5 bg-primary align-middle ml-0.5 sm:ml-1 ${isTyping ? 'opacity-100' : 'animate-blink'}`}></span>
                </pre>
              </div>
            </div>

            <Reveal delay={400} direction="up">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 md:pt-5">
                <a href="#solutions" className="group px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 bg-primary hover:bg-lime-glow text-primary-foreground rounded-full font-bold text-xs sm:text-sm md:text-base transition-all shadow-lg shadow-primary/20 hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-1.5 sm:gap-2 animate-glow-pulse">
                  Explore Solutions
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </a>
                <a href="#projects" className="px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 text-foreground rounded-full font-bold text-xs sm:text-sm md:text-base transition-all hover:-translate-y-1 flex items-center justify-center gap-1.5 sm:gap-2 backdrop-blur-sm">
                  Our Projects
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Visual */}
          <div className="relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[500px] hidden lg:flex items-center justify-center">
            <div className={`transition-all duration-700 ease-in-out transform ${phase === 'exiting' ? 'opacity-0 scale-90 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
              {SOLUTIONS[currentIdx].renderHeroVisual()}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground">
        <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1 sm:pt-1.5 md:pt-2">
          <div className="w-0.5 h-1 sm:h-1.5 md:h-2 bg-primary rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
