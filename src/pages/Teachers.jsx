import styled from "styled-components";
import { TEACHERS } from "../data/teachers";
import PageHeader from "../ui/PageHeader";
import PageTitle from "../ui/PageTitle";
import TeachersTable from "../ui/TeachersTable";
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
        <PageTitle>PROFESSORES</PageTitle>
        <Button to="cadastrar">CADASTRAR PROFESSORES</Button>
      </PageHeader>
      <TeachersTable teachers={TEACHERS} />
    </>
  );
}

export default Classes;
