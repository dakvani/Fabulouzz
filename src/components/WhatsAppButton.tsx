import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  // Using wa.me link format with pre-filled message
  const whatsappUrl =
    "https://wa.me/919061239333?text=Hello%21%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25"></div>

        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/40 transform hover:scale-110 transition-all duration-300 cursor-pointer">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-border">
          Chat with us!
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-card"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
