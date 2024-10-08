import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';
import '@testing-library/jest-dom';  // For Jest matchers
import React from 'react';

test('Hero image has correct styles when disabled', () => {
  render(<HeroImage src="/mocked-image-path.svg" alt="Hero Image" disabled />);

  // Target the image's parent element that should have the disabled styles applied
  const heroImageWrapper = screen.getByAltText(/Hero Image/i).parentElement;

  // Check if the styles for the disabled state are applied
  expect(heroImageWrapper).toHaveStyle('opacity: 0.5');
  expect(heroImageWrapper).toHaveStyle('cursor: not-allowed');
});
