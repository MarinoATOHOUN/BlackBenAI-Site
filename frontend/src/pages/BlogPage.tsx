/**
 * Page Blog pour BlackBenAI
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

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - BlackBenAI</title>
        <meta name="description" content="Blog de BlackBenAI - Articles sur l'intelligence artificielle et nos projets" />
      </Helmet>

      <PageContainer>
        <Container>
          <h1>Blog</h1>
          <p>Page en cours de développement...</p>
        </Container>
      </PageContainer>
    </>
  );
};

export default BlogPage;