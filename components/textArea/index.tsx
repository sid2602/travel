import styled from "styled-components";

interface TextAreaProps {
  value?: string | number;
  onChange?: (e: React.FormEvent<any>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange }) => {
  return (
    <Container>
      <TextAreaStyled value={value} onChange={onChange} />
    </Container>
  );
};

export default TextArea;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
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
