/**
 * Composant Footer pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React, { useState } from 'react';
import { newsletterService } from '../../services/api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaCode,
  FaBrain,
  FaRocket
} from 'react-icons/fa';
import { colors, breakpoints, shadows, transitions } from '../../styles/theme';
import { Container, Button } from '../../styles/GlobalStyles';

// Styled components
const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  border-top: 1px solid ${colors.border};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(233, 69, 96, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 4rem 0 2rem;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 3rem 0 2rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 2rem;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${colors.text};
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    .section-icon {
      color: ${colors.accent};
      font-size: 1rem;
    }
  }
`;

const CompanyInfo = styled(FooterSection)`
  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    
    .logo-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.text};
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .logo-text {
      .company-name {
        display: block;
        font-size: 1.5rem;
        font-weight: 800;
        color: ${colors.text};
        line-height: 1;
      }
      
      .tagline {
        font-size: 0.8rem;
        color: ${colors.textSecondary};
        line-height: 1;
      }
    }
  }
  
  .description {
    color: ${colors.textSecondary};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: ${colors.textSecondary};
      font-size: 0.9rem;
      
      .contact-icon {
        color: ${colors.accent};
        font-size: 1rem;
        width: 16px;
      }
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
  li {
    margin-bottom: 0.75rem;
    
    a {
      color: ${colors.textSecondary};
      text-decoration: none;
      font-size: 0.9rem;
      transition: ${transitions.base};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      &:hover {
        color: ${colors.accent};
        transform: translateX(4px);
      }
      
      .link-icon {
        font-size: 0.8rem;
        opacity: 0;
        transition: ${transitions.base};
      }
      
      &:hover .link-icon {
        opacity: 1;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: ${colors.textSecondary};
    font-size: 1.2rem;
    transition: ${transitions.base};
    
    &:hover {
      background: ${colors.accent};
      color: ${colors.text};
      transform: translateY(-2px);
      box-shadow: ${shadows.glow};
    }
    
    &.facebook:hover { background: #1877f2; }
    &.twitter:hover { background: #1da1f2; }
    &.linkedin:hover { background: #0077b5; }
    &.github:hover { background: #333; }
    &.instagram:hover { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }
    &.youtube:hover { background: #ff0000; }
  }
`;

const NewsletterSection = styled(FooterSection)`
  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    .form-group {
      display: flex;
      gap: 0.5rem;
      
      input {
        flex: 1;
        padding: 0.75rem 1rem;
        border: 1px solid ${colors.border};
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        color: ${colors.text};
        font-size: 0.9rem;
        
        &::placeholder {
          color: ${colors.textSecondary};
        }
        
        &:focus {
          outline: none;
          border-color: ${colors.accent};
          box-shadow: 0 0 0 3px rgba(233, 69, 96, 0.1);
        }
      }
      
      button {
        padding: 0.75rem 1rem;
        background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
        border: none;
        border-radius: 8px;
        color: ${colors.text};
        cursor: pointer;
        transition: ${transitions.base};
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: ${shadows.glow};
        }
      }
    }
    
    .newsletter-description {
      color: ${colors.textSecondary};
      font-size: 0.8rem;
      line-height: 1.4;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${colors.border};
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const Copyright = styled.div`
  color: ${colors.textSecondary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .heart {
    color: ${colors.accent};
    animation: pulse 2s ease-in-out infinite;
  }
  
  .code {
    color: ${colors.success};
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  a {
    color: ${colors.textSecondary};
    text-decoration: none;
    font-size: 0.9rem;
    transition: ${transitions.base};
    
    &:hover {
      color: ${colors.accent};
    }
  }
`;

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribing(true);
    setNewsletterSuccess(false);
    setNewsletterError('');
    try {
      await newsletterService.subscribe({ email });
      setEmail('');
      setNewsletterSuccess(true);
      setTimeout(() => setNewsletterSuccess(false), 5000);
    } catch (error: any) {
      setNewsletterError(error?.response?.data?.message || "Erreur lors de l'abonnement. Essayez à nouveau.");
      setTimeout(() => setNewsletterError(''), 5000);
    } finally {
      setIsSubscribing(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterGrid>
            {/* Informations de l'entreprise */}
            <CompanyInfo>
              <div className="logo">
                <div className="logo-icon"><img src="/logo.png" alt="Logo BlackBenAI" style={{ width: '40px', height: '40px' }} /></div>
                <div className="logo-text">
                  <span className="company-name">BlackBenAI</span>
                  <span className="tagline">L'IA au service de l'Afrique</span>
                </div>
              </div>
              
              <p className="description">
                Startup béninoise spécialisée dans le développement de solutions 
                d'intelligence artificielle innovantes pour l'autonomie technologique de l'Afrique.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Cotonou, Bénin</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>mahouliatohoun502@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+229 01 59 03 71 70</span>
                </div>
              </div>
              
              <SocialLinks>
                <a href="#" className="facebook" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="twitter" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="linkedin" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className="github" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="#" className="instagram" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="youtube" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </SocialLinks>
            </CompanyInfo>

            {/* Liens rapides */}
            <FooterSection>
              <h3>
                <FaRocket className="section-icon" />
                Navigation
              </h3>
              <FooterLinks>
                <li>
                  <Link to="/about">
                    <FaArrowRight className="link-icon" />
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <FaArrowRight className="link-icon" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects">
                    <FaArrowRight className="link-icon" />
                    Projets
                  </Link>
                </li>
                <li>
                  <Link to="/events">
                    <FaArrowRight className="link-icon" />
                    Événements
                  </Link>
                </li>
                <li>
                  <Link to="/careers">
                    <FaArrowRight className="link-icon" />
                    Carrières
                  </Link>
                </li>
              </FooterLinks>
            </FooterSection>

            {/* Support */}
            <FooterSection>
              <h3>
                <FaBrain className="section-icon" />
                Support
              </h3>
              <FooterLinks>
                <li>
                  <Link to="/contact">
                    <FaArrowRight className="link-icon" />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/support">
                    <FaArrowRight className="link-icon" />
                    Support technique
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <FaArrowRight className="link-icon" />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <FaArrowRight className="link-icon" />
                    Blog
                  </Link>
                </li>
              </FooterLinks>
            </FooterSection>

            {/* Newsletter */}
            <NewsletterSection>
              <h3>
                <FaEnvelope className="section-icon" />
                Newsletter
              </h3>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" disabled={isSubscribing}>
                    <FaArrowRight />
                  </button>
                </div>
                {newsletterSuccess && (
                  <p style={{ color: '#2ed573', marginTop: '10px' }}>
                    Abonnement réussi ! Merci de rejoindre la newsletter.
                  </p>
                )}
                {newsletterError && (
                  <p style={{ color: '#ff4d4f', marginTop: '10px' }}>
                    {newsletterError}
                  </p>
                )}
                <p className="newsletter-description">
                  Restez informé de nos dernières innovations et actualités IA.
                </p>
              </form>
            </NewsletterSection>
          </FooterGrid>

          <FooterBottom>
            <Copyright>
              <span>© {currentYear} BlackBenAI. Développé avec</span>
              <FaHeart className="heart" />
              <span>et</span>
              <FaCode className="code" />
              <span>par L'équipe de développement de BlackBenAI</span>
            </Copyright>
            
            <LegalLinks>
              <Link to="/privacy">Politique de confidentialité</Link>
              <Link to="/terms">Conditions d'utilisation</Link>
            </LegalLinks>
          </FooterBottom>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer;