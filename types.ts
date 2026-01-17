export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface TreatmentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  procedure: string;
}

export interface StatItem {
  value: string;
  label: string;
}
