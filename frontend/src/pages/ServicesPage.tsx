/**
 * Paimport {
  FaRocket,
  FaBrain,
  FaGlobe,
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaShieldAlt as FaShield
} from 'react-icons/fa';ur BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaBook,
  FaShieldAlt,
  FaCamera,
  FaHandPaper,
  FaRoad,
  FaFileAlt,
  FaExternalLinkAlt,
  FaPlay,
  FaCode,
  FaBrain,
  FaRobot,
  FaEye
} from 'react-icons/fa';

import { colors, breakpoints, shadows } from '../styles/theme';
import { Container, Grid, Button } from '../styles/GlobalStyles';
import LoadingSpinner from '../components/common/LoadingSpinner';

// Styled components
const PageContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 80px;
  background: ${colors.background};
`;

const HeroSection = styled.section`
  padding: 80px 0;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, ${colors.accent} 0%, ${colors.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const Section = styled.section`
  padding: 80px 0;
  
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: ${colors.text};
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  gap: 3rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${shadows.xl};
    border-color: ${colors.accent};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 100%);
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

const ServiceInfo = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${colors.text};
`;

const ServiceCategory = styled.span`
  font-size: 0.9rem;
  color: ${colors.accent};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ServiceDescription = styled.p`
  color: ${colors.textLight};
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const ServiceFeature = styled.li`
  color: ${colors.textLight};
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${colors.accent};
    font-weight: bold;
  }
`;

const ServiceActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  padding: 0.8rem 1.5rem;
  
  &.secondary {
    background: transparent;
    border: 1px solid ${colors.accent};
    color: ${colors.accent};
    
    &:hover {
      background: ${colors.accent};
      color: white;
    }
  }
`;

const TechStack = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const TechTitle = styled.h4`
  font-size: 0.9rem;
  color: ${colors.accent};
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: ${colors.textLight};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ServicesPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 'edushare',
      title: 'Edushare',
      category: 'Éducation & Partage',
      icon: <FaBook />,
      description: 'Plateforme de partage de documents PDF scolaires et éducatifs. Favorise le partage de connaissances entre élèves, professeurs et acteurs éducatifs tout en constituant une base de données opensource pour l\'entraînement de modèles IA éducatifs.',
      features: [
        'Partage de documents PDF éducatifs',
        'Base de données opensource gratuite',
        'Interface intuitive pour étudiants et professeurs',
        'Système de catégorisation avancé',
        'API pour développeurs IA',
        'Modération automatique du contenu'
      ],
      techStack: ['React', 'Django', 'PostgreSQL', 'AWS S3', 'Elasticsearch', 'Machine Learning'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Actif'
    },
    {
      id: 'guardclause',
      title: 'GuardClause',
      category: 'Analyse Juridique',
      icon: <FaShieldAlt />,
      description: 'Plateforme d\'analyse automatique des termes et conditions de sites web. Utilise le traitement de langage naturel (NLP) pour identifier les points critiques et clauses importantes, aidant les utilisateurs à comprendre rapidement les risques légaux.',
      features: [
        'Analyse automatique des CGU/CGV',
        'Détection des clauses critiques',
        'Résumés intelligents en français',
        'Évaluation des risques juridiques',
        'Comparaison entre différents services',
        'Alertes sur les changements de conditions'
      ],
      techStack: ['Python', 'NLP', 'spaCy', 'BERT', 'FastAPI', 'Redis', 'Vue.js'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Actif'
    },
    {
      id: 'securlog',
      title: 'SecurLog',
      category: 'Vision par Ordinateur',
      icon: <FaCamera />,
      description: 'Système de surveillance préventive utilisant la vision par ordinateur pour la détection automatique d\'intrusions et de débuts d\'incendie. Intégration possible avec caméras de surveillance existantes avec alertes automatiques aux services d\'urgence.',
      features: [
        'Détection d\'intrusion en temps réel',
        'Reconnaissance de début d\'incendie',
        'Alertes automatiques (police/pompiers)',
        'Interface de monitoring avancée',
        'Intégration caméras existantes',
        'Historique et analytics'
      ],
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'YOLO', 'WebRTC', 'Socket.io', 'React'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Actif'
    },
    {
      id: 'withsign',
      title: 'WithSign',
      category: 'Accessibilité',
      icon: <FaHandPaper />,
      description: 'Système de traduction automatique du langage des signes destiné aux malentendants. Utilise l\'IA et la vision par ordinateur pour traduire en temps réel les gestes en texte écrit, facilitant la communication.',
      features: [
        'Traduction langue des signes → texte',
        'Reconnaissance gestuelle avancée',
        'Interface accessible et intuitive',
        'Support multi-langues des signes',
        'Mode temps réel',
        'Historique des conversations'
      ],
      techStack: ['Python', 'MediaPipe', 'TensorFlow', 'OpenCV', 'WebRTC', 'React Native'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Actif'
    },
    {
      id: 'howroadcode',
      title: 'HowRoadCode',
      category: 'Sécurité Routière',
      icon: <FaRoad />,
      description: 'Assistant intelligent pour la conduite qui détecte et explique en temps réel les panneaux et feux de signalisation. Parfait pour les nouveaux conducteurs ou dans des environnements de conduite inconnus.',
      features: [
        'Détection panneaux de signalisation',
        'Reconnaissance feux tricolores',
        'Explications en temps réel',
        'Interface caméra web',
        'Mode apprentissage interactif',
        'Base de données complète du code de la route'
      ],
      techStack: ['Python', 'YOLO', 'OpenCV', 'Flask', 'JavaScript', 'WebRTC'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Actif'
    },
    {
      id: 'mycompanygen',
      title: 'MyCompanyGen',
      category: 'IA Générative',
      icon: <FaFileAlt />,
      description: 'IA générative spécialisée dans la rédaction de rapports d\'entreprise. Entraînée sur une vaste base de données de rapports professionnels, elle facilite la création de documents corporate de qualité.',
      features: [
        'Génération de rapports automatique',
        'Templates personnalisables',
        'Analyse de données intégrée',
        'Export multi-formats (PDF, Word, etc.)',
        'Collaboration en équipe',
        'Intégration APIs entreprise'
      ],
      techStack: ['GPT', 'Python', 'Django', 'Celery', 'PostgreSQL', 'React', 'Chart.js'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Actif'
    }
  ];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>Services - BlackBenAI | Solutions IA Innovantes</title>
        <meta name="description" content="Découvrez tous les services et solutions d'intelligence artificielle de BlackBenAI : Edushare, GuardClause, SecurLog, WithSign, HowRoadCode, MyCompanyGen." />
        <meta name="keywords" content="BlackBenAI, services IA, intelligence artificielle, solutions tech, Edushare, GuardClause, SecurLog, WithSign, HowRoadCode, MyCompanyGen" />
      </Helmet>

      <PageContainer>
        {/* Hero Section */}
        <HeroSection>
          <Container>
            <HeroContent>
              <HeroTitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Nos Services & Solutions
              </HeroTitle>
              <HeroSubtitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Des solutions d'intelligence artificielle innovantes pour transformer l'Afrique et répondre aux défis de demain
              </HeroSubtitle>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Services Section */}
        <Section>
          <Container>
            <SectionTitle>Portfolio de Solutions IA</SectionTitle>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceHeader>
                    <ServiceIcon>{service.icon}</ServiceIcon>
                    <ServiceInfo>
                      <ServiceTitle>{service.title}</ServiceTitle>
                      <ServiceCategory>{service.category}</ServiceCategory>
                    </ServiceInfo>
                  </ServiceHeader>
                  
                  <ServiceDescription>{service.description}</ServiceDescription>
                  
                  <ServiceFeatures>
                    {service.features.map((feature, idx) => (
                      <ServiceFeature key={idx}>{feature}</ServiceFeature>
                    ))}
                  </ServiceFeatures>
                  
                  <ServiceActions>
                    <ActionButton>
                      <FaPlay />
                      Voir la Démo
                    </ActionButton>
                    <ActionButton className="secondary">
                      <FaExternalLinkAlt />
                      En Savoir Plus
                    </ActionButton>
                  </ServiceActions>
                  
                  <TechStack>
                    <TechTitle>Technologies Utilisées</TechTitle>
                    <TechTags>
                      {service.techStack.map((tech, idx) => (
                        <TechTag key={idx}>{tech}</TechTag>
                      ))}
                    </TechTags>
                  </TechStack>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </Container>
        </Section>

        {/* Call to Action */}
        <Section>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <SectionTitle>Besoin d'une Solution Personnalisée ?</SectionTitle>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.textLight, 
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                Nos experts en IA peuvent développer des solutions sur mesure pour répondre aux besoins spécifiques de votre entreprise ou organisation.
              </p>
              <Button style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                <FaBrain style={{ marginRight: '0.5rem' }} />
                Discuter de Votre Projet
              </Button>
            </motion.div>
          </Container>
        </Section>
      </PageContainer>
    </>
  );
};

export default ServicesPage;