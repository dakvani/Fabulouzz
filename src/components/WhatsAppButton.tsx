import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const welcomeText = "Hello%21%20I%20would%20like%20to%20inquire%20about%20your%20services.";
  const indiaUrl = `https://wa.me/919061239333?text=${welcomeText}`;
  const saudiUrl = `https://wa.me/966502918573?text=${welcomeText}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Options popup */}
      {isOpen && (
        <div className="absolute bottom-[calc(100%+12px)] right-0 bg-card border border-border rounded-xl shadow-2xl p-3 w-52 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
            Select Region
          </div>
          <a
            href={indiaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent transition-colors group/item"
          >
            <span className="text-lg">🇮🇳</span>
            <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">India</span>
          </a>
          <a
            href={saudiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent transition-colors group/item"
          >
            <span className="text-lg">🇸🇦</span>
            <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">Saudi Arabia</span>
          </a>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {!isOpen && (
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25"></div>
          )}
          <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/40 transform hover:scale-110 transition-all duration-300 cursor-pointer">
            {isOpen ? (
              <X className="w-7 h-7 md:w-8 md:h-8 text-white" />
            ) : (
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
            )}
          </div>
          {!isOpen && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-border">
              Chat with us!
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-card"></div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
