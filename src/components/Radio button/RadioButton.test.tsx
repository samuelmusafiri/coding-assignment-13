import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';
import React from 'react';


test('Radio button is visible', () => {
  render(<RadioButton label="Option 1" />);
  const labelElement = screen.getByText(/Option 1/i);
  expect(labelElement).toBeVisible();
});

test('Radio button changes cursor when disabled', () => {
  render(<RadioButton label="Option 1" disabled />);
  const radioElement = screen.getByRole('radio');
  expect(radioElement).toHaveStyle('cursor: not-allowed');
});
