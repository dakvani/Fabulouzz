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
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`mb-10 md:mb-16 text-center transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] sm:text-xs md:text-sm font-bold text-primary inline-block mb-3">
        {subtitle}
      </span>
      <h2 className="text-responsive-xl font-extrabold text-foreground leading-tight">
        {title}
      </h2>
      <div className={`w-12 md:w-20 h-1 mx-auto mt-4 md:mt-6 rounded transition-all duration-700 bg-primary ${isVisible ? 'w-24 md:w-32' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
