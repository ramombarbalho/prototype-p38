import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  padding: 3rem;
  background-color: var(--color-bg-container-primary);
  border-radius: 5px;

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;

    & label {
      font-size: 1.7rem;
      font-weight: 100;
    }
  }
`;

const StyledInput = styled.input`
  height: 4rem;
  font-size: 1.6rem;
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid var(--color-border);
`;

const StyledLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #000;
  height: 4rem;
  border-radius: 0.6rem;
  background-color: #00ff84;
  cursor: pointer;
  transition: background-color 0.2s;

  /* &:hover {
    background-color: #ff7920;
  } */
`;

function LoginForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const access = name === "softex" && pass === "123";

  function login(e) {
    e.preventDefault();
    if (!access) return;
    navigate("/dashboard", { replace: true });
  }

  return (
    <StyledLoginForm>
      <div>
        <label htmlFor="name">NOME</label>
        <StyledInput
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="pass">SENHA</label>
        <StyledInput
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="pass"
          autoComplete="off"
        />
      </div>
      <StyledLoginButton onClick={login}>ENTRAR</StyledLoginButton>
    </StyledLoginForm>
  );
}

export default LoginForm;
