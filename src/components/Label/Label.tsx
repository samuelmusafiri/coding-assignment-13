import styled from 'styled-components';
import { LabelProps } from './Label.types';
import React from 'react';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.disabled ? 'grey' : '#333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Label: React.FC<LabelProps> = ({ text, disabled = false }) => {
  return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};
