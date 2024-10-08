import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import React from 'react';
import '@testing-library/jest-dom'; // This is the important part

test('Button is visible', () => {
  render(<Button label="Click Me" />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeVisible();
});

test('Button is disabled', () => {
  render(<Button label="Can’t Click" disabled />);
  const buttonElement = screen.getByText(/Can’t Click/i);
  expect(buttonElement).toBeDisabled();
});
