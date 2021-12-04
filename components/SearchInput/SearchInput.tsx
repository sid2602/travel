import styled from "styled-components";
import Input from "../input/index";
import React from "react";
import { SearchResultContainer } from "./SearchResultContainer";
interface SearchInfoProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInfoProps> = ({ value, onChange }) => {
  return (
    <Container>
      <Input
        name="HI"
        placeholder="Wyszukaj zabytek"
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      {value.length > 0 && <SearchResultContainer value={value} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
`;
