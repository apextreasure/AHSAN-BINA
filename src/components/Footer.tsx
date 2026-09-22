/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#f4f6f4] border-t border-gray-200 text-[#1a252f] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-300/80">
          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg p-1 border border-gray-200 shadow-xs flex items-center justify-center shrink-0">
                <img
                  src="/assets/7c8e9d49-logo-ahsan-bina.svg"
                  alt="Logo Rasmi AHSAN BINA"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-wider text-[#0d1b2a] block leading-tight">
                  AHSAN BINA
                </span>
                <span className="text-xs font-semibold text-[#2ea243] uppercase tracking-wider block">
                  Kontraktor IBS &amp; Konvensional
                </span>
              </div>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-1">
              Pakar pembinaan rumah kaedah IBS (Industrialised Building System) dan konvensional, kerja ubah suai rumah, pendawaian elektrik, kerja paip dan hiasan dalaman yang dipercayai di Shah Alam dan Kuala Terengganu.
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b2a] bg-white px-3.5 py-2.5 rounded-lg border border-gray-200/90 shadow-2xs w-fit">
              <ShieldCheck className="w-5 h-5 text-[#2ea243] shrink-0" />
              <span>Berdaftar Dengan CIDB Malaysia</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-[#0d1b2a] uppercase tracking-wider">
              Navigasi Laman
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  id="footer-nav-utama"
                  onClick={() => handleNav('utama')}
                  className="text-base text-gray-700 hover:text-[#2ea243] transition-colors py-1 flex items-center gap-1.5 focus:outline-none focus:underline"
                >
                  <ArrowRight className="w-4 h-4 text-[#2ea243]" />
                  <span>Utama</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-servis"
                  onClick={() => handleNav('servis')}
                  className="text-base text-gray-700 hover:text-[#2ea243] transition-colors py-1 flex items-center gap-1.5 focus:outline-none focus:underline"
                >
                  <ArrowRight className="w-4 h-4 text-[#2ea243]" />
                  <span>Servis Binaan</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-portfolio"
                  onClick={() => handleNav('portfolio')}
                  className="text-base text-gray-700 hover:text-[#2ea243] transition-colors py-1 flex items-center gap-1.5 focus:outline-none focus:underline"
                >
                  <ArrowRight className="w-4 h-4 text-[#2ea243]" />
                  <span>Portfolio Tapak</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-hubungi"
                  onClick={() => handleNav('hubungi')}
                  className="text-base text-gray-700 hover:text-[#2ea243] transition-colors py-1 flex items-center gap-1.5 focus:outline-none focus:underline"
                >
                  <ArrowRight className="w-4 h-4 text-[#2ea243]" />
                  <span>Hubungi Kami</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-[#0d1b2a] uppercase tracking-wider">
              Perkhidmatan
            </h4>
            <ul className="space-y-1.5 text-base text-gray-700">
              <li className="py-0.5">• Bina Rumah IBS (Pasang Siap)</li>
              <li className="py-0.5">• Bina Rumah Konvensional</li>
              <li className="py-0.5">• Renovasi &amp; Ubah Suai Rumah</li>
              <li className="py-0.5">• Pendawaian Elektrik 1 &amp; 3 Fasa</li>
              <li className="py-0.5">• Kerja Paip &amp; Sistem Sanitari</li>
              <li className="py-0.5">• Kemasan Siling &amp; Hiasan Dalaman</li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-[#0d1b2a] uppercase tracking-wider">
              Maklumat Pejabat &amp; Hubungi
            </h4>
            
            <div className="space-y-3 text-base text-gray-800">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#2ea243] shrink-0 mt-1" />
                <a
                  href={BUSINESS_INFO.addressMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2ea243] underline-offset-2 hover:underline leading-snug"
                >
                  {BUSINESS_INFO.address}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#2ea243] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-bold text-[#0d1b2a] hover:text-[#2ea243] tracking-wide"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[#2ea243] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-[#2ea243] underline-offset-2 hover:underline"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-[#2ea243] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#2ea243] hover:underline"
                >
                  WhatsApp: {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="pt-1">
                <a
                  id="footer-facebook-link"
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-2xs transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Ikuti Facebook Rasmi</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Service Area Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 gap-3">
          <p>© {new Date().getFullYear()} AHSAN BINA. Hak Cipta Terpelihara.</p>
          <p className="text-center sm:text-right text-xs sm:text-sm text-gray-500">
            Kawasan Perkhidmatan: Shah Alam, Selangor &amp; Kuala Terengganu, Terengganu.
          </p>
        </div>
      </div>
    </footer>
  );
};
