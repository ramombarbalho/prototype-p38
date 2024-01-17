import styled from "styled-components";

const StyledTable = styled.div`
  /* border: 5px solid white; */
  border-radius: 8px;
  overflow: hidden;
`;

function Table({ children }) {
  return <StyledTable role="table">{children}</StyledTable>;
}

export default Table;
