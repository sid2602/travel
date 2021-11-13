import type { NextPage } from "next";
import Card from "../components/card";
import styled from "styled-components";
import { device } from "../assets/device";
import React, { useMemo } from "react";
import Map from "../components/map";
import AppContainer from "../components/appContainer";
import { Marker } from "../models/marker";
import { useMonumentsContext } from "../contexts/Monuments";
const Home: NextPage = () => {
  const { monuments, loading, error } = useMonumentsContext();

  const Cards = useMemo(
    () =>
      monuments.map((monument) => (
        <Card
          key={monument?.name}
          imgSrc={monument?.img}
          title={monument?.name}
          subTitle={monument?.city + ", " + monument?.country}
          text={monument?.description.substr(0, 200)}
        />
      )),
    [monuments]
  );

  return (
    <AppContainer>
      <TemporaryCardsContainer>
        {loading ? <div>loading</div> : Cards}
      </TemporaryCardsContainer>
      <Map />
    </AppContainer>
  );
};

export default Home;

const Main = styled.main``;

const TemporaryCardsContainer = styled.section`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  gap: 15px;
  @media ${device.laptop} {
    width: 100%;
  }
`;
