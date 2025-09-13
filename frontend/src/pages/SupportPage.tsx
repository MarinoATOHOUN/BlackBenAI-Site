/**
 * Page Support pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { colors } from '../styles/theme';
import { Container } from '../styles/GlobalStyles';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 80px;
  background: ${colors.background};
`;

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - BlackBenAI</title>
        <meta name="description" content="Support technique et assistance pour les services BlackBenAI" />
      </Helmet>

      <PageContainer>
        <Container>
          <h1>Support Technique</h1>
          <p>Page en cours de développement...</p>
        </Container>
      </PageContainer>
    </>
  );
};

export default SupportPage;