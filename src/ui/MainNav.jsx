import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: #aaa;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #eee;
    background-color: #555;
    border-radius: 5px;
  }
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
        {/* <li>
          <StyledNavLink to="/cadastrar-alunos">
            <span>CADASTRAR ALUNOS</span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/turmas">
            <span>TURMAS</span>
          </StyledNavLink>
        </li>
        {/* <li>
          <StyledNavLink to="/cadastrar-turmas">
            <span>CADASTRAR TURMAS</span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/professores">
            <span>PROFESSORES</span>
          </StyledNavLink>
        </li>
        {/* <li>
          <StyledNavLink to="/cadastrar-professores">
            <span>CADASTRAR PROFESSORES</span>
          </StyledNavLink>
        </li> */}
      </NavList>
    </nav>
  );
}

export default MainNav;
