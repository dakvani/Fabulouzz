import React, { useRef, useState, useEffect } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  duration?: number;
  once?: boolean;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up',
  duration = 800,
  once = true
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once && !hasAnimated) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    observer.observe(currentRef);
    return () => {
      observer.unobserve(currentRef);
    };
  }, [once, hasAnimated]);

  const getInitialStyles = () => {
    switch (direction) {
      case 'up': return 'translate-y-16 opacity-0';
      case 'down': return '-translate-y-16 opacity-0';
      case 'left': return 'translate-x-16 opacity-0';
      case 'right': return '-translate-x-16 opacity-0';
      case 'scale': return 'scale-90 opacity-0';
      case 'fade': return 'opacity-0';
      default: return 'translate-y-16 opacity-0';
    }
  };

  const getVisibleStyles = () => {
    return 'translate-y-0 translate-x-0 scale-100 opacity-100';
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out transform ${
        isVisible ? getVisibleStyles() : getInitialStyles()
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
