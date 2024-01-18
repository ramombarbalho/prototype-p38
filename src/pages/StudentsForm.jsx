import { useState } from "react";
import { STUDENTS } from "../data/students";
import { CLASSES } from "../data/classes";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Select from "../ui/Select";
import PageHeader from "../ui/PageHeader";
import PageTitle from "../ui/PageTitle";

function StudentsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [classe, setClasse] = useState("");

  function newStudent(e) {
    e.preventDefault();
    if (!name || !email || !phone || !cpf || !classe) return;
    const data = {
      id: String(STUDENTS.length + 1).padStart(4, "0"),
      name,
      email,
      cpf,
      phone: +phone,
      status: 1,
      classe,
    };
    STUDENTS.push(data);
    CLASSES.find((c) => c.id === classe).students.push(data);
    setName("");
    setEmail("");
    setCpf("");
    setPhone("");
    setClasse("");
  }

  return (
    <>
      <PageHeader>
        <PageTitle>CADASTRAR ALUNO</PageTitle>
      </PageHeader>
      <Form>
        <Input
          onChange={(e) => setName(e.target.value.toUpperCase())}
          name="name"
          id="name"
          value={name}
          autoComplete="off"
          type="text"
          placeholder="Nome"
        />
        <Input
          onChange={(e) => setCpf(e.target.value)}
          name="cpf"
          id="cpf"
          value={cpf}
          autoComplete="off"
          type="number"
          placeholder="CPF"
        />
        <Input
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          name="email"
          id="email"
          value={email}
          autoComplete="off"
          type="email"
          placeholder="Email"
        />
        <Input
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          id="phone"
          value={phone}
          autoComplete="off"
          type="number"
          placeholder="Telefone"
        />
        <Select
          onChange={(e) => setClasse(e.target.value)}
          name="classe"
          id="classe"
          value={classe}
        >
          <option value="">--- Informe a turma</option>
          {CLASSES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.id} - {c.stack === 1 ? "BACK-END" : "FRONT-END"} - {c.local} -{" "}
              {c.days === 1 ? "SEG - QUA" : "TER - QUI"} -{" "}
              {c.hour === 1
                ? "08:30 as 11:30"
                : c.hour === 2
                ? "14:00 as 17:00"
                : "18:30 as 21:30"}{" "}
              - {c.teacher}
            </option>
          ))}
        </Select>
        <Button onClick={newStudent}>CADASTRAR ALUNO</Button>
      </Form>
    </>
  );
}

export default StudentsForm;
