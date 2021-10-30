import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Card from "../components/card";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <TemporaryCardsContainer>
        <Card
          imgSrc={"img/wawel.jpg"}
          title={"Wawel Castle"}
          subTitle={"Krakow, Poland"}
          text={
            "Zamek Królewski na Wawelu jest renesansową rezydencją królewską, znajdującą się Wzgórzu Wawelskim, nieopodal zakola rzeki Wisły.Jest dwupiętrową budowlą o charakterze renesansowym, barokowym oraz z elementami klasycyzmu. Znajduje się tu dziedziniec z krużgankami"
          }
        />
      </TemporaryCardsContainer>
    </div>
  );
};

export default Home;

const TemporaryCardsContainer = styled.section`
  width: 50%;
  padding: 1rem;
`;
