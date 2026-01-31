import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import eventsVideo from '@/assets/events-video.mp4';
import { PROJECTS } from '@/data/sectors';

const Events: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  // Cycle through projects with animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Start videos with random delays
  useEffect(() => {
    videoRefs.forEach((ref, index) => {
      if (ref.current) {
        const randomDelay = Math.random() * 3000; // 0-3 seconds random delay
        setTimeout(() => {
          if (ref.current) {
            ref.current.currentTime = Math.random() * 5; // Random start position
            ref.current.play().catch(() => {});
          }
        }, randomDelay);
      }
    });
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-background">
      {/* Back Button */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-xl border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold text-sm">Back</span>
      </Link>

      {/* Video Grid - 3 Columns */}
      <div className="absolute inset-0 flex">
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex} className="flex-1 h-full relative overflow-hidden">
            <video
              ref={videoRefs[colIndex]}
              src={eventsVideo}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/60" />
          </div>
        ))}
      </div>

      {/* Vertical dividers between columns */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="flex-1 border-r border-primary/20" />
        <div className="flex-1 border-r border-primary/20" />
        <div className="flex-1" />
      </div>

      {/* Animated Project Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        {/* Title */}
        <div className="mb-8 text-center">
          <span className="uppercase tracking-[0.3em] text-xs md:text-sm font-bold text-primary">
            Our Track Record
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2">
            Major Projects Executed
          </h1>
        </div>

        {/* Scrolling Projects */}
        <div className="relative w-full max-w-4xl h-[300px] md:h-[400px] overflow-hidden">
          {/* Fade gradients */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background/80 to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/80 to-transparent z-10" />
          
          {/* Project items */}
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (activeProjectIndex + offset + PROJECTS.length) % PROJECTS.length;
              const isActive = offset === 0;
              const distance = Math.abs(offset);
              
              return (
                <div
                  key={`${index}-${offset}`}
                  className={`
                    text-center transition-all duration-700 ease-out
                    ${isActive 
                      ? 'text-2xl md:text-4xl lg:text-5xl font-extrabold text-primary scale-100 opacity-100' 
                      : distance === 1
                        ? 'text-lg md:text-2xl lg:text-3xl font-bold text-foreground/60 scale-90 opacity-70'
                        : 'text-base md:text-xl lg:text-2xl font-semibold text-muted-foreground/40 scale-75 opacity-40'
                    }
                  `}
                >
                  {PROJECTS[index]}
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 flex items-center gap-2">
          {PROJECTS.slice(0, 5).map((_, idx) => (
            <div
              key={idx}
              className={`
                w-2 h-2 rounded-full transition-all duration-500
                ${idx === activeProjectIndex % 5 ? 'bg-primary w-8' : 'bg-muted-foreground/30'}
              `}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default Events;
