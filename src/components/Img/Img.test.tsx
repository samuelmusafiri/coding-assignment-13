import { render, screen } from '@testing-library/react';
import { Img } from './Img';
import React from 'react';

test('Image is visible', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Placeholder" />);
  const imgElement = screen.getByAltText(/Placeholder/i);
  expect(imgElement).toBeVisible();
});

test('Image changes opacity and cursor when disabled', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Disabled Image" disabled />);
  const imgElement = screen.getByAltText(/Disabled Image/i);
  expect(imgElement).toHaveStyle('opacity: 0.5');
  expect(imgElement).toHaveStyle('cursor: not-allowed');
});
