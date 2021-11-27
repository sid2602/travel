import styled from "styled-components";

export const Header: React.FC<{}> = ({ children }) => {
  return <CardHeader>{children}</CardHeader>;
};

const CardHeader = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  justify-content: space-between;
`;
