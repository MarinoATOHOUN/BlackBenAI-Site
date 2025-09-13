/**
 * Types TypeScript pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

// Types de base
export interface CompanyInfo {
  id: number;
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  founded_date: string;
  founder: string;
  logo?: string;
  hero_image?: string;
}

export interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface Service {
  id: number;
  name: string;
  short_description: string;
  description: string;
  icon: string;
  is_active: boolean;
  order: number;
}

export interface ProjectImage {
  id: number;
  image: string;
  caption?: string;
  order: number;
}

export interface Project {
  id: number;
  name: string;
  short_description: string;
  description: string;
  technology_stack: string;
  features: string;
  demo_url?: string;
  github_url?: string;
  website_url?: string;
  image?: string;
  logo?: string;
  is_featured: boolean;
  is_active: boolean;
  created_date: string;
  order: number;
  images: ProjectImage[];
}

export interface Event {
  id: number;
  title: string;
  short_description: string;
  description: string;
  date: string;
  location: string;
  event_type: 'conference' | 'workshop' | 'launch' | 'meetup' | 'webinar' | 'other';
  image?: string;
  registration_url?: string;
  is_featured: boolean;
}

export interface Partner {
  id: number;
  name: string;
  description: string;
  logo?: string;
  website_url?: string;
  partnership_type: 'strategic' | 'technology' | 'academic' | 'investor' | 'client';
  is_active: boolean;
  order: number;
}

export interface JobPosition {
  id: number;
  title: string;
  department: 'engineering' | 'management' | 'marketing' | 'sales' | 'hr' | 'finance' | 'other';
  description: string;
  requirements: string;
  benefits: string;
  location: string;
  employment_type: 'full_time' | 'part_time' | 'contract' | 'internship';
  is_active: boolean;
  created_date: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  created_date: string;
  is_read: boolean;
}

export interface SupportTicket {
  id: number;
  name: string;
  email: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  created_date: string;
  updated_date: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'projects' | 'technical' | 'billing';
  is_featured: boolean;
  order: number;
}

export interface NewsletterSubscriber {
  id: number;
  email: string;
  name?: string;
  is_active: boolean;
  subscribed_date: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: 'ai' | 'projects' | 'news' | 'tutorials' | 'insights';
  tags: string;
  featured_image?: string;
  is_published: boolean;
  is_featured: boolean;
  published_date: string;
  created_date: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
  is_featured: boolean;
  order: number;
}

// Types pour les réponses API
export interface ApiResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}

export interface PageData {
  company_info: CompanyInfo;
  values: Value[];
  services: Service[];
  featured_projects: Project[];
  recent_events: Event[];
  partners: Partner[];
  testimonials: Testimonial[];
  featured_blog_posts: BlogPost[];
}

// Types pour les formulaires
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface SupportFormData {
  name: string;
  email: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}

export interface JobApplicationData {
  name: string;
  email: string;
  phone?: string;
  position: string;
  cover_letter: string;
  resume?: File;
}

// Types pour les animations
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
    };
  };
}

// Types pour les couleurs du thème
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  textLight: string;
  border: string;
  success: string;
  warning: string;
  error: string;
}

// Types pour les breakpoints
export interface Breakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
  wide: string;
}

// Types pour les ombres
export interface ThemeShadows {
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  large: string;
  glow: string;
  glowBlue: string;
  glowGreen: string;
}

// Types pour le Grid
export interface GridProps {
  columns?: number;
  gap?: string;
}

export interface StyledGridProps extends GridProps {
  children: React.ReactNode;
}