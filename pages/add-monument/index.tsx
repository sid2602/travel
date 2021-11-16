import AppContainer from "../../components/appContainer";
import styled from "styled-components";
import React from "react";
import FormField from "../../components/formField";

const AddMonument: React.FC<{}> = () => {
  return (
    <AppContainer>
      <Container>
        <Card>
          <CardHeader>
            <CardHeading>Heading</CardHeading>
          </CardHeader>
          <CardBody>
            <FormField placeholder="Nazwa zabytku" />
            <FormField placeholder="Nazwa zabytku" />
            <FormField placeholder="Nazwa zabytku" />
          </CardBody>
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

const Card = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  padding: 2rem;
  border-radius: 5px;
  border: 0.5px solid #d6d6d6;
  -webkit-box-shadow: 0px 7px 19px -12px rgba(170, 170, 170, 1);
  -moz-box-shadow: 0px 7px 19px -12px rgba(170, 170, 170, 1);
  box-shadow: 0px 7px 19px -12px rgba(170, 170, 170, 1);
`;

const CardHeader = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  justify-content: space-between;
`;

const CardHeading = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headline5};
`;

const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;
