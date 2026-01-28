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
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-32 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Typography */}
          <div className="text-left space-y-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_hsl(var(--primary))]"></div>
                <span className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase font-bold">WE ARE EXPERTS IN</span>
              </div>
            </Reveal>

            <div className={`transition-all duration-500 ease-out transform ${phase === 'exiting' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight drop-shadow-2xl min-h-[4rem] md:min-h-[5rem] flex items-center">
                {SOLUTIONS[currentIdx].title}
              </h1>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 min-h-[200px] shadow-inner font-mono text-foreground/80 text-sm md:text-lg leading-relaxed relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-transparent to-transparent opacity-50"></div>
                <pre className="whitespace-pre-wrap font-mono">
                  {displayedText}
                  <span className={`inline-block w-2.5 h-5 bg-primary align-middle ml-1 ${isTyping ? 'opacity-100' : 'animate-blink'}`}></span>
                </pre>
              </div>
            </div>

            <Reveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-5 pt-6">
                <a href="#solutions" className="group px-8 py-4 bg-primary hover:bg-lime-glow text-primary-foreground rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Explore Solutions
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#projects" className="px-8 py-4 bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 text-foreground rounded-full font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 backdrop-blur-sm">
                  Our Projects
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Visual */}
          <div className="relative h-[300px] md:h-[500px] hidden lg:flex items-center justify-center">
            <div className={`transition-all duration-700 ease-in-out transform ${phase === 'exiting' ? 'opacity-0 scale-90 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
              {SOLUTIONS[currentIdx].renderHeroVisual()}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
