import styled from "styled-components";
import { useState } from "react";
import { STUDENTS } from "../data/students";
import { CLASSES } from "../data/classes";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledSelect = styled.select`
  height: 3rem;
  border-radius: 5px;
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

function StudentsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [classe, setClasse] = useState("");

  function newStudent(e) {
    e.preventDefault();
    if (!name || !email || !phone || !cpf || !status || !classe) return;
    const data = {
      id: String(STUDENTS.length + 1).padStart(4, "0"),
      name,
      email,
      cpf,
      phone: +phone,
      status: +status,
      classe,
    };
    STUDENTS.push(data);
    CLASSES.find((c) => c.id === classe).students.push(data);
    setName("");
    setEmail("");
    setCpf("");
    setPhone("");
    setStatus("");
    setClasse("");
  }

  return (
    <StyledForm>
      <div>CADASTRAR ALUNO</div>
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
        onChange={(e) => setCpf(e.target.value)}
        name="cpf"
        id="cpf"
        value={cpf}
        autoComplete="off"
        type="number"
        placeholder="CPF"
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
      <StyledSelect
        onChange={(e) => setStatus(e.target.value)}
        name="status"
        id="status"
        value={status}
      >
        <option value="">--- INFORME O STATUS</option>
        <option value="1">CURSANDO</option>
        <option value="2">DESATIVADO</option>
      </StyledSelect>
      <StyledSelect
        onChange={(e) => setClasse(e.target.value)}
        name="classe"
        id="classe"
        value={classe}
      >
        <option value="">--- INFORME A TURMA</option>
        {CLASSES.map((c) => (
          <option key={c.id} value={c.id}>
            {c.id}
          </option>
        ))}
      </StyledSelect>
      <StyledBtnForm onClick={newStudent}>CADASTRAR ALUNO</StyledBtnForm>
    </StyledForm>
  );
}

export default StudentsForm;
