import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Phone, Building2, Star } from 'lucide-react';
import { PROJECTS_DATA_SORTED } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Reveal from '@/components/Reveal';

const ProjectsPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const majorProjects = PROJECTS_DATA_SORTED.filter(p => p.isMajor);
  const otherProjects = PROJECTS_DATA_SORTED.filter(p => !p.isMajor);

  return (
    <div className="font-sans bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-primary/10 blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
      </div>

      <Navbar isScrolled={isScrolled} />

      <main className="relative z-10 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <Reveal direction="left">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group text-sm">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </Reveal>

          <Reveal direction="up">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                <Building2 className="w-8 h-8" />
              </div>
              <h1 className="text-responsive-hero font-bold text-foreground">Our Projects</h1>
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-12 md:mb-16">
              We take pride in delivering world-class technology solutions across diverse industries. Here are some of our prestigious clients and projects.
            </p>
          </Reveal>

          {/* Major Projects */}
          <Reveal direction="up" delay={150}>
            <div className="mb-12 md:mb-16">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <Star className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Major Clients</h2>
              </div>
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                {majorProjects.map((project, idx) => (
                  <Reveal key={idx} delay={idx * 80} direction="up">
                    <div className="group relative overflow-hidden rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 p-5 md:p-6 transition-all duration-500 hover:bg-secondary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 h-full">
                      <div className="flex items-center gap-4">
                        {project.logo ? (
                          <img src={project.logo} alt={project.name} className="h-10 w-10 object-contain rounded-lg shrink-0" />
                        ) : (
                          <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                            <Building2 className="w-6 h-6" />
                          </div>
                        )}
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Other Projects */}
          <Reveal direction="up" delay={200}>
            <div className="mb-12 md:mb-16">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <Award className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">More Projects</h2>
              </div>
              <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project, idx) => (
                  <Reveal key={idx} delay={idx * 50} direction="scale">
                    <div className="rounded-xl bg-secondary/50 backdrop-blur-sm border border-border p-4 h-full flex items-center gap-3 hover:border-primary/30 transition-colors">
                      {project.icon && <span className="text-primary shrink-0">{project.icon}</span>}
                      <span className="text-sm font-medium text-foreground">{project.name}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Why Choose Us */}
          <Reveal direction="up" delay={250}>
            <div className="bg-card/60 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-xl border border-border max-w-5xl mx-auto text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 md:mb-8">Why Choose Fabulouzz?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {[
                  { icon: <Award />, title: 'Quality Assured', desc: 'Premium components and certified installation standards guaranteed.' },
                  { icon: <Users />, title: 'Expert Team', desc: 'Skilled engineers with deep industry knowledge and experience.' },
                  { icon: <Phone />, title: 'Reliable Support', desc: 'Ongoing maintenance and 24/7 responsive customer service.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary rounded-full flex items-center justify-center shadow-md mx-auto mb-4 md:mb-6 text-primary">
                      <div className="w-6 h-6 md:w-8 md:h-8">{item.icon}</div>
                    </div>
                    <h4 className="font-bold text-base sm:text-lg md:text-xl mb-2 md:mb-3 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal direction="up" delay={300}>
            <div className="text-center rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/50 to-primary/10 border border-primary/20 p-8 md:p-12 mt-12">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm md:text-base">Let us build the perfect technology infrastructure for your needs.</p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-lime-dark text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProjectsPage;
