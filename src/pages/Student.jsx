import { useParams } from "react-router-dom";
import { STUDENTS } from "../data/students";
import { IoPersonSharp } from "react-icons/io5";
import StudentStatus from "../ui/StudentStatus";
import StyledDetails from "../ui/StyledDetails";
import styled from "styled-components";

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

  const { name, email, cpf, phone, status, classe } = STUDENTS.find(
    (el) => el.phone === +params.id
  );

  return (
    <StyledDetails>
      <Test>
        <Test2>
          <IoPersonSharp
            color={
              status === 1
                ? "#00ff84"
                : `${status === 2 ? "#505050" : "#FFDE59"}`
            }
            fontSize="90px"
          />
          <StudentStatus status={status}>
            {status === 1
              ? "cursando"
              : `${status === 2 ? "desativado" : "observação"}`}
          </StudentStatus>
        </Test2>
        <div>
          <p>Nome:</p>
          <p>Email:</p>
          <p>CPF:</p>
          <p>Telefone:</p>
          <p>Turma:</p>
        </div>
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{cpf}</p>
          <p>{phone}</p>
          <p>{classe}</p>
        </div>
      </Test>
    </StyledDetails>
  );
}

export default Student;
