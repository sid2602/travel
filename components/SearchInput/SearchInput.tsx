import styled from "styled-components";
import Input from "../input/index";

interface SearchInfoProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInfoProps> = ({ value, onChange }) => {
  console.log(value);

  return (
    <Container>
      <Input
        name="HI"
        placeholder="Wyszukaj zabytek lub miasto"
        value={value}
        onChange={onChange}
      />
      {value?.length > 0 && <SearchOptions />}
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  position: relative;
`;

const SearchOptions = styled.div`
  top: 33px;
  position: absolute;
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0 0 5px 5px;
  border: 1px solid #d6d6d6;
`;
