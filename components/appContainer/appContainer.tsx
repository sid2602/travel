import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";

const AppContainer: React.FC<{}> = ({ children }) => {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit="exit"
      transition={{ type: "linear" }}
    >
      <Navbar />
      <Container>{children}</Container>
    </Main>
  );
};

export default AppContainer;

const Main = styled(motion.main)``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`;
