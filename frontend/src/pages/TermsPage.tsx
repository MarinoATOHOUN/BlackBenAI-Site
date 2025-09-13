/**
 * Page Conditions d'Utilisation pour BlackBenAI
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

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Conditions d'Utilisation - BlackBenAI</title>
        <meta name="description" content="Conditions d'utilisation des services et produits BlackBenAI" />
      </Helmet>

      <PageContainer>
        <Container>
          <h1>Conditions d'Utilisation</h1>
          <p>Page en cours de développement...</p>
        </Container>
      </PageContainer>
    </>
  );
};

export default TermsPage;