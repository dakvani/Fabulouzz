import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Sectors', href: '#sectors' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const containerClasses = isScrolled
    ? "w-[95%] md:w-[75%] top-4 bg-background/70 border-border shadow-xl shadow-black/20 backdrop-blur-xl"
    : "w-full md:w-[85%] top-0 md:top-6 bg-card/30 border-border/50 backdrop-blur-md shadow-none";

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 pointer-events-none">
      <nav
        className={`pointer-events-auto rounded-none md:rounded-full border-b md:border transition-all duration-700 ease-in-out flex justify-between items-center px-6 py-4 ${containerClasses}`}
      >
        <a href="#" className="z-50 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          <BrandLogo variant="dark" />
        </a>

        <div className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 group overflow-hidden text-foreground/80 hover:text-primary"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-secondary/50"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-lime-dark text-primary-foreground font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get Quote
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 focus:outline-none hover:rotate-90 transition-transform duration-300 p-1 rounded-full bg-secondary text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`fixed inset-x-0 top-0 h-[100dvh] pt-32 pb-10 px-6 bg-background/95 backdrop-blur-3xl shadow-2xl transition-all duration-500 ease-out md:hidden ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} -z-10`}>
          <div className="flex flex-col items-center space-y-6 h-full justify-center">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-foreground hover:text-primary transform hover:scale-105 transition-all"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full max-w-xs text-center px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg text-lg mt-8"
            >
              Get Quote
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
