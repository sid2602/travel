import { useFormContext } from "react-hook-form";
import styled from "styled-components";

interface InputProps {
  name: string;
  value?: string | number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
  validate?: any;
}

const Input: React.FC<InputProps> = ({
  value,
  name,
  type,
  onChange,
  ...rest
}) => {
  const { register } = useFormContext();

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

Input.defaultProps = {
  type: "text",
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
