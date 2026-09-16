export type EntityCategory = 'pt' | 'kemitraan' | 'sosial' | 'izin_tambahan';

export type PackageTier = 'dasar' | 'lengkap' | 'virtual_office';

export interface LegalEntity {
  id: string;
  name: string;
  code: string;
  shortDescription: string;
  fullDescription: string;
  category: EntityCategory;
  badge?: string;
  popular?: boolean;
  basePrice: number; // Requested exact base price
  completePrice: number; // Tier Lengkap
  virtualOfficePrice: number; // Tier All-In VO
  processingTime: string;
  minCapital: string;
  minFounders: string;
  responsibility: string;
  inclusions: {
    dasar: string[];
    lengkap: string[];
    virtual_office: string[];
  };
  suitableFor: string[];
  requirements: string[];
  icon: string;
}

export interface AddonService {
  id: string;
  name: string;
  category: 'pajak' | 'hki' | 'perbankan' | 'operasional' | 'sertifikasi';
  description: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  icon: string;
  benefit: string;
}

export interface QuizAnswer {
  foundersCount: '1' | '2_or_more' | 'many_social' | 'foreign';
  capitalRange: 'micro' | 'under_1b' | '1b_to_5b' | 'above_5b';
  goal: 'commercial' | 'social_community' | 'cooperative' | 'professional_partnership';
  needsLiabilityProtection: boolean;
}

export interface QuizResult {
  recommendedEntityId: string;
  matchScore: number;
  reason: string;
  keyBenefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  avatar: string;
  content: string;
  rating: number;
  serviceUsed: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'umum' | 'pt' | 'cv' | 'pajak_izin' | 'virtual_office';
}
