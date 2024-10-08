import styled from 'styled-components';
import { ImgProps } from './Img.types';
import React from 'react';

const StyledImg = styled.img<{ disabled?: boolean; backgroundColor?: string }>`
  max-width: 100%;
  background-color: ${(props) => (props.disabled ? 'grey' : props.backgroundColor || 'white')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

export const Img: React.FC<ImgProps> = ({ src, alt, disabled = false, backgroundColor }) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} backgroundColor={backgroundColor} />;
};
