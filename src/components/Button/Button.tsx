import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string;
  disabled?: boolean;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.disabled ? 'grey' : 'blue')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Button = ({ label, disabled }: ButtonProps) => (
  <StyledButton disabled={disabled}>{label}</StyledButton>
);
