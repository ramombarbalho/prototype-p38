import { STUDENTS } from "../data/students";
import PageHeader from "../ui/PageHeader";
import StyledNavLink from "../ui/StyledNavLink";
import StudentsTable from "../ui/StudentsTable";

function Students() {
  return (
    <>
      <PageHeader>
        <div>ALUNOS</div>
        <StyledNavLink to="cadastrar">CADASTRAR ALUNOS</StyledNavLink>
      </PageHeader>
      <StudentsTable students={STUDENTS} />
    </>
  );
}

export default Students;
