import React, { useRef, useState, useEffect } from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting)
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`mb-8 md:mb-12 text-center transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <span className="uppercase tracking-widest text-xs md:text-sm font-bold text-primary">
        {subtitle}
      </span>
      <h2 className="text-2xl md:text-4xl font-extrabold mt-2 text-foreground">
        {title}
      </h2>
      <div className="w-16 md:w-20 h-1 mx-auto mt-4 rounded transition-all duration-500 hover:w-32 bg-primary"></div>
    </div>
  );
};

export default SectionTitle;
