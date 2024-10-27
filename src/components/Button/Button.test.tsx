import { act } from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import React from "react";

test("Button renders with label", () => {
  render(<Button label="Click Me" />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeVisible(); // This should now work with jest-dom
});

test("Button is disabled", () => {
  render(<Button label="Click Me" disabled />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeDisabled();
});
