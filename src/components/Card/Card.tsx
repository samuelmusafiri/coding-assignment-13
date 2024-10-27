import styled from "styled-components";
import { CardProps } from "./Card.types";
import React from "react";

const StyledCard = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  border: 1px solid #ddd;
  padding: 16px;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "white"};
  color: ${(props) => (props.disabled ? "#666" : "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const Card: React.FC<CardProps> = ({
  title,
  content,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledCard disabled={disabled} backgroundColor={backgroundColor}>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};
