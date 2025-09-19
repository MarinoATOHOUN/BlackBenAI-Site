/**
 * Page Contact pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaPaperPlane,
  FaRobot,
  FaClock,
  FaGlobe
} from 'react-icons/fa';

import { colors, breakpoints, shadows } from '../styles/theme';
import { Container, Grid, Button } from '../styles/GlobalStyles';
import { contactService } from '../services/api';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  gap: 4rem;
  margin-top: 3rem;
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: ${shadows.lg};
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${colors.text};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  color: ${colors.text};
  font-weight: 500;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: ${colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.accent};
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
  }
  
  &::placeholder {
    color: ${colors.textLight};
    opacity: 0.7;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: ${colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${colors.accent};
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
  }
  
  &::placeholder {
    color: ${colors.textLight};
    opacity: 0.7;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: ${colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.accent};
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
  }
  
  option {
    background: ${colors.background};
    color: ${colors.text};
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 1.2rem 2rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: ${shadows.lg};
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${colors.text};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${colors.accent};
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${colors.text};
`;

const InfoText = styled.p`
  color: ${colors.textLight};
  line-height: 1.6;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textLight};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: ${colors.accent};
    color: white;
    transform: translateY(-3px);
    box-shadow: ${shadows.md};
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(46, 213, 115, 0.1);
  border: 1px solid #2ed573;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  color: #2ed573;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await contactService.send(formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Erreur lors de l’envoi du message:', error);
      // Optionnel: afficher un message d’erreur à l’utilisateur
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - BlackBenAI | Contactez-nous</title>
        <meta name="description" content="Contactez BlackBenAI pour vos projets d'intelligence artificielle. Nous sommes là pour répondre à vos questions et discuter de vos besoins." />
        <meta name="keywords" content="BlackBenAI, contact, intelligence artificielle, projets IA, consultation, Marino ATOHOUN" />
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
                Contactez-nous
              </HeroTitle>
              <HeroSubtitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Nous sommes là pour répondre à vos questions et discuter de vos projets d'intelligence artificielle
              </HeroSubtitle>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Contact Section */}
        <Section>
          <Container>
            <ContactGrid>
              {/* Formulaire de contact */}
              <ContactForm
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
              >
                <FormTitle>
                  <FaPaperPlane />
                  Envoyez-nous un message
                </FormTitle>

                {showSuccess && (
                  <SuccessMessage
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <FaPaperPlane />
                    Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </SuccessMessage>
                )}

                <FormGroup>
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="type">Type de demande</Label>
                  <Select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    <option value="general">Question générale</option>
                    <option value="project">Projet personnalisé</option>
                    <option value="partnership">Partenariat</option>
                    <option value="career">Opportunité de carrière</option>
                    <option value="support">Support technique</option>
                    <option value="media">Demande média</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet de votre message"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre demande en détail..."
                    required
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <FaRobot />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Envoyer le message
                    </>
                  )}
                </SubmitButton>
              </ContactForm>

              {/* Informations de contact */}
              <ContactInfo
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <InfoTitle>
                  <FaRobot />
                  Informations de contact
                </InfoTitle>

                <InfoItem>
                  <InfoIcon>
                    <FaEnvelope />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Email</InfoLabel>
                    <InfoText>mahouliatohoun502@gmail.com</InfoText>
                    {/* <InfoText>marino.atohoun@blackbenai.com</InfoText> */}
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <FaPhone />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Téléphone</InfoLabel>
                    <InfoText>+229 0159037170</InfoText>
                    <InfoText>Disponible du lundi au vendredi</InfoText>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <FaMapMarkerAlt />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Localisation</InfoLabel>
                    <InfoText>Cotonou, Bénin</InfoText>
                    <InfoText>Afrique de l'Ouest</InfoText>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <FaClock />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Heures d'ouverture</InfoLabel>
                    <InfoText>Lundi - Vendredi: 8h00 - 18h00</InfoText>
                    <InfoText>Samedi: 9h00 - 15h00 (GMT+1)</InfoText>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <FaGlobe />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Réponse</InfoLabel>
                    <InfoText>Nous répondons généralement</InfoText>
                    <InfoText>dans les 24 heures ouvrables</InfoText>
                  </InfoContent>
                </InfoItem>

                <SocialLinks>
                  <SocialLink href="https://www.linkedin.com/company/blackbenai" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink href="https://github.com/BlackBenAI" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </SocialLink>
                </SocialLinks>
              </ContactInfo>
            </ContactGrid>
          </Container>
        </Section>
      </PageContainer>
    </>
  );
};

export default ContactPage;