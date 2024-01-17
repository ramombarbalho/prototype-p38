import { useParams } from "react-router-dom";
import { TEACHERS } from "../data/teachers";
import StyledDetails from "../ui/StyledDetails";
import { CLASSES } from "../data/classes";
import styled from "styled-components";
import { FaChalkboardTeacher } from "react-icons/fa";

const Test = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  & div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const Test2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

function Student() {
  const params = useParams();

  const { name, email, phone } = TEACHERS.find((el) => el.phone === +params.id);

  return (
    <StyledDetails>
      <Test>
        <Test2>
          <FaChalkboardTeacher color="#00ff84" fontSize="90px" />
        </Test2>
        <div>
          <p>Nome:</p>
          <p>Email:</p>
          <p>Telefone:</p>
          <p>Turma:</p>
        </div>
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>
            {CLASSES.filter((c) => c.teacher === name).length
              ? CLASSES.filter((c) => c.teacher === name)
                  .map((c) => c.id)
                  .join(" - ")
              : "PENDENTE"}
          </p>
        </div>
      </Test>
    </StyledDetails>
  );
}

export default Student;
