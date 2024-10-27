import { render, screen } from "@testing-library/react";
import { Label } from "./Label";
import React from "react";

test("Label is visible", () => {
  render(<Label text="Visible Label" />);
  const labelElement = screen.getByText(/Visible Label/i);
  expect(labelElement).toBeVisible();
});

test("Label is disabled and styled as grey", () => {
  render(<Label text="Disabled Label" disabled />);
  const labelElement = screen.getByText(/Disabled Label/i);
  expect(labelElement).toHaveStyle("color: rgb(128, 128, 128)"); // Expect RGB value of grey
});
