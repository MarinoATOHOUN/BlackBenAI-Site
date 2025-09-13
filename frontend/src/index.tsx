/**
 * Point d'entrée principal de l'application BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import theme from './styles/theme';

// Configuration de l'environnement
if (process.env.NODE_ENV === 'development') {
  console.log('🚀 BlackBenAI Frontend - Mode Développement');
  console.log('📡 API URL:', process.env.REACT_APP_API_URL || 'http://localhost:12000/');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <GlobalStyles />
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);