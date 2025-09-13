/**
 * Page FAQ pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaRocket,
  FaBrain,
  FaUsers,
  FaCode,
  FaHandshake,
  FaGlobe,
  FaSearch,
  FaLightbulb
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

const SearchSection = styled.div`
  max-width: 600px;
  margin: 0 auto 4rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.2rem 1.5rem 1.2rem 3.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: ${colors.text};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.accent};
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
    background: rgba(255, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: ${colors.textLight};
    opacity: 0.7;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.textLight};
  font-size: 1.2rem;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const CategoryButton = styled(motion.button)<{ active: boolean }>`
  background: ${props => props.active ? colors.accent : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.active ? colors.accent : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 25px;
  padding: 1rem 1.5rem;
  color: ${props => props.active ? 'white' : colors.textLight};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  &:hover {
    background: ${colors.accent};
    color: white;
    border-color: ${colors.accent};
    transform: translateY(-2px);
  }
`;

const FAQGrid = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${colors.accent};
    box-shadow: ${shadows.md};
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  background: none;
  border: none;
  color: ${colors.text};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${colors.accent};
  }
`;

const QuestionIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: white;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const QuestionText = styled.span`
  flex: 1;
`;

const ToggleIcon = styled(motion.div)`
  color: ${colors.accent};
  font-size: 1.2rem;
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 2rem 2rem;
  color: ${colors.textLight};
  line-height: 1.7;
  font-size: 1rem;
  
  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const ContactCTA = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  margin-top: 4rem;
`;

const CTATitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${colors.text};
`;

const CTADescription = styled.p`
  color: ${colors.textLight};
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: 'Toutes', icon: <FaQuestionCircle /> },
    { id: 'general', label: 'Général', icon: <FaLightbulb /> },
    { id: 'services', label: 'Services', icon: <FaRocket /> },
    { id: 'technical', label: 'Technique', icon: <FaCode /> },
    { id: 'partnership', label: 'Partenariat', icon: <FaHandshake /> },
    { id: 'career', label: 'Carrières', icon: <FaUsers /> }
  ];

  const faqs = [
    {
      id: '1',
      category: 'general',
      question: 'Qu\'est-ce que BlackBenAI ?',
      answer: `
        <p>BlackBenAI est une startup béninoise fondée en août 2024 par Marino ATOHOUN, spécialisée dans le développement de solutions d'intelligence artificielle innovantes.</p>
        <p>Notre mission principale est de devenir l'une des plus grandes startups d'IA en Afrique et de mettre en place les plus grands modèles d'intelligence artificielle du continent pour garantir l'autonomie technologique de l'Afrique.</p>
        <p>Nous développons actuellement 6 projets majeurs : Edushare, GuardClause, SecurLog, WithSign, HowRoadCode, et MyCompanyGen.</p>
      `
    },
    {
      id: '2',
      category: 'general',
      question: 'Où êtes-vous basés ?',
      answer: `
        <p>BlackBenAI est basée à Cotonou, au Bénin, en Afrique de l'Ouest.</p>
        <p>Bien que notre siège social soit au Bénin, nous travaillons avec des talents et des partenaires à travers toute l'Afrique et au-delà, grâce aux technologies de collaboration à distance.</p>
      `
    },
    {
      id: '3',
      category: 'services',
      question: 'Quels sont vos principaux services ?',
      answer: `
        <p>Nous offrons plusieurs solutions d'intelligence artificielle :</p>
        <ul>
          <li><strong>Edushare</strong> : Plateforme de partage de documents éducatifs</li>
          <li><strong>GuardClause</strong> : Analyse automatique des termes et conditions</li>
          <li><strong>SecurLog</strong> : Système de surveillance préventive par vision par ordinateur</li>
          <li><strong>WithSign</strong> : Traduction automatique du langage des signes</li>
          <li><strong>HowRoadCode</strong> : Assistant intelligent pour la conduite</li>
          <li><strong>MyCompanyGen</strong> : IA générative pour rapports d'entreprise</li>
        </ul>
        <p>Nous développons également des solutions personnalisées selon les besoins de nos clients.</p>
      `
    },
    {
      id: '4',
      category: 'services',
      question: 'Proposez-vous des solutions personnalisées ?',
      answer: `
        <p>Absolument ! Nous développons des solutions d'IA sur mesure pour répondre aux besoins spécifiques de votre entreprise ou organisation.</p>
        <p>Notre équipe d'experts peut vous accompagner dans :</p>
        <ul>
          <li>L'analyse de vos besoins en IA</li>
          <li>Le développement de modèles personnalisés</li>
          <li>L'intégration dans vos systèmes existants</li>
          <li>La formation et le support technique</li>
        </ul>
        <p>Contactez-nous pour discuter de votre projet !</p>
      `
    },
    {
      id: '5',
      category: 'technical',
      question: 'Quelles technologies utilisez-vous ?',
      answer: `
        <p>Nous utilisons les technologies les plus avancées en intelligence artificielle :</p>
        <ul>
          <li><strong>Langages</strong> : Python, JavaScript, TypeScript</li>
          <li><strong>Frameworks IA</strong> : TensorFlow, PyTorch, OpenCV, spaCy</li>
          <li><strong>Backend</strong> : Django, FastAPI, Flask</li>
          <li><strong>Frontend</strong> : React, Vue.js, React Native</li>
          <li><strong>Bases de données</strong> : PostgreSQL, MongoDB, Redis</li>
          <li><strong>Cloud</strong> : AWS, Docker, Kubernetes</li>
        </ul>
        <p>Nous restons à la pointe de la technologie pour offrir les meilleures solutions.</p>
      `
    },
    {
      id: '6',
      category: 'technical',
      question: 'Vos solutions sont-elles sécurisées ?',
      answer: `
        <p>La sécurité est une priorité absolue chez BlackBenAI. Nous mettons en place :</p>
        <ul>
          <li>Chiffrement des données en transit et au repos</li>
          <li>Authentification multi-facteurs</li>
          <li>Audits de sécurité réguliers</li>
          <li>Conformité aux standards internationaux</li>
          <li>Protection de la vie privée by design</li>
        </ul>
        <p>Toutes nos solutions respectent les meilleures pratiques de sécurité et de confidentialité.</p>
      `
    },
    {
      id: '7',
      category: 'partnership',
      question: 'Comment devenir partenaire de BlackBenAI ?',
      answer: `
        <p>Nous sommes toujours ouverts à de nouveaux partenariats stratégiques ! Nous recherchons :</p>
        <ul>
          <li>Partenaires technologiques pour l'innovation</li>
          <li>Distributeurs pour étendre notre portée</li>
          <li>Investisseurs pour accélérer notre croissance</li>
          <li>Institutions académiques pour la recherche</li>
          <li>Organisations gouvernementales et ONG</li>
        </ul>
        <p>Contactez-nous via notre formulaire de contact en précisant "Partenariat" comme type de demande.</p>
      `
    },
    {
      id: '8',
      category: 'partnership',
      question: 'Travaillez-vous avec des universités ?',
      answer: `
        <p>Oui, nous croyons fermement en la collaboration avec le monde académique. Nous proposons :</p>
        <ul>
          <li>Stages et projets de fin d'études</li>
          <li>Collaborations de recherche en IA</li>
          <li>Formations et workshops</li>
          <li>Accès à nos datasets pour la recherche</li>
          <li>Mentorat d'étudiants entrepreneurs</li>
        </ul>
        <p>Si vous représentez une université intéressée par une collaboration, contactez-nous !</p>
      `
    },
    {
      id: '9',
      category: 'career',
      question: 'Quels postes recrutez-vous actuellement ?',
      answer: `
        <p>Nous sommes en pleine croissance et recrutons activement :</p>
        <ul>
          <li><strong>CTO (Chief Technology Officer)</strong> - Poste urgent</li>
          <li><strong>Directeur Exécutif</strong> - Direction générale</li>
          <li><strong>Responsable RH</strong> - Gestion des talents</li>
          <li><strong>Ingénieurs IA Senior</strong> - Développement technique</li>
        </ul>
        <p>Consultez notre page Carrières pour plus de détails et postulez directement en ligne !</p>
      `
    },
    {
      id: '10',
      category: 'career',
      question: 'Acceptez-vous les candidatures spontanées ?',
      answer: `
        <p>Absolument ! Nous sommes toujours intéressés par les talents exceptionnels, même si nous n'avons pas de poste ouvert correspondant exactement à votre profil.</p>
        <p>Envoyez-nous votre CV et une lettre de motivation via notre page Contact en précisant "Candidature spontanée". Nous vous recontacterons dès qu'une opportunité correspondante se présente.</p>
        <p>Les profils que nous recherchons particulièrement : développeurs IA, data scientists, ingénieurs logiciel, experts en vision par ordinateur, spécialistes NLP.</p>
      `
    },
    {
      id: '11',
      category: 'general',
      question: 'Quelle est votre vision pour l\'Afrique ?',
      answer: `
        <p>Notre vision est de faire de l'Afrique un leader mondial en intelligence artificielle. Nous croyons que :</p>
        <ul>
          <li>L'Afrique a le potentiel de développer ses propres solutions technologiques</li>
          <li>L'autonomie technologique est essentielle pour le développement du continent</li>
          <li>L'IA peut résoudre des défis spécifiquement africains</li>
          <li>Les talents africains peuvent rivaliser avec les meilleurs au monde</li>
        </ul>
        <p>Chaque solution que nous développons contribue à cette vision d'une Afrique technologiquement autonome et innovante.</p>
      `
    },
    {
      id: '12',
      category: 'services',
      question: 'Vos services sont-ils accessibles aux PME ?',
      answer: `
        <p>Oui, nous proposons des solutions adaptées à tous types d'organisations, des startups aux grandes entreprises.</p>
        <p>Pour les PME, nous offrons :</p>
        <ul>
          <li>Des tarifs préférentiels et des plans flexibles</li>
          <li>Des solutions modulaires selon vos besoins</li>
          <li>Un accompagnement personnalisé</li>
          <li>Des formations pour vos équipes</li>
          <li>Un support technique dédié</li>
        </ul>
        <p>Contactez-nous pour discuter d'une solution adaptée à votre budget et vos besoins.</p>
      `
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>FAQ - BlackBenAI | Questions Fréquentes</title>
        <meta name="description" content="Trouvez les réponses aux questions fréquemment posées sur BlackBenAI, nos services d'intelligence artificielle, nos partenariats et opportunités de carrière." />
        <meta name="keywords" content="BlackBenAI, FAQ, questions fréquentes, intelligence artificielle, services IA, support, aide" />
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
                Questions Fréquentes
              </HeroTitle>
              <HeroSubtitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Trouvez rapidement les réponses à vos questions sur BlackBenAI et nos solutions d'intelligence artificielle
              </HeroSubtitle>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* FAQ Section */}
        <Section>
          <Container>
            {/* Recherche */}
            <SearchSection>
              <SearchIcon>
                <FaSearch />
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Rechercher dans les questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchSection>

            {/* Catégories */}
            <CategoriesGrid>
              {categories.map((category) => (
                <CategoryButton
                  key={category.id}
                  active={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  {category.label}
                </CategoryButton>
              ))}
            </CategoriesGrid>

            {/* Questions et Réponses */}
            <FAQGrid>
              <AnimatePresence>
                {filteredFAQs.map((faq, index) => (
                  <FAQItem
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <FAQQuestion onClick={() => toggleItem(faq.id)}>
                      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                        <QuestionIcon>
                          <FaQuestionCircle />
                        </QuestionIcon>
                        <QuestionText>{faq.question}</QuestionText>
                      </div>
                      <ToggleIcon
                        animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown />
                      </ToggleIcon>
                    </FAQQuestion>
                    
                    <AnimatePresence>
                      {openItems.includes(faq.id) && (
                        <FAQAnswer
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      )}
                    </AnimatePresence>
                  </FAQItem>
                ))}
              </AnimatePresence>

              {filteredFAQs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ 
                    textAlign: 'center', 
                    padding: '3rem',
                    color: colors.textLight 
                  }}
                >
                  <FaQuestionCircle style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }} />
                  <p>Aucune question trouvée pour votre recherche.</p>
                  <p>Essayez avec d'autres mots-clés ou contactez-nous directement.</p>
                </motion.div>
              )}
            </FAQGrid>

            {/* Call to Action */}
            <ContactCTA
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CTATitle>Vous ne trouvez pas votre réponse ?</CTATitle>
              <CTADescription>
                Notre équipe est là pour vous aider ! Contactez-nous directement et nous vous répondrons dans les plus brefs délais.
              </CTADescription>
              <Button style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                <FaQuestionCircle style={{ marginRight: '0.5rem' }} />
                Nous Contacter
              </Button>
            </ContactCTA>
          </Container>
        </Section>
      </PageContainer>
    </>
  );
};

export default FAQPage;