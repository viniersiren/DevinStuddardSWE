import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.3);
  z-index: ${props => props.theme.zIndex.fixed};
  pointer-events: none;
  transform: translateX(-50%);
`;

const CenterLine = () => {
  return <Line />;
};

export default CenterLine;

