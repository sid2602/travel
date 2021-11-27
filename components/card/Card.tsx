import styled from "styled-components";
import { createContext, useContext, useMemo } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { Heading } from "./Heading";
interface CardContext {}

interface CardComposition {
  Header: React.FC<{}>;
  Heading: React.FC<{}>;
  Body: React.FC<{}>;
}

const CardContext = createContext<CardContext | undefined>(undefined);

const Card: React.FC & CardComposition = ({ children }) => {
  return (
    <CardContext.Provider value={{}}>
      <CardContainer>{children}</CardContainer>
    </CardContext.Provider>
  );
};

export const useCard = (): CardContext => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("This component must be used within a <Tabs> component.");
  }
  return context;
};

Card.Body = Body;
Card.Header = Header;
Card.Heading = Heading;

export { Card };

const CardContainer = styled.div`
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
