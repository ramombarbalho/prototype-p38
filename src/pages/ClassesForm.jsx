import { TEACHERS } from "../data/teachers";
import { useState } from "react";
import { CLASSES } from "../data/classes";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Select from "../ui/Select";
import PageHeader from "../ui/PageHeader";
import PageTitle from "../ui/PageTitle";

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
      students: [],
    };
    CLASSES.push(data);
    setLocal("");
    setDays("");
    setHour("");
    setStack("");
    setTeacher("");
  }

  return (
    <>
      <PageHeader>
        <PageTitle>CADASTRAR TURMA</PageTitle>
      </PageHeader>
      <Form>
        <Select
          onChange={(e) => setLocal(e.target.value)}
          name="local"
          id="local"
          value={local}
        >
          <option value="">--- Informe o local</option>
          <option value="SOFTEX">SOFTEX</option>
          <option value="UFPB">UFPB</option>
          <option value="UFRN">UFRN</option>
        </Select>
        <Select
          onChange={(e) => setDays(e.target.value)}
          name="days"
          id="days"
          value={days}
        >
          <option value="">--- Informe os dias</option>
          <option value="1">SEG - QUA</option>
          <option value="2">TER - QUI</option>
        </Select>
        <Select
          onChange={(e) => setHour(e.target.value)}
          name="hour"
          id="hour"
          value={hour}
        >
          <option value="">--- Informe o horário</option>
          <option value="1">08:30 as 11:30</option>
          <option value="2">14:00 as 17:00</option>
          <option value="3">18:30 as 21:30</option>
        </Select>
        <Select
          onChange={(e) => setStack(e.target.value)}
          name="stack"
          id="stack"
          value={stack}
        >
          <option value="">--- Informe a trilha</option>
          <option value="1">BACK-END</option>
          <option value="2">FRONT-END</option>
        </Select>
        <Select
          onChange={(e) => setTeacher(e.target.value)}
          name="teacher"
          id="teacher"
          value={teacher}
        >
          <option value="">--- Informe o professor</option>
          {TEACHERS.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name}
            </option>
          ))}
        </Select>
        <Button onClick={newClass}>CADASTRAR TURMA</Button>
      </Form>
    </>
  );
}

export default ClassesForm;
