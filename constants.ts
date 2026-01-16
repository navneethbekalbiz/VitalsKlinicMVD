import { Doctor, NavItem, TreatmentItem, TestimonialData, StatItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Experts', href: '#experts' },
  { label: 'Results', href: '#gallery' },
  { label: 'Contact', href: '#footer' },
];

export const SPECIALIZATIONS = [
  {
    title: "Clinical & Aesthetic Dermatology",
    description: "Holistic skin health focusing on acne, pigmentation, and advanced laser resurfacing using gold-standard technology.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop", // Cream/Texture shot
    tag: "Skin Health"
  },
  {
    title: "Advanced Hair Restoration",
    description: "State-of-the-art Bio-FUE transplants and GFC therapies designed for maximum density and natural growth.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2669&auto=format&fit=crop", // Healthy hair shot
    tag: "Hair Sciences"
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Harish Prasad',
    role: 'Chief Dermatologist & Founder',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop' // Professional Male Doctor
  },
  {
    id: '2',
    name: 'Dr. Tanuja Gowda',
    role: 'Aesthetic Physician',
    image: 'https://images.unsplash.com/photo-1594824476969-51c44d7eed77?q=80&w=2670&auto=format&fit=crop' // Professional Female Doctor
  }
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'acne',
    title: 'Acne & Scar Revision',
    description: 'We go beyond surface treatment, addressing the root hormonal and bacterial causes. Our protocol includes MNRF and CO2 Fractional Laser for deep scar revision.',
    image: 'https://images.unsplash.com/photo-1576426863848-c2185fc6e3c1?q=80&w=2670&auto=format&fit=crop', // Close up skin/laser
    features: ['Root Cause Analysis', 'MNRF Treatment', 'Chemical Peels', 'Laser Resurfacing']
  },
  {
    id: 'hair',
    title: 'Hair Transplantation',
    description: 'Restoring confidence with high-density, natural-looking hairlines using minimally invasive Bio-FUE techniques.',
    image: 'https://images.unsplash.com/photo-1634547902360-646876c12c44?q=80&w=2670&auto=format&fit=crop', // Scalp analysis/hair
    features: ['Bio-FUE Transplant', 'GFC / PRP Therapy', 'Cyclical Medical Therapy', 'Scalp Micropigmentation']
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging & Fillers',
    description: 'Subtle, restorative enhancements that respect your natural anatomy. We focus on structural support rather than just volume.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2670&auto=format&fit=crop', // Facial treatment
    features: ['Juvederm / Restylane', 'Botox / Dysport', 'HIFU Lifting', 'Profhilo Bioremodeling']
  },
  {
    id: 'laser',
    title: 'Laser Hair Reduction',
    description: 'The gold standard in permanent hair reduction using US FDA-approved Diode and Alexandrite lasers, safe for Indian skin tones.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2670&auto=format&fit=crop', // Laser machine/treatment
    features: ['Triple Wavelength Laser', 'Pain-Free Technology', 'Full Body Plans', 'Safe for Tan Skin']
  }
];

export const STATS: StatItem[] = [
  { value: '15k+', label: 'Successful Procedures' },
  { value: '12+', label: 'Years of Experience' },
  { value: '100%', label: 'FDA Approved Tech' },
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: '1',
    quote: "Dr. Harish is incredible. He didn't just treat my acne; he explained why it was happening. My skin has never been this clear.",
    author: "Sneha R.",
    procedure: "Acne Protocol"
  },
  {
    id: '2',
    quote: "I was skeptical about hair transplant, but the results at Vitals are indistinguishable from my natural hair. Highly recommend.",
    author: "Arjun M.",
    procedure: "Bio-FUE Transplant"
  },
  {
    id: '3',
    quote: "Professional, clean, and honest. They actually advised me against a filler I didn't need. That's integrity.",
    author: "Priya K.",
    procedure: "Aesthetic Consultation"
  }
];