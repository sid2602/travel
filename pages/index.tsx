import type { NextPage } from "next";
import MonumentCard from "../components/MonumentCard/MonumentCard";
import styled from "styled-components";
import { device } from "../assets/device";
import React, { useMemo, useState } from "react";
import Map from "../components/map";
import AppContainer from "../components/appContainer/appContainer";
import { useMonumentsContext } from "../contexts/Monuments";
import { SearchInput } from "../components/SearchInput/SearchInput";
const Home: NextPage = () => {
  const { monuments, loading, error } = useMonumentsContext();

  const Cards = useMemo(
    () =>
      monuments.map((monument) => (
        <MonumentCard
          key={monument?.name}
          imgSrc={monument?.img}
          title={monument?.name}
          subTitle={monument?.city + ", " + monument?.country}
          text={monument?.description.substr(0, 200)}
        />
      )),
    [monuments]
  );

  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearchValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <AppContainer>
      <SearchBar>
        <SearchInput value={searchValue} onChange={handleSearchValueChange} />
      </SearchBar>
      <RowContainer>
        <TemporaryCardsContainer>
          {loading ? <div>loading</div> : Cards}
        </TemporaryCardsContainer>
        <Map />
      </RowContainer>
    </AppContainer>
  );
};

export default Home;

const RowContainer = styled.section`
  display: flex;
  height: 100%;
`;

const SearchBar = styled.section`
  width: 50%;
  height: 100px;
  display: flex;
  padding: 1rem;
  align-items: center;

  @media ${device.laptop} {
    width: 100%;
  }
`;

const TemporaryCardsContainer = styled.section`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  gap: 15px;
  @media ${device.laptop} {
    width: 100%;
  }
`;
