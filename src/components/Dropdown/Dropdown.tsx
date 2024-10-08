import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import React from 'react';

const StyledSelect = styled.select<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 8px;
  background-color: ${(props) => (props.disabled ? 'grey' : props.backgroundColor || '#fff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, disabled = false, backgroundColor }) => {
  return (
    <StyledSelect disabled={disabled} backgroundColor={backgroundColor}>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </StyledSelect>
  );
};
