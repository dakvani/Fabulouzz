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
        {/* Light beam 1 - from top-right hole, projecting diagonally */}
        <div 
          className="absolute -top-[5%] right-[8%] w-[300px] md:w-[500px] h-[200vh] opacity-[0.18]"
          style={{
            background: 'linear-gradient(180deg, hsl(45 90% 70% / 0.7) 0%, hsl(45 85% 65% / 0.4) 15%, hsl(var(--primary) / 0.15) 40%, transparent 70%)',
            transform: 'rotate(-25deg)',
            transformOrigin: 'top center',
            filter: 'blur(40px)',
          }}
        ></div>
        {/* Light beam 1 - sharp core */}
        <div 
          className="absolute -top-[5%] right-[8%] w-[120px] md:w-[200px] h-[200vh] opacity-[0.12]"
          style={{
            background: 'linear-gradient(180deg, hsl(45 95% 75% / 0.9) 0%, hsl(45 90% 70% / 0.5) 20%, hsl(var(--primary) / 0.2) 50%, transparent 75%)',
            transform: 'rotate(-25deg)',
            transformOrigin: 'top center',
            filter: 'blur(15px)',
          }}
        ></div>

        {/* Light beam 2 - from second hole, slightly different angle */}
        <div 
          className="absolute -top-[5%] right-[22%] w-[250px] md:w-[420px] h-[200vh] opacity-[0.15]"
          style={{
            background: 'linear-gradient(180deg, hsl(45 85% 68% / 0.6) 0%, hsl(45 80% 60% / 0.35) 15%, hsl(var(--primary) / 0.12) 40%, transparent 65%)',
            transform: 'rotate(-15deg)',
            transformOrigin: 'top center',
            filter: 'blur(45px)',
          }}
        ></div>
        {/* Light beam 2 - sharp core */}
        <div 
          className="absolute -top-[5%] right-[22%] w-[100px] md:w-[180px] h-[200vh] opacity-[0.10]"
          style={{
            background: 'linear-gradient(180deg, hsl(45 90% 72% / 0.8) 0%, hsl(45 85% 65% / 0.45) 20%, hsl(var(--primary) / 0.15) 50%, transparent 70%)',
            transform: 'rotate(-15deg)',
            transformOrigin: 'top center',
            filter: 'blur(12px)',
          }}
        ></div>

        {/* Glow at the two source holes */}
        <div className="absolute -top-[2%] right-[6%] w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full opacity-[0.20]"
          style={{
            background: 'radial-gradient(circle, hsl(45 95% 75% / 0.8) 0%, hsl(45 90% 70% / 0.3) 50%, transparent 75%)',
          }}
        ></div>
        <div className="absolute -top-[2%] right-[20%] w-[120px] h-[120px] md:w-[170px] md:h-[170px] rounded-full opacity-[0.17]"
          style={{
            background: 'radial-gradient(circle, hsl(45 90% 72% / 0.7) 0%, hsl(45 85% 65% / 0.25) 50%, transparent 75%)',
          }}
        ></div>

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
