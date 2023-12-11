import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import DarkModeToggle from "./DarkModeToggle";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  function logout() {
    navigate("/", { replace: true });
  }
  return (
    <StyledHeaderMenu>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <ButtonIcon onClick={logout}>
          <HiArrowRightOnRectangle />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
