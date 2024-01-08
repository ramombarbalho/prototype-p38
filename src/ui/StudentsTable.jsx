import { useNavigate } from "react-router-dom";
import StudentStatus from "./StudentStatus";
import TableRow from "./TableRow";

function StudentsTable({ students }) {
  const navigate = useNavigate();

  return (
    <div role="table">
      <TableRow type="header" columns="2.2fr 2.2fr 1fr 1fr 0.6fr">
        <span>NOME</span>
        <span>EMAIL</span>
        <span>CPF</span>
        <span>TELEFONE</span>
        <span>STATUS</span>
      </TableRow>
      {students.map((s) => (
        <TableRow
          key={s.cpf}
          onClick={() => navigate(`/alunos/${s.phone}`)}
          columns="2.2fr 2.2fr 1fr 1fr 0.6fr"
        >
          <span>{s.name}</span>
          <span>{s.email}</span>
          <span>{s.cpf}</span>
          <span>{s.phone}</span>
          <StudentStatus status={s.status}>
            {s.status === 1 ? "cursando" : "desativado"}
          </StudentStatus>
        </TableRow>
      ))}
    </div>
  );
}

export default StudentsTable;
