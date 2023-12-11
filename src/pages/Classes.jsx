import styled from "styled-components";
import { CLASSES } from "../data/classes";
import { NavLink } from "react-router-dom";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 0.6fr 0.6fr 1fr 0.6fr 1fr;
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
  grid-template-columns: 0.6fr 0.6fr 0.6fr 1fr 0.6fr 1fr;
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
        <div>TURMAS</div>
        <StyledNavLink to="cadastrar">CADASTRAR TURMAS</StyledNavLink>
      </PageHeader>
      <div>
        <TableHeader>
          <span>ID</span>
          <span>LOCAL</span>
          <span>DIAS</span>
          <span>HORÁRIO</span>
          <span>STACK</span>
          <span>PROFESSOR</span>
        </TableHeader>
        {CLASSES.map((c) => (
          <TableRow key={c.id}>
            <span>{c.id}</span>
            <span>{c.local}</span>
            <span>{c.days === 1 ? "SEG - QUA" : "TER - QUI"}</span>
            <span>
              {c.hour === 1
                ? "08:30 as 11:30"
                : c.hour === 2
                ? "14:00 as 17:00"
                : "18:30 as 21:30"}
            </span>
            <span>{c.stack === 1 ? "BACK-END" : "FRONT-END"}</span>
            <span>{c.teacher}</span>
          </TableRow>
        ))}
      </div>
    </>
  );
}

export default Classes;
