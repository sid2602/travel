import React from "react";
import styled from "styled-components";
import TextArea from "../textArea";
import ErrorMessage from "../errorMessage/errorMessage";

interface TextAreaFormFiledProps {
  placeholder: string;
  name: string;
  value?: string | number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const TextAreaFormFiled: React.FC<TextAreaFormFiledProps> = ({
  placeholder,
  onChange,
  name,
  value,
  errorMessage,
}) => {
  return (
    <Container>
      <FormFiledPlaceholder>{placeholder}</FormFiledPlaceholder>
      <TextArea value={value} onChange={onChange} name={name} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

TextAreaFormFiled.defaultProps = {
  onChange: () => {},
};

export default TextAreaFormFiled;

const Container = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormFiledPlaceholder = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
