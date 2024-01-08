import { TEACHERS } from "../data/teachers";
import PageHeader from "../ui/PageHeader";
import StyledNavLink from "../ui/StyledNavLink";
import TeachersTable from "../ui/TeachersTable";

function Classes() {
  return (
    <>
      <PageHeader>
        <div>PROFESSORES</div>
        <StyledNavLink to="cadastrar">CADASTRAR PROFESSORES</StyledNavLink>
      </PageHeader>
      <TeachersTable teachers={TEACHERS} />
    </>
  );
}

export default Classes;
