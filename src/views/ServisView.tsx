/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/businessData';
import { PortfolioItem } from '../types';
import {
  Building2,
  Home,
  Hammer,
  Zap,
  Droplets,
  Palette,
  CheckCircle2,
  MessageCircle,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Eye,
  Info,
} from 'lucide-react';

interface ServisViewProps {
  onOpenWhatsAppForm: (serviceName?: string) => void;
  onSelectPortfolioImage: (item: PortfolioItem) => void;
}

export const ServisView: React.FC<ServisViewProps> = ({
  onOpenWhatsAppForm,
  onSelectPortfolioImage,
}) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'bina-rumah-ibs':
        return <Building2 className="w-8 h-8 text-[#2ea243]" />;
      case 'bina-rumah-konvensional':
        return <Home className="w-8 h-8 text-[#2ea243]" />;
      case 'renovasi-ubah-suai':
        return <Hammer className="w-8 h-8 text-[#2ea243]" />;
      case 'pendawaian-elektrik':
        return <Zap className="w-8 h-8 text-[#2ea243]" />;
      case 'kerja-paip':
        return <Droplets className="w-8 h-8 text-[#2ea243]" />;
      case 'hiasan-dalaman':
        return <Palette className="w-8 h-8 text-[#2ea243]" />;
      default:
        return <Building2 className="w-8 h-8 text-[#2ea243]" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header Section */}
      <section id="servis-header" className="pt-6 sm:pt-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="px-3.5 py-1.5 rounded-full bg-[#2ea243]/10 text-xs sm:text-sm font-bold text-[#2ea243] uppercase tracking-wider inline-block mb-4">
          Perkhidmatan Kontraktor Berdaftar
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2a] tracking-tight mb-4">
          Perkhidmatan Binaan AHSAN BINA
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Kami menyediakan penyelesaian komprehensif bagi pembinaan rumah baru kaedah IBS dan konvensional, kerja ubah suai kediaman, kerja elektrik, perpaipan dan kemasan hiasan dalaman di Shah Alam dan Kuala Terengganu.
        </p>

        {/* Pricing Transparency Statement - Strict: Never invent prices */}
        <div className="mt-6 p-4 sm:p-5 bg-amber-50/90 border border-amber-200/90 rounded-2xl text-left flex items-start gap-3 shadow-2xs">
          <Info className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-sm sm:text-base text-amber-950 leading-relaxed">
            <strong className="font-bold text-[#0d1b2a]">Polisi Ketelusan Harga: </strong>
            {BUSINESS_INFO.pricingNote} Hubungi kami untuk sesi rundingan dan pengiraan sebut harga terperinci mengikut pelan tapak anda.
          </div>
        </div>
      </section>

      {/* Featured Section: Blue Promotional Poster (Asset: 92053dc1) Displayed in Full Without Cropping */}
      <section id="servis-featured-poster" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0d1b2a] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Poster Image: Preserving Aspect Ratio Without Cropping */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black/40 max-w-md w-full">
                <img
                  src="/assets/92053dc1-poster-promosi-biru.jpg"
                  alt="Poster promosi rasmi AHSAN BINA: Kontraktor Rumah - Membina Impian Anda (Fail Aset: 92053dc1)"
                  className="w-full h-auto object-contain block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Poster Details & Values */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#2ea243] text-white text-xs font-bold rounded-md uppercase tracking-wider">
                Poster Promosi Rasmi Syarikat (Aset: 92053dc1)
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Membina Impian Anda Dengan Piawaian Kualiti Terjamin
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                AHSAN BINA memegang teguh pada 3 teras utama dalam setiap pelaksanaan projek binaan dan renovasi rumah:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-xl border border-white/15">
                  <h4 className="font-bold text-lg text-amber-400">1. Bina Rumah Berkualiti</h4>
                  <p className="text-gray-200 text-base">
                    Mengutamakan ketelitian ikatan struktur, gred simen bersesuaian, dan bahan kemasan terpilih untuk ketahanan jangka panjang.
                  </p>
                </div>

                <div className="p-4 bg-white/10 rounded-xl border border-white/15">
                  <h4 className="font-bold text-lg text-amber-400">2. Rekabentuk Menarik</h4>
                  <p className="text-gray-200 text-base">
                    Pelan dan rekaan yang disesuaikan mengikut citarasa pemilik rumah, keselesaan pencahayaan semula jadi, dan aliran pengudaraan.
                  </p>
                </div>

                <div className="p-4 bg-white/10 rounded-xl border border-white/15">
                  <h4 className="font-bold text-lg text-amber-400">3. Harga Berpatutan &amp; Kos Efektif</h4>
                  <p className="text-gray-200 text-base">
                    Pengiraan kos yang telus dan berbaloi mengikut spesifikasi tanpa sebarang caj tersembunyi.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenWhatsAppForm('Bina Rumah Baru')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 min-h-[48px] bg-[#2ea243] hover:bg-[#238234] text-white font-bold text-lg rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Dapatkan Sebut Harga Projek</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid (All 6 Services) */}
      <section id="all-services-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold text-[#2ea243] uppercase tracking-widest">
            Skop Penuh
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a]">
            Pilihan Perkhidmatan Kami
          </h2>
        </div>

        <div className="space-y-12">
          {SERVICES_LIST.map((srv, idx) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Text Content */}
                <div className={`space-y-5 ${srv.imageSrc ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#2ea243]/10 flex items-center justify-center shrink-0">
                      {getServiceIcon(srv.id)}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b2a]">
                        {srv.title}
                      </h3>
                      {srv.badge && (
                        <span className="text-xs font-bold text-[#2ea243] uppercase tracking-wider">
                          • {srv.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-base font-bold text-[#0d1b2a] uppercase tracking-wider">
                      Ciri-Ciri &amp; Skop Kerja:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base text-gray-700">
                      {srv.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenWhatsAppForm(srv.title)}
                      className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] bg-[#2ea243] hover:bg-[#238234] text-white font-bold text-base rounded-xl shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Tanya Khidmat {srv.title}</span>
                    </button>
                    <span className="text-sm text-gray-500 italic">
                      *Harga bergantung kepada saiz &amp; spesifikasi
                    </span>
                  </div>
                </div>

                {/* Dedicated Service Visual for Service Page */}
                {(srv.servicePageImageSrc || srv.imageSrc) && (
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50 group">
                      <img
                        src={srv.servicePageImageSrc || srv.imageSrc}
                        alt={srv.servicePageImageAlt || srv.imageAlt || srv.title}
                        className="w-full h-auto aspect-4/3 object-cover group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IBS vs Konvensional Comparison Guide */}
      <section id="ibs-vs-konvensional" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <span className="text-sm font-bold text-[#2ea243] uppercase tracking-widest">
              Panduan Pemilihan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b2a]">
              Pilih Antara Bina Rumah IBS atau Konvensional?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              AHSAN BINA berkemahiran dalam kedua-dua sistem. Kami mencadangkan kaedah terbaik mengikut bajet, tapak tanah, dan tempoh masa yang anda inginkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IBS Column */}
            <div className="p-6 rounded-2xl bg-[#fafbfa] border border-gray-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2ea243]/15 flex items-center justify-center text-[#2ea243]">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0d1b2a]">Kelebihan Rumah IBS</h3>
              </div>
              <ul className="space-y-2.5 text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0 mt-0.5" />
                  <span><strong>Tempoh Siap Pantas:</strong> Pemasangan komponen pasang siap menjimatkan masa binaan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0 mt-0.5" />
                  <span><strong>Kawalan Kualiti Kilang:</strong> Panel dinding dihasilkan dengan nisbah campuran yang seragam.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0 mt-0.5" />
                  <span><strong>Penebat Haba &amp; Bunyi:</strong> Dinding IBS membantu mengekalkan suhu dalaman yang lebih nyaman.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0 mt-0.5" />
                  <span><strong>Tapak Lebih Bersih:</strong> Mengurangkan pembaziran bahan binaan di tapak rumah anda.</span>
                </li>
              </ul>
            </div>

            {/* Konvensional Column */}
            <div className="p-6 rounded-2xl bg-[#fafbfa] border border-gray-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0d1b2a]">Kelebihan Rumah Konvensional</h3>
              </div>
              <ul className="space-y-2.5 text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0 mt-0.5" />
                  <span><strong>Fleksibiliti Rekabentuk:</strong> Mudah disesuaikan untuk bentuk tapak unik atau pelan rumit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0 mt-0.5" />
                  <span><strong>Mudah Diubah Suai Masa Depan:</strong> Kerja tebuk dinding atau sambungan bilik kelak lebih mudah.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0 mt-0.5" />
                  <span><strong>Struktur Tradisional Tahan Lasak:</strong> Menggunakan gabungan konkrit bertetulang dan bata pasir kukuh.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0 mt-0.5" />
                  <span><strong>Pilihan Bahan Pelbagai:</strong> Pemilik bebas memilih jenis batu bata mengikut bajet sendiri.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenWhatsAppForm('Rundingan Sistem Binaan')}
              className="inline-flex items-center gap-2 px-8 py-4 min-h-[50px] bg-[#2ea243] hover:bg-[#238234] text-white font-bold text-lg rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Bincang Pilihan Sistem Terbaik Bersama Kami</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
