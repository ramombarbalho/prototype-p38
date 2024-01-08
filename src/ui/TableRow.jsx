import styled, { css } from "styled-components";

const TableRow = styled.div`
  display: grid;
  ${({ columns }) =>
    css`
      grid-template-columns: ${columns};
    `}
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-bg-container-primary);
  border-bottom: 1px solid var(--color-border);
  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;
  cursor: pointer;

  &:hover {
    color: var(--color-hover);
    background-color: var(--color-bg-container-secondary);
  }

  ${({ type }) =>
    type === "header" &&
    css`
      background-color: var(--color-bg-container-secondary);
      text-transform: uppercase;
      cursor: default;

      &:hover {
        color: inherit;
        background-color: var(--color-bg-container-secondary);
      }
    `}

  transition: all 0.2s;
`;

export default TableRow;
