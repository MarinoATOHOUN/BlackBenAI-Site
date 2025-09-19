/**
 * Page À Propos pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaBrain,
  FaGlobe,
  FaUsers,
  FaLightbulb,
  FaHeart
} from 'react-icons/fa';

import { colors, breakpoints, shadows } from '../styles/theme';
import { Container } from '../styles/GlobalStyles';
import Grid from '../components/common/Grid';
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

const StoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: ${shadows.lg};
`;

const StoryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${colors.textLight};
  margin-bottom: 1.5rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${shadows.lg};
    border-color: ${colors.accent};
  }
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: white;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${colors.text};
`;

const ValueDescription = styled.p`
  color: ${colors.textLight};
  line-height: 1.6;
`;

const FounderCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  text-align: center;
`;

const FounderImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  border: 4px solid ${colors.accent};
`;

const FounderName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${colors.text};
`;

const FounderTitle = styled.p`
  font-size: 1.1rem;
  color: ${colors.accent};
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const FounderBio = styled.p`
  color: ${colors.textLight};
  line-height: 1.7;
  font-size: 1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${colors.accent};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${colors.textLight};
  font-size: 1rem;
`;

const AboutPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Nous repoussons constamment les limites de l'intelligence artificielle pour créer des solutions révolutionnaires."
    },
    {
      icon: <FaGlobe />,
      title: "Autonomie Africaine",
      description: "Notre mission est de garantir l'indépendance technologique de l'Afrique dans le domaine de l'IA."
    },
    {
      icon: <FaBrain />,
      title: "Excellence Technique",
      description: "Nous développons des modèles d'IA de classe mondiale avec les plus hauts standards de qualité."
    },
    {
      icon: <FaUsers />,
      title: "Impact Social",
      description: "Nos solutions visent à améliorer la vie des communautés africaines à travers la technologie."
    },
    {
      icon: <FaLightbulb />,
      title: "Créativité",
      description: "Nous abordons chaque défi avec une approche créative et des solutions sur mesure."
    },
    {
      icon: <FaHeart />,
      title: "Passion",
      description: "Notre amour pour l'IA et la technologie guide chacune de nos innovations."
    }
  ];

  const stats = [
    { number: "6", label: "Projets Innovants" },
    { number: "2025", label: "Année de Fondation" },
    { number: "100%", label: "Made in Africa" },
    { number: "∞", label: "Potentiel d'Impact" }
  ];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>À Propos - BlackBenAI | Startup IA Béninoise</title>
        <meta name="description" content="Découvrez BlackBenAI, la startup béninoise d'intelligence artificielle fondée par Marino ATOHOUN. Notre mission : l'autonomie technologique de l'Afrique." />
        <meta name="keywords" content="BlackBenAI, intelligence artificielle, Bénin, Afrique, startup, Marino ATOHOUN, IA, technologie" />
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
                À Propos de BlackBenAI
              </HeroTitle>
              <HeroSubtitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Pionniers de l'intelligence artificielle en Afrique, nous façonnons l'avenir technologique du continent
              </HeroSubtitle>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Notre Histoire */}
        <Section>
          <Container>
            <SectionTitle>Notre Histoire</SectionTitle>
            <StoryCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <StoryText>
                <strong>BlackBenAI</strong> est née en août 2024 de la vision audacieuse de <strong>Marino ATOHOUN</strong>, 
                un jeune développeur béninois passionné par l'intelligence artificielle. Face au constat que l'Afrique 
                dépendait largement des technologies développées ailleurs, Marino a décidé de créer une startup qui 
                changerait la donne.
              </StoryText>
              <StoryText>
                Notre nom, <strong>BlackBenAI</strong>, reflète notre identité : "Black" pour notre fierté africaine, 
                "Ben" pour nos racines béninoises, et "AI" pour notre expertise en intelligence artificielle. 
                Nous sommes plus qu'une startup - nous sommes un mouvement vers l'autonomie technologique africaine.
              </StoryText>
              <StoryText>
                Depuis notre création, nous avons développé six projets innovants qui démontrent le potentiel 
                technologique africain : de l'éducation avec Edushare à la sécurité avec SecurLog, en passant 
                par l'accessibilité avec WithSign. Chaque projet est conçu pour répondre aux besoins spécifiques 
                de nos communautés tout en rivalisant avec les standards internationaux.
              </StoryText>
            </StoryCard>
          </Container>
        </Section>

        {/* Nos Valeurs */}
        <Section>
          <Container>
            <SectionTitle>Nos Valeurs</SectionTitle>
            <ValuesGrid>
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ValueIcon>{value.icon}</ValueIcon>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                </ValueCard>
              ))}
            </ValuesGrid>
          </Container>
        </Section>

        {/* Notre Fondateur */}
        <Section>
          <Container>
            <SectionTitle>Notre Fondateur</SectionTitle>
            <FounderCard
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FounderImage>
                <img src="/marino.png" alt="Marino ATOHOUN" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </FounderImage>
              <FounderName>Marino ATOHOUN</FounderName>
              <FounderTitle>Président Directeur Général & Fondateur</FounderTitle>
              <FounderBio>
                Développeur passionné et visionnaire, Marino ATOHOUN est spécialisé dans le domaine de 
                l'intelligence artificielle. Fort d'une expérience significative 
                en développement d'applications IA, il a fondé BlackBenAI avec la conviction que l'Afrique 
                peut et doit être leader dans les technologies de demain. Sa vision : créer les plus grands 
                modèles d'IA du continent africain et garantir notre autonomie technologique.
              </FounderBio>
            </FounderCard>
          </Container>
        </Section>

        {/* Statistiques */}
        <Section>
          <Container>
            <SectionTitle>BlackBenAI en Chiffres</SectionTitle>
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </Container>
        </Section>

        {/* Notre Mission */}
        <Section>
          <Container>
            <SectionTitle>Notre Mission</SectionTitle>
            <StoryCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <StoryText>
                <strong>Devenir l'une des plus grandes startups d'intelligence artificielle en Afrique</strong> 
                et mettre en place les plus grands modèles d'IA du continent. Notre objectif ultime est de 
                garantir l'autonomie de l'Afrique dans les domaines de la technologie et principalement 
                dans le domaine de l'intelligence artificielle.
              </StoryText>
              <StoryText>
                Nous croyons fermement que l'Afrique a le potentiel de devenir un leader mondial en IA. 
                Avec nos talents locaux, notre compréhension unique des défis africains et notre détermination 
                sans faille, nous construisons les solutions technologiques qui transformeront notre continent.
              </StoryText>
              <StoryText>
                Chaque ligne de code que nous écrivons, chaque modèle que nous entraînons, chaque solution 
                que nous déployons contribue à cette vision : une Afrique technologiquement autonome et 
                innovante, capable de résoudre ses propres défis et d'inspirer le monde entier.
              </StoryText>
            </StoryCard>
          </Container>
        </Section>
      </PageContainer>
    </>
  );
};

export default AboutPage;