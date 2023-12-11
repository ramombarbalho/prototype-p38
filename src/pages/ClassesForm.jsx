import styled from "styled-components";
import { TEACHERS } from "../data/teachers";
import { useState } from "react";
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

function ClassesForm() {
  const [local, setLocal] = useState("");
  const [days, setDays] = useState("");
  const [hour, setHour] = useState("");
  const [stack, setStack] = useState("");
  const [teacher, setTeacher] = useState("");

  function newClass(e) {
    e.preventDefault();
    if (!local || !days || !hour || !stack || !teacher) return;
    const data = {
      id: String(CLASSES.length + 1).padStart(3, "0"),
      local,
      days: +days,
      hour: +hour,
      stack: +stack,
      teacher,
    };
    CLASSES.push(data);
    setLocal("");
    setDays("");
    setHour("");
    setStack("");
    setTeacher("");
  }

  return (
    <StyledForm>
      <div>CADASTRAR TURMA</div>
      <StyledSelect
        onChange={(e) => setLocal(e.target.value)}
        name="local"
        id="local"
        value={local}
      >
        <option value="">--- INFORME O LOCAL</option>
        <option value="SOFTEX">SOFTEX</option>
        <option value="UFPB">UFPB</option>
        <option value="UFRN">UFRN</option>
      </StyledSelect>
      <StyledSelect
        onChange={(e) => setDays(e.target.value)}
        name="days"
        id="days"
        value={days}
      >
        <option value="">--- INFORME OS DIAS</option>
        <option value="1">SEG - QUA</option>
        <option value="2">TER - QUI</option>
      </StyledSelect>
      <StyledSelect
        onChange={(e) => setHour(e.target.value)}
        name="hour"
        id="hour"
        value={hour}
      >
        <option value="">--- INFORME O HORÁRIO</option>
        <option value="1">08:30 as 11:30</option>
        <option value="2">14:00 as 17:00</option>
        <option value="3">18:30 as 21:30</option>
      </StyledSelect>
      <StyledSelect
        onChange={(e) => setStack(e.target.value)}
        name="stack"
        id="stack"
        value={stack}
      >
        <option value="">--- INFORME A TRILHA</option>
        <option value="1">BACK-END</option>
        <option value="2">FRONT-END</option>
      </StyledSelect>
      <StyledSelect
        onChange={(e) => setTeacher(e.target.value)}
        name="teacher"
        id="teacher"
        value={teacher}
      >
        <option value="">--- INFORME O PROFESSOR</option>
        {TEACHERS.map((t) => (
          <option key={t.name} value={t.name}>
            {t.name}
          </option>
        ))}
      </StyledSelect>
      <StyledBtnForm onClick={newClass}>CADASTRAR TURMA</StyledBtnForm>
    </StyledForm>
  );
}

export default ClassesForm;
