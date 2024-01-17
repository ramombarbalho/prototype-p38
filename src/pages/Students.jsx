import { STUDENTS } from "../data/students";
import PageHeader from "../ui/PageHeader";
import StudentsTable from "../ui/StudentsTable";
import PageTitle from "../ui/PageTitle";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  border-radius: 8px;
  font-size: 1.4rem;
  background-color: #00ff84;
  color: #222;
  height: 4rem;
  width: fit-content;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
`;

function Students() {
  return (
    <>
      <PageHeader>
        <PageTitle>ALUNOS</PageTitle>
        <Button to="cadastrar">CADASTRAR ALUNOS</Button>
      </PageHeader>
      <StudentsTable students={STUDENTS} />
    </>
  );
}

export default Students;
