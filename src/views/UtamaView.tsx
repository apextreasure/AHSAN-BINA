/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageRoute, PortfolioItem } from '../types';
import { BUSINESS_INFO, SERVICES_LIST, PORTFOLIO_ITEMS, ENQUIRY_STEPS } from '../data/businessData';
import {
  Hammer,
  Building2,
  Home,
  Zap,
  Droplets,
  Palette,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  Award,
  ChevronRight,
  Eye,
} from 'lucide-react';

interface UtamaViewProps {
  onNavigate: (page: PageRoute) => void;
  onOpenWhatsAppForm: (service?: string) => void;
  onSelectPortfolioImage: (item: PortfolioItem) => void;
}

export const UtamaView: React.FC<UtamaViewProps> = ({
  onNavigate,
  onOpenWhatsAppForm,
  onSelectPortfolioImage,
}) => {
  // Service icons mapping
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

  // Selected project images for homepage highlight
  const highlightProjects = PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION: Full-Width Architectural Wireframe Background */}
      <section id="hero-section" className="relative w-full overflow-hidden bg-white border-b border-gray-200/80 pt-8 pb-14 sm:py-16 lg:py-20">
        {/* Full-width architectural wireframe background spanning edge-to-edge */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/hero_architectural_wireframe.jpg"
            alt="Lukisan perspektif seni bina dan kerangka IBS AHSAN BINA"
            className="w-full h-full object-cover object-center opacity-20"
            referrerPolicy="no-referrer"
          />
          {/* Gentle light veil gradient for pristine legibility and architectural feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        </div>

        {/* Content Container aligned with site grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Column */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#2ea243]/30 text-xs sm:text-sm font-bold text-[#2ea243] uppercase tracking-wider shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#2ea243]" />
                <span>Pakar Kontraktor Rumah IBS &amp; Konvensional</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0d1b2a] tracking-tight leading-[1.15]">
                Membina <span className="text-[#2ea243]">Impian Anda</span> Bersama AHSAN BINA
              </h1>

              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-normal max-w-2xl">
                Perkhidmatan pembinaan rumah menyeluruh di <strong>Shah Alam, Selangor</strong> dan <strong>Kuala Terengganu, Terengganu</strong>. Mengkhusus dalam teknologi binaan pantas IBS, rumah konvensional, renovasi &amp; ubah suai, pendawaian elektrik, kerja paip dan hiasan dalaman berkualiti.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  id="hero-cta-quote"
                  onClick={() => onOpenWhatsAppForm()}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 min-h-[50px] bg-[#2ea243] hover:bg-[#238234] active:bg-[#1d6b2b] text-white text-lg font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#2ea243] cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Dapatkan Sebut Harga</span>
                </button>

                <button
                  id="hero-cta-portfolio"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[50px] bg-white/90 hover:bg-white active:bg-gray-100 text-[#0d1b2a] text-lg font-bold rounded-xl border border-gray-300 hover:border-[#2ea243] transition-all focus:outline-none focus:ring-2 focus:ring-[#2ea243] cursor-pointer shadow-xs"
                >
                  <span>Lihat Portfolio Tapak</span>
                  <ArrowRight className="w-5 h-5 text-[#2ea243]" />
                </button>
              </div>

              {/* Key Trust Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-800">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs px-3.5 py-2.5 rounded-lg border border-gray-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0" />
                  <span className="font-semibold">Berdaftar CIDB</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs px-3.5 py-2.5 rounded-lg border border-gray-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0" />
                  <span className="font-semibold">Pakar Kaedah IBS</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1 bg-white/90 backdrop-blur-xs px-3.5 py-2.5 rounded-lg border border-gray-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0" />
                  <span className="font-semibold">Ketelusan Kos Sebut Harga</span>
                </div>
              </div>
            </div>

            {/* Right Floating Card: Real Construction Progress Preview */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-gray-200/90 shadow-xl text-[#0d1b2a] space-y-3">
                <div className="relative rounded-xl overflow-hidden aspect-4/3 border border-gray-200 group">
                  <img
                    src="/assets/facebook-reference-ibs-slab.jpg"
                    alt="Pemasangan panel dinding konkrit IBS di tapak binaan fizikal"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 bg-[#2ea243] text-white text-[11px] font-bold rounded-md uppercase tracking-wider shadow-xs">
                    Tapak Sebenar
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2ea243] uppercase tracking-wider">
                    Dokumentasi Pembinaan
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    Struktur &amp; Pemasangan IBS
                  </p>
                </div>
                <button
                  onClick={() =>
                    onSelectPortfolioImage(
                      PORTFOLIO_ITEMS.find((p) => p.id === 'portfolio-facebook-slab') || PORTFOLIO_ITEMS[2]
                    )
                  }
                  className="w-full py-2.5 bg-gray-100 hover:bg-[#2ea243] text-gray-800 hover:text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Periksa Kemajuan Tapak</span>
                </button>
              </div>
            </div>
          </div>

          {/* Technical Drawing Blueprint Footer Note */}
          <div className="mt-8 pt-4 border-t border-gray-200/50 flex items-center justify-end text-[11px] text-gray-400 font-mono tracking-wider">
            <span>SCALE 1:250 &bull; CAD REFERENCE: DWG_ARCH-2024 &bull; PROJECTION: PERSPECTIVE</span>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION SECTION: Clear, Factual, No Exaggerations */}
      <section id="company-intro-section" className="bg-white py-14 sm:py-18 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-sm font-bold text-[#2ea243] uppercase tracking-widest">
              Mengenai AHSAN BINA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a]">
              Komitmen Membina Kediaman Kukuh &amp; Selesa
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              AHSAN BINA beroperasi dari <strong>Shah Alam, Selangor</strong> dan menyediakan perkhidmatan pembinaan di Selangor serta <strong>Kuala Terengganu</strong>. Kami komited memberikan hasil kerja yang kemas, menepati piawaian binaan dan mengikut jadual yang dipersetujui.
            </p>
          </div>

          {/* 3 Core Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#fafbfa] border border-gray-200/90 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2ea243]/15 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#2ea243]" />
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2a]">
                Teknologi IBS &amp; Konvensional
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Pilihan sistem IBS modular konkrit pra-tuang untuk tempoh binaan pantas dan efisien, mahupun sistem konvensional bata pasir mengikut kehendak rekabentuk anda.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#fafbfa] border border-gray-200/90 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2a]">
                Perkhidmatan Sehenti Lengkap
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Dari kerja struktur asas, lepaan, pemasangan bumbung, pendawaian elektrik 1 &amp; 3 fasa, sistem perpaipan, sehinggalah kemasan siling plaster dan hiasan dalaman.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#fafbfa] border border-gray-200/90 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2a]">
                Ketelusan Sebut Harga
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Tiada kos tersembunyi. Sebut harga kami dikira secara telus berdasarkan keluasan lantai, spesifikasi bahan binaan, serta keadaan sebenar tapak projek anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERKHIDMATAN KAMI: 6 Service Cards with Clear Summaries */}
      <section id="services-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-sm font-bold text-[#2ea243] uppercase tracking-widest">
              Kepakaran Binaan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a]">
              Perkhidmatan Yang Ditawarkan
            </h2>
          </div>
          <button
            onClick={() => onNavigate('servis')}
            className="inline-flex items-center gap-2 text-lg font-bold text-[#2ea243] hover:text-[#238234] transition-colors focus:outline-none focus:underline"
          >
            <span>Lihat Butiran Semua Servis</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              {srv.imageSrc && (
                <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100 border-b border-gray-100">
                  <img
                    src={srv.imageSrc}
                    alt={srv.imageAlt || srv.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {srv.badge && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-[#0d1b2a]/85 backdrop-blur-xs text-[#4ade80] font-bold text-xs rounded-full uppercase tracking-wider shadow-sm">
                      {srv.badge}
                    </span>
                  )}
                </div>
              )}

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#2ea243]/10 flex items-center justify-center">
                      {getServiceIcon(srv.id)}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0d1b2a]">{srv.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('servis')}
                    className="text-base font-bold text-[#0d1b2a] hover:text-[#2ea243] inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>Maklumat Lanjut</span>
                    <ChevronRight className="w-4 h-4 text-[#2ea243]" />
                  </button>

                  <button
                    onClick={() => onOpenWhatsAppForm(srv.title)}
                    className="px-3.5 py-2 bg-[#2ea243]/10 hover:bg-[#2ea243] text-[#2ea243] hover:text-white rounded-lg text-sm font-bold transition-colors cursor-pointer"
                  >
                    Tanya Servis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SELECTED PROJECT IMAGES: Real Site Progress with Lightbox View */}
      <section id="selected-projects-section" className="bg-[#f2f4f2] py-14 sm:py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="space-y-2">
              <span className="text-sm font-bold text-[#2ea243] uppercase tracking-widest">
                Dokumentasi Tapak
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a]">
                Gambar Projek &amp; Kemajuan Tapak
              </h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Klik mana-mana gambar untuk melihat butiran tapak dan paparan skrin penuh.
              </p>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#0d1b2a] hover:text-[#2ea243] font-bold text-base rounded-xl border border-gray-300 shadow-xs hover:shadow-sm"
            >
              <span>Semua Galeri Portfolio</span>
              <ArrowRight className="w-5 h-5 text-[#2ea243]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectPortfolioImage(item)}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                  <img
                    src={item.imageSrc}
                    alt={item.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-[#0d1b2a]/80 backdrop-blur-xs text-white text-xs font-bold rounded-full">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-[#0d1b2a] text-sm font-bold rounded-xl shadow-lg flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#2ea243]" />
                      <span>Lihat Penuh</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#0d1b2a] group-hover:text-[#2ea243] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-3 mt-2">
                      {item.caption}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <span>Aset: {item.prefix}</span>
                    <span className="font-semibold text-[#2ea243]">Buka Lampiran →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LANGKAH PERTANYAAN: 4 Clear Steps for Potential Clients */}
      <section id="enquiry-steps-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-sm font-bold text-[#2ea243] uppercase tracking-widest">
            Proses Kerja Telus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a]">
            4 Langkah Mudah Bermula
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Kami memudahkan proses pembinaan dan ubah suai rumah anda dari peringkat perancangan awal sehingga siap diduduki.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENQUIRY_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl border border-gray-200 p-6 relative shadow-xs hover:border-[#2ea243] transition-colors"
            >
              <span className="text-4xl font-extrabold text-[#2ea243]/25 block mb-2 font-mono">
                {step.step}
              </span>
              <h3 className="text-xl font-bold text-[#0d1b2a] mb-2">{step.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SERVICE AREA SUMMARY: Shah Alam & Kuala Terengganu */}
      <section id="service-areas-summary" className="bg-white py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0d1b2a] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            {/* Blueprint texture overlay */}
            <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3.5 py-1.5 rounded-full bg-[#2ea243] text-xs font-extrabold uppercase tracking-wider text-white inline-block">
                  Kawasan Liputan Operasi
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Kawasan Perkhidmatan AHSAN BINA
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Kami berpangkalan di <strong>Seksyen 25 Shah Alam, Selangor</strong> dan turut mempunyai pasukan operasi aktif di <strong>Kuala Terengganu, Terengganu</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                    <div className="flex items-center gap-2 font-bold text-[#2ea243] text-lg mb-1">
                      <MapPin className="w-5 h-5" />
                      <span>Shah Alam &amp; Selangor</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Shah Alam, Klang, Petaling Jaya, Subang dan seluruh Lembah Klang.
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                    <div className="flex items-center gap-2 font-bold text-[#2ea243] text-lg mb-1">
                      <MapPin className="w-5 h-5" />
                      <span>Kuala Terengganu</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Kuala Terengganu, Marang, Kuala Nerus dan kawasan berhampiran.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-gray-300 italic">
                    {BUSINESS_INFO.otherLocationsNote}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 text-center space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Ada Tanah Atau Pelan Rumah?
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Hubungi kami hari ini untuk semakan tapak dan anggaran awal tanpa sebarang ikatan.
                </p>
                <button
                  onClick={() => onOpenWhatsAppForm()}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 min-h-[50px] bg-[#2ea243] hover:bg-[#238234] text-white font-bold text-lg rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Minta Rundingan WhatsApp</span>
                </button>
                <div className="text-sm text-gray-300">
                  Talian Telefon: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white font-bold underline">{BUSINESS_INFO.phoneDisplay}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING WHATSAPP CTA: Prompt & Direct Engagement */}
      <section id="closing-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#2ea243]/40 rounded-3xl p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#2ea243]/15 text-[#2ea243] flex items-center justify-center mx-auto">
            <MessageCircle className="w-9 h-9" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a]">
            Mulakan Pembinaan Rumah Idaman Anda Sekarang
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Pegawai teknikal AHSAN BINA sedia membantu menjawab sebarang pertanyaan mengenai kaedah IBS, kos bahan, dan pelan binaan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[50px] bg-[#2ea243] hover:bg-[#238234] text-white text-lg font-bold rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[50px] bg-gray-100 hover:bg-gray-200 text-[#0d1b2a] text-lg font-bold rounded-xl transition-all"
            >
              <Phone className="w-5 h-5 text-[#2ea243]" />
              <span>Panggilan Telefon Terus</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
