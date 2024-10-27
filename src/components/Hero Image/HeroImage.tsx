import React from "react";
import styled from "styled-components";

interface HeroImageProps {
  src: string;
  alt: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledHeroImage = styled.div<
  Pick<HeroImageProps, "backgroundColor" | "disabled">
>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  width: 100%;
  height: auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  img {
    width: 100%;
    height: auto;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledHeroImage backgroundColor={backgroundColor} disabled={disabled}>
      <img src={src} alt={alt} />
    </StyledHeroImage>
  );
};
