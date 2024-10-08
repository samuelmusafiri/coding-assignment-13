import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';
import React from 'react';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input<{ disabled?: boolean }>`
  margin-right: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({ label, disabled = false }) => (
  <StyledLabel>
    <StyledInput type="radio" disabled={disabled} />
    {label}
  </StyledLabel>
);
