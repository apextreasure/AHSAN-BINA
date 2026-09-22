/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { Menu, X, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenWhatsAppForm?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenWhatsAppForm,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Utama', route: 'utama' },
    { label: 'Servis', route: 'servis' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Hubungi', route: 'hubungi' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on clean light background for maximum clarity of emblem and black lettering */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('utama')}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#2ea243] focus:ring-offset-2 rounded-lg p-1 transition-transform hover:opacity-95"
            aria-label="AHSAN BINA - Ke Halaman Utama"
          >
            <div className="w-11 h-11 sm:w-13 sm:h-13 bg-white rounded-lg p-1 border border-gray-200/80 shadow-xs flex items-center justify-center shrink-0">
              <img
                src="/assets/7c8e9d49-logo-ahsan-bina.svg"
                alt="Logo AHSAN BINA"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-[#0d1b2a] leading-none">
                AHSAN BINA
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#2ea243] uppercase tracking-widest mt-0.5">
                Kontraktor Rumah IBS &amp; Konvensional
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links - STRICTLY: Utama, Servis, Portfolio, Hubungi + WhatsApp */}
          <nav id="desktop-navigation" aria-label="Navigasi Utama" className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.route;
              return (
                <button
                  key={item.route}
                  id={`nav-link-${item.route}`}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-4 py-2.5 rounded-lg text-base lg:text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#2ea243] ${
                    isActive
                      ? 'text-[#2ea243] bg-[#2ea243]/10 font-bold'
                      : 'text-[#1a252f] hover:text-[#2ea243] hover:bg-gray-100/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Direct WhatsApp Call-To-Action Button */}
            <a
              id="nav-whatsapp-direct-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] bg-[#2ea243] hover:bg-[#238234] text-white font-semibold text-base rounded-xl shadow-xs transition-all hover:shadow-md active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#2ea243] focus:ring-offset-2 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Kami</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              id="mobile-quick-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2.5 rounded-lg text-[#0d1b2a] bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2ea243]"
              aria-label="Hubungi Nombor Telefon AHSAN BINA"
            >
              <Phone className="w-5 h-5 text-[#2ea243]" />
            </a>
            <button
              id="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-gray-800 hover:text-[#2ea243] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2ea243]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu navigasi'}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden border-t border-gray-200 bg-white shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.route;
              return (
                <button
                  key={item.route}
                  id={`mobile-nav-link-${item.route}`}
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left px-4 py-3 min-h-[48px] rounded-xl text-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2ea243]/10 text-[#2ea243] font-bold'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <a
                id="mobile-menu-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 min-h-[48px] bg-[#2ea243] text-white font-semibold text-lg rounded-xl shadow-xs"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                id="mobile-menu-phone-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3 min-h-[48px] bg-gray-100 text-[#0d1b2a] font-medium text-base rounded-xl"
              >
                <Phone className="w-5 h-5 text-[#2ea243]" />
                <span>Panggilan Telefon: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
