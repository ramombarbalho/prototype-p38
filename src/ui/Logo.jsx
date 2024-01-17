import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  font-size: 2rem;

  & img {
    transition: filter 0.2s;
    width: 17rem;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const logoFilter = isDarkMode ? "" : "invert(100%)";

  return (
    <StyledLogo>
      <img
        style={{ filter: logoFilter }}
        src="./logo-sigfap.png"
        alt="softex logo"
      />
    </StyledLogo>
  );
}

export default Logo;
