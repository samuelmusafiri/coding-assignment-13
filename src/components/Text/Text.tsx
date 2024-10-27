import styled from "styled-components";
import { TextProps } from "./Text.types";
import React from "react";

const StyledText = styled.p<{ disabled?: boolean; color?: string }>`
  font-size: 16px;
  color: ${(props) => (props.disabled ? "grey" : props.color || "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export const Text: React.FC<TextProps> = ({
  content,
  color,
  disabled = false,
}) => {
  return (
    <StyledText disabled={disabled} color={color}>
      {content}
    </StyledText>
  );
};
