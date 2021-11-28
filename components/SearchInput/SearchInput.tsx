import { collection, query, where } from "firebase/firestore";
import styled from "styled-components";
import Input from "../input/index";
import { db } from "../../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import React, { useEffect, useState } from "react";
import { City } from "../../models/city";
import { SearchOptions } from "./SearchOptions";
import { SearchInputResultType } from "../../assets/enums/SearchInputResultType";
import { Place } from "../../models/place";

interface SearchInfoProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInfoProps> = ({ value, onChange }) => {
  const [cities, setCities] = useState<City[]>([]);

  const monumentRef = collection(db, "/cities");
  const [citiesSnapshot, citiesFetchLoading, error] = useCollection(
    query(
      monumentRef,
      where("name", ">=", value.toLocaleLowerCase()),
      where("name", "<=", value.toLocaleLowerCase() + "\uf8ff")
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (!citiesFetchLoading && !!citiesSnapshot) {
      setCities(citiesSnapshot?.docs?.map((item) => item.data()) as City[]);
    }
  }, [citiesSnapshot, citiesFetchLoading]);

  const convertToPlace = (data: City[]) => {
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
      {value?.length > 0 && (
        <SearchResultsContainer>
          <SearchOptions
            category={SearchInputResultType.City}
            places={convertToPlace(cities)}
          />
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
