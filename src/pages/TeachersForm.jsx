import styled from "styled-components";
import { TEACHERS } from "../data/teachers";
import { useState } from "react";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledInput = styled.input`
  height: 3rem;
  border-radius: 5px;
  padding: 5px;
`;

const StyledBtnForm = styled.button`
  border-radius: 5px;
  background-color: #f89451;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff7920;
  }
`;

function TeachersForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function newTeacher(e) {
    e.preventDefault();
    if (!name || !email || !phone) return;
    TEACHERS.push({
      name,
      email,
      phone: +phone,
    });
    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <StyledForm>
      <div>CADASTRAR PROFESSOR</div>
      <StyledInput
        onChange={(e) => setName(e.target.value.toUpperCase())}
        name="name"
        id="name"
        value={name}
        autoComplete="off"
        type="text"
        placeholder="NOME"
      />
      <StyledInput
        onChange={(e) => setEmail(e.target.value.toLowerCase())}
        name="email"
        id="email"
        value={email}
        autoComplete="off"
        type="email"
        placeholder="EMAIL"
      />
      <StyledInput
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
        id="phone"
        value={phone}
        autoComplete="off"
        type="number"
        placeholder="TELEFONE"
      />
      <StyledBtnForm onClick={newTeacher}>CADASTRAR PROFESSOR</StyledBtnForm>
    </StyledForm>
  );
}

export default TeachersForm;
