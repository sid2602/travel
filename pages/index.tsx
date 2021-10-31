import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Card from "../components/card";
import styled from "styled-components";
import { device } from "../assets/device";
import React from "react";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const MapWithNoSSR = React.useMemo(
    () =>
      dynamic(() => import("../components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <>
      <Navbar />
      <Container>
        <TemporaryCardsContainer>
          <Card
            imgSrc={"img/wawel.jpg"}
            title={"Wawel Castle"}
            subTitle={"Krakow, Poland"}
            text={
              "Zamek Królewski na Wawelu jest renesansową rezydencją królewską, znajdującą się Wzgórzu Wawelskim, nieopodal zakola rzeki Wisły.Jest dwupiętrową budowlą o charakterze renesansowym, barokowym oraz z elementami klasycyzmu. Znajduje się tu dziedziniec z krużgankami"
            }
          />
          <Card
            imgSrc={"img/wawel.jpg"}
            title={"Wawel Castle"}
            subTitle={"Krakow, Poland"}
            text={
              "Zamek Królewski na Wawelu jest renesansową rezydencją królewską, znajdującą się Wzgórzu Wawelskim, nieopodal zakola rzeki Wisły.Jest dwupiętrową budowlą o charakterze renesansowym, barokowym oraz z elementami klasycyzmu. Znajduje się tu dziedziniec z krużgankami"
            }
          />
          <Card
            imgSrc={"img/wawel.jpg"}
            title={"Wawel Castle"}
            subTitle={"Krakow, Poland"}
            text={
              "Zamek Królewski na Wawelu jest renesansową rezydencją królewską, znajdującą się Wzgórzu Wawelskim, nieopodal zakola rzeki Wisły.Jest dwupiętrową budowlą o charakterze renesansowym, barokowym oraz z elementami klasycyzmu. Znajduje się tu dziedziniec z krużgankami"
            }
          />
          <Card
            imgSrc={"img/wawel.jpg"}
            title={"Wawel Castle"}
            subTitle={"Krakow, Poland"}
            text={
              "Zamek Królewski na Wawelu jest renesansową rezydencją królewską, znajdującą się Wzgórzu Wawelskim, nieopodal zakola rzeki Wisły.Jest dwupiętrową budowlą o charakterze renesansowym, barokowym oraz z elementami klasycyzmu. Znajduje się tu dziedziniec z krużgankami"
            }
          />
        </TemporaryCardsContainer>
        <TemporaryMapContainer>
          <MapWithNoSSR />
        </TemporaryMapContainer>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
`;

const TemporaryCardsContainer = styled.section`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media ${device.laptop} {
    width: 100%;
  }
`;

const TemporaryMapContainer = styled.section`
  width: 50%;
  height: 500px;
  /* @media ${device.laptop} {
    display: none;
  } */
`;
