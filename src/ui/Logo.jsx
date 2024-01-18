import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  font-size: 2rem;

  & img {
    transition: filter 0.2s;
    width: 17rem;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <img src="./logo-sigfap.png" alt="softex logo" />
    </StyledLogo>
  );
}

export default Logo;
