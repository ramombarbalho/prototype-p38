import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  /* border-radius: var(--border-radius-sm); */
  cursor: pointer;

  /* &:hover {
    background-color: var(--color-text);
  } */

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-text);
    transition: color 0.2s;

    &:hover {
      color: var(--color-hover);
    }
  }
`;

export default ButtonIcon;
