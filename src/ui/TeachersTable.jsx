import { useNavigate } from "react-router-dom";
import TableRow from "./TableRow";
import { CLASSES } from "../data/classes";
import Table from "./Table";

function TeachersTable({ teachers }) {
  const navigate = useNavigate();

  return (
    <Table>
      <TableRow type="header" columns="2.2fr 2.2fr 1.4fr 0.6fr">
        <span>NOME</span>
        <span>EMAIL</span>
        <span>TELEFONE</span>
        <span>TURMA</span>
      </TableRow>
      {teachers.map((t) => (
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
    </Table>
  );
}

export default TeachersTable;
