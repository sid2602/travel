import React from "react";
import styled from "styled-components";
import Navbar from "../navbar";

const AppContainer: React.FC<{}> = ({ children }) => {
  return (
    <Main>
      <Navbar />
      <Container>{children}</Container>
    </Main>
  );
};

export default AppContainer;

const Main = styled.main``;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 50px);
`;
