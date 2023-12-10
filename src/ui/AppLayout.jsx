import styled from "styled-components";
import { RESPONSIVE } from "../styles/GlobalStyles";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: hidden;
  transition: padding 0.2s, row-gap 0.2s, grid-template-columns 0.2s;

  /* @media (max-width: ${RESPONSIVE.lg}) {
    padding: 2.4rem;
    row-gap: 2.4rem;
  }

  @media (max-width: ${RESPONSIVE.sm}) {
    padding: 0.8rem;
    row-gap: 1rem;
  }

  @media (max-width: ${RESPONSIVE.sm2}) {
    overflow: auto;
  } */
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;
`;

const Container = styled.div`
  min-width: 72rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  & div {
    font-size: 1.6rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
