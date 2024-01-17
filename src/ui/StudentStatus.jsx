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
      background-color: #00ff84;
    `}

  ${(props) =>
    props.status === 2 &&
    css`
      background-color: #505050;
    `}

    ${(props) =>
    props.status === 3 &&
    css`
      background-color: #ffde59;
    `}
`;

export default StudentStatus;
