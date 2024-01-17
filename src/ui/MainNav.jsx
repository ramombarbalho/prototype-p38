import styled from "styled-components";
import StyledNavLink from "./StyledNavLink";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <span>DASHBOARD</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/alunos">
            <span>ALUNOS</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/turmas">
            <span>TURMAS</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/professores">
            <span>PROFESSORES</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/desativados">
            <span>DESATIVADOS</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
