import { CLASSES } from "../data/classes";
import PageHeader from "../ui/PageHeader";
import StyledNavLink from "../ui/StyledNavLink";
import ClassesTable from "../ui/ClassesTable";

function Classes() {
  return (
    <>
      <PageHeader>
        <div>TURMAS</div>
        <StyledNavLink to="cadastrar">CADASTRAR TURMAS</StyledNavLink>
      </PageHeader>
      <ClassesTable classes={CLASSES} />
    </>
  );
}

export default Classes;
