/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { WhatsAppFormData } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Shield,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Map,
} from 'lucide-react';

export const HubungiView: React.FC = () => {
  const [formData, setFormData] = useState<WhatsAppFormData>({
    fullName: '',
    phone: '',
    service: 'Bina Rumah IBS',
    location: 'Shah Alam, Selangor',
    otherLocation: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
      errs.otherLocation = 'Sila nyatakan kawasan atau negeri lokasi anda.';
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
      : 'Tertakluk kepada sebut harga & pelan';

    const messageText = formData.message?.trim()
      ? formData.message.trim()
      : 'Berminat untuk mendapatkan sebut harga rasmi dan semakan tapak binaan.';

    const malayWhatsAppMessage = `Salam hormat AHSAN BINA, saya ingin mendapatkan maklumat lanjut / sebut harga bagi projek binaan:

*MAKLUMAT PERTANYAAN:*
• Nama Penuh: ${formData.fullName.trim()}
• No. Telefon: ${formData.phone.trim()}
• Perkhidmatan: ${formData.service}
• Lokasi Projek: ${actualLocation}
• Anggaran Bajet: ${budgetText}

*KETERANGAN PROJEK:*
${messageText}

Mohon maklum balas pihak AHSAN BINA. Terima kasih.`;

    const encoded = encodeURIComponent(malayWhatsAppMessage);
    const targetUrl = `https://wa.me/60134865839?text=${encoded}`;

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Header */}
      <section id="hubungi-header" className="pt-6 sm:pt-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="px-3.5 py-1.5 rounded-full bg-[#2ea243]/10 text-xs sm:text-sm font-bold text-[#2ea243] uppercase tracking-wider inline-block mb-4">
          Saluran Rasmi Syarikat
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2a] tracking-tight mb-4">
          Hubungi AHSAN BINA
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Sedia berbincang untuk membina atau mengubah suai kediaman anda. Hubungi kami melalui WhatsApp, panggilan telefon, emel atau kunjungi alamat rasmi kami di Seksyen 25 Shah Alam.
        </p>
      </section>

      {/* Main Content Grid: Contact Details & Integrated Form */}
      <section id="contact-details-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Official Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold text-[#0d1b2a]">
              Maklumat Perhubungan Rasmi
            </h2>

            {/* Address Card with Google Maps search link (without inventing coordinates) */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200/90 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0d1b2a]">Alamat Pejabat Operasi</h3>
                  <span className="text-xs text-gray-500">Ibu Pejabat Shah Alam</span>
                </div>
              </div>

              <p className="text-gray-800 text-base sm:text-lg leading-relaxed pt-1">
                {BUSINESS_INFO.address}
              </p>

              <div className="pt-2">
                <a
                  id="hubungi-maps-link"
                  href={BUSINESS_INFO.addressMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] bg-red-50 hover:bg-red-100 text-red-700 font-bold text-sm rounded-xl transition-colors"
                >
                  <Map className="w-4 h-4" />
                  <span>Buka Carian Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2ea243]/15 flex items-center justify-center text-[#2ea243] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0d1b2a]">Talian Telefon &amp; WhatsApp</h3>
                  <span className="text-xs text-gray-500">Hubungi Waktu Pejabat</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-sm font-semibold text-gray-600">Panggilan Terus:</span>
                  <a
                    id="hubungi-phone-link"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="font-extrabold text-lg text-[#0d1b2a] hover:text-[#2ea243]"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                  <span className="text-sm font-semibold text-green-800">WhatsApp Rasmi:</span>
                  <a
                    id="hubungi-whatsapp-link"
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-lg text-[#2ea243] hover:underline"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200/90 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0d1b2a]">Emel Pertanyaan</h3>
                  <span className="text-xs text-gray-500">Hantarkan Pelan atau Dokumen</span>
                </div>
              </div>

              <p className="text-base text-gray-700">
                Untuk penghantaran dokumen pelan tapak, lukisan arkitek atau tender sebut harga:
              </p>

              <a
                id="hubungi-email-link"
                href={`mailto:${BUSINESS_INFO.email}`}
                className="inline-block font-bold text-lg text-blue-700 hover:underline break-all"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>

            {/* Facebook Official Card */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200/90 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0d1b2a]">Laman Facebook Rasmi</h3>
                  <span className="text-xs text-gray-500">Ikuti Perkembangan Semasa</span>
                </div>
              </div>

              <div className="pt-1">
                <a
                  id="hubungi-facebook-link"
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-colors"
                >
                  <span>facebook.com/ahsanpembina</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Full WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2ea243]/10 text-[#2ea243] text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Borang Pertanyaan Terus Ke WhatsApp</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b2a]">
                  Hantar Maklumat Projek Anda
                </h2>
                <p className="text-gray-700 text-base sm:text-lg mt-1">
                  Lengkapkan borang di bawah untuk menyusun pertanyaan lengkap. Sistem akan membuka WhatsApp anda untuk dihantar ke talian <strong>013-486 5839</strong>.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="hubungi-name" className="block text-base font-semibold text-[#0d1b2a] mb-1">
                    Nama Penuh <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="hubungi-name"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Contoh: Mohd Firdaus bin Ismail"
                    className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 text-base"
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="hubungi-phone" className="block text-base font-semibold text-[#0d1b2a] mb-1">
                    Nombor Telefon WhatsApp <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="hubungi-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Contoh: 013-4865839"
                    className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 text-base"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="hubungi-service" className="block text-base font-semibold text-[#0d1b2a] mb-1">
                    Perkhidmatan Binaan <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="hubungi-service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 text-base bg-white"
                  >
                    <option value="Bina Rumah IBS">Bina Rumah IBS (Panel Pasang Siap)</option>
                    <option value="Bina Rumah Konvensional">Bina Rumah Konvensional</option>
                    <option value="Renovasi & Ubah Suai">Renovasi &amp; Ubah Suai Rumah</option>
                    <option value="Pendawaian Elektrik">Pendawaian Elektrik</option>
                    <option value="Kerja Paip">Kerja Paip (Plumbing)</option>
                    <option value="Hiasan Dalaman">Hiasan Dalaman &amp; Siling Plaster</option>
                    <option value="Rundingan & Pelan">Khidmat Rundingan &amp; Pelan Rumah</option>
                  </select>
                </div>

                {/* Location Selection */}
                <div>
                  <label htmlFor="hubungi-location" className="block text-base font-semibold text-[#0d1b2a] mb-1">
                    Lokasi Tapak Projek <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="hubungi-location"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 text-base bg-white"
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
                        placeholder="Sila nyatakan kawasan / negeri anda..."
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

                {/* Budget */}
                <div>
                  <label htmlFor="hubungi-budget" className="block text-base font-semibold text-[#0d1b2a] mb-1">
                    Anggaran Bajet (Pilihan)
                  </label>
                  <input
                    id="hubungi-budget"
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="Contoh: RM120,000 / Mengikut cadangan sebut harga"
                    className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 text-base"
                  />
                </div>

                {/* Project Message / Notes */}
                <div>
                  <label htmlFor="hubungi-message" className="block text-base font-semibold text-[#0d1b2a] mb-1">
                    Keterangan Projek / Saiz Tapak (Pilihan)
                  </label>
                  <textarea
                    id="hubungi-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Contoh: Rancang bina banglo setingkat 3 bilik tidur di atas tanah sendiri..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2ea243] focus:ring-2 focus:ring-[#2ea243]/20 text-base resize-y"
                  ></textarea>
                </div>

                {/* Notice regarding WhatsApp delivery */}
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 flex items-start gap-2.5">
                  <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Peringatan WhatsApp:</strong> Selepas anda menekan butang hijau di bawah, aplikasi WhatsApp anda akan dibuka secara automatik dengan mesej yang telah lengkap diisi ini. <strong>Anda perlu menekan butang 'Hantar' di WhatsApp anda</strong> untuk memulakan perbualan bersama AHSAN BINA.
                  </p>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="hubungi-form-submit-btn"
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 min-h-[50px] bg-[#2ea243] hover:bg-[#238234] text-white text-lg font-bold rounded-xl shadow-md transition-all active:scale-98 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Hantar Pertanyaan Melalui WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Kawasan Servis Cards for Shah Alam and Kuala Terengganu */}
      <section id="kawasan-servis-detail-cards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-sm font-bold text-[#2ea243] uppercase tracking-widest">
            Liputan Operasi
          </span>
          <h2 className="text-3xl font-extrabold text-[#0d1b2a]">
            Kawasan Servis Utama Kami
          </h2>
          <p className="text-gray-700 text-lg">
            AHSAN BINA memberi tumpuan operasi pembinaan di dua zon utama berikut:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shah Alam Card */}
          <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#2ea243]/15 text-[#2ea243] flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0d1b2a]">Shah Alam &amp; Sekitar Selangor</h3>
                <span className="text-sm text-gray-500">Ibu Pejabat &amp; Lembah Klang</span>
              </div>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Meliputi kawasan Seksyen 25, Seksyen 7, Seksyen 13, Kota Kemuning, Setia Alam, Klang, Petaling Jaya, Subang Jaya, Puchong dan kawasan berdekatan di Selangor.
            </p>

            <div className="pt-2 flex items-center gap-2 text-sm text-[#2ea243] font-bold">
              <CheckCircle2 className="w-5 h-5" />
              <span>Pemeriksaan Tapak &amp; Rundingan Bersemuka Disediakan</span>
            </div>
          </div>

          {/* Kuala Terengganu Card */}
          <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#2ea243]/15 text-[#2ea243] flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0d1b2a]">Kuala Terengganu &amp; Sekitar Terengganu</h3>
                <span className="text-sm text-gray-500">Cawangan Pantai Timur</span>
              </div>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Meliputi kawasan bandar Kuala Terengganu, Marang, Kuala Nerus, Batu Rakit, Gong Badak dan kawasan pesisir berhampiran untuk projek rumah persendirian mahupun ubah suai.
            </p>

            <div className="pt-2 flex items-center gap-2 text-sm text-[#2ea243] font-bold">
              <CheckCircle2 className="w-5 h-5" />
              <span>Pasukan Kerja Tempatan Berpengalaman</span>
            </div>
          </div>
        </div>

        {/* Other locations prompt: "Lokasi lain? Hubungi kami untuk semakan." */}
        <div className="mt-8 p-6 bg-[#f4f6f4] rounded-2xl border border-gray-200 text-center space-y-3">
          <h4 className="text-xl font-bold text-[#0d1b2a]">
            Lokasi lain di luar Shah Alam atau Terengganu?
          </h4>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            Hubungi kami untuk semakan kesesuaian tapak, logistik pengangkutan panel IBS, dan jadual pembinaan semasa pasukan kami.
          </p>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] bg-[#2ea243] hover:bg-[#238234] text-white font-bold text-base rounded-xl shadow-xs transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Semak Lokasi Anda Melalui WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};
