/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type MediaSlotType = 'image' | 'video' | 'slideshow';

export type AspectRatio = '16:9' | '4:3' | '1:1' | '9:16' | '21:9';

export interface MediaSlot {
  id: string;
  type: MediaSlotType;
  title: string;
  description: string;
  aspectRatio: AspectRatio;
  recommendedWidth: number;
  recommendedHeight: number;
  currentUrl?: string;
  fallbackAlt: string;
  category: 'hero' | 'market_example' | 'feature' | 'video' | 'proof' | 'education';
  status: 'placeholder' | 'configured';
}

export type ContentVerificationStatus = 
  | 'approved'
  | 'unconfirmed_verification_needed'
  | 'placeholder_for_phase';

export interface MVPSectionItem {
  id: string;
  originalIndex: number;
  originalTitle: string;
  summary: string;
  phaseAssigned: 1 | 2 | 3 | 4 | 5;
  verificationStatus: ContentVerificationStatus;
  notes: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  verificationStatus: ContentVerificationStatus;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  claimedReturn?: string;
  verificationStatus: ContentVerificationStatus;
}
