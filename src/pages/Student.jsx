import { useParams } from "react-router-dom";
import { STUDENTS } from "../data/students";

function Student() {
  const params = useParams();

  const { name, email, cpf, phone, status, classe } = STUDENTS.find(
    (el) => el.phone === +params.id
  );

  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{cpf}</p>
      <p>{phone}</p>
      <p>{status}</p>
      <p>{classe}</p>
    </div>
  );
}

export default Student;
