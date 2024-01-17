import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background-color: var(--color-bg-container-primary);

    border-radius: 10px;
    color: var(--color-text);
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.2rem 2.4rem;
    border-bottom: rgba(0, 255, 132, 0) 1px solid;
    transition: all 0.2s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-hover);
    background-color: var(--color-bg-container-secondary);
    border-bottom: #00ff84 1px solid;
  }

  /* &:hover {
    border-bottom: rgba(0, 255, 132, 0) 2px solid;
  } */
`;

export default StyledNavLink;
