import { useFormContext } from "react-hook-form";
import styled from "styled-components";

interface TextAreaProps {
  value?: string | number;
  onChange?: (e: React.FormEvent<any>) => void;
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, name }) => {
  const { register } = useFormContext();

  return (
    <Container>
      <TextAreaStyled
        {...register(name)}
        value={value}
        onChange={onChange}
        name={name}
      />
    </Container>
  );
};

export default TextArea;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  border-radius: 5px;
  border-color: #d6d6d6;
`;

const TextAreaStyled = styled.textarea`
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
  resize: none;
`;
