import { useParams } from "react-router-dom";
import { TEACHERS } from "../data/teachers";

function Student() {
  const params = useParams();

  const { name, email, phone } = TEACHERS.find((el) => el.phone === +params.id);

  return (
    <>
      <div style={{ border: "1px solid black" }}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </>
  );
}

export default Student;
