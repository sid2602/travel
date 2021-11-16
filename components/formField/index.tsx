import Input from "../input";
import styled from "styled-components";

interface FormFiledProps {
  placeholder: string;
}

const FormField: React.FC<FormFiledProps> = ({ placeholder }) => {
  return (
    <Container>
      <FormFiledPlaceholder>{placeholder}</FormFiledPlaceholder>
      <Input value="hi" onChange={() => {}} />
    </Container>
  );
};

export default FormField;

const Container = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormFiledPlaceholder = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: 500;
`;
