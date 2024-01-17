import styled from "styled-components";

const Button = styled.button`
  border-radius: 8px;
  background-color: #00ff84;
  color: #222;
  height: 4rem;
  width: fit-content;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 1.4rem;

  /* &:hover {
    background-color: #00ff84;
  } */
`;

export default Button;
