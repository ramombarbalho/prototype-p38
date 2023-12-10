import { styled } from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";
// import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: #333;
  padding: 3.2rem 2.4rem;
  font-size: 2rem;
  border-right: 1px solid #444;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />

      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
