/**
 * Composant LoadingSpinner pour BlackBenAI
 * Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles/theme';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

// Animations
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

// Styled components
const SpinnerContainer = styled.div<{ size: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          width: 20px;
          height: 20px;
        `;
      case 'large':
        return `
          width: 60px;
          height: 60px;
        `;
      default:
        return `
          width: 40px;
          height: 40px;
        `;
    }
  }}
`;

const Spinner = styled.div<{ size: string; color: string }>`
  width: 100%;
  height: 100%;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid ${({ color }) => color};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `border-width: 2px;`;
      case 'large':
        return `border-width: 4px;`;
      default:
        return `border-width: 3px;`;
    }
  }}
`;

const NeuralSpinner = styled.div<{ size: string; color: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
  
  &::before {
    width: 100%;
    height: 100%;
    background: ${({ color }) => color};
    opacity: 0.6;
    animation-delay: -0.5s;
  }
  
  &::after {
    width: 60%;
    height: 60%;
    top: 20%;
    left: 20%;
    background: ${({ color }) => color};
    opacity: 0.8;
  }
`;

const DotsSpinner = styled.div<{ size: string; color: string }>`
  display: flex;
  gap: 4px;
  align-items: center;
  
  .dot {
    width: ${({ size }) => {
      switch (size) {
        case 'small': return '6px';
        case 'large': return '12px';
        default: return '8px';
      }
    }};
    height: ${({ size }) => {
      switch (size) {
        case 'small': return '6px';
        case 'large': return '12px';
        default: return '8px';
      }
    }};
    background: ${({ color }) => color};
    border-radius: 50%;
    animation: ${pulse} 1.4s ease-in-out infinite both;
    
    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
    &:nth-child(3) { animation-delay: 0; }
  }
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = colors.accent,
  className,
}) => {
  return (
    <SpinnerContainer size={size} className={className}>
      <Spinner size={size} color={color} />
    </SpinnerContainer>
  );
};

// Variantes du spinner
export const NeuralLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = colors.accent,
  className,
}) => {
  return (
    <SpinnerContainer size={size} className={className}>
      <NeuralSpinner size={size} color={color} />
    </SpinnerContainer>
  );
};

export const DotsLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = colors.accent,
  className,
}) => {
  return (
    <SpinnerContainer size={size} className={className}>
      <DotsSpinner size={size} color={color}>
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </DotsSpinner>
    </SpinnerContainer>
  );
};

// Composant avec texte de chargement
const LoadingWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  .loading-text {
    color: ${colors.textSecondary};
    font-size: 0.875rem;
    font-weight: 500;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

interface LoadingWithTextProps extends LoadingSpinnerProps {
  text?: string;
  variant?: 'default' | 'neural' | 'dots';
}

export const LoadingSpinnerWithText: React.FC<LoadingWithTextProps> = ({
  size = 'medium',
  color = colors.accent,
  text = 'Chargement...',
  variant = 'default',
  className,
}) => {
  const SpinnerComponent = {
    default: LoadingSpinner,
    neural: NeuralLoadingSpinner,
    dots: DotsLoadingSpinner,
  }[variant];

  return (
    <LoadingWithText className={className}>
      <SpinnerComponent size={size} color={color} />
      <div className="loading-text">{text}</div>
    </LoadingWithText>
  );
};

export default LoadingSpinner;