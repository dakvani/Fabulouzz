import React from 'react';
import BrandLogo from './BrandLogo';
import Reveal from './Reveal';

const Footer: React.FC = () => (
  <footer className="bg-background/40 text-muted-foreground py-10 md:py-12 border-t border-border backdrop-blur-md relative z-10">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <Reveal direction="left">
          <div className="mb-0">
            <BrandLogo variant="dark" align="start" />
            <p className="mt-3 md:mt-4 text-xs sm:text-sm md:text-base max-w-xs text-muted-foreground leading-relaxed">
              Modern technologies for an innovative lifestyle. Your partner in security, automation, and energy.
            </p>
          </div>
        </Reveal>
        <Reveal direction="right" delay={100}>
          <div className="flex flex-row gap-8 md:gap-10 text-left md:text-right">
            <div>
              <h5 className="text-foreground font-bold text-sm md:text-base mb-2 md:mb-3">Quick Links</h5>
              <ul className="space-y-1 md:space-y-2 text-xs sm:text-sm">
                <li><a href="/#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="/#solutions" className="hover:text-primary transition-colors">Solutions</a></li>
                <li><a href="/#projects" className="hover:text-primary transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-foreground font-bold text-sm md:text-base mb-2 md:mb-3">Legal</h5>
              <ul className="space-y-1 md:space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal direction="up" delay={200}>
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border text-center text-[10px] sm:text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Fabulouzz Technologies. All Rights Reserved. | Licensed under applicable laws.
        </div>
      </Reveal>
    </div>
  </footer>
);

export default Footer;
