import { render, screen } from '@testing-library/react';
import { Label } from './Label';
import React from 'react';

test('Label is visible', () => {
  render(<Label text="Label Text" />);
  const labelElement = screen.getByText(/Label Text/i);
  expect(labelElement).toBeVisible();
});
