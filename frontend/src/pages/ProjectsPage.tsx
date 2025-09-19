/**
 * Page Projets pour BlackBenAI
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
  FaGithub,
  FaPlay,
  FaStar,
  FaUsers,
  FaDownload,
  FaCode,
  FaLightbulb,
  FaRocket
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  gap: 3rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${shadows.xl};
    border-color: ${colors.accent};
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.accent} 0%, ${colors.secondary} 100%);
  }
`;

const ProjectContent = styled.div`
  padding: 2.5rem;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${colors.text};
`;

const ProjectCategory = styled.span`
  font-size: 0.9rem;
  color: ${colors.accent};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProjectStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(46, 213, 115, 0.2);
  border: 1px solid #2ed573;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #2ed573;
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  color: ${colors.textLight};
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const ProjectFeatures = styled.div`
  margin-bottom: 2rem;
`;

const FeatureTitle = styled.h4`
  font-size: 1rem;
  color: ${colors.accent};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
`;

const FeatureItem = styled.li`
  color: ${colors.textLight};
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.9rem;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${colors.accent};
    font-weight: bold;
  }
`;

const ProjectStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const StatItem = styled.div`
  text-align: center;
  flex: 1;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.accent};
  margin-bottom: 0.3rem;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: ${colors.textLight};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProjectActions = styled.div`
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
  
  &.github {
    background: #333;
    border: 1px solid #555;
    
    &:hover {
      background: #555;
    }
  }
`;

const TechStack = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const TechTitle = styled.h4`
  font-size: 0.9rem;
  color: ${colors.accent};
  margin-bottom: 1rem;
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
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProjectsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 'edushare',
      title: 'Edushare',
      category: 'Éducation & Partage',
  image: 'frontend/public/edushare.png',
      description: 'Plateforme révolutionnaire de partage de documents PDF scolaires et éducatifs. Edushare favorise le partage de connaissances entre élèves, professeurs et acteurs éducatifs tout en constituant une base de données opensource gratuite pour l\'entraînement de modèles IA éducatifs.',
      features: [
        'Partage de documents PDF éducatifs',
        'Base de données opensource gratuite',
        'Interface intuitive pour étudiants',
        'Système de catégorisation avancé',
        'API pour développeurs IA',
        'Modération automatique du contenu',
        'Recherche intelligente',
        'Système de notation et commentaires'
      ],
      stats: {
        users: '10K+',
        documents: '50K+',
        downloads: '500K+'
      },
      techStack: ['React', 'Django', 'PostgreSQL', 'AWS S3', 'Elasticsearch', 'Machine Learning', 'Redis'],
      status: 'Actif',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'guardclause',
      title: 'GuardClause',
      category: 'Analyse Juridique',
  image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      description: 'Plateforme d\'analyse automatique des termes et conditions de sites web utilisant des techniques avancées de traitement de langage naturel (NLP). GuardClause identifie les points critiques et clauses importantes pour aider les utilisateurs à comprendre rapidement les risques légaux.',
      features: [
        'Analyse automatique des CGU/CGV',
        'Détection des clauses critiques',
        'Résumés intelligents en français',
        'Évaluation des risques juridiques',
        'Comparaison entre services',
        'Alertes sur changements de conditions',
        'Export de rapports détaillés',
        'Interface multilingue'
      ],
      stats: {
        sites: '1K+',
        analyses: '25K+',
        accuracy: '95%'
      },
      techStack: ['Python', 'NLP', 'spaCy', 'BERT', 'FastAPI', 'Redis', 'Vue.js', 'MongoDB'],
      status: 'Actif',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'securlog',
      title: 'SecurLog',
      category: 'Vision par Ordinateur',
  image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      description: 'Système de surveillance préventive de pointe utilisant la vision par ordinateur pour la détection automatique d\'intrusions et de débuts d\'incendie. SecurLog peut être intégré à des caméras de surveillance existantes avec alertes automatiques aux services d\'urgence.',
      features: [
        'Détection d\'intrusion en temps réel',
        'Reconnaissance de début d\'incendie',
        'Alertes automatiques (police/pompiers)',
        'Interface de monitoring avancée',
        'Intégration caméras existantes',
        'Historique et analytics détaillés',
        'Reconnaissance faciale',
        'Détection d\'objets suspects'
      ],
      stats: {
        cameras: '500+',
        detections: '100K+',
        response: '< 2s'
      },
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'YOLO', 'WebRTC', 'Socket.io', 'React', 'Docker'],
      status: 'Actif',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'withsign',
      title: 'WithSign',
      category: 'Accessibilité',
  image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80',
      description: 'Système innovant de traduction automatique du langage des signes destiné aux malentendants. WithSign utilise l\'IA et la vision par ordinateur pour traduire en temps réel les gestes en texte écrit, facilitant la communication et l\'inclusion.',
      features: [
        'Traduction langue des signes → texte',
        'Reconnaissance gestuelle avancée',
        'Interface accessible et intuitive',
        'Support multi-langues des signes',
        'Mode temps réel',
        'Historique des conversations',
        'Apprentissage personnalisé',
        'Mode hors ligne'
      ],
      stats: {
        gestures: '2K+',
        accuracy: '92%',
        languages: '5'
      },
      techStack: ['Python', 'MediaPipe', 'TensorFlow', 'OpenCV', 'WebRTC', 'React Native', 'SQLite'],
      status: 'Actif',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'howroadcode',
      title: 'HowRoadCode',
      category: 'Sécurité Routière',
  image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      description: 'Assistant intelligent pour la conduite qui détecte et explique en temps réel les panneaux et feux de signalisation. HowRoadCode est parfait pour les nouveaux conducteurs ou dans des environnements de conduite inconnus, contribuant à la sécurité routière.',
      features: [
        'Détection panneaux de signalisation',
        'Reconnaissance feux tricolores',
        'Explications en temps réel',
        'Interface caméra web',
        'Mode apprentissage interactif',
        'Base de données complète du code',
        'Alertes sonores',
        'Statistiques de conduite'
      ],
      stats: {
        signs: '300+',
        accuracy: '98%',
        users: '5K+'
      },
      techStack: ['Python', 'YOLO', 'OpenCV', 'Flask', 'JavaScript', 'WebRTC', 'SQLite'],
      status: 'Actif',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'mycompanygen',
      title: 'MyCompanyGen',
      category: 'IA Générative',
  image: 'https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f5?auto=format&fit=crop&w=400&q=80',
      description: 'IA générative de pointe spécialisée dans la rédaction de rapports d\'entreprise. Entraînée sur une vaste base de données de rapports professionnels, MyCompanyGen facilite la création de documents corporate de qualité professionnelle.',
      features: [
        'Génération de rapports automatique',
        'Templates personnalisables',
        'Analyse de données intégrée',
        'Export multi-formats (PDF, Word)',
        'Collaboration en équipe',
        'Intégration APIs entreprise',
        'Révision automatique',
        'Conformité réglementaire'
      ],
      stats: {
        reports: '10K+',
        companies: '200+',
        time_saved: '80%'
      },
      techStack: ['GPT', 'Python', 'Django', 'Celery', 'PostgreSQL', 'React', 'Chart.js', 'AWS'],
      status: 'Actif',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>Projets - BlackBenAI | Portfolio IA Innovant</title>
        <meta name="description" content="Découvrez tous les projets innovants de BlackBenAI : Edushare, GuardClause, SecurLog, WithSign, HowRoadCode, MyCompanyGen. Solutions IA pour l'Afrique." />
        <meta name="keywords" content="BlackBenAI, projets IA, portfolio, intelligence artificielle, Edushare, GuardClause, SecurLog, WithSign, HowRoadCode, MyCompanyGen" />
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
                Nos Projets Innovants
              </HeroTitle>
              <HeroSubtitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Découvrez notre portfolio de solutions d'intelligence artificielle qui transforment l'Afrique et résolvent les défis de demain
              </HeroSubtitle>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Projects Section */}
        <Section>
          <Container>
            <SectionTitle>Portfolio de Projets IA</SectionTitle>
            <ProjectsGrid>
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectImage>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
                  </ProjectImage>
                  
                  <ProjectContent>
                    <ProjectHeader>
                      <ProjectInfo>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectCategory>{project.category}</ProjectCategory>
                      </ProjectInfo>
                      <ProjectStatus>
                        <FaStar />
                        {project.status}
                      </ProjectStatus>
                    </ProjectHeader>
                    
                    <ProjectDescription>{project.description}</ProjectDescription>
                    
                    <ProjectStats>
                      {Object.entries(project.stats).map(([key, value]) => (
                        <StatItem key={key}>
                          <StatNumber>{value}</StatNumber>
                          <StatLabel>{key.replace('_', ' ')}</StatLabel>
                        </StatItem>
                      ))}
                    </ProjectStats>
                    
                    <ProjectFeatures>
                      <FeatureTitle>Fonctionnalités Clés</FeatureTitle>
                      <FeatureList>
                        {project.features.slice(0, 6).map((feature, idx) => (
                          <FeatureItem key={idx}>{feature}</FeatureItem>
                        ))}
                      </FeatureList>
                    </ProjectFeatures>
                    
                    <ProjectActions>
                      <ActionButton>
                        <FaPlay />
                        Voir la Démo
                      </ActionButton>
                      <ActionButton className="secondary">
                        <FaExternalLinkAlt />
                        En Savoir Plus
                      </ActionButton>
                      <ActionButton className="github">
                        <FaGithub />
                        Code Source
                      </ActionButton>
                    </ProjectActions>
                    
                    <TechStack>
                      <TechTitle>Technologies Utilisées</TechTitle>
                      <TechTags>
                        {project.techStack.map((tech, idx) => (
                          <TechTag key={idx}>{tech}</TechTag>
                        ))}
                      </TechTags>
                    </TechStack>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
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
              <SectionTitle>Rejoignez l'Innovation</SectionTitle>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.textLight, 
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                Nos projets sont opensource et nous accueillons les contributions de la communauté. 
                Participez à la révolution technologique africaine !
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  <FaRocket style={{ marginRight: '0.5rem' }} />
                  Contribuer aux Projets
                </Button>
                <Button 
                  style={{ 
                    fontSize: '1.1rem', 
                    padding: '1rem 2rem',
                    background: 'transparent',
                    border: `1px solid ${colors.accent}`,
                    color: colors.accent
                  }}
                >
                  <FaLightbulb style={{ marginRight: '0.5rem' }} />
                  Proposer une Idée
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>
      </PageContainer>
    </>
  );
};

export default ProjectsPage;