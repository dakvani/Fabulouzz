import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Wrench, Cpu } from 'lucide-react';
import { SECTOR_DETAILS } from '@/data/sectorDetails';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Reveal from '@/components/Reveal';

const SectorDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const sector = SECTOR_DETAILS.find(s => s.slug === slug);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!sector) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Sector Not Found</h1>
          <Link to="/#sectors" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-primary/10 blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
      </div>

      <Navbar isScrolled={isScrolled} />

      <main className="relative z-10 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Back link */}
          <Reveal direction="left">
            <Link to="/sectors" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group text-sm">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Sectors
            </Link>
          </Reveal>

          {/* Hero Image */}
          <Reveal direction="up">
            <div className="relative rounded-2xl overflow-hidden mb-8 md:mb-12 border border-border shadow-xl shadow-black/20">
              <img
                src={sector.image}
                alt={`${sector.name} sector illustration`}
                className="w-full h-48 md:h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 flex items-end gap-4">
                <div className="p-3 rounded-2xl bg-primary/20 border border-primary/30 text-primary backdrop-blur-sm">
                  {sector.icon}
                </div>
                <h1 className="text-responsive-hero font-bold text-foreground drop-shadow-lg">{sector.name}</h1>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-12 md:mb-16">
              {sector.description}
            </p>
          </Reveal>

          {/* Project Possibilities */}
          <Reveal direction="up" delay={150}>
            <div className="mb-12 md:mb-16">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <Wrench className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Project Possibilities</h2>
              </div>
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                {sector.projects.map((project, idx) => (
                  <Reveal key={idx} delay={idx * 80} direction="up">
                    <div className="group relative overflow-hidden rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 p-5 md:p-6 transition-all duration-500 hover:bg-secondary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 h-full">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Technology to Apply */}
          <Reveal direction="up" delay={200}>
            <div className="mb-12 md:mb-16">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <Cpu className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Technology to Apply</h2>
              </div>
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                {sector.technologies.map((tech, idx) => (
                  <Reveal key={idx} delay={idx * 80} direction="scale">
                    <div className="rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border p-5 md:p-6 h-full">
                      <h3 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider">{tech.category}</h3>
                      <ul className="space-y-2">
                        {tech.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SectorDetail;