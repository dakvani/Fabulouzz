import React, { useState, useEffect } from 'react';
import { X, Smile } from 'lucide-react';

const SaudiPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 500);
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
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Popup Container */}
      <div 
        className={`relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 ${
          isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Saudi Flag Background - Enhanced */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base green gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#006C35] via-[#004d27] to-[#003d1f]" />
          
          {/* Flag wave animation layers */}
          <div className="absolute inset-0 animate-flag-wave">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>
          <div className="absolute inset-0 animate-flag-wave-slow">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00a651]/30 to-transparent" />
          </div>
          
          {/* Shahada Text - Arabic Calligraphy Style */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-25">
            <div className="text-white text-4xl sm:text-5xl font-bold leading-none tracking-wider" style={{ fontFamily: 'serif' }}>
              لا إله إلا الله
            </div>
            <div className="text-white text-2xl sm:text-3xl font-bold mt-1" style={{ fontFamily: 'serif' }}>
              محمد رسول الله
            </div>
          </div>
          
          {/* Stylized Sword */}
          <div className="absolute bottom-[35%] left-[15%] right-[15%] h-1 bg-white/40 transform -rotate-1 rounded-full shadow-lg" />
          <div className="absolute bottom-[34%] left-[12%] w-4 h-4 bg-white/40 rounded-full" />
          
          {/* Decorative patterns */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-white/20 via-transparent to-white/20" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-white/20 via-transparent to-white/20" />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 p-8 sm:p-10 text-center">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all hover:rotate-90 duration-300"
          >
            <X size={20} />
          </button>

          {/* Yellow Smile Icon */}
          <div className="relative mb-6">
            <div className="inline-flex items-center justify-center">
              <div className="relative animate-bounce-slow">
                {/* Glow effect behind smile */}
                <div className="absolute inset-0 bg-yellow-400/50 rounded-full blur-xl scale-150 animate-pulse" />
                
                {/* Smile Icon */}
                <Smile 
                  size={72} 
                  className="relative text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]" 
                  strokeWidth={2}
                  fill="rgba(250,204,21,0.2)"
                />
                
                {/* Sparkles around smile */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-300 rounded-full animate-ping" />
                <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-yellow-200 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>

          {/* Main Text */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-lg animate-text-glow">
              <span className="inline-block animate-bounce-letter" style={{ animationDelay: '0ms' }}>H</span>
              <span className="inline-block animate-bounce-letter" style={{ animationDelay: '50ms' }}>e</span>
              <span className="inline-block animate-bounce-letter" style={{ animationDelay: '100ms' }}>l</span>
              <span className="inline-block animate-bounce-letter" style={{ animationDelay: '150ms' }}>l</span>
              <span className="inline-block animate-bounce-letter" style={{ animationDelay: '200ms' }}>o</span>
              <span className="inline-block w-2" />
              <span className="inline-block animate-bounce-letter text-primary" style={{ animationDelay: '300ms' }}>S</span>
              <span className="inline-block animate-bounce-letter text-primary" style={{ animationDelay: '350ms' }}>a</span>
              <span className="inline-block animate-bounce-letter text-primary" style={{ animationDelay: '400ms' }}>u</span>
              <span className="inline-block animate-bounce-letter text-primary" style={{ animationDelay: '450ms' }}>d</span>
              <span className="inline-block animate-bounce-letter text-primary" style={{ animationDelay: '500ms' }}>i</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              We are <span className="text-primary font-black">Coming Soon</span>
            </p>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="w-12 h-0.5 bg-white/30 animate-expand-right" />
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-12 h-0.5 bg-white/30 animate-expand-left" />
            </div>
          </div>

          {/* Subtext */}
          <p className="mt-4 text-white/70 text-sm animate-fade-in" style={{ animationDelay: '800ms' }}>
            Fabulouzz Technologies • Smart Solutions for the Kingdom
          </p>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
      </div>
    </div>
  );
};

export default SaudiPopup;
