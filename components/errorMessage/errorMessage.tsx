import styled from "styled-components";

const ErrorMessage: React.FC<{}> = ({ children }) => {
  return <Message>{children}</Message>;
};

export default ErrorMessage;

const Message = styled.span`
  color: ${({ theme }) => theme.colors.error};
  display: block;
  margin-top: 0.5rem;
`;
