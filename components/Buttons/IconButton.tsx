import React from "react";
import styled from "styled-components";

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export const IconButton: React.FC<IconButtonProps> = ({ children }) => {
  return <StyledIconButton>{children}</StyledIconButton>;
};

const StyledIconButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.grey};
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
