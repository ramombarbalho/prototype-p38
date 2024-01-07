import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  background-color: #f89451;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff7920;
  }
`;

export default Button;
