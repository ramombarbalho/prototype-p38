import { useState } from "react";
import { STUDENTS } from "../data/students";
import { CLASSES } from "../data/classes";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Select from "../ui/Select";
import PageHeader from "../ui/PageHeader";

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
    <>
      <PageHeader>
        <div>CADASTRAR ALUNO</div>
      </PageHeader>
      <Form>
        <Input
          onChange={(e) => setName(e.target.value.toUpperCase())}
          name="name"
          id="name"
          value={name}
          autoComplete="off"
          type="text"
          placeholder="NOME"
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
          placeholder="EMAIL"
        />
        <Input
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          id="phone"
          value={phone}
          autoComplete="off"
          type="number"
          placeholder="TELEFONE"
        />
        <Select
          onChange={(e) => setStatus(e.target.value)}
          name="status"
          id="status"
          value={status}
        >
          <option value="">--- INFORME O STATUS</option>
          <option value="1">CURSANDO</option>
          <option value="2">DESATIVADO</option>
        </Select>
        <Select
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
        </Select>
        <Button onClick={newStudent}>CADASTRAR ALUNO</Button>
      </Form>
    </>
  );
}

export default StudentsForm;
