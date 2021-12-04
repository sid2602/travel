import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  validate?: any;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  name,
  type,
  onChange,
  placeholder,
  ...rest
}) => {
  const register = useFormContext() && useFormContext().register;

  if (register === null || name === undefined) {
    return (
      <Container>
        <InputStyled
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
          type={type}
          name={name}
          value={value}
        />
      </Container>
    );
  }

  return (
    <Container>
      <InputStyled
        {...register(name)}
        onChange={onChange}
        {...rest}
        type={type}
        name={name}
        value={value}
      />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
  position: relative;
  border-radius: 5px;
  border-color: #d6d6d6;
`;

const InputStyled = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 5px;
  height: 100%;
  outline: none;
  border: 1px solid #d6d6d6;
  background: none;
  padding: 0.5rem;
`;
