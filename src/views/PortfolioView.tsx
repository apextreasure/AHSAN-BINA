/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/businessData';
import { PortfolioItem } from '../types';
import { Eye, Filter, AlertTriangle, Info, CheckCircle, ShieldCheck } from 'lucide-react';

interface PortfolioViewProps {
  onSelectImage: (item: PortfolioItem) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onSelectImage }) => {
  const [activeFilter, setActiveFilter] = useState<'semua' | 'kemajuan' | 'rujukan' | 'promosi'>('semua');

  const filteredItems = activeFilter === 'semua'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  // Dedicated design reference banner asset (da733401)
  const designBanner = PORTFOLIO_ITEMS.find((item) => item.prefix === 'da733401');

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Header Section */}
      <section id="portfolio-header" className="pt-6 sm:pt-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="px-3.5 py-1.5 rounded-full bg-[#2ea243]/10 text-xs sm:text-sm font-bold text-[#2ea243] uppercase tracking-wider inline-block mb-4">
          Galeri Visual &amp; Dokumentasi
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2a] tracking-tight mb-4">
          Portfolio &amp; Dokumentasi Tapak
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Galeri teratur yang membezakan antara foto <strong>kemajuan tapak binaan fizikal</strong>, <strong>rujukan teknikal seni bina</strong>, dan <strong>bahan promosi syarikat</strong> dengan ketelusan penuh.
        </p>

        {/* Transparency Guidelines Box */}
        <div className="mt-6 p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl text-left flex items-start gap-3 shadow-2xs">
          <Info className="w-5 h-5 text-[#2ea243] shrink-0 mt-0.5" />
          <div className="text-sm sm:text-base text-gray-700 space-y-1">
            <p>
              <strong>Prinsip Ketelusan Maklumat:</strong> Setiap foto dilabel mengikut kategori asalnya. Kami tidak mempersembahkan ilustrasi rujukan sebagai projek siap fizikal, dan setiap foto pembinaan mewakili fasa tapak masing-masing.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL FEATURED SECTION: Design-Reference Section (da733401 full house-design banner) */}
      {designBanner && (
        <section id="design-reference-banner-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
              <div>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full uppercase tracking-wider">
                  Katalog Rujukan Rekabentuk (Aset: da733401)
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b2a] mt-1">
                  Koleksi Rujukan Rekaan Rumah IBS &amp; Pelan Arkitek
                </h2>
              </div>
              <button
                onClick={() => onSelectImage(designBanner)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#0d1b2a] font-bold text-sm rounded-xl transition-colors shrink-0"
              >
                <Eye className="w-4 h-4 text-[#2ea243]" />
                <span>Buka Paparan Penuh</span>
              </button>
            </div>

            {/* Full uncropped display of da733401 */}
            <div
              onClick={() => onSelectImage(designBanner)}
              className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 cursor-pointer group relative"
            >
              <img
                src={designBanner.imageSrc}
                alt={designBanner.altText}
                className="w-full h-auto object-contain block group-hover:scale-101 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-5 py-2.5 bg-white/95 text-[#0d1b2a] font-bold text-base rounded-xl shadow-lg flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#2ea243]" />
                  <span>Klik Untuk Membesarkan Banner Rujukan</span>
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-600 italic">
              *Visual ini merupakan rujukan konsep rekabentuk seni bina bagi membantu pemilik rumah membayangkan gaya luaran dan susun atur fasad rumah impian.
            </p>
          </div>
        </section>
      )}

      {/* FILTER BUTTONS: Uncrowded & Accessible */}
      <section id="portfolio-gallery-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            id="filter-semua"
            onClick={() => setActiveFilter('semua')}
            className={`px-5 py-2.5 min-h-[48px] rounded-xl text-base font-bold transition-all ${
              activeFilter === 'semua'
                ? 'bg-[#0d1b2a] text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Semua ({PORTFOLIO_ITEMS.length})
          </button>

          <button
            id="filter-kemajuan"
            onClick={() => setActiveFilter('kemajuan')}
            className={`px-5 py-2.5 min-h-[48px] rounded-xl text-base font-bold transition-all ${
              activeFilter === 'kemajuan'
                ? 'bg-[#2ea243] text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Kemajuan Tapak Sebenar ({PORTFOLIO_ITEMS.filter((i) => i.category === 'kemajuan').length})
          </button>

          <button
            id="filter-rujukan"
            onClick={() => setActiveFilter('rujukan')}
            className={`px-5 py-2.5 min-h-[48px] rounded-xl text-base font-bold transition-all ${
              activeFilter === 'rujukan'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Rujukan Teknikal &amp; Rekaan ({PORTFOLIO_ITEMS.filter((i) => i.category === 'rujukan').length})
          </button>

          <button
            id="filter-promosi"
            onClick={() => setActiveFilter('promosi')}
            className={`px-5 py-2.5 min-h-[48px] rounded-xl text-base font-bold transition-all ${
              activeFilter === 'promosi'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Bahan Promosi &amp; Arkib ({PORTFOLIO_ITEMS.filter((i) => i.category === 'promosi').length})
          </button>
        </div>

        {/* Gallery Grid: Uncrowded, Generous Spacing, Lightbox Triggers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              id={`portfolio-item-${item.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              {/* Image Container with click to lightbox */}
              <div
                onClick={() => onSelectImage(item)}
                className="relative aspect-4/3 bg-gray-100 overflow-hidden cursor-pointer"
              >
                <img
                  src={item.imageSrc}
                  alt={item.altText}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                      item.category === 'kemajuan'
                        ? 'bg-[#2ea243] text-white'
                        : item.category === 'rujukan'
                        ? 'bg-sky-600 text-white'
                        : 'bg-amber-600 text-white'
                    }`}
                  >
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Lightbox Indicator */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-white text-[#0d1b2a] text-sm font-bold rounded-xl shadow-lg flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#2ea243]" />
                    <span>Lihat Imej Penuh</span>
                  </span>
                </div>
              </div>

              {/* Caption & Metadata Section */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0d1b2a] leading-snug group-hover:text-[#2ea243] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {item.caption}
                  </p>

                  {/* Warning / Important note (specifically for 5790ae5a or technical references) */}
                  {item.warningNote && (
                    <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <p className="leading-snug">{item.warningNote}</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-500">
                  <span>Fail Aset: <code className="font-mono text-gray-700">{item.prefix}</code></span>
                  <button
                    onClick={() => onSelectImage(item)}
                    className="font-bold text-[#2ea243] hover:underline focus:outline-none"
                  >
                    Buka Paparan →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
