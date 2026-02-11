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
        {/* Main sunlight ray from top-right corner */}
        <div 
          className="absolute -top-[20%] -right-[10%] w-[140vw] h-[140vh] opacity-[0.14]"
          style={{
            background: 'conic-gradient(from 200deg at 90% 5%, hsl(var(--primary) / 0.6) 0deg, hsl(45 90% 65% / 0.4) 15deg, hsl(var(--primary) / 0.3) 30deg, transparent 60deg, transparent 300deg, hsl(45 80% 70% / 0.2) 340deg, hsl(var(--primary) / 0.5) 360deg)',
          }}
        ></div>
        {/* Soft warm glow at the light source corner */}
        <div className="absolute -top-[5%] -right-[5%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-[0.15]"
          style={{
            background: 'radial-gradient(circle, hsl(45 90% 70% / 0.6) 0%, hsl(var(--primary) / 0.3) 40%, transparent 70%)',
          }}
        ></div>
        {/* Diagonal light streak across the page */}
        <div 
          className="absolute top-0 right-0 w-full h-full opacity-[0.08]"
          style={{
            background: 'linear-gradient(135deg, transparent 20%, hsl(45 80% 65% / 0.5) 35%, hsl(var(--primary) / 0.3) 45%, transparent 55%)',
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
