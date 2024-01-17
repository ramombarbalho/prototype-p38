import { CLASSES } from "../data/classes";
import PageHeader from "../ui/PageHeader";
import ClassesTable from "../ui/ClassesTable";
import PageTitle from "../ui/PageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

function Classes() {
  return (
    <>
      <PageHeader>
        <PageTitle>TURMAS</PageTitle>
        <Button to="cadastrar">CADASTRAR TURMAS</Button>
      </PageHeader>
      <ClassesTable classes={CLASSES} />
    </>
  );
}

export default Classes;
