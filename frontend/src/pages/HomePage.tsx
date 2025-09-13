/**
 * Page d'accueil BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  FaRocket,
  FaBrain,
  FaEye,
  FaComments,
  FaChartLine,
  FaArrowRight,
  FaPlay,
  FaStar,
  FaQuoteLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';

import { colors, breakpoints, shadows, animations } from '../styles/theme';
import { Container, Button, Grid, Flex } from '../styles/GlobalStyles';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { PageData } from '../types';
import api from '../services/api';

// Styled components
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, ${colors.background} 0%, ${colors.primary} 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(233, 69, 96, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(0, 212, 170, 0.1) 0%, transparent 50%);
    animation: float 6s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 100px 100px;
    animation: slide 20s linear infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1deg); }
    66% { transform: translateY(5px) rotate(-1deg); }
  }
  
  @keyframes slide {
    0% { transform: translate(0, 0); }
    100% { transform: translate(100px, 100px); }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, ${colors.text} 0%, ${colors.accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2.5rem;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 2rem;
    }
  }
  
  .subtitle {
    font-size: 1.3rem;
    color: ${colors.textSecondary};
    margin-bottom: 2rem;
    line-height: 1.6;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.1rem;
    }
  }
  
  .cta-buttons {
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
  
  .stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 3rem;
    
    @media (max-width: ${breakpoints.tablet}) {
      gap: 2rem;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      gap: 1rem;
    }
    
    .stat-item {
      text-align: center;
      
      .stat-number {
        font-size: 2rem;
        font-weight: 800;
        color: ${colors.accent};
        display: block;
        
        @media (max-width: ${breakpoints.tablet}) {
          font-size: 1.5rem;
        }
      }
      
      .stat-label {
        font-size: 0.9rem;
        color: ${colors.textSecondary};
        margin-top: 0.5rem;
      }
    }
  }
`;

const Section = styled.section`
  padding: 5rem 0;
  position: relative;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 3rem 0;
  }
  
  &.alternate {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2rem;
    }
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    color: ${colors.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${shadows.xl};
    border-color: ${colors.accent};
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  .service-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: ${colors.text};
  }
  
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${colors.text};
  }
  
  p {
    color: ${colors.textSecondary};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .learn-more {
    color: ${colors.accent};
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      gap: 0.75rem;
    }
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }
  
  .project-image {
    height: 200px;
    background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: ${colors.text};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.2);
    }
  }
  
  .project-content {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: ${colors.text};
    }
    
    p {
      color: ${colors.textSecondary};
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
      
      .tech-tag {
        background: rgba(233, 69, 96, 0.1);
        color: ${colors.accent};
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
    
    .project-links {
      display: flex;
      gap: 1rem;
      
      a {
        color: ${colors.accent};
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
        
        &:hover {
          gap: 0.75rem;
        }
      }
    }
  }
`;

const TestimonialCard = styled(motion.div)`
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  
  .quote-icon {
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-size: 2rem;
    color: ${colors.accent};
    opacity: 0.3;
  }
  
  .testimonial-content {
    margin-bottom: 1.5rem;
    font-style: italic;
    color: ${colors.textSecondary};
    line-height: 1.6;
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .author-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.text};
      font-weight: 700;
      font-size: 1.2rem;
    }
    
    .author-info {
      .author-name {
        font-weight: 600;
        color: ${colors.text};
        margin-bottom: 0.25rem;
      }
      
      .author-position {
        font-size: 0.9rem;
        color: ${colors.textSecondary};
      }
    }
    
    .rating {
      margin-left: auto;
      display: flex;
      gap: 0.25rem;
      
      .star {
        color: #ffd700;
        font-size: 1rem;
      }
    }
  }
`;

const EventCard = styled(motion.div)`
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 16px;
  padding: 1.5rem;
  
  .event-date {
    background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
    color: ${colors.text};
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    display: inline-block;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${colors.text};
  }
  
  .event-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${colors.textSecondary};
    font-size: 0.9rem;
    margin-bottom: 1rem;
    
    .location-icon {
      color: ${colors.accent};
    }
  }
  
  p {
    color: ${colors.textSecondary};
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const HomePage: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await api.page.getHomeData();
        setPageData(data);
      } catch (err) {
        console.error('Error fetching page data:', err);
        setError('Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}>
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h2>Erreur de chargement</h2>
        <p>{error}</p>
        <Button onClick={() => window.location.reload()}>
          Réessayer
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>BlackBenAI - L'Intelligence Artificielle au service de l'Afrique</title>
        <meta 
          name="description" 
          content="BlackBenAI est une startup béninoise fondée par Marino ATOHOUN, spécialisée dans le développement de solutions d'intelligence artificielle innovantes pour l'Afrique." 
        />
      </Helmet>

      {/* Section Hero */}
      <HeroSection>
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animations.staggerContainer}
          >
            <HeroContent>
              <motion.h1 variants={animations.slideUp}>
                L'Intelligence Artificielle au service de l'Afrique
              </motion.h1>
              
              <motion.p className="subtitle" variants={animations.slideUp}>
                BlackBenAI développe des solutions d'IA innovantes pour garantir 
                l'autonomie technologique de l'Afrique et façonner l'avenir du continent.
              </motion.p>
              
              <motion.div className="cta-buttons" variants={animations.slideUp}>
                <Button as={Link} to="/projects" size="lg">
                  <FaRocket />
                  Découvrir nos projets
                </Button>
                <Button as={Link} to="/about" variant="outline" size="lg">
                  <FaPlay />
                  En savoir plus
                </Button>
              </motion.div>
              
              <motion.div className="stats" variants={animations.slideUp}>
                <div className="stat-item">
                  <span className="stat-number">6</span>
                  <span className="stat-label">Projets innovants</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2025</span>
                  <span className="stat-label">Année de fondation</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Vision : l'Afrique</span>
                </div>
              </motion.div>
            </HeroContent>
          </motion.div>
        </Container>
      </HeroSection>

      {/* Section Services */}
      <Section>
        <Container>
          <SectionHeader>
            <h2>Nos Services</h2>
            <p className="section-subtitle">
              Nous offrons une gamme complète de services en intelligence artificielle 
              pour répondre aux besoins spécifiques de nos clients.
            </p>
          </SectionHeader>
          
          <Grid columns={4} gap="2rem">
            <ServiceCard
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="service-icon">
                <FaBrain />
              </div>
              <h3>IA Personnalisée</h3>
              <p>Solutions d'intelligence artificielle sur mesure adaptées à vos besoins spécifiques.</p>
              <Link to="/services" className="learn-more">
                En savoir plus <FaArrowRight />
              </Link>
            </ServiceCard>
            
            <ServiceCard
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="service-icon">
                <FaEye />
              </div>
              <h3>Vision par Ordinateur</h3>
              <p>Systèmes de reconnaissance et d'analyse d'images et vidéos avancés.</p>
              <Link to="/services" className="learn-more">
                En savoir plus <FaArrowRight />
              </Link>
            </ServiceCard>
            
            <ServiceCard
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="service-icon">
                <FaComments />
              </div>
              <h3>Traitement du Langage</h3>
              <p>Analyse et compréhension automatique du langage naturel.</p>
              <Link to="/services" className="learn-more">
                En savoir plus <FaArrowRight />
              </Link>
            </ServiceCard>
            
            <ServiceCard
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="service-icon">
                <FaChartLine />
              </div>
              <h3>Consultation IA</h3>
              <p>Accompagnement stratégique dans vos projets d'intelligence artificielle.</p>
              <Link to="/services" className="learn-more">
                En savoir plus <FaArrowRight />
              </Link>
            </ServiceCard>
          </Grid>
        </Container>
      </Section>

      {/* Section Projets Phares */}
      <Section className="alternate">
        <Container>
          <SectionHeader>
            <h2>Nos Projets Phares</h2>
            <p className="section-subtitle">
              Découvrez nos solutions innovantes qui transforment différents secteurs 
              grâce à l'intelligence artificielle.
            </p>
          </SectionHeader>
          
          <Grid columns={3} gap="2rem">
            <ProjectCard
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="project-image">
                📚
              </div>
              <div className="project-content">
                <h3>Edushare</h3>
                <p>Plateforme de partage de documents PDF éducatifs pour favoriser l'apprentissage collaboratif.</p>
                <div className="project-tech">
                  <span className="tech-tag">Django</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">IA</span>
                </div>
                <div className="project-links">
                  <Link to="/projects/1">
                    Voir le projet <FaArrowRight />
                  </Link>
                </div>
              </div>
            </ProjectCard>
            
            <ProjectCard
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="project-image">
                🛡️
              </div>
              <div className="project-content">
                <h3>GuardClause</h3>
                <p>Analyse automatique des termes et conditions pour identifier les clauses critiques.</p>
                <div className="project-tech">
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">BERT</span>
                </div>
                <div className="project-links">
                  <Link to="/projects/2">
                    Voir le projet <FaArrowRight />
                  </Link>
                </div>
              </div>
            </ProjectCard>
            
            <ProjectCard
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="project-image">
                📹
              </div>
              <div className="project-content">
                <h3>SecurLog</h3>
                <p>Système de surveillance préventive avec détection automatique d'intrusion et d'incendie.</p>
                <div className="project-tech">
                  <span className="tech-tag">OpenCV</span>
                  <span className="tech-tag">YOLO</span>
                  <span className="tech-tag">IoT</span>
                </div>
                <div className="project-links">
                  <Link to="/projects/3">
                    Voir le projet <FaArrowRight />
                  </Link>
                </div>
              </div>
            </ProjectCard>
          </Grid>
          
          <Flex justify="center" style={{ marginTop: '3rem' }}>
            <Button as={Link} to="/projects" size="lg">
              Voir tous nos projets <FaArrowRight />
            </Button>
          </Flex>
        </Container>
      </Section>

      {/* Section Témoignages */}
      <Section>
        <Container>
          <SectionHeader>
            <h2>Ce qu'ils disent de nous</h2>
            <p className="section-subtitle">
              Les retours de nos partenaires et clients sur nos solutions d'intelligence artificielle.
            </p>
          </SectionHeader>
          
          <Grid columns={3} gap="2rem">
            <TestimonialCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <div className="testimonial-content">
                "BlackBenAI représente l'avenir de la technologie en Afrique. Leur approche innovante 
                et leur vision claire font d'eux des pionniers dans le domaine de l'IA."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">DB</div>
                <div className="author-info">
                  <div className="author-name">Dr. Adjovi BOCO</div>
                  <div className="author-position">Professeur d'Informatique, UAC</div>
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            </TestimonialCard>
            
            <TestimonialCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <div className="testimonial-content">
                "Les solutions développées par BlackBenAI sont impressionnantes. 
                Leur projet SecurLog a révolutionné notre approche de la sécurité."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MK</div>
                <div className="author-info">
                  <div className="author-name">Marie KONE</div>
                  <div className="author-position">Directrice Innovation, TechHub</div>
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            </TestimonialCard>
            
            <TestimonialCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <div className="testimonial-content">
                "Edushare a transformé notre façon de partager les ressources éducatives. 
                Une solution brillante et nécessaire pour l'éducation en Afrique."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JM</div>
                <div className="author-info">
                  <div className="author-name">Jean-Baptiste MENSAH</div>
                  <div className="author-position">CEO, EduTech Solutions</div>
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            </TestimonialCard>
          </Grid>
        </Container>
      </Section>

      {/* Section Événements */}
      <Section className="alternate">
        <Container>
          <SectionHeader>
            <h2>Événements à venir</h2>
            <p className="section-subtitle">
              Rejoignez-nous lors de nos prochains événements et conférences sur l'IA.
            </p>
          </SectionHeader>
          
          <Grid columns={3} gap="2rem">
            <EventCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="event-date">
                <FaCalendarAlt /> 15 Oct 2025
              </div>
              <h3>Lancement officiel de BlackBenAI</h3>
              <div className="event-location">
                <FaMapMarkerAlt className="location-icon" />
                Cotonou, Bénin
              </div>
              <p>
                Présentation officielle de la startup et de ses projets phares 
                avec démonstrations en direct.
              </p>
            </EventCard>
            
            <EventCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="event-date">
                <FaCalendarAlt /> 20 Nov 2025
              </div>
              <h3>Conférence IA Afrique 2025</h3>
              <div className="event-location">
                <FaMapMarkerAlt className="location-icon" />
                Lagos, Nigeria
              </div>
              <p>
                Grande conférence sur les enjeux et opportunités de l'intelligence 
                artificielle en Afrique.
              </p>
            </EventCard>
            
            <EventCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="event-date">
                <FaCalendarAlt /> 5 Déc 2025
              </div>
              <h3>Atelier développement IA</h3>
              <div className="event-location">
                <FaMapMarkerAlt className="location-icon" />
                Abidjan, Côte d'Ivoire
              </div>
              <p>
                Atelier pratique de formation au développement de solutions 
                d'intelligence artificielle.
              </p>
            </EventCard>
          </Grid>
          
          <Flex justify="center" style={{ marginTop: '3rem' }}>
            <Button as={Link} to="/events" size="lg">
              Voir tous les événements <FaArrowRight />
            </Button>
          </Flex>
        </Container>
      </Section>

      {/* Section CTA */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              textAlign: 'center',
              background: `linear-gradient(135deg, ${colors.surface} 0%, ${colors.primary} 100%)`,
              padding: '4rem 2rem',
              borderRadius: '20px',
              border: `1px solid ${colors.border}`,
            }}
          >
            <h2 style={{ marginBottom: '1rem' }}>
              Prêt à transformer votre entreprise avec l'IA ?
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: colors.textSecondary, 
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Contactez-nous dès aujourd'hui pour discuter de vos projets d'intelligence 
              artificielle et découvrir comment nous pouvons vous aider.
            </p>
            <Flex justify="center" gap="1rem" wrap>
              <Button as={Link} to="/contact" size="lg">
                <FaEnvelope />
                Nous contacter
              </Button>
              <Button as={Link} to="/services" variant="outline" size="lg">
                Nos services
              </Button>
            </Flex>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;