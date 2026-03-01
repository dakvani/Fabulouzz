import React from 'react';
import { MapPin, Phone, Mail, Globe, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import Reveal from './Reveal';

const offices = [
  {
    country: 'India',
    flag: '🇮🇳',
    details: [
      { icon: <MapPin className="w-4 h-4" />, title: "Office", lines: ["Fabulouzz Technologies", "Malabar Tower, Near Stadium Bus Stand,", "CBE Main Road, Palakkad", "Kerala, India"] },
      { icon: <Phone className="w-4 h-4" />, title: "Phone", lines: ["+91 90 6123 9 333"] },
      { icon: <Mail className="w-4 h-4" />, title: "Email", lines: ["info@fabulouzz.com"] },
      { icon: <Globe className="w-4 h-4" />, title: "Web", lines: ["www.fabulouzz.com"] },
    ],
  },
  {
    country: 'Kingdom of Saudi Arabia',
    flag: '🇸🇦',
    details: [
      { icon: <MapPin className="w-4 h-4" />, title: "Office", lines: ["Supply Stars for Trade Est,", "7621, King Fahad Road,", "Al-Baghdadiyah Dist,", "Jeddah 22241, KSA"] },
      { icon: <Phone className="w-4 h-4" />, title: "Phone", lines: ["+966 50 2 918 573"] },
      { icon: <Mail className="w-4 h-4" />, title: "Email", lines: ["support@fabulouzz.com"] },
      { icon: <Globe className="w-4 h-4" />, title: "Web", lines: ["www.fabulouzz.com"] },
    ],
  },
];

const renderContactLine = (item: { title: string }, line: string, key: string) => {
  if (item.title === "Phone") {
    return <a key={key} href={`tel:${line.replace(/\s+/g, '')}`} className="block text-xs sm:text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium w-fit">{line}</a>;
  }
  if (item.title === "Email") {
    return <a key={key} href={`mailto:${line}`} className="block text-xs sm:text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium w-fit">{line}</a>;
  }
  if (item.title === "Web") {
    return <a key={key} href={`https://${line}`} target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium w-fit">{line}</a>;
  }
  return <p key={key} className="text-xs sm:text-sm text-muted-foreground">{line}</p>;
};

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative z-10 border-t border-border bg-secondary/30 backdrop-blur-xl">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Column 1: Brand + Quick Links */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <BrandLogo variant="dark" align="start" />
              </Link>
              <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
                Modern technologies for an innovative lifestyle. Your trusted partner in security, automation, and sustainable energy solutions.
              </p>
              <div className="mt-6">
                <h5 className="text-foreground font-bold text-sm mb-3 uppercase tracking-wider">Quick Links</h5>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li><Link to="/#home" className="hover:text-primary transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform" />Home</Link></li>
                  <li><Link to="/#solutions" className="hover:text-primary transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform" />Solutions</Link></li>
                  <li><Link to="/projects" className="hover:text-primary transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform" />Projects</Link></li>
                  <li><Link to="/#sectors" className="hover:text-primary transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform" />Sectors</Link></li>
                  <li><Link to="/events" className="hover:text-primary transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform" />Events</Link></li>
                </ul>
              </div>

              {/* Get Quote Button */}
              <Link
                to="/get-quote"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-lime-dark text-primary-foreground font-bold text-sm rounded-xl shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          {/* Column 2: India Office (Left) */}
          <div className="lg:col-span-4">
            <Reveal direction="up" delay={100}>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-primary mb-3 flex items-center gap-2 uppercase tracking-wider">
                  <span className="text-base">{offices[0].flag}</span> {offices[0].country}
                </h4>
                <div className="space-y-3">
                  {offices[0].details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 group">
                      <div className="p-1.5 bg-primary/10 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/20 flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        {item.lines.map((line, i) => renderContactLine(item, line, `0-${idx}-${i}`))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Column 3: KSA Office (Right) */}
          <div className="lg:col-span-5">
            <Reveal direction="right" delay={200}>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-primary mb-3 flex items-center gap-2 uppercase tracking-wider">
                  <span className="text-base">{offices[1].flag}</span> {offices[1].country}
                </h4>
                <div className="space-y-3">
                  {offices[1].details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 group">
                      <div className="p-1.5 bg-primary/10 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/20 flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        {item.lines.map((line, i) => renderContactLine(item, line, `1-${idx}-${i}`))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-5 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Fabulouzz Technologies. All Rights Reserved. | Licensed under applicable laws.
          </p>
          <div className="flex gap-4 text-[10px] sm:text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
