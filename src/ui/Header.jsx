import { styled } from "styled-components";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  background-color: var(--color-bg-container-primary);
  padding: 1.2rem 4.8rem;
  font-size: 2rem;
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid var(--color-border);
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
