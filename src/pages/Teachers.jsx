import { TEACHERS } from "../data/teachers";
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
        <div>PROFESSORES</div>
        <StyledNavLink to="cadastrar">CADASTRAR PROFESSORES</StyledNavLink>
      </PageHeader>
      <div>
        <TableRow type="header" columns="2.2fr 2.2fr 1.4fr 0.6fr">
          <span>NOME</span>
          <span>EMAIL</span>
          <span>TELEFONE</span>
          <span>TURMA</span>
        </TableRow>
        {TEACHERS.map((t) => (
          <TableRow
            key={t.name}
            onClick={() => navigate(`/professores/${t.phone}`)}
            columns="2.2fr 2.2fr 1.4fr 0.6fr"
          >
            <span>{t.name}</span>
            <span>{t.email}</span>
            <span>{t.phone}</span>
            <span>
              {CLASSES.filter((c) => c.teacher === t.name).length
                ? CLASSES.filter((c) => c.teacher === t.name)
                    .map((c) => c.id)
                    .join(" - ")
                : "PENDENTE"}
            </span>
          </TableRow>
        ))}
      </div>
    </>
  );
}

export default Classes;
