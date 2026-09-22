/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FloatingWhatsAppProps {
  onClick: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onClick }) => {
  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="Bantuan WhatsApp Pantas"
      className="fixed bottom-6 right-6 z-30 flex items-center group pointer-events-auto"
    >
      {/* Tooltip badge on hover/focus */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 bg-[#0d1b2a] text-white text-sm font-semibold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Tanya Sebut Harga WhatsApp
      </span>

      {/* Floating Action Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={onClick}
        aria-label={`Hubungi AHSAN BINA melalui WhatsApp di ${BUSINESS_INFO.phoneDisplay}`}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2ea243] hover:bg-[#238234] active:bg-[#1d6b2b] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#2ea243]/40 cursor-pointer border-2 border-white"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        <span className="sr-only">Buka Borang WhatsApp AHSAN BINA</span>
      </button>
    </aside>
  );
};
