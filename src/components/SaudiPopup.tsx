import React, { useState, useEffect } from 'react';
import { X, Camera } from 'lucide-react';

const SaudiPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
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
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup Container */}
      <div 
        className={`relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 ${
          isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Saudi Flag Background - Animated */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Green background */}
          <div className="absolute inset-0 bg-[#006C35]" />
          
          {/* Flag wave animation layers */}
          <div className="absolute inset-0 animate-flag-wave opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          <div className="absolute inset-0 animate-flag-wave-slow opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          
          {/* Shahada and Sword - Stylized */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="text-white text-6xl font-arabic leading-none tracking-wider">
              لا إله إلا الله
            </div>
          </div>
          
          {/* Decorative sword line */}
          <div className="absolute bottom-1/3 left-1/4 right-1/4 h-0.5 bg-white/30 transform -rotate-2" />
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

          {/* CCTV Camera Element */}
          <div className="relative mb-6">
            <div className="inline-flex items-center justify-center">
              {/* Camera Mount */}
              <div className="relative">
                {/* Camera Body */}
                <div className="relative animate-camera-scan">
                  <Camera 
                    size={64} 
                    className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                    strokeWidth={1.5}
                  />
                  {/* Recording indicator */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                </div>
                
                {/* Scan lines effect */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-24 overflow-hidden opacity-40">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent animate-scan-lines" 
                    style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}
                  />
                </div>
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
