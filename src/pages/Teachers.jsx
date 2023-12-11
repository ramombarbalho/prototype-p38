import styled from "styled-components";
import { TEACHERS } from "../data/teachers";
import { NavLink } from "react-router-dom";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 2.2fr 2.2fr 1.4fr 0.6fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-bg-container-secondary);
  border-bottom: 1px solid var(--color-border);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;

  transition: all 0.3s;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 2.2fr 1.4fr 0.6fr;
  column-gap: 2.4rem;
  align-items: center;

  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;

  background-color: var(--color-bg-container-primary);
  border-bottom: 1px solid var(--color-border);
  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;

  transition: all 0.3s;
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
    background-color: var(--color-bg-container-primary);

    border-radius: 5px;
    color: var(--color-text);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-hover);
    background-color: var(--color-bg-container-secondary);
  }
`;

function Classes() {
  return (
    <>
      <PageHeader>
        <h2>PROFESSORES</h2>
        <StyledNavLink to="cadastrar">CADASTRAR PROFESSORES</StyledNavLink>
      </PageHeader>
      <div>
        <TableHeader>
          <span>NOME</span>
          <span>EMAIL</span>
          <span>FONE</span>
          <span>TURMA</span>
        </TableHeader>
        {TEACHERS.map((t) => (
          <TableRow key={t.name}>
            <span>{t.name}</span>
            <span>{t.email}</span>
            <span>{t.phone}</span>
            <span>{t.class}</span>
          </TableRow>
        ))}
      </div>
    </>
  );
}

export default Classes;
