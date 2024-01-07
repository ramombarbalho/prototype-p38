import { CLASSES } from "../data/classes";
import { useNavigate } from "react-router-dom";
import PageHeader from "../ui/PageHeader";
import StyledNavLink from "../ui/StyledNavLink";
import TableRow from "../ui/TableRow";

function Classes() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader>
        <div>TURMAS</div>
        <StyledNavLink to="cadastrar">CADASTRAR TURMAS</StyledNavLink>
      </PageHeader>
      <div>
        <TableRow type="header" columns="0.6fr 0.6fr 0.6fr 1fr 0.6fr 1fr">
          <span>ID</span>
          <span>LOCAL</span>
          <span>DIAS</span>
          <span>HORÁRIO</span>
          <span>STACK</span>
          <span>PROFESSOR</span>
        </TableRow>
        {CLASSES.map((c) => (
          <TableRow
            key={c.id}
            onClick={() => navigate(`/turmas/${c.id}`)}
            columns="0.6fr 0.6fr 0.6fr 1fr 0.6fr 1fr"
          >
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
