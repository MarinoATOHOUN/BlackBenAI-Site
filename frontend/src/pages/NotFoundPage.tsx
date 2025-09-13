/**
 * Page 404 - Page non trouvée pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaHome, FaSearch, FaRobot, FaArrowLeft } from 'react-icons/fa';

import { colors, breakpoints } from '../styles/theme';
import { Container, Button, Flex } from '../styles/GlobalStyles';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.background} 0%, ${colors.primary} 100%);
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
      radial-gradient(circle at 20% 80%, rgba(233, 69, 96, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const NotFoundContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding: 2rem;
  
  .error-code {
    font-size: 8rem;
    font-weight: 900;
    background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 1rem;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 6rem;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 4rem;
    }
  }
  
  .robot-icon {
    font-size: 4rem;
    color: ${colors.accent};
    margin-bottom: 2rem;
    animation: bounce 2s ease-in-out infinite;
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${colors.text};
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2rem;
    }
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: ${colors.textSecondary};
    margin-bottom: 2rem;
    line-height: 1.6;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
  
  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    
    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      align-items: center;
    }
  }
  
  .suggestions {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid ${colors.border};
    border-radius: 12px;
    padding: 2rem;
    margin-top: 2rem;
    
    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: ${colors.text};
    }
    
    .suggestion-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      
      a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid ${colors.border};
        border-radius: 8px;
        color: ${colors.textSecondary};
        text-decoration: none;
        transition: all 0.3s ease;
        
        &:hover {
          background: rgba(233, 69, 96, 0.1);
          border-color: ${colors.accent};
          color: ${colors.accent};
          transform: translateY(-2px);
        }
        
        .link-icon {
          font-size: 1.2rem;
        }
        
        .link-text {
          font-weight: 500;
        }
      }
    }
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page non trouvée - BlackBenAI</title>
        <meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée." />
      </Helmet>

      <NotFoundContainer>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <NotFoundContent>
              <motion.div
                className="error-code"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                404
              </motion.div>
              
              <motion.div
                className="robot-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <FaRobot />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Page non trouvée
              </motion.h1>
              
              <motion.p
                className="subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Oups ! Il semblerait que notre IA n'ait pas pu localiser cette page. 
                Elle a peut-être été déplacée ou n'existe plus.
              </motion.p>
              
              <motion.div
                className="actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button as={Link} to="/" size="lg">
                  <FaHome />
                  Retour à l'accueil
                </Button>
                <Button as={Link} to="/contact" variant="outline" size="lg">
                  <FaSearch />
                  Nous contacter
                </Button>
              </motion.div>
              
              <motion.div
                className="suggestions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <h3>Peut-être cherchiez-vous :</h3>
                <div className="suggestion-links">
                  <Link to="/about">
                    <FaArrowLeft className="link-icon" />
                    <span className="link-text">À propos de nous</span>
                  </Link>
                  <Link to="/projects">
                    <FaArrowLeft className="link-icon" />
                    <span className="link-text">Nos projets</span>
                  </Link>
                  <Link to="/services">
                    <FaArrowLeft className="link-icon" />
                    <span className="link-text">Nos services</span>
                  </Link>
                  <Link to="/careers">
                    <FaArrowLeft className="link-icon" />
                    <span className="link-text">Carrières</span>
                  </Link>
                  <Link to="/blog">
                    <FaArrowLeft className="link-icon" />
                    <span className="link-text">Blog</span>
                  </Link>
                  <Link to="/faq">
                    <FaArrowLeft className="link-icon" />
                    <span className="link-text">FAQ</span>
                  </Link>
                </div>
              </motion.div>
            </NotFoundContent>
          </motion.div>
        </Container>
      </NotFoundContainer>
    </>
  );
};

export default NotFoundPage;