import styled from "styled-components";
import { CLASSES } from "../data/classes";
import { NavLink } from "react-router-dom";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 0.6fr 0.6fr 1fr 0.6fr 1fr;
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
  grid-template-columns: 0.6fr 0.6fr 0.6fr 1fr 0.6fr 1fr;
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

function Classes() {
  return (
    <>
      <PageHeader>
        <h2>TURMAS</h2>
        <StyledNavLink to="/cadastrar-turmas">CADASTRAR TURMAS</StyledNavLink>
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
            <span>{c.day === 1 ? "SEG - QUA" : "TER - QUI"}</span>
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
