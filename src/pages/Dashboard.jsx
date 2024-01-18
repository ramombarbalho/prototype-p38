import styled from "styled-components";
import { STUDENTS } from "../data/students";
import PageHeader from "../ui/PageHeader";
import PageTitle from "../ui/PageTitle";
import StudentStatus from "../ui/StudentStatus";
import StyledDetails from "../ui/StyledDetails";
import { IoPersonSharp } from "react-icons/io5";

const StyledDisabled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

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

function Dashboard() {
  const alertStudents = STUDENTS.filter((s) => s.status === 3);

  return (
    <>
      <PageHeader>
        <PageTitle>ALUNOS EM OBSERVAÇÃO</PageTitle>
      </PageHeader>
      <StyledDisabled>
        {alertStudents.map((s) => (
          <StyledDetails key={s.cpf}>
            <Test>
              <Test2>
                <IoPersonSharp
                  color={
                    s.status === 1
                      ? "#00ff84"
                      : `${s.status === 2 ? "#505050" : "#FFDE59"}`
                  }
                  fontSize="90px"
                />
                <StudentStatus status={s.status}>
                  {s.status === 1
                    ? "cursando"
                    : `${s.status === 2 ? "desativado" : "observação"}`}
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
                <p>{s.name}</p>
                <p>{s.email}</p>
                <p>{s.cpf}</p>
                <p>{s.phone}</p>
                <p>{s.classe}</p>
              </div>
            </Test>
          </StyledDetails>
        ))}
      </StyledDisabled>
    </>
  );
}

export default Dashboard;
