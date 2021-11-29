import styled from "styled-components";
import Input from "../input/index";
import React from "react";
import { City } from "../../models/city";
import { SearchOptions } from "./SearchOptions";
import { SearchInputResultType } from "../../assets/enums/SearchInputResultType";
import { Place } from "../../models/place";
import { Monument } from "../../models/monument";
import useSearchCollectionByText from "../../hooks/useSearchCollectionByText";
interface SearchInfoProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInfoProps> = ({ value, onChange }) => {
  const {
    response: cities,
    loading: citiesLoading,
    error: citiesError,
  } = useSearchCollectionByText("cities", "name", value);
  const {
    response: monuments,
    loading: monumentsLoading,
    error: monumentsError,
  } = useSearchCollectionByText("monuments", "searchableName", value);

  const convertToPlace = (data: City[] | Monument[]) => {
    return data.map(({ name, lat, lng }) => {
      return {
        name,
        lat,
        lng,
      } as Place;
    });
  };

  return (
    <Container>
      <Input
        name="HI"
        placeholder="Wyszukaj zabytek"
        value={value}
        onChange={onChange}
      />
      {!citiesLoading && value?.length > 0 && (
        <SearchResultsContainer>
          {cities.length > 0 && (
            <SearchOptions
              category={SearchInputResultType.City}
              places={convertToPlace(cities)}
            />
          )}

          {!monumentsLoading && monuments.length > 0 && (
            <SearchOptions
              category={SearchInputResultType.Monument}
              places={convertToPlace(monuments)}
            />
          )}
        </SearchResultsContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const SearchResultsContainer = styled.div`
  top: 33px;
  position: absolute;
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0 0 5px 5px;
  border: 1px solid #d6d6d6;
`;
