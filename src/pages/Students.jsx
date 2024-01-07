import styled, { css } from "styled-components";
import { STUDENTS } from "../data/students";
import { useNavigate } from "react-router-dom";
import PageHeader from "../ui/PageHeader";
import StyledNavLink from "../ui/StyledNavLink";
import TableRow from "../ui/TableRow";

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
  const navigate = useNavigate();

  return (
    <>
      <PageHeader>
        <div>ALUNOS</div>
        <StyledNavLink to="cadastrar">CADASTRAR ALUNOS</StyledNavLink>
      </PageHeader>
      <div>
        <TableRow type="header" columns="2.2fr 2.2fr 1fr 1fr 0.6fr">
          <span>NOME</span>
          <span>EMAIL</span>
          <span>CPF</span>
          <span>TELEFONE</span>
          <span>STATUS</span>
        </TableRow>
        {STUDENTS.map((s) => (
          <TableRow
            key={s.cpf}
            onClick={() => navigate(`/alunos/${s.phone}`)}
            columns="2.2fr 2.2fr 1fr 1fr 0.6fr"
          >
            <span>{s.name}</span>
            <span>{s.email}</span>
            <span>{s.cpf}</span>
            <span>{s.phone}</span>
            <StyledStatus status={s.status}>
              {s.status === 1 ? "cursando" : "desativado"}
            </StyledStatus>
          </TableRow>
        ))}
      </div>
    </>
  );
}

export default Students;
