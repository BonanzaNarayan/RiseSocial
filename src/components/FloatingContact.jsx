import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-8 right-4 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/233445535925`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative transition-all duration-300"
      >
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 hover:scale-110 transition-all">
          <FaWhatsapp className="text-white text-3xl" />
        </div>
        <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat via WhatsApp
          <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></span>
        </span>
      </a>

      {/* Instagram Button */}
      <a
        href={`https://instagram.com/svddiin`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative transition-all duration-300"
      >
        <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all">
          <FaInstagram className="text-white text-3xl" />
        </div>
        <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Follow on Instagram
          <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></span>
        </span>
      </a>
    </div>
  );
};


export default FloatingContact;