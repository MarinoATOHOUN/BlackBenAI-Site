/**
 * Composant ScrollToTop pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
import { colors, transitions, shadows } from '../../styles/theme';

// Styled components
const ScrollButton = styled.button<{ visible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
  border: none;
  color: ${colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: ${shadows.lg};
  transition: ${transitions.base};
  z-index: 1000;
  
  opacity: ${({ visible }) => visible ? 1 : 0};
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  transform: ${({ visible }) => visible ? 'translateY(0)' : 'translateY(20px)'};
  
  &:hover {
    transform: ${({ visible }) => visible ? 'translateY(-4px)' : 'translateY(20px)'};
    box-shadow: ${shadows.glow};
  }
  
  &:active {
    transform: ${({ visible }) => visible ? 'translateY(-2px)' : 'translateY(20px)'};
  }
  
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Faire défiler vers le haut lors du changement de route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Gérer la visibilité du bouton de retour en haut
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButton
      visible={isVisible}
      onClick={scrollToTop}
      aria-label="Retour en haut de la page"
      title="Retour en haut"
    >
      <FaArrowUp />
    </ScrollButton>
  );
};

export default ScrollToTop;