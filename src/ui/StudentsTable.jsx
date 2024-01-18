import { useNavigate } from "react-router-dom";
import StudentStatus from "./StudentStatus";
import TableRow from "./TableRow";
import Table from "./Table";

function StudentsTable({ students }) {
  const navigate = useNavigate();
  const activeStudents = students.filter((s) => s.status !== 2);

  return (
    <Table>
      <TableRow type="header" columns="2.2fr 2fr 1fr 1.2fr 0.8fr">
        <span>NOME</span>
        <span>EMAIL</span>
        <span>CPF</span>
        <span>TELEFONE</span>
        <span>STATUS</span>
      </TableRow>
      {activeStudents.map((s) => (
        <TableRow
          key={s.cpf}
          onClick={() => navigate(`/alunos/${s.phone}`)}
          columns="2.2fr 2fr 1fr 1.2fr 0.8fr"
        >
          <span>{s.name}</span>
          <span>{s.email}</span>
          <span>{s.cpf}</span>
          <span>{s.phone}</span>
          <StudentStatus status={s.status}>
            {s.status === 1
              ? "cursando"
              : `${s.status === 2 ? "desativado" : "observação"}`}
          </StudentStatus>
        </TableRow>
      ))}
    </Table>
  );
}

export default StudentsTable;
