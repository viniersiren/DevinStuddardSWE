import React from 'react';
import styled from 'styled-components';
import { pulse } from '../../../styles/animations';

const Spinner = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: ${props => props.theme.colors.accent.main};
  border-radius: ${props => props.theme.borderRadius.full};
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Skeleton = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
  animation: ${pulse} 1.5s ease-in-out infinite;
  border-radius: ${props => props.theme.borderRadius.md};
  height: ${props => props.height || '20px'};
  width: ${props => props.width || '100%'};
`;

export const Loading = {
  Spinner: ({ size }) => <Spinner size={size} />,
  Skeleton: ({ width, height }) => <Skeleton width={width} height={height} />,
};

export default Loading;

