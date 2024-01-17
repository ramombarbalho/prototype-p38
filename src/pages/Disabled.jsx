import { STUDENTS } from "../data/students";
import PageHeader from "../ui/PageHeader";
import PageTitle from "../ui/PageTitle";
import DisabledTable from "../ui/DisabledTable";

function Disabled() {
  return (
    <>
      <PageHeader>
        <PageTitle>DESATIVADOS</PageTitle>
      </PageHeader>
      <DisabledTable students={STUDENTS} />
    </>
  );
}

export default Disabled;
