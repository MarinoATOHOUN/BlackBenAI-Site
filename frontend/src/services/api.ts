/**
 * Service API pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  CompanyInfo,
  Value,
  Service,
  Project,
  Event,
  Partner,
  JobPosition,
  ContactMessage,
  SupportTicket,
  FAQ,
  NewsletterSubscriber,
  BlogPost,
  Testimonial,
  ApiResponse,
  PageData,
  ContactFormData,
  SupportFormData,
  NewsletterFormData,
  JobApplicationData
} from '../types';

// Configuration de base de l'API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://peterking.pythonanywhere.com';

// Instance Axios configurée
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Intercepteur pour les requêtes
apiClient.interceptors.request.use(
  (config) => {
    // Ajouter des headers d'authentification si nécessaire
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', error.response?.data || error.message);
    
    // Gestion des erreurs globales
    if (error.response?.status === 401) {
      // Token expiré ou invalide
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

// Service pour les informations de l'entreprise
export const companyService = {
  getInfo: async (): Promise<CompanyInfo> => {
    const response = await apiClient.get<CompanyInfo>('/api/company-info/');
    return response.data;
  },
};

// Service pour les valeurs
export const valuesService = {
  getAll: async (): Promise<Value[]> => {
    const response = await apiClient.get<ApiResponse<Value>>('/api/values/');
    return response.data.results;
  },
};

// Service pour les services
export const servicesService = {
  getAll: async (): Promise<Service[]> => {
    const response = await apiClient.get<ApiResponse<Service>>('/api/services/');
    return response.data.results;
  },
  
  getById: async (id: number): Promise<Service> => {
    const response = await apiClient.get<Service>(`/api/services/${id}/`);
    return response.data;
  },
};

// Service pour les projets
export const projectsService = {
  getAll: async (): Promise<Project[]> => {
    const response = await apiClient.get<ApiResponse<Project>>('/api/projects/');
    return response.data.results;
  },
  
  getFeatured: async (): Promise<Project[]> => {
    const response = await apiClient.get<ApiResponse<Project>>('/api/projects/featured/');
    return response.data.results;
  },
  
  getById: async (id: number): Promise<Project> => {
    const response = await apiClient.get<Project>(`/api/projects/${id}/`);
    return response.data;
  },
  
  getBySlug: async (slug: string): Promise<Project> => {
    const response = await apiClient.get<Project>(`/api/projects/slug/${slug}/`);
    return response.data;
  },
};

// Service pour les événements
export const eventsService = {
  getAll: async (): Promise<Event[]> => {
    const response = await apiClient.get<ApiResponse<Event>>('/api/events/');
    return response.data.results;
  },
  
  getUpcoming: async (): Promise<Event[]> => {
    const response = await apiClient.get<ApiResponse<Event>>('/api/events/upcoming/');
    return response.data.results;
  },
  
  getById: async (id: number): Promise<Event> => {
    const response = await apiClient.get<Event>(`/api/events/${id}/`);
    return response.data;
  },
};

// Service pour les partenaires
export const partnersService = {
  getAll: async (): Promise<Partner[]> => {
    const response = await apiClient.get<ApiResponse<Partner>>('/api/partners/');
    return response.data.results;
  },
};

// Service pour les postes
export const jobsService = {
  getAll: async (): Promise<JobPosition[]> => {
    const response = await apiClient.get<ApiResponse<JobPosition>>('/api/jobs/');
    return response.data.results;
  },
  
  getById: async (id: number): Promise<JobPosition> => {
    const response = await apiClient.get<JobPosition>(`/api/jobs/${id}/`);
    return response.data;
  },
  
  apply: async (applicationData: JobApplicationData): Promise<void> => {
    const formData = new FormData();
    Object.entries(applicationData).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (value !== undefined) {
        formData.append(key, value.toString());
      }
    });
    
    await apiClient.post('/api/jobs/apply/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

// Service pour les messages de contact
export const contactService = {
  send: async (messageData: ContactFormData): Promise<ContactMessage> => {
    const response = await apiClient.post<ContactMessage>('/api/contact/', messageData);
    return response.data;
  },
};

// Service pour le support technique
export const supportService = {
  createTicket: async (ticketData: SupportFormData): Promise<SupportTicket> => {
    const response = await apiClient.post<SupportTicket>('/api/support/', ticketData);
    return response.data;
  },
  
  getTicket: async (id: number): Promise<SupportTicket> => {
    const response = await apiClient.get<SupportTicket>(`/api/support/${id}/`);
    return response.data;
  },
};

// Service pour les FAQ
export const faqService = {
  getAll: async (): Promise<FAQ[]> => {
    const response = await apiClient.get<ApiResponse<FAQ>>('/api/faq/');
    return response.data.results;
  },
  
  getFeatured: async (): Promise<FAQ[]> => {
    const response = await apiClient.get<ApiResponse<FAQ>>('/api/faq/featured/');
    return response.data.results;
  },
  
  getByCategory: async (category: string): Promise<FAQ[]> => {
    const response = await apiClient.get<ApiResponse<FAQ>>(`/api/faq/?category=${category}`);
    return response.data.results;
  },
};

// Service pour la newsletter
export const newsletterService = {
  subscribe: async (subscriptionData: NewsletterFormData): Promise<NewsletterSubscriber> => {
    const response = await apiClient.post<NewsletterSubscriber>('/api/newsletter/', subscriptionData);
    return response.data;
  },
  
  unsubscribe: async (email: string): Promise<void> => {
    await apiClient.post('/api/newsletter/unsubscribe/', { email });
  },
};

// Service pour le blog
export const blogService = {
  getAll: async (): Promise<BlogPost[]> => {
    const response = await apiClient.get<ApiResponse<BlogPost>>('/api/blog/');
    return response.data.results;
  },
  
  getFeatured: async (): Promise<BlogPost[]> => {
    const response = await apiClient.get<ApiResponse<BlogPost>>('/api/blog/featured/');
    return response.data.results;
  },
  
  getBySlug: async (slug: string): Promise<BlogPost> => {
    const response = await apiClient.get<BlogPost>(`/api/blog/${slug}/`);
    return response.data;
  },
  
  getByCategory: async (category: string): Promise<BlogPost[]> => {
    const response = await apiClient.get<ApiResponse<BlogPost>>(`/api/blog/?category=${category}`);
    return response.data.results;
  },
};

// Service pour les témoignages
export const testimonialsService = {
  getAll: async (): Promise<Testimonial[]> => {
    const response = await apiClient.get<ApiResponse<Testimonial>>('/api/testimonials/');
    return response.data.results;
  },
  
  getFeatured: async (): Promise<Testimonial[]> => {
    const response = await apiClient.get<ApiResponse<Testimonial>>('/api/testimonials/featured/');
    return response.data.results;
  },
};

// Service pour les données de page (endpoint combiné)
export const pageService = {
  getHomeData: async (): Promise<PageData> => {
    const response = await apiClient.get<PageData>('/api/pages/home/');
    return response.data;
  },
};

// Service pour la recherche
export const searchService = {
  search: async (query: string, filters?: Record<string, any>): Promise<any> => {
    const params = new URLSearchParams({ q: query });
    
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }
    
    const response = await apiClient.get(`/api/search/?${params.toString()}`);
    return response.data;
  },
};

// Utilitaires pour la gestion des erreurs
export const handleApiError = (error: any): string => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  
  if (error.response?.data?.detail) {
    return error.response.data.detail;
  }
  
  if (error.response?.status === 404) {
    return 'Ressource non trouvée';
  }
  
  if (error.response?.status === 500) {
    return 'Erreur serveur. Veuillez réessayer plus tard.';
  }
  
  if (error.code === 'NETWORK_ERROR') {
    return 'Erreur de connexion. Vérifiez votre connexion internet.';
  }
  
  return 'Une erreur inattendue s\'est produite';
};

// Export de l'instance axios pour des cas d'usage spéciaux
export { apiClient };

// Export par défaut avec tous les services
export default {
  company: companyService,
  values: valuesService,
  services: servicesService,
  projects: projectsService,
  events: eventsService,
  partners: partnersService,
  jobs: jobsService,
  contact: contactService,
  support: supportService,
  faq: faqService,
  newsletter: newsletterService,
  blog: blogService,
  testimonials: testimonialsService,
  page: pageService,
  search: searchService,
  handleApiError,
};
