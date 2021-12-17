import AppContainer from "../../components/appContainer/appContainer";
import styled from "styled-components";
import React from "react";
import { AddMonumentForm } from "./AddMonumentForm";
import { Card } from "../../components/Card";

const AddMonument: React.FC<{}> = () => {
  return (
    <AppContainer>
      <Container>
        <Card>
          <Card.Header>
            <Card.Heading> Dodaj zabytek</Card.Heading>
          </Card.Header>
          <Card.Body>
            <AddMonumentForm />
          </Card.Body>
        </Card>
      </Container>
    </AppContainer>
  );
};

export default AddMonument;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
