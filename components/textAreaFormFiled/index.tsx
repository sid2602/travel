import styled from "styled-components";
import TextArea from "../textArea";

interface TextAreaFormFiledProps {
  placeholder: string;
}

const TextAreaFormFiled: React.FC<TextAreaFormFiledProps> = ({
  placeholder,
}) => {
  return (
    <Container>
      <FormFiledPlaceholder>{placeholder}</FormFiledPlaceholder>
      <TextArea value="hi" onChange={() => {}} />
    </Container>
  );
};

export default TextAreaFormFiled;

const Container = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormFiledPlaceholder = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: 500;
`;
