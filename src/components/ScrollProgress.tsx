import React from 'react';
import { useScrollProgress } from '@/hooks/useParallax';

const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-secondary/30">
      <div 
        className="h-full bg-gradient-to-r from-primary via-lime-glow to-primary transition-all duration-150 ease-out shadow-[0_0_10px_hsl(var(--primary))]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
