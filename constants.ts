import { Doctor, NavItem, TreatmentItem, TestimonialData, StatItem } from './types';
import aestheticDerma from './components/ASSETS/HERO/Aesthethic Derma.jpg';
import hairRestore from './components/ASSETS/HERO/HairRestore.jpg';
import acneRevision from './components/ASSETS/HERO/acnerevision.jpg';
import hairTransplant from './components/ASSETS/HERO/hairtrans.jpg';
import fillers from './components/ASSETS/HERO/fillers.jpg';
import laserReduce from './components/ASSETS/HERO/laserreduce.jpg';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About Us',
    href: '#about',
    children: [
      { label: 'Our Team', href: '#experts' },
      { label: 'Our Infrastructure', href: '#infrastructure' }, // Placeholder href
      { label: 'Why Vitals Klinic', href: '#why-us' } // Placeholder href
    ]
  },
  {
    label: 'Our Services',
    href: '#treatments',
    children: [
      { label: 'Hair Care', href: '#hair-care' },
      { label: 'Skincare', href: '#skincare' },
      { label: 'Anti Aging', href: '#anti-aging' },
      { label: 'Dermato Surgeries', href: '#surgeries' }
    ]
  },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact Us', href: '#footer' },
];

export const SPECIALIZATIONS = [
  {
    title: "Clinical & Aesthetic Dermatology",
    description: "Holistic skin health focusing on acne, pigmentation, and advanced laser resurfacing using gold-standard technology.",
    image: aestheticDerma,
    tag: "Skin Health"
  },
  {
    title: "Advanced Hair Restoration",
    description: "State-of-the-art Bio-FUE transplants and GFC therapies designed for maximum density and natural growth.",
    image: hairRestore,
    tag: "Hair Sciences"
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Harish Prasad',
    role: 'Chief Dermatologist & Founder',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop' // Male Doctor
  },
  {
    id: '2',
    name: 'Dr. Tanuja Gowda',
    role: 'Aesthetic Physician',
    image: 'https://images.unsplash.com/photo-1594824476969-51c44d7eed77?q=80&w=1000&auto=format&fit=crop' // Female Doctor
  }
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'acne',
    title: 'Acne & Scar Revision',
    description: 'We go beyond surface treatment, addressing the root hormonal and bacterial causes. Our protocol includes MNRF and CO2 Fractional Laser for deep scar revision.',
    image: acneRevision,
    features: ['Root Cause Analysis', 'MNRF Treatment', 'Chemical Peels', 'Laser Resurfacing']
  },
  {
    id: 'hair',
    title: 'Hair Transplantation',
    description: 'Restoring confidence with high-density, natural-looking hairlines using minimally invasive Bio-FUE techniques.',
    image: hairTransplant,
    features: ['Bio-FUE Transplant', 'GFC / PRP Therapy', 'Cyclical Medical Therapy', 'Scalp Micropigmentation']
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging & Fillers',
    description: 'Subtle, restorative enhancements that respect your natural anatomy. We focus on structural support rather than just volume.',
    image: fillers,
    features: ['Juvederm / Restylane', 'Botox / Dysport', 'HIFU Lifting', 'Profhilo Bioremodeling']
  },
  {
    id: 'laser',
    title: 'Laser Hair Reduction',
    description: 'The gold standard in permanent hair reduction using US FDA-approved Diode and Alexandrite lasers, safe for Indian skin tones.',
    image: laserReduce,
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