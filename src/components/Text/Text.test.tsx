import { render, screen } from '@testing-library/react';
import { Text } from './Text';
import React from 'react';

test('Text is visible', () => {
  render(<Text content="Visible Text" />);
  const textElement = screen.getByText(/Visible Text/i);
  expect(textElement).toBeVisible();
});

test('Text changes color and cursor when disabled', () => {
  render(<Text content="Disabled Text" disabled color="#000" />);
  const textElement = screen.getByText(/Disabled Text/i);
  expect(textElement).toHaveStyle('color: rgb(128, 128, 128)');
  expect(textElement).toHaveStyle('cursor: not-allowed');
});
