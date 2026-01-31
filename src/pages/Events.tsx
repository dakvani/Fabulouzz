import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import eventsVideo from '@/assets/events-video.mp4';
import { PROJECTS } from '@/data/sectors';

// Particle component
const Particle: React.FC<{ delay: number; duration: number; left: string; size: number }> = ({ delay, duration, left, size }) => (
  <div
    className="absolute rounded-full bg-primary/30 blur-sm animate-float-particle"
    style={{
      left,
      width: size,
      height: size,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  />
);

const Events: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [particles] = useState(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 10,
      left: `${Math.random() * 100}%`,
      size: 4 + Math.random() * 8,
    }))
  );
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
        const randomDelay = Math.random() * 3000;
        setTimeout(() => {
          if (ref.current) {
            ref.current.currentTime = Math.random() * 5;
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

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Video Grid - 3 Columns with Glowing Borders */}
      <div className="absolute inset-0 flex gap-1 p-1">
        {[0, 1, 2].map((colIndex) => (
          <div 
            key={colIndex} 
            className="flex-1 h-full relative overflow-hidden rounded-xl group"
          >
            {/* Animated Glowing Border */}
            <div className="absolute inset-0 rounded-xl z-10 pointer-events-none overflow-hidden">
              {/* Rotating gradient border */}
              <div 
                className="absolute inset-[-2px] rounded-xl animate-spin-slow"
                style={{
                  background: `conic-gradient(from ${colIndex * 120}deg, transparent, hsl(var(--primary)) 10%, transparent 20%, transparent 80%, hsl(var(--primary)) 90%, transparent)`,
                  animationDuration: `${8 + colIndex * 2}s`,
                }}
              />
              {/* Inner mask */}
              <div className="absolute inset-[2px] rounded-xl bg-background" />
            </div>

            {/* Glowing corners */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-radial from-primary/40 to-transparent rounded-full blur-xl z-10 animate-pulse" style={{ animationDelay: `${colIndex * 0.5}s` }} />
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-radial from-primary/40 to-transparent rounded-full blur-xl z-10 animate-pulse" style={{ animationDelay: `${colIndex * 0.5 + 1}s` }} />

            {/* Video container */}
            <div className="absolute inset-[3px] rounded-lg overflow-hidden">
              <video
                ref={videoRefs[colIndex]}
                src={eventsVideo}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                loop
                playsInline
                autoPlay
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background/70" />
              
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" />
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
              </div>
            </div>

            {/* Column number indicator */}
            <div className="absolute bottom-4 left-4 z-20 text-6xl font-extrabold text-primary/20 font-brand">
              0{colIndex + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Animated Project Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
        {/* Glowing backdrop for text */}
        <div className="absolute w-[600px] h-[400px] bg-primary/5 blur-[100px] rounded-full animate-pulse" />
        
        {/* Title */}
        <div className="mb-8 text-center relative">
          <div className="absolute inset-0 bg-background/40 blur-2xl rounded-full" />
          <span className="relative uppercase tracking-[0.3em] text-xs md:text-sm font-bold text-primary drop-shadow-glow">
            Our Track Record
          </span>
          <h1 className="relative text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 drop-shadow-lg">
            Major Projects Executed
          </h1>
          {/* Underline animation */}
          <div className="relative mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-pulse" />
        </div>

        {/* Scrolling Projects */}
        <div className="relative w-full max-w-4xl h-[300px] md:h-[400px] overflow-hidden">
          {/* Fade gradients */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/90 to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/90 to-transparent z-10" />
          
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
                    text-center transition-all duration-700 ease-out relative
                    ${isActive 
                      ? 'text-2xl md:text-4xl lg:text-5xl font-extrabold text-primary scale-100 opacity-100' 
                      : distance === 1
                        ? 'text-lg md:text-2xl lg:text-3xl font-bold text-foreground/60 scale-90 opacity-70'
                        : 'text-base md:text-xl lg:text-2xl font-semibold text-muted-foreground/40 scale-75 opacity-40'
                    }
                  `}
                >
                  {/* Glow effect for active item */}
                  {isActive && (
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10 animate-pulse" />
                  )}
                  <span className={isActive ? 'drop-shadow-glow' : ''}>
                    {PROJECTS[index]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative progress dots */}
        <div className="mt-8 flex items-center gap-2">
          {PROJECTS.slice(0, 8).map((_, idx) => (
            <div
              key={idx}
              className={`
                h-2 rounded-full transition-all duration-500
                ${idx === activeProjectIndex % 8 
                  ? 'bg-primary w-8 shadow-lg shadow-primary/50' 
                  : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-primary/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-primary/20 to-transparent blur-3xl pointer-events-none" />
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-40" />
    </div>
  );
};

export default Events;
