import styled from "styled-components";
import { TableProps } from "./Table.types";
import React from "react";

const StyledTable = styled.table<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "#fff"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

const StyledCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Table: React.FC<TableProps> = ({
  headers,
  rows,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledCell key={index}>{header}</StyledCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <StyledCell key={cellIndex}>{cell}</StyledCell>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
