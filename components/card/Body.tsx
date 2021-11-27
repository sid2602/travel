import styled from "styled-components";

export const Body: React.FC<{}> = ({ children }) => {
  return <CardBody>{children}</CardBody>;
};

const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;
