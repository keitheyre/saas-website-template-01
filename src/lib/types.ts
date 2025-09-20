export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Reason {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface PricingTier {
  id: number;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}