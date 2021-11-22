import Input from "../input";
import styled from "styled-components";
import React from "react";
import ErrorMessage from "../errorMessage/errorMessage";
interface FormFiledProps {
  placeholder: string;
  name: string;
  value?: string | number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  type?: string;
}

const FormField: React.FC<FormFiledProps> = ({
  placeholder,
  name,
  value,
  onChange,
  type,
  errorMessage,

  ...rest
}) => {
  return (
    <Container>
      <FormFiledPlaceholder>{placeholder}</FormFiledPlaceholder>
      <Input
        {...rest}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default FormField;

FormField.defaultProps = {
  onChange: () => {},
};

const Container = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormFiledPlaceholder = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
