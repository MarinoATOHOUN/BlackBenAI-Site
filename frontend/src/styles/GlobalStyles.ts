/**
 * Styles globaux pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import styled, { createGlobalStyle } from 'styled-components';
import { colors, typography, transitions } from './theme';

export const GlobalStyles = createGlobalStyle`
  /* Reset CSS moderne */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Variables CSS pour les couleurs */
  :root {
    --color-primary: ${colors.primary};
    --color-secondary: ${colors.secondary};
    --color-accent: ${colors.accent};
    --color-background: ${colors.background};
    --color-surface: ${colors.surface};
    --color-text: ${colors.text};
    --color-text-secondary: ${colors.textSecondary};
    --color-border: ${colors.border};
    --color-success: ${colors.success};
    --color-warning: ${colors.warning};
    --color-error: ${colors.error};
  }

  /* Styles de base */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${typography.fontFamily.primary};
    font-weight: ${typography.fontWeight.normal};
    line-height: ${typography.lineHeight.normal};
    color: ${colors.text};
    background-color: ${colors.background};
    overflow-x: hidden;
    
    /* Arrière-plan animé avec motifs */
    background-image: 
      radial-gradient(circle at 20% 80%, rgba(233, 69, 96, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(0, 212, 170, 0.05) 0%, transparent 50%);
    background-attachment: fixed;
    background-size: 100% 100%;
    
    /* Motif de grille subtil */
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
      z-index: -1;
    }
  }

  /* Sélection de texte */
  ::selection {
    background-color: ${colors.accent};
    color: ${colors.text};
  }

  ::-moz-selection {
    background-color: ${colors.accent};
    color: ${colors.text};
  }

  /* Scrollbar personnalisée */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.accent};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #f27121;
  }

  /* Liens */
  a {
    color: ${colors.accent};
    text-decoration: none;
    transition: ${transitions.base};
    
    &:hover {
      color: #f27121;
      text-decoration: underline;
    }
    
    &:focus {
      outline: 2px solid ${colors.accent};
      outline-offset: 2px;
    }
  }

  /* Titres */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${typography.fontWeight.bold};
    line-height: ${typography.lineHeight.tight};
    margin-bottom: 1rem;
    color: ${colors.text};
  }

  h1 {
    font-size: ${typography.fontSize['5xl']};
    font-weight: ${typography.fontWeight.black};
    
    @media (max-width: 768px) {
      font-size: ${typography.fontSize['3xl']};
    }
  }

  h2 {
    font-size: ${typography.fontSize['4xl']};
    font-weight: ${typography.fontWeight.extrabold};
    
    @media (max-width: 768px) {
      font-size: ${typography.fontSize['2xl']};
    }
  }

  h3 {
    font-size: ${typography.fontSize['3xl']};
    font-weight: ${typography.fontWeight.bold};
    
    @media (max-width: 768px) {
      font-size: ${typography.fontSize.xl};
    }
  }

  h4 {
    font-size: ${typography.fontSize['2xl']};
    font-weight: ${typography.fontWeight.semibold};
  }

  h5 {
    font-size: ${typography.fontSize.xl};
    font-weight: ${typography.fontWeight.medium};
  }

  h6 {
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeight.medium};
  }

  /* Paragraphes */
  p {
    margin-bottom: 1rem;
    color: ${colors.textSecondary};
    line-height: ${typography.lineHeight.relaxed};
  }

  /* Listes */
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    color: ${colors.textSecondary};
  }

  li {
    margin-bottom: 0.5rem;
  }

  /* Code */
  code {
    font-family: ${typography.fontFamily.mono};
    background-color: ${colors.surface};
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
    color: ${colors.accent};
  }

  pre {
    font-family: ${typography.fontFamily.mono};
    background-color: ${colors.surface};
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 1rem;
    border: 1px solid ${colors.border};
  }

  /* Boutons */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: ${transitions.base};
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
    
    &:focus {
      outline: 2px solid ${colors.accent};
      outline-offset: 2px;
    }
  }

  /* Formulaires */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    border: 1px solid ${colors.border};
    border-radius: 8px;
    padding: 0.75rem 1rem;
    background-color: ${colors.surface};
    color: ${colors.text};
    transition: ${transitions.base};
    
    &:focus {
      outline: none;
      border-color: ${colors.accent};
      box-shadow: 0 0 0 3px rgba(233, 69, 96, 0.1);
    }
    
    &::placeholder {
      color: ${colors.textSecondary};
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Utilitaires */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    
    @media (min-width: 768px) {
      padding: 0 2rem;
    }
  }

  .text-gradient {
    background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glow-effect {
    box-shadow: 0 0 20px rgba(233, 69, 96, 0.3);
  }

  .neural-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .cyber-bg {
    background: linear-gradient(135deg, #00d4aa 0%, #00a8cc 100%);
  }

  /* Animations */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes slideInUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  .animate-slideInUp {
    animation: slideInUp 0.6s ease-out;
  }

  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-rotate {
    animation: rotate 2s linear infinite;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
    
    h1 {
      font-size: ${typography.fontSize['3xl']};
    }
    
    h2 {
      font-size: ${typography.fontSize['2xl']};
    }
    
    h3 {
      font-size: ${typography.fontSize.xl};
    }
  }

  /* Mode sombre par défaut */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: ${colors.background};
      color: ${colors.text};
    }
  }

  /* Accessibilité */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Focus visible pour l'accessibilité */
  .focus-visible {
    outline: 2px solid ${colors.accent};
    outline-offset: 2px;
  }
