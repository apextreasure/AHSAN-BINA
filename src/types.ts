/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageRoute = 'utama' | 'servis' | 'portfolio' | 'hubungi';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  imageSrc?: string;
  imageAlt?: string;
  servicePageImageSrc?: string;
  servicePageImageAlt?: string;
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'kemajuan' | 'rujukan' | 'promosi';
  categoryLabel: string;
  imageSrc: string;
  altText: string;
  caption: string;
  dateOrLocation?: string;
  prefix: string;
  warningNote?: string;
}

export interface WhatsAppFormData {
  fullName: string;
  phone: string;
  service: string;
  location: string;
  otherLocation?: string;
  budget?: string;
  message?: string;
}
