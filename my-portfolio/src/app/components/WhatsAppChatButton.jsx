"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+918086378480";
  const whatsappMessage =
    "Hi, I’m Manzoor A K, a Full-Stack Developer. Chat with me on WhatsApp.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#1EBE57] cursor-pointer text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110"
      >
        <FaWhatsapp className="w-8 h-8" />
      </button>

      {/* Popup Card */}
      {isOpen && (
        <div className="mt-4 w-72 bg-white shadow-2xl rounded-xl overflow-hidden animate-fadeIn">
          <div className="p-4 flex flex-col items-start">
            <h4 className="text-lg font-semibold text-gray-800">Hello!</h4>
            <p className="text-gray-600 text-sm mt-1">
              Let’s chat on WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center bg-[#25D366] text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-[#1EBE57] transition-colors"
            >
              <FaWhatsapp className="mr-2" /> Chat Now
            </a>
          </div>
        </div>
      )}

      {/* Optional tooltip when not clicked */}
      {!isOpen && (
        <div className="absolute right-full bottom-1/2 translate-y-1/2 mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none select-none transition-opacity duration-300 whitespace-nowrap">
          Chat with me on WhatsApp
        </div>
      )}
    </div>
  );
}
