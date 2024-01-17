import { TEACHERS } from "../data/teachers";
import { useState } from "react";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import PageHeader from "../ui/PageHeader";
import PageTitle from "../ui/PageTitle";

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
    <>
      <PageHeader>
        <PageTitle>CADASTRAR PROFESSOR</PageTitle>
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
        <Button onClick={newTeacher}>CADASTRAR PROFESSOR</Button>
      </Form>
    </>
  );
}

export default TeachersForm;
