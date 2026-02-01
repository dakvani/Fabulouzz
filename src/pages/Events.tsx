import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { PROJECTS } from '@/data/sectors';
import eventsVideo from '@/assets/events-video.mp4';

const Events: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * PROJECTS.length);
      setActiveIndex(randomIndex);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={eventsVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-6 px-4 sm:px-6 md:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8">
          {/* Animated Title */}
          <div className="relative mb-12 md:mb-16">
            {/* Glow effect behind title */}
            <div className="absolute inset-0 blur-3xl bg-primary/30 animate-pulse"></div>
            
            {/* Main title with animation */}
            <h1 className="relative font-brand text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider">
              <span className="inline-block animate-bounce-slow">
                <span className="bg-gradient-to-r from-primary via-lime-glow to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  E
                </span>
              </span>
              <span className="inline-block animate-bounce-slow animation-delay-100">
                <span className="bg-gradient-to-r from-lime-glow via-primary to-lime-dark bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  v
                </span>
              </span>
              <span className="inline-block animate-bounce-slow animation-delay-200">
                <span className="bg-gradient-to-r from-primary via-lime-dark to-lime-glow bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  e
                </span>
              </span>
              <span className="inline-block animate-bounce-slow animation-delay-300">
                <span className="bg-gradient-to-r from-lime-dark via-lime-glow to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  n
                </span>
              </span>
              <span className="inline-block animate-bounce-slow animation-delay-400">
                <span className="bg-gradient-to-r from-lime-glow via-primary to-lime-dark bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  t
                </span>
              </span>
              <span className="inline-block animate-bounce-slow animation-delay-500">
                <span className="bg-gradient-to-r from-primary via-lime-dark to-lime-glow bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  s
                </span>
              </span>
            </h1>

            {/* Sparkle decorations */}
            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-primary animate-pulse" />
            <Sparkles className="absolute -bottom-2 -left-6 w-6 h-6 text-lime-glow animate-pulse animation-delay-500" />
          </div>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl mb-12 text-center max-w-2xl animate-fade-in">
            Showcasing our remarkable projects and successful executions
          </p>

          {/* Projects Grid Animation */}
          <div className="w-full max-w-6xl">
            <h2 className="text-center text-foreground font-bold text-xl sm:text-2xl mb-8 flex items-center justify-center gap-3">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></span>
              Projects Executed
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary"></span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {PROJECTS.map((project, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`
                      px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-[10px] sm:text-xs md:text-sm lg:text-base font-bold transition-all duration-700 ease-in-out border cursor-default backdrop-blur-md flex items-center gap-1.5 sm:gap-2
                      ${project.isMajor
                        ? isActive
                          ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/40 scale-105 md:scale-110 z-10'
                          : 'bg-primary/20 text-foreground border-primary/50 hover:border-primary hover:bg-primary/30'
                        : isActive
                          ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/40 scale-105 md:scale-110 z-10'
                          : 'bg-card/60 text-muted-foreground border-border hover:border-primary/30 hover:text-foreground hover:bg-card'
                      }
                    `}
                  >
                    {project.icon && <span className="text-current">{project.icon}</span>}
                    {project.name}
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Fabulouzz Technologies</p>
        </footer>
      </div>
    </div>
  );
};

export default Events;
