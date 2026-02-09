import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { SECTOR_DETAILS } from '@/data/sectorDetails';
import { SOLUTIONS } from '@/data/solutions';
import { PROJECTS_DATA_INTERNAL } from '@/data/sectors';

interface NavbarProps {
  isScrolled: boolean;
}

type DropdownKey = 'solutions' | 'projects' | 'sectors';

interface DropdownConfig {
  label: string;
  anchorHref: string;
  items: { name: string; to: string; icon?: React.ReactNode }[];
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<DropdownKey | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const handleMouseEnter = useCallback((key: DropdownKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  }, []);

  const majorProjects = PROJECTS_DATA_INTERNAL.filter(p => p.isMajor);

  const dropdowns: Record<DropdownKey, DropdownConfig> = {
    solutions: {
      label: 'Solutions',
      anchorHref: '/#solutions',
      items: SOLUTIONS.map(s => ({ name: s.title, to: `/solutions/${s.id}`, icon: s.icon })),
    },
    projects: {
      label: 'Projects',
      anchorHref: '/projects',
      items: majorProjects.map(p => ({ name: p.name, to: '/projects' })),
    },
    sectors: {
      label: 'Sectors',
      anchorHref: '/#sectors',
      items: SECTOR_DETAILS.map(s => ({ name: s.name, to: `/sectors/${s.slug}`, icon: s.icon })),
    },
  };

  const dropdownKeys: DropdownKey[] = ['solutions', 'projects', 'sectors'];

  const containerClasses = isScrolled
    ? "w-[95%] md:w-[75%] top-4 bg-background/70 border-border shadow-xl shadow-black/20 backdrop-blur-xl"
    : "w-full md:w-[85%] top-0 md:top-6 bg-card/30 border-border/50 backdrop-blur-md shadow-none";

  const renderDesktopDropdown = (key: DropdownKey) => {
    const config = dropdowns[key];
    const isActive = openDropdown === key;
    return (
      <div
        key={key}
        className="relative"
        onMouseEnter={() => handleMouseEnter(key)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to={config.anchorHref}
          className="relative px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 group overflow-hidden text-foreground/80 hover:text-primary flex items-center gap-1"
        >
          <span className="relative z-10">{config.label}</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-secondary/50"></span>
        </Link>
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl bg-popover border border-border shadow-2xl shadow-black/30 backdrop-blur-xl overflow-hidden transition-all duration-300 origin-top z-[100] ${
            isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="p-2">
            {config.items.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-foreground/80 hover:text-primary hover:bg-secondary/60 transition-all duration-200 group/item"
                onClick={() => setOpenDropdown(null)}
              >
                {item.icon && (
                  <span className="text-primary/60 group-hover/item:text-primary group-hover/item:scale-110 transition-all duration-200 shrink-0 [&>svg]:w-5 [&>svg]:h-5">
                    {item.icon}
                  </span>
                )}
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderMobileDropdown = (key: DropdownKey) => {
    const config = dropdowns[key];
    const isActive = mobileDropdown === key;
    return (
      <div key={key} className="flex flex-col items-center">
        <button
          onClick={() => setMobileDropdown(isActive ? null : key)}
          className="text-2xl font-bold text-foreground hover:text-primary transform hover:scale-105 transition-all flex items-center gap-2"
        >
          {config.label}
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
        </button>
        <div className={`flex flex-col items-center gap-2 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[500px] mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
          {config.items.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              onClick={() => { setIsOpen(false); setMobileDropdown(null); }}
              className="text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              {item.icon && <span className="text-primary/60 [&>svg]:w-5 [&>svg]:h-5">{item.icon}</span>}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 pointer-events-none">
      <nav
        className={`pointer-events-auto rounded-none md:rounded-full border-b md:border transition-all duration-700 ease-in-out flex justify-between items-center px-6 py-4 ${containerClasses}`}
      >
        <Link to="/" className="z-50 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          <BrandLogo variant="dark" />
        </Link>

        <div className="hidden md:flex space-x-1 items-center">
          <Link
            to="/#home"
            className="relative px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 group overflow-hidden text-foreground/80 hover:text-primary"
          >
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-secondary/50"></span>
          </Link>

          {dropdownKeys.map(renderDesktopDropdown)}

          {/* Events link */}
          <Link
            to="/events"
            className="relative px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5 bg-gradient-to-r from-primary via-lime-glow to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent font-extrabold">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              Events
            </span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10"></span>
          </Link>
          <Link
            to="/get-quote"
            className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-lime-dark text-primary-foreground font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 focus:outline-none hover:rotate-90 transition-transform duration-300 p-1 rounded-full bg-secondary text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`fixed inset-x-0 top-0 h-[100dvh] pt-32 pb-10 px-6 bg-background/95 backdrop-blur-3xl shadow-2xl transition-all duration-500 ease-out md:hidden ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} -z-10`}>
          <div className="flex flex-col items-center space-y-6 h-full justify-center overflow-y-auto">
            <Link to="/#home" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-foreground hover:text-primary transform hover:scale-105 transition-all">
              Home
            </Link>

            {dropdownKeys.map(renderMobileDropdown)}

            <Link
              to="/events"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold transform hover:scale-105 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="bg-gradient-to-r from-primary via-lime-glow to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                Events
              </span>
            </Link>
            <Link
              to="/get-quote"
              onClick={() => setIsOpen(false)}
              className="w-full max-w-xs text-center px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg text-lg mt-8"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
