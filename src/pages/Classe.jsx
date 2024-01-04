import { useParams } from "react-router-dom";
import { CLASSES } from "../data/classes";

function Classe() {
  const params = useParams();

  const { id, local, hour, days, stack, teacher, students } = CLASSES.find(
    (el) => +el.id === +params.id
  );

  return (
    <div>
      <p>{id}</p>
      <p>{local}</p>
      <p>{hour}</p>
      <p>{days}</p>
      <p>{stack}</p>
      <p>{teacher}</p>
      <br />
      <h2>ALUNOS</h2>
      {students.map((s) => (
        <div key={s.id}>{s.name}</div>
      ))}
    </div>
  );
}

export default Classe;
