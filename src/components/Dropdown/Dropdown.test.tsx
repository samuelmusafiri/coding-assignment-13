import React from "react"; // Explicit React import
import { render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";
import "@testing-library/jest-dom";

test("Dropdown changes background and cursor when disabled", () => {
  render(<Dropdown options={["Option 1"]} disabled backgroundColor="grey" />);
  const dropdownElement = screen.getByRole("combobox");

  // Check if the styles for disabled state are applied
  expect(dropdownElement).toHaveStyle("background-color: rgb(128, 128, 128)");
  expect(dropdownElement).toHaveStyle("cursor: not-allowed");
});