`;

// Composants styled réutilisables
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Section = styled.section`
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const Card = styled.div`
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 2rem;
  transition: ${transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: ${typography.fontWeight.medium};
  border-radius: 8px;
  transition: ${transitions.base};
  cursor: pointer;
  text-decoration: none;
  
  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return `
          padding: 0.5rem 1rem;
          font-size: ${typography.fontSize.sm};
        `;
      case 'lg':
        return `
          padding: 1rem 2rem;
          font-size: ${typography.fontSize.lg};
        `;
      default:
        return `
          padding: 0.75rem 1.5rem;
          font-size: ${typography.fontSize.base};
        `;
    }
  }}
  
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'secondary':
        return `
          background: ${colors.secondary};
          color: ${colors.text};
          border: 1px solid ${colors.border};
          
          &:hover {
            background: ${colors.primary};
            border-color: ${colors.accent};
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${colors.accent};
          border: 2px solid ${colors.accent};
          
          &:hover {
            background: ${colors.accent};
            color: ${colors.text};
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: ${colors.textSecondary};
          border: none;
          
          &:hover {
            background: ${colors.surface};
            color: ${colors.text};
          }
        `;
      default:
        return `
          background: linear-gradient(135deg, ${colors.accent} 0%, #f27121 100%);
          color: ${colors.text};
          border: none;
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(233, 69, 96, 0.3);
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

export const Grid = styled.div<{
  columns?: number;
  gap?: string;
}>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
  gap: ${({ gap = '2rem' }) => gap};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Flex = styled.div<{
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  gap?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  align-items: ${({ align = 'stretch' }) => {
    switch (align) {
      case 'start': return 'flex-start';
      case 'end': return 'flex-end';
      case 'center': return 'center';
      default: return 'stretch';
    }
  }};
  justify-content: ${({ justify = 'start' }) => {
    switch (justify) {
      case 'center': return 'center';
      case 'end': return 'flex-end';
      case 'between': return 'space-between';
      case 'around': return 'space-around';
      default: return 'flex-start';
    }
  }};
  gap: ${({ gap = '0' }) => gap};
  flex-wrap: ${({ wrap = false }) => wrap ? 'wrap' : 'nowrap'};
`;

export default GlobalStyles;