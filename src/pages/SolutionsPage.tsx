import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SOLUTIONS } from '@/data/solutions';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Reveal from '@/components/Reveal';
import SectionTitle from '@/components/SectionTitle';

const SolutionsPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-primary/10 blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
      </div>

      <Navbar isScrolled={isScrolled} />

      <main className="relative z-10 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <Reveal direction="left">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group text-sm">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </Reveal>

          <SectionTitle subtitle="What We Do" title="Comprehensive Tech Solutions" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10">
            {SOLUTIONS.map((sol, idx) => (
              <Reveal key={sol.id} delay={idx * 80} direction="up">
                <Link to={`/solutions/${sol.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-xl border border-border hover:border-primary/50 p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 h-full cursor-pointer">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      {sol.icon}
                    </div>
                    <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors mb-3">
                      {sol.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {sol.description}
                    </p>
                    <div className="mt-4 text-xs font-bold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More →
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SolutionsPage;
