import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  font-size: 2rem;

  & image {
    transition: filter 0.2s;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const logoFilter = isDarkMode ? "" : "invert(100%)";

  return (
    <StyledLogo>
      <img
        style={{ filter: logoFilter }}
        src="../public/softex_pernambuco_br-200x72.png"
        alt="softex logo"
      />
    </StyledLogo>
  );
}

export default Logo;
