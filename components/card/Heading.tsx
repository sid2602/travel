import styled from "styled-components";

export const Heading: React.FC<{}> = ({ children }) => {
  return <CardHeading>{children}</CardHeading>;
};

const CardHeading = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headline5};
`;
