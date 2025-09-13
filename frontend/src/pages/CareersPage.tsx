/**
 * Page Carrières pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaUsers,
  FaBrain,
  FaCode,
  FaChartLine,
  FaHandshake,
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaGraduationCap,
  FaHeart,
  FaLightbulb,
  FaGlobe,
  FaPaperPlane,
  FaDownload
} from 'react-icons/fa';

import { colors, breakpoints, shadows } from '../styles/theme';
import { Container, Grid, Button } from '../styles/GlobalStyles';

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

const ValuesGrid = styled(Grid)`
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

const JobsGrid = styled(Grid)`
  gap: 3rem;
  margin-top: 3rem;
`;

const JobCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${shadows.lg};
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
    border-radius: 20px 20px 0 0;
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${colors.text};
`;

const JobDepartment = styled.span`
  font-size: 0.9rem;
  color: ${colors.accent};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const JobStatus = styled.div`
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
  white-space: nowrap;
`;

const JobDescription = styled.p`
  color: ${colors.textLight};
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const JobDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const JobDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const DetailIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: white;
  flex-shrink: 0;
`;

const DetailText = styled.div`
  color: ${colors.textLight};
  font-size: 0.9rem;
`;

const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const RequirementItem = styled.li`
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

const JobActions = styled.div`
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

const BenefitsGrid = styled(Grid)`
  gap: 2rem;
  margin-top: 3rem;
`;

const BenefitCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: white;
`;

const BenefitTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: ${colors.text};
`;

const BenefitDescription = styled.p`
  color: ${colors.textLight};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const values = [
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Nous repoussons constamment les limites de l'IA pour créer des solutions révolutionnaires."
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Nous croyons en la force du travail d'équipe et de la diversité des perspectives."
    },
    {
      icon: <FaLightbulb />,
      title: "Apprentissage",
      description: "Nous encourageons la curiosité et l'apprentissage continu dans un environnement stimulant."
    },
    {
      icon: <FaGlobe />,
      title: "Impact",
      description: "Nous visons à créer un impact positif durable pour l'Afrique et le monde entier."
    }
  ];

  const jobs = [
    {
      id: 'cto',
      title: 'Chief Technology Officer (CTO)',
      department: 'Direction',
      status: 'Urgent',
      location: 'Cotonou, Bénin',
      type: 'Temps plein',
      experience: '5+ ans',
      salary: 'Compétitif',
      description: 'Nous recherchons un CTO visionnaire pour diriger notre équipe technique et définir la stratégie technologique de BlackBenAI. Vous serez responsable de l\'architecture technique, de l\'innovation et du développement de nos solutions IA.',
      requirements: [
        'Master/PhD en Informatique ou domaine connexe',
        '5+ années d\'expérience en leadership technique',
        'Expertise en Intelligence Artificielle et Machine Learning',
        'Expérience avec Python, TensorFlow, PyTorch',
        'Compétences en architecture de systèmes distribués',
        'Excellentes compétences en communication',
        'Passion pour l\'innovation technologique en Afrique'
      ]
    },
    {
      id: 'executive-director',
      title: 'Directeur Exécutif',
      department: 'Direction',
      status: 'Ouvert',
      location: 'Cotonou, Bénin',
      type: 'Temps plein',
      experience: '7+ ans',
      salary: 'Compétitif',
      description: 'Rejoignez-nous en tant que Directeur Exécutif pour superviser les opérations quotidiennes et contribuer à la croissance stratégique de BlackBenAI. Vous travaillerez étroitement avec le PDG pour développer l\'entreprise.',
      requirements: [
        'MBA ou équivalent en gestion d\'entreprise',
        '7+ années d\'expérience en direction d\'entreprise',
        'Expérience dans le secteur technologique',
        'Compétences en stratégie d\'entreprise',
        'Leadership et gestion d\'équipe',
        'Connaissance du marché africain',
        'Bilinguisme français/anglais'
      ]
    },
    {
      id: 'hr-manager',
      title: 'Responsable Ressources Humaines',
      department: 'RH',
      status: 'Ouvert',
      location: 'Cotonou, Bénin',
      type: 'Temps plein',
      experience: '3+ ans',
      salary: 'Négociable',
      description: 'Nous cherchons un RH en chef pour développer notre culture d\'entreprise, gérer le recrutement et accompagner la croissance de notre équipe dans un environnement technologique innovant.',
      requirements: [
        'Licence/Master en Ressources Humaines',
        '3+ années d\'expérience en RH',
        'Expérience en recrutement tech',
        'Connaissance du droit du travail béninois',
        'Compétences en développement organisationnel',
        'Excellente communication interpersonnelle',
        'Passion pour l\'innovation et la tech'
      ]
    },
    {
      id: 'ai-engineer',
      title: 'Ingénieur IA Senior',
      department: 'Technique',
      status: 'Ouvert',
      location: 'Cotonou, Bénin / Remote',
      type: 'Temps plein',
      experience: '3+ ans',
      salary: 'Compétitif',
      description: 'Rejoignez notre équipe technique pour développer des solutions d\'IA de pointe. Vous travaillerez sur nos projets phares et contribuerez à l\'innovation technologique africaine.',
      requirements: [
        'Master en IA, ML ou Informatique',
        '3+ années d\'expérience en développement IA',
        'Maîtrise de Python, TensorFlow, PyTorch',
        'Expérience en Computer Vision et NLP',
        'Connaissance des architectures cloud',
        'Capacité à travailler en équipe',
        'Passion pour l\'impact social de l\'IA'
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaMoneyBillWave />,
      title: "Salaire Compétitif",
      description: "Rémunération attractive avec participation aux bénéfices"
    },
    {
      icon: <FaGraduationCap />,
      title: "Formation Continue",
      description: "Budget formation et accès aux meilleures ressources d'apprentissage"
    },
    {
      icon: <FaHeart />,
      title: "Équilibre Vie-Travail",
      description: "Horaires flexibles et possibilité de télétravail"
    },
    {
      icon: <FaRocket />,
      title: "Projets Innovants",
      description: "Travaillez sur des projets qui transforment l'Afrique"
    },
    {
      icon: <FaUsers />,
      title: "Équipe Dynamique",
      description: "Rejoignez une équipe passionnée et multiculturelle"
    },
    {
      icon: <FaGlobe />,
      title: "Impact Global",
      description: "Contribuez à l'autonomie technologique de l'Afrique"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Carrières - BlackBenAI | Rejoignez l'Innovation IA</title>
        <meta name="description" content="Rejoignez BlackBenAI et participez à la révolution de l'intelligence artificielle en Afrique. Opportunités de carrière : CTO, Directeur Exécutif, RH, Ingénieurs IA." />
        <meta name="keywords" content="BlackBenAI, carrières, emploi, intelligence artificielle, CTO, directeur exécutif, RH, ingénieur IA, Bénin, Afrique" />
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
                Rejoignez l'Innovation
              </HeroTitle>
              <HeroSubtitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Participez à la révolution de l'intelligence artificielle en Afrique et contribuez à façonner l'avenir technologique du continent
              </HeroSubtitle>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Nos Valeurs */}
        <Section>
          <Container>
            <SectionTitle>Nos Valeurs d'Équipe</SectionTitle>
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

        {/* Postes Ouverts */}
        <Section>
          <Container>
            <SectionTitle>Postes Ouverts</SectionTitle>
            <JobsGrid columns={1}>
              {jobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <JobHeader>
                    <JobInfo>
                      <JobTitle>{job.title}</JobTitle>
                      <JobDepartment>{job.department}</JobDepartment>
                    </JobInfo>
                    <JobStatus>
                      <FaRocket />
                      {job.status}
                    </JobStatus>
                  </JobHeader>

                  <JobDescription>{job.description}</JobDescription>

                  <JobDetails>
                    <JobDetail>
                      <DetailIcon><FaMapMarkerAlt /></DetailIcon>
                      <DetailText>{job.location}</DetailText>
                    </JobDetail>
                    <JobDetail>
                      <DetailIcon><FaClock /></DetailIcon>
                      <DetailText>{job.type}</DetailText>
                    </JobDetail>
                    <JobDetail>
                      <DetailIcon><FaGraduationCap /></DetailIcon>
                      <DetailText>{job.experience}</DetailText>
                    </JobDetail>
                    <JobDetail>
                      <DetailIcon><FaMoneyBillWave /></DetailIcon>
                      <DetailText>{job.salary}</DetailText>
                    </JobDetail>
                  </JobDetails>

                  <h4 style={{ color: colors.accent, marginBottom: '1rem' }}>Exigences :</h4>
                  <RequirementsList>
                    {job.requirements.map((req, idx) => (
                      <RequirementItem key={idx}>{req}</RequirementItem>
                    ))}
                  </RequirementsList>

                  <JobActions>
                    <ActionButton>
                      <FaPaperPlane />
                      Postuler Maintenant
                    </ActionButton>
                    <ActionButton className="secondary">
                      <FaDownload />
                      Télécharger la Fiche
                    </ActionButton>
                  </JobActions>
                </JobCard>
              ))}
            </JobsGrid>
          </Container>
        </Section>

        {/* Avantages */}
        <Section>
          <Container>
            <SectionTitle>Pourquoi Nous Rejoindre ?</SectionTitle>
            <BenefitsGrid>
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BenefitIcon>{benefit.icon}</BenefitIcon>
                  <BenefitTitle>{benefit.title}</BenefitTitle>
                  <BenefitDescription>{benefit.description}</BenefitDescription>
                </BenefitCard>
              ))}
            </BenefitsGrid>
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
              <SectionTitle>Prêt à Nous Rejoindre ?</SectionTitle>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.textLight, 
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                Même si vous ne trouvez pas le poste idéal aujourd'hui, nous sommes toujours intéressés 
                par les talents exceptionnels. Envoyez-nous votre candidature spontanée !
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  <FaPaperPlane style={{ marginRight: '0.5rem' }} />
                  Candidature Spontanée
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
                  <FaUsers style={{ marginRight: '0.5rem' }} />
                  Nous Contacter
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>
      </PageContainer>
    </>
  );
};

export default CareersPage;