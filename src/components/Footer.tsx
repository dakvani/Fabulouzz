import React from 'react';
import BrandLogo from './BrandLogo';

const Footer: React.FC = () => (
  <footer className="bg-background/40 text-muted-foreground py-12 border-t border-border backdrop-blur-md relative z-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <BrandLogo variant="dark" align="start" />
          <p className="mt-4 text-sm max-w-xs text-muted-foreground">
            Modern technologies for an innovative lifestyle. Your partner in security, automation, and energy.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 text-center md:text-right">
          <div>
            <h5 className="text-foreground font-bold mb-2">Quick Links</h5>
            <ul className="space-y-1 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Solutions</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-foreground font-bold mb-2">Legal</h5>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Fabulouzz Technologies. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
