import styled, { css } from "styled-components";
import { STUDENTS } from "../data/students";
import { NavLink } from "react-router-dom";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 2.2fr 2.2fr 1fr 1fr 0.6fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: #555;
  border-bottom: 1px solid #777;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 2.2fr 1fr 1fr 0.6fr;
  column-gap: 2.4rem;
  align-items: center;

  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;

  background-color: #333;
  border-bottom: 1px solid #777;
  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;

  transition: none;
`;

const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background-color: #444;

    border: 1px solid #666;
    border-radius: 5px;
    color: #bbb;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #eee;
    background-color: #555;
  }
`;

const StyledStatus = styled.span`
  padding: 0.3rem;
  border-radius: 3px;
  color: #222;
  font-weight: 600;
  text-align: center;
  width: 11rem;

  ${(props) =>
    props.status === 1 &&
    css`
      background-color: #93ff93;
    `}

  ${(props) =>
    props.status === 2 &&
    css`
      background-color: #ff9292;
    `}
`;

function Students() {
  return (
    <>
      <PageHeader>
        <h2>ALUNOS</h2>
        <StyledNavLink to="/cadastrar-alunos">CADASTRAR ALUNOS</StyledNavLink>
      </PageHeader>
      <div>
        <TableHeader>
          <span>NOME</span>
          <span>EMAIL</span>
          <span>CPF</span>
          <span>FONE</span>
          <span>STATUS</span>
        </TableHeader>
        {STUDENTS.map((student) => (
          <TableRow key={student.cpf}>
            <span>{student.name}</span>
            <span>{student.email}</span>
            <span>{student.cpf}</span>
            <span>{student.phone}</span>
            <StyledStatus status={student.status}>
              {student.status === 1 ? "cursando" : "desativado"}
            </StyledStatus>
          </TableRow>
        ))}
      </div>
    </>
  );
}

export default Students;
