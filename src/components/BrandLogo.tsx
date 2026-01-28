import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  align?: 'start' | 'end';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'light', align = 'end' }) => {
  const greenColor = '#76c043';
  const darkColor = variant === 'dark' ? '#ffffff' : '#000000';
  const alignClass = align === 'start' ? 'items-start' : 'items-end';

  return (
    <div className={`group relative flex flex-col ${alignClass} cursor-pointer select-none`}>
      <div className="flex items-baseline font-brand tracking-tighter leading-none transition-transform duration-300 group-hover:scale-105">
        <span style={{ color: greenColor }} className="text-xl md:text-3xl drop-shadow-sm group-hover:text-primary transition-colors">
          fabulo
        </span>
        <span style={{ color: darkColor }} className="text-xl md:text-3xl mx-[1px] inline-block group-hover:animate-bounce">
          u
        </span>
        <span style={{ color: greenColor }} className="text-xl md:text-3xl drop-shadow-sm group-hover:text-primary transition-colors">
          zz
        </span>
      </div>
      <div style={{ color: darkColor }} className="text-[0.5rem] md:text-[0.65rem] font-sans tracking-[0.35em] font-bold mt-[-2px] group-hover:tracking-[0.45em] group-hover:text-primary transition-all duration-500 opacity-90 group-hover:opacity-100">
        technologies
      </div>
    </div>
  );
};

export default BrandLogo;
