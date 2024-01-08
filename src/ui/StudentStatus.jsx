import styled, { css } from "styled-components";

const StudentStatus = styled.span`
  padding: 0.3rem;
  border-radius: 3px;
  color: #222;
  font-weight: 600;
  text-align: center;
  width: 11rem;

  ${(props) =>
    props.status === 1 &&
    css`
      background-color: #93ff93;
    `}

  ${(props) =>
    props.status === 2 &&
    css`
      background-color: #ff9292;
    `}
`;

export default StudentStatus;
