/**
 * Page Article de Blog pour BlackBenAI
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

const BlogPostPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Article - BlackBenAI</title>
        <meta name="description" content="Article de blog de BlackBenAI" />
      </Helmet>

      <PageContainer>
        <Container>
          <h1>Article de Blog</h1>
          <p>Page en cours de développement...</p>
        </Container>
      </PageContainer>
    </>
  );
};

export default BlogPostPage;