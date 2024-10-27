import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import "@testing-library/jest-dom"; // For extended matchers
import React from "react";

test("Card changes background color and cursor when disabled", () => {
  render(<Card title="Disabled Card" content="Card Content" disabled />);
  const cardElement = screen.getByText(/Disabled Card/i);

  // Check if the background color and cursor for the disabled state are applied
  expect(cardElement.parentElement).toHaveStyle("color: rgb(102, 102, 102)");

  expect(cardElement.parentElement).toHaveStyle("cursor: not-allowed");
});
