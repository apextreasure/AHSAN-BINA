/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { PortfolioItem } from '../types';
import { X, ZoomIn, Info, AlertTriangle, ShieldCheck } from 'lucide-react';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div className="relative w-full max-w-5xl bg-[#0d1b2a] text-white rounded-2xl shadow-2xl border border-gray-700/80 overflow-hidden flex flex-col my-auto max-h-[94vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800 bg-[#09131d]">
          <div className="flex items-center gap-2.5">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                item.category === 'kemajuan'
                  ? 'bg-[#2ea243] text-white'
                  : item.category === 'rujukan'
                  ? 'bg-sky-600 text-white'
                  : 'bg-amber-600 text-white'
              }`}
            >
              {item.categoryLabel}
            </span>
            {item.dateOrLocation && (
              <span className="text-sm text-gray-300 hidden sm:inline-block">
                • {item.dateOrLocation}
              </span>
            )}
          </div>

          <button
            id="lightbox-close-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2ea243]"
            aria-label="Tutup Paparan Penuh"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Display Area - Preserves Full Aspect Ratio Without Cropping */}
        <div className="relative flex-1 bg-black flex items-center justify-center p-2 sm:p-4 min-h-[300px] max-h-[68vh] overflow-hidden">
          <img
            src={item.imageSrc}
            alt={item.altText}
            className="max-h-[64vh] max-w-full object-contain rounded-lg shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption & Context Footer */}
        <div className="p-5 sm:p-6 bg-[#0f1d2d] border-t border-gray-800 space-y-2.5 overflow-y-auto">
          <h3 id="lightbox-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {item.title}
          </h3>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            {item.caption}
          </p>

          {item.warningNote && (
            <div className="mt-2 p-3 bg-amber-950/60 border border-amber-500/50 rounded-xl text-sm sm:text-base text-amber-200 flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="leading-snug">{item.warningNote}</p>
            </div>
          )}

          <div className="pt-1 flex flex-wrap items-center justify-between text-xs sm:text-sm text-gray-400 gap-2">
            <span>Fail Aset Rujukan: <code className="text-emerald-400">{item.prefix}</code></span>
            <span>AHSAN BINA • Ketelusan Maklumat Tapak</span>
          </div>
        </div>
      </div>
    </div>
  );
};
