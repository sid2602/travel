import styled from "styled-components";

interface InputProps {
  value?: string | number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input: React.FC<InputProps> = ({ value, type, onChange }) => {
  return (
    <Container>
      <InputStyled type={type} value={value} onChange={onChange} />
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
