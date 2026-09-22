/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute, PortfolioItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppEnquiryModal } from './components/WhatsAppEnquiryModal';
import { LightboxModal } from './components/LightboxModal';
import { UtamaView } from './views/UtamaView';
import { ServisView } from './views/ServisView';
import { PortfolioView } from './views/PortfolioView';
import { HubungiView } from './views/HubungiView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('utama');
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [selectedServiceForWhatsApp, setSelectedServiceForWhatsApp] = useState<string>('');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<PortfolioItem | null>(null);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWhatsAppModal = (serviceName?: string) => {
    setSelectedServiceForWhatsApp(serviceName || '');
    setIsWhatsAppModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfcfb] text-[#1a252f] antialiased selection:bg-[#2ea243] selection:text-white">
      {/* Blueprint Grid Background Pattern with High Readability */}
      <div className="fixed inset-0 blueprint-grid opacity-60 pointer-events-none -z-10"></div>

      {/* Accessible Skip Link for Screen Readers & Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2ea243] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Langkau ke kandungan utama
      </a>

      {/* Header & Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenWhatsAppForm={() => handleOpenWhatsAppModal()}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {currentPage === 'utama' && (
          <UtamaView
            onNavigate={handleNavigate}
            onOpenWhatsAppForm={handleOpenWhatsAppModal}
            onSelectPortfolioImage={setSelectedLightboxItem}
          />
        )}

        {currentPage === 'servis' && (
          <ServisView
            onOpenWhatsAppForm={handleOpenWhatsAppModal}
            onSelectPortfolioImage={setSelectedLightboxItem}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioView onSelectImage={setSelectedLightboxItem} />
        )}

        {currentPage === 'hubungi' && <HubungiView />}
      </main>

      {/* Footer on light surface for black lettering clarity */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onClick={() => handleOpenWhatsAppModal()} />

      {/* WhatsApp Enquiry Form Modal */}
      <WhatsAppEnquiryModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        defaultService={selectedServiceForWhatsApp}
      />

      {/* Full-Image Lightbox Modal */}
      <LightboxModal
        item={selectedLightboxItem}
        onClose={() => setSelectedLightboxItem(null)}
      />
    </div>
  );
}
