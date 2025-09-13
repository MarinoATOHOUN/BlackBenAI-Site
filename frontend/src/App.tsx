/**
 * Composant principal de l'application BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

// Composants de layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import ScrollToTop from './components/common/ScrollToTop';

// Chargement paresseux des pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Styled components
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  position: relative;
  z-index: 1;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

// Composant de fallback pour le Suspense
const PageLoader: React.FC = () => (
  <LoadingContainer>
    <LoadingSpinner size="large" />
  </LoadingContainer>
);

const App: React.FC = () => {
  return (
    <AppContainer>
      <Helmet>
        <html lang="fr" />
        <title>BlackBenAI - L'Intelligence Artificielle au service de l'Afrique</title>
        <meta 
          name="description" 
          content="BlackBenAI est une startup béninoise spécialisée dans le développement de solutions d'intelligence artificielle innovantes pour l'Afrique. Fondée par Marino ATOHOUN." 
        />
        <meta 
          name="keywords" 
          content="BlackBenAI, Intelligence Artificielle, IA, Afrique, Bénin, Startup, Tech, Innovation, Marino ATOHOUN, Edushare, GuardClause, SecurLog, WithSign, HowRoadCode, MyCompanyGen" 
        />
        <meta name="author" content="Marino ATOHOUN" />
        <meta property="og:site_name" content="BlackBenAI" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="canonical" href="https://blackbenai.com" />
      </Helmet>

      <ScrollToTop />
      <Header />
      
      <MainContent>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<HomePage />} />
            
            {/* Pages principales */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Support et FAQ */}
            <Route path="/support" element={<SupportPage />} />
            <Route path="/faq" element={<FAQPage />} />
            
            {/* Blog */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            
            {/* Pages légales */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            
            {/* Redirections pour compatibilité */}
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/entreprise" element={<AboutPage />} />
            <Route path="/nos-services" element={<ServicesPage />} />
            <Route path="/nos-projets" element={<ProjectsPage />} />
            <Route path="/evenements" element={<EventsPage />} />
            <Route path="/partenaires" element={<PartnersPage />} />
            <Route path="/carrieres" element={<CareersPage />} />
            <Route path="/emplois" element={<CareersPage />} />
            <Route path="/nous-contacter" element={<ContactPage />} />
            <Route path="/support-technique" element={<SupportPage />} />
            <Route path="/politique-confidentialite" element={<PrivacyPage />} />
            <Route path="/conditions-utilisation" element={<TermsPage />} />
            
            {/* Page 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </MainContent>
      
      <Footer />
    </AppContainer>
  );
};

export default App;