import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Card from "../components/card";
import styled, { css } from "styled-components";
import { device } from "../assets/device";
import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { BiMap } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
const Home: NextPage = () => {
  const MapWithNoSSR = React.useMemo(
    () =>
      dynamic(() => import("../components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const [mobileMapIsActive, setMobileMapActive] = useState<boolean>(false);

  const handleMobileMapActive = () => {
    setMobileMapActive((prevState) => !prevState);
  };

  return (
    <Main>
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
        <TemporaryMapContainer mobileMapIsActive={mobileMapIsActive}>
          <CloseMobileMapButton onClick={handleMobileMapActive}>
            <FaTimes />
          </CloseMobileMapButton>
          <MapWithNoSSR />
        </TemporaryMapContainer>
        <FloatingMapButton onClick={handleMobileMapActive}>
          <BiMap />
          Pokaż na mapie
        </FloatingMapButton>
      </Container>
    </Main>
  );
};

export default Home;

const Main = styled.main``;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 50px);
`;

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

type TemporaryMapContainerProps = {
  mobileMapIsActive: boolean;
};

const CloseMobileMapButton = styled.button`
  position: absolute;
  right: 25px;
  top: 25px;
  background-color: white;
  box-shadow: 0 0 1px 0 black;
  color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  z-index: 1000;
`;

const TemporaryMapContainer = styled.section<TemporaryMapContainerProps>`
  display: block;
  width: 50%;
  height: 100%;
  @media ${device.laptop} {
    display: none;

    ${({ mobileMapIsActive }) =>
      mobileMapIsActive &&
      css`
        z-index: 2;
        width: 100%;
        display: block;
        position: absolute;
        left: 0;
        height: calc(100vh - 50px);
      `}
  }
`;

const FloatingMapButton = styled.button`
  display: none;

  @media ${device.laptop} {
    width: 180px;
    height: 40px;
    background-color: #606060;
    color: #fff;
    font-size: ${({ theme }) => theme.fontSizes.button};
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 10px;
    display: block;
    position: fixed;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 5px;
    }
  }
`;
