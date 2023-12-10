import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  background-color: #fff;
  padding: 1.2rem 4.8rem;
  font-size: 2rem;
  color: #000;
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #999;
`;

const StyledLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #000;
  height: 3.6rem;
  padding: 1.6rem;
  border-radius: 0.6rem;
  background-color: #f89451;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff7920;
  }
`;

function Header() {
  const navigate = useNavigate();

  function logout() {
    navigate("/", { replace: true });
  }

  return (
    <StyledHeader>
      <StyledLoginButton onClick={logout}>LOGOUT</StyledLoginButton>
    </StyledHeader>
  );
}

export default Header;
