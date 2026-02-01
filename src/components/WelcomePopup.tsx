import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import saudiFlag from '@/assets/saudi-flag.mp4';

const WelcomePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup');
    
    if (!hasSeenPopup) {
      // Small delay for dramatic effect
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('hasSeenWelcomePopup', 'true');
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={handleClose}
      />
      
      {/* Popup Container */}
      <div 
        className={`relative w-full max-w-lg md:max-w-2xl overflow-hidden rounded-2xl md:rounded-3xl border border-primary/30 shadow-2xl shadow-primary/20 transition-all duration-700 ${
          isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100 animate-scale-up'
        }`}
      >
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src={saudiFlag} type="video/mp4" />
          </video>
          {/* Gradient overlays for enhanced colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-background/70 to-emerald-800/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-10 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 text-foreground/70 hover:text-foreground hover:bg-background/80 transition-all hover:scale-110"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-10 lg:p-12 text-center">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-16 h-16 md:w-24 md:h-24 border-l-2 border-t-2 border-emerald-500/40 rounded-tl-xl" />
          <div className="absolute bottom-4 right-4 w-16 h-16 md:w-24 md:h-24 border-r-2 border-b-2 border-emerald-500/40 rounded-br-xl" />
          
          {/* Animated greeting */}
          <div className="mb-4 md:mb-6">
            <span className="inline-block px-4 py-1.5 md:px-6 md:py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-400 text-xs md:text-sm font-semibold tracking-wider uppercase animate-pulse">
              ✨ Exciting News ✨
            </span>
          </div>

          {/* Main heading with gradient text */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-white to-emerald-300 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x bg-[length:200%_auto]">
              Hello Saudi
            </span>
          </h2>

          {/* Arabic greeting */}
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-emerald-400/90 mb-4 md:mb-6 font-brand" dir="rtl">
            مرحباً السعودية
          </p>

          {/* Subheading */}
          <div className="relative inline-block">
            <p className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground/90 mb-6 md:mb-8">
              We are{' '}
              <span className="relative">
                <span className="text-primary animate-pulse">Coming Soon</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </span>
            </p>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-emerald-500/50" />
            <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
            <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-emerald-500/50" />
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-foreground/70 max-w-md mx-auto mb-6 md:mb-8 leading-relaxed">
            Fabulouzz Technologies is expanding to the Kingdom of Saudi Arabia. 
            Stay tuned for innovative digital solutions!
          </p>

          {/* CTA Button */}
          <button
            onClick={handleClose}
            className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full font-bold text-sm md:text-base transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
          >
            Explore Our Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
