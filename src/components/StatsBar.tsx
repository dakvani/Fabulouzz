import React from 'react';
import { STATS } from '@/data/sectors';
import Counter from './Counter';
import Reveal from './Reveal';

const StatsBar: React.FC = () => {
  return (
    <div className="relative z-20 -mt-12 sm:-mt-14 md:-mt-16 mx-3 sm:mx-6 md:mx-12">
      <Reveal direction="scale" duration={600}>
        <div className="bg-card/60 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-2xl shadow-black/50 transform hover:scale-[1.01] transition-transform duration-500 border border-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/50 to-transparent animate-shimmer"></div>
          <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-10 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center divide-x divide-border">
              {STATS.map((stat, idx) => (
                <div key={idx} className="p-1.5 sm:p-2 group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground mb-1 sm:mb-2 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                    {stat.isText ? (
                      stat.value
                    ) : (
                      <Counter end={stat.value as number} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-primary font-bold uppercase text-[8px] sm:text-[10px] md:text-xs lg:text-sm tracking-[0.15em] sm:tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default StatsBar;
