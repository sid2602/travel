import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { City } from "../../models/city";
import { SearchOptions } from "./SearchOptions";
import { SearchInputResultType } from "../../assets/enums/SearchInputResultType";
import { Place } from "../../models/place";
import { Monument } from "../../models/monument";
import useSearchCollectionByText from "../../hooks/useSearchCollectionByText";
import { useRef } from "react";
import useOutsideClick from "../../hooks/useOutsiteClick";

interface SearchResultContainerProps {
  value: string;
}

export const SearchResultContainer: React.FC<SearchResultContainerProps> = ({
  value,
}) => {
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

  const [isSearchResultVisable, setisSearchResultVisable] = useState(false);
  const searchInputContainerRef = useRef(null);

  const handleCloseSearchResult = () => {
    setisSearchResultVisable(false);
  };

  useOutsideClick(searchInputContainerRef, handleCloseSearchResult);

  const convertToPlace = (data: City[] | Monument[]): Place[] => {
    return data.map(({ name, lat, lng }) => {
      return {
        name,
        lat,
        lng,
      };
    });
  };

  useEffect(() => {
    setisSearchResultVisable(value?.length > 0);
  }, [value]);

  const isEmpty = cities.length === 0 && monuments.length === 0;
  const isLoading = monumentsLoading || citiesLoading;

  if (!isSearchResultVisable) {
    return null;
  }

  if (isEmpty && !isLoading) {
    return (
      <Container ref={searchInputContainerRef}>
        <NoDataInfo>Nie znaleziono</NoDataInfo>
      </Container>
    );
  }

  return (
    <Container ref={searchInputContainerRef}>
      {cities.length > 0 && (
        <SearchOptions
          category={SearchInputResultType.City}
          places={convertToPlace(cities)}
        />
      )}

      {monuments.length > 0 && (
        <SearchOptions
          category={SearchInputResultType.Monument}
          places={convertToPlace(monuments)}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  top: 33px;
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0 0 5px 5px;
  border: 1px solid #d6d6d6;
  padding-bottom: 0.5rem;
`;

const NoDataInfo = styled.p`
  width: 100%;
  text-align: center;

  padding-top: 0.5rem;
`;
