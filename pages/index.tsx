import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Card from "../components/card";
import styled from "styled-components";
import { device } from "../assets/device";
import React from "react";
import Map from "../components/map";
import AppContainer from "../components/appContainer";
const Home: NextPage = () => {
  return (
    <AppContainer>
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
