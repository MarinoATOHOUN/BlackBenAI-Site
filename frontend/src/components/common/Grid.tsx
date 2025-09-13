import React from 'react';
import styled from 'styled-components';
import { GridProps, StyledGridProps } from '../../types';

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${props => props.columns ? `repeat(${props.columns}, 1fr)` : '1fr'};
  gap: ${props => props.gap || '1rem'};
`;

const Grid: React.FC<StyledGridProps> = ({ children, ...props }) => {
  return (
    <StyledGrid {...props}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
