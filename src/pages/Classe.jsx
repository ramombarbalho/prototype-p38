import { useParams } from "react-router-dom";
import { CLASSES } from "../data/classes";
import StudentsTable from "../ui/StudentsTable";

function Classe() {
  const params = useParams();

  const { id, local, hour, days, stack, teacher, students } = CLASSES.find(
    (el) => +el.id === +params.id
  );

  return (
    <>
      <div style={{ border: "1px solid black" }}>
        <p>{id}</p>
        <p>{local}</p>
        <p>{hour}</p>
        <p>{days}</p>
        <p>{stack}</p>
        <p>{teacher}</p>
      </div>
      <div>ALUNOS</div>
      <StudentsTable students={students} />
    </>
  );
}

export default Classe;
