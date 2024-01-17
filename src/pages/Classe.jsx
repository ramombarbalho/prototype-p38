import { useParams } from "react-router-dom";
import { CLASSES } from "../data/classes";
import StudentsTable from "../ui/StudentsTable";
import StyledDetails from "../ui/StyledDetails";
import { SiGoogleclassroom } from "react-icons/si";
import styled from "styled-components";
import PageTitle from "../ui/PageTitle";

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

function Classe() {
  const params = useParams();

  const { id, local, hour, days, stack, teacher, students } = CLASSES.find(
    (el) => +el.id === +params.id
  );

  return (
    <>
      <StyledDetails>
        <Test>
          <Test2>
            <SiGoogleclassroom color="#00ff84" fontSize="90px" />
          </Test2>
          <div>
            <p>ID:</p>
            <p>Local:</p>
            <p>Dia:</p>
            <p>Horário:</p>
            <p>Stack:</p>
            <p>Professor:</p>
          </div>
          <div>
            <p>{id}</p>
            <p>{local}</p>
            <p>{days === 1 ? "SEG - QUA" : "TER - QUI"}</p>
            <p>
              {hour === 1
                ? "08:30 as 11:30"
                : hour === 2
                ? "14:00 as 17:00"
                : "18:30 as 21:30"}
            </p>
            <p>{stack === 1 ? "BACK-END" : "FRONT-END"}</p>
            <p>{teacher}</p>
          </div>
        </Test>
      </StyledDetails>
      <PageTitle>ALUNOS DA TURMA</PageTitle>
      <StudentsTable students={students} />
    </>
  );
}

export default Classe;
