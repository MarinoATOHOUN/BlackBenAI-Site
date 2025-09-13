/**
 * Composant Header pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaBuilding, 
  FaCogs, 
  FaProjectDiagram, 
  FaCalendarAlt, 
  FaHandshake, 
  FaBriefcase, 
  FaEnvelope,
  FaQuestionCircle,
  FaBlog
} from 'react-icons/fa';
import { colors, transitions, shadows, breakpoints } from '../../styles/theme';

// Types
interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

// Navigation items
const navItems: NavItem[] = [
  {
    path: '/',
    label: 'Accueil',
    icon: <FaHome />
  },
  {
    path: '/about',
    label: 'Entreprise',
    icon: <FaBuilding />
  },
  {
    path: '/services',
    label: 'Services',
    icon: <FaCogs />
  },
  {
    path: '/projects',
    label: 'Projets',
    icon: <FaProjectDiagram />
  },
  {
    path: '/events',
    label: 'Événements',
    icon: <FaCalendarAlt />
  },
  {
    path: '/partners',
    label: 'Partenaires',
    icon: <FaHandshake />
  },
  {
    path: '/careers',
    label: 'Carrières',
    icon: <FaBriefcase />
  },
  {
    path: '/blog',
    label: 'Blog',
    icon: <FaBlog />
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: <FaEnvelope />
  }
];

// Styled components
const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ scrolled }) => 
    scrolled 
      ? `rgba(15, 15, 30, 0.95)` 
      : 'transparent'
  };
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ scrolled }) => 
    scrolled 
      ? `1px solid ${colors.border}` 
      : 'none'
  };
  transition: ${transitions.base};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ scrolled }) => 
      scrolled 
        ? `linear-gradient(135deg, ${colors.primary}ee 0%, ${colors.secondary}ee 100%)` 
        : 'transparent'
    };
    z-index: -1;
  }
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 1rem;
    height: 70px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: ${colors.text};
  font-size: 1.5rem;
  font-weight: 800;
  transition: ${transitions.base};
  
  &:hover {
    color: ${colors.accent};
    text-decoration: none;
  }
  
  .logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.text};
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .logo-text {
    .company-name {
      display: block;
      line-height: 1;
    }
    
    .tagline {
      font-size: 0.7rem;
      font-weight: 400;
      color: ${colors.textSecondary};
      line-height: 1;
    }
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    .logo-icon {
      width: 35px;
      height: 35px;
      font-size: 1rem;
    }
    
    font-size: 1.3rem;
    
    .logo-text .tagline {
      font-size: 0.6rem;
    }
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ active }) => active ? colors.accent : colors.textSecondary};
  text-decoration: none;
  font-weight: ${({ active }) => active ? 600 : 500};
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: ${transitions.base};
  position: relative;
  
  &:hover {
    color: ${colors.accent};
    background: rgba(233, 69, 96, 0.1);
    text-decoration: none;
  }
  
  .nav-icon {
    font-size: 0.8rem;
  }
  
  ${({ active }) => active && `
    background: rgba(233, 69, 96, 0.15);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: ${colors.accent};
      border-radius: 1px;
    }
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: ${transitions.base};
  
  &:hover {
    background: rgba(233, 69, 96, 0.1);
    color: ${colors.accent};
  }
  
  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: ${colors.primary};
  border-bottom: 1px solid ${colors.border};
  box-shadow: ${shadows.lg};
  backdrop-filter: blur(10px);
  z-index: 999;
  
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
`;

const MobileNavItem = styled.li`
  margin: 0;
`;

const MobileNavLink = styled(Link)<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ active }) => active ? colors.accent : colors.textSecondary};
  text-decoration: none;
  font-weight: ${({ active }) => active ? 600 : 500};
  padding: 1rem 2rem;
  transition: ${transitions.base};
  border-left: ${({ active }) => active ? `3px solid ${colors.accent}` : '3px solid transparent'};
  
  &:hover {
    color: ${colors.accent};
    background: rgba(233, 69, 96, 0.05);
    border-left-color: ${colors.accent};
    text-decoration: none;
  }
  
  .nav-icon {
    font-size: 1rem;
    width: 20px;
    text-align: center;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
  color: ${colors.text};
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: ${transitions.base};
  box-shadow: ${shadows.md};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.glow};
    text-decoration: none;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Gérer le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActiveRoute = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <HeaderContainer scrolled={isScrolled}>
      <Nav>
        <Logo to="/">
          <div className="logo-icon">
            BB
          </div>
          <div className="logo-text">
            <span className="company-name">BlackBenAI</span>
            <span className="tagline">L'IA au service de l'Afrique</span>
          </div>
        </Logo>

        <DesktopNav>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                active={isActiveRoute(item.path)}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <CTAButton to="/contact">
              <FaEnvelope />
              Nous contacter
            </CTAButton>
          </li>
        </DesktopNav>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu de navigation"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <MobileNavList>
              {navItems.map((item) => (
                <MobileNavItem key={item.path}>
                  <MobileNavLink 
                    to={item.path} 
                    active={isActiveRoute(item.path)}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {item.label}
                  </MobileNavLink>
                </MobileNavItem>
              ))}
              <MobileNavItem>
                <MobileNavLink to="/faq" active={isActiveRoute('/faq')}>
                  <span className="nav-icon"><FaQuestionCircle /></span>
                  FAQ
                </MobileNavLink>
              </MobileNavItem>
            </MobileNavList>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;