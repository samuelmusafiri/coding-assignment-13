import { render, screen } from "@testing-library/react";
import { Table } from "./Table";
import React from "react";

test("Table is visible", () => {
  render(<Table headers={["Header 1"]} rows={[["Row 1, Cell 1"]]} />);
  const headerElement = screen.getByText(/Header 1/i);
  expect(headerElement).toBeVisible();
});

test("Table changes opacity and cursor when disabled", () => {
  render(<Table headers={["Header 1"]} rows={[["Row 1, Cell 1"]]} disabled />);
  const tableElement = screen.getByRole("table");
  expect(tableElement).toHaveStyle("opacity: 0.5");
  expect(tableElement).toHaveStyle("cursor: not-allowed");
});
