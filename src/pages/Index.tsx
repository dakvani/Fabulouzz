import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Solutions from '@/components/Solutions';
import Sectors from '@/components/Sectors';
import Projects from '@/components/Projects';

import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ParallaxSection from '@/components/ParallaxSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import WelcomePopup from '@/components/WelcomePopup';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-background text-foreground selection:bg-primary/30 selection:text-foreground relative overflow-x-hidden subpixel-antialiased">
      <WelcomePopup />
      <ScrollProgress />
      
      {/* Sunlight Shadow Projection */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Light beam 1 - narrow realistic beam, crossing diagonally */}
        <div 
          className="absolute -top-[10%] right-[6%] w-[80px] md:w-[140px] h-[300vh] opacity-[0.22]"
          style={{
            background: 'linear-gradient(180deg, hsl(45 92% 72% / 0.8) 0%, hsl(45 85% 65% / 0.5) 10%, hsl(45 80% 60% / 0.25) 30%, hsl(var(--primary) / 0.08) 60%, transparent 85%)',
            transform: 'rotate(-35deg)',
            transformOrigin: 'top right',
            filter: 'blur(18px)',
          }}
        ></div>
        {/* Beam 1 - hot core */}
        <div 
          className="absolute -top-[10%] right-[6%] w-[25px] md:w-[50px] h-[300vh] opacity-[0.18]"
          style={{
            background: 'linear-gradient(180deg, hsl(45 95% 80% / 1) 0%, hsl(45 92% 75% / 0.7) 10%, hsl(45 88% 68% / 0.35) 30%, hsl(var(--primary) / 0.1) 60%, transparent 80%)',
            transform: 'rotate(-35deg)',
            transformOrigin: 'top right',
            filter: 'blur(6px)',
          }}
        ></div>

        {/* Light beam 2 - second narrow beam */}
        <div 
          className="absolute -top-[10%] right-[18%] w-[70px] md:w-[120px] h-[300vh] opacity-[0.18]"
          style={{
            background: 'linear-gradient(180deg, hsl(45 88% 70% / 0.7) 0%, hsl(45 82% 62% / 0.45) 10%, hsl(45 78% 58% / 0.2) 30%, hsl(var(--primary) / 0.06) 60%, transparent 85%)',
            transform: 'rotate(-30deg)',
            transformOrigin: 'top right',
            filter: 'blur(20px)',
          }}
        ></div>
        {/* Beam 2 - hot core */}
        <div 
          className="absolute -top-[10%] right-[18%] w-[20px] md:w-[40px] h-[300vh] opacity-[0.14]"
          style={{
            background: 'linear-gradient(180deg, hsl(45 93% 78% / 0.9) 0%, hsl(45 90% 72% / 0.6) 10%, hsl(45 85% 65% / 0.3) 30%, hsl(var(--primary) / 0.08) 60%, transparent 80%)',
            transform: 'rotate(-30deg)',
            transformOrigin: 'top right',
            filter: 'blur(5px)',
          }}
        ></div>

        {/* Glow at the two source holes */}
        <div className="absolute -top-[3%] right-[4%] w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full opacity-[0.25]"
          style={{
            background: 'radial-gradient(circle, hsl(45 95% 80% / 0.9) 0%, hsl(45 90% 70% / 0.4) 40%, transparent 70%)',
          }}
        ></div>
        <div className="absolute -top-[3%] right-[16%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full opacity-[0.20]"
          style={{
            background: 'radial-gradient(circle, hsl(45 92% 76% / 0.8) 0%, hsl(45 85% 65% / 0.3) 40%, transparent 70%)',
          }}
        ></div>

        {/* Dust particles in beam 1 */}
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={`dust1-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${1.5 + Math.random() * 2.5}px`,
              height: `${1.5 + Math.random() * 2.5}px`,
              top: `${5 + (i / 18) * 85}%`,
              right: `${8 + Math.sin(i * 1.7) * 6 - (i / 18) * 15}%`,
              background: `hsl(45 ${80 + Math.random() * 15}% ${70 + Math.random() * 15}% / ${0.3 + Math.random() * 0.4})`,
              animation: `float-slow ${5 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
        {/* Dust particles in beam 2 */}
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={`dust2-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              top: `${8 + (i / 14) * 80}%`,
              right: `${18 + Math.sin(i * 2.1) * 5 - (i / 14) * 12}%`,
              background: `hsl(45 ${75 + Math.random() * 15}% ${68 + Math.random() * 15}% / ${0.25 + Math.random() * 0.35})`,
              animation: `float ${6 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 7}s`,
              filter: 'blur(0.3px)',
            }}
          />
        ))}

        {/* Existing animated blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-primary/10 blur-[120px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-purple-500/10 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>

      <Navbar isScrolled={isScrolled} />
      <main className="max-w-[100vw] overflow-x-hidden">
        <Hero />
        <ParallaxSection speed={0.1}>
          <StatsBar />
        </ParallaxSection>
        <Solutions />
        <ParallaxSection speed={0.05}>
          <Sectors />
        </ParallaxSection>
        <Projects />
        
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
