/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WhatsAppFormData } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { X, MessageCircle, Send, CheckCircle2, AlertCircle, Shield } from 'lucide-react';

interface WhatsAppEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const WhatsAppEnquiryModal: React.FC<WhatsAppEnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [formData, setFormData] = useState<WhatsAppFormData>({
    fullName: '',
    phone: '',
    service: defaultService || 'Bina Rumah IBS',
    location: 'Shah Alam, Selangor',
    otherLocation: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Sila masukkan nama penuh anda.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Sila masukkan nombor telefon yang boleh dihubungi.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 9) {
      errs.phone = 'Sila masukkan nombor telefon yang sah (cth: 012-3456789).';
    }
    if (!formData.service) {
      errs.service = 'Sila pilih jenis perkhidmatan.';
    }
    if (!formData.location) {
      errs.location = 'Sila pilih lokasi projek anda.';
    }
    if (formData.location === 'Lokasi Lain' && !formData.otherLocation?.trim()) {
      errs.otherLocation = 'Sila nyatakan kawasan / negeri lokasi anda.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const actualLocation =
      formData.location === 'Lokasi Lain' && formData.otherLocation
        ? `Lokasi Lain: ${formData.otherLocation.trim()}`
        : formData.location;

    const budgetText = formData.budget?.trim()
      ? formData.budget.trim()
      : 'Tertakluk kepada sebut harga / pelan';

    const messageText = formData.message?.trim()
      ? formData.message.trim()
      : 'Berminat untuk rundingan sebut harga dan pemeriksaan tapak binaan.';

    const malayWhatsAppMessage = `Salam hormat AHSAN BINA, saya ingin mendapatkan maklumat lanjut / sebut harga bagi projek binaan:

*MAKLUMAT PERTANYAAN:*
• Nama Penuh: ${formData.fullName.trim()}
• No. Telefon: ${formData.phone.trim()}
• Perkhidmatan: ${formData.service}
• Lokasi Projek: ${actualLocation}
• Anggaran Bajet: ${budgetText}

*KETERANGAN PROJEK:*
${messageText}

Mohon maklum balas dan cadangan tarikh perbincangan. Terima kasih.`;

    const encoded = encodeURIComponent(malayWhatsAppMessage);
    const targetUrl = `https://wa.me/60134865839?text=${encoded}`;

    // Open WhatsApp URL
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-whatsapp-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-6">
        {/* Modal Header with Clean Brand Green & Navy Accent */}
        <div className="bg-[#0d1b2a] text-white p-5 sm:p-6 flex items-start justify-between border-b-4 border-[#2ea243]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#2ea243] flex items-center justify-center shrink-0 shadow-xs">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 id="modal-whatsapp-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Borang Pertanyaan WhatsApp
              </h3>
              <p className="text-sm text-gray-300 mt-0.5">
                AHSAN BINA • Talian Rasmi: {BUSINESS_INFO.phoneDisplay}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Tutup borang"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-4 max-h-[78vh] overflow-y-auto">
          {/* Note Banner */}
          <div className="p-3.5 bg-green-50 border border-green-200/80 rounded-xl text-sm text-green-900 flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#2ea243] shrink-0 mt-0.5" />
            <p className="leading-snug">
              Isi butiran ringkas di bawah. Sistem akan menyusun mesej pertanyaan rasmi dan membuka WhatsApp anda untuk dihantar terus kepada pegawai AHSAN BINA.
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="wa-fullName" className="block text-base font-semibold text-gray-900 mb-1">
              Nama Penuh <span className="text-red-600">*</span>
            </label>
            <input
              id="wa-fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Contoh: Encik Ahmad Razali"
              className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 transition-all text-base"
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" /> {errors.fullName}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="wa-phone" className="block text-base font-semibold text-gray-900 mb-1">
              Nombor Telefon WhatsApp <span className="text-red-600">*</span>
            </label>
            <input
              id="wa-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Contoh: 012-3456789"
              className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 transition-all text-base"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" /> {errors.phone}
              </p>
            )}
          </div>

          {/* Service Selection */}
          <div>
            <label htmlFor="wa-service" className="block text-base font-semibold text-gray-900 mb-1">
              Perkhidmatan Yang Diperlukan <span className="text-red-600">*</span>
            </label>
            <select
              id="wa-service"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 transition-all text-base bg-white"
            >
              <option value="Bina Rumah IBS">Bina Rumah IBS (Panel Pasang Siap)</option>
              <option value="Bina Rumah Konvensional">Bina Rumah Konvensional</option>
              <option value="Renovasi & Ubah Suai">Renovasi &amp; Ubah Suai Rumah</option>
              <option value="Pendawaian Elektrik">Pendawaian Elektrik (1 / 3 Fasa)</option>
              <option value="Kerja Paip">Kerja Paip (Plumbing)</option>
              <option value="Hiasan Dalaman">Hiasan Dalaman &amp; Siling Plaster</option>
              <option value="Rundingan & Pelan">Khidmat Rundingan &amp; Pelan Rumah</option>
              <option value="Pertanyaan Umum">Pertanyaan Umum Lain-lain</option>
            </select>
          </div>

          {/* Project Location */}
          <div>
            <label htmlFor="wa-location" className="block text-base font-semibold text-gray-900 mb-1">
              Lokasi Projek <span className="text-red-600">*</span>
            </label>
            <select
              id="wa-location"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 transition-all text-base bg-white"
            >
              <option value="Shah Alam, Selangor">Shah Alam, Selangor</option>
              <option value="Kawasan Lain di Selangor / Lembah Klang">Kawasan Lain di Selangor / Lembah Klang</option>
              <option value="Kuala Terengganu, Terengganu">Kuala Terengganu, Terengganu</option>
              <option value="Kawasan Lain di Terengganu">Kawasan Lain di Terengganu</option>
              <option value="Lokasi Lain">Lokasi Lain (Tertakluk Semakan)</option>
            </select>

            {formData.location === 'Lokasi Lain' && (
              <div className="mt-2">
                <input
                  type="text"
                  value={formData.otherLocation}
                  onChange={(e) => setFormData({ ...formData, otherLocation: e.target.value })}
                  placeholder="Sila nyatakan bandar &amp; negeri anda..."
                  className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 text-base"
                />
                {errors.otherLocation && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.otherLocation}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Optional Budget */}
          <div>
            <label htmlFor="wa-budget" className="block text-base font-semibold text-gray-900 mb-1">
              Anggaran Bajet (Pilihan)
            </label>
            <input
              id="wa-budget"
              type="text"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              placeholder="Contoh: RM150,000 / Mengikut cadangan pelan"
              className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 transition-all text-base"
            />
          </div>

          {/* Message / Details */}
          <div>
            <label htmlFor="wa-message" className="block text-base font-semibold text-gray-900 mb-1">
              Keterangan Lanjut Projek (Pilihan)
            </label>
            <textarea
              id="wa-message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Contoh: Saiz tanah 40x70 kaki, perlukan 3 bilik tidur 2 bilik air..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 transition-all text-base resize-y"
            ></textarea>
          </div>

          {/* Important Notice Regarding WhatsApp Delivery */}
          <div className="p-3.5 bg-amber-50/90 border border-amber-200/80 rounded-xl text-xs sm:text-sm text-amber-900 flex items-start gap-2.5">
            <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Peringatan Pengguna:</strong> Selepas anda menekan butang <em>"Buka WhatsApp &amp; Hantar"</em> di bawah, tetingkap WhatsApp anda akan dibuka dengan teks pertanyaan ini. <strong>Anda perlu menekan butang Send / Hantar di dalam aplikasi WhatsApp anda</strong> untuk memulakan perbualan bersama pihak AHSAN BINA.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              id="wa-submit-button"
              type="submit"
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] bg-[#2ea243] hover:bg-[#238234] active:bg-[#1d6b2b] text-white text-lg font-bold rounded-xl shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2ea243] focus:ring-offset-2 cursor-pointer"
            >
              <Send className="w-5 h-5" />
              <span>Buka WhatsApp &amp; Hantar</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3.5 min-h-[48px] bg-gray-100 hover:bg-gray-200 text-gray-800 text-base font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
