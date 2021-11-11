import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Card from "../components/card";
import styled from "styled-components";
import { device } from "../assets/device";
import React, { useEffect, useMemo, useState } from "react";
import Map from "../components/map";
import AppContainer from "../components/appContainer";
import { collection, getFirestore, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../firebase/clientApp";
import { ReducedMonument } from "../models/reducedMonument";
const Home: NextPage = () => {
  const [monuments, setMonuments] = useState<[ReducedMonument]>();
  const monumentRef = collection(getFirestore(firebase), "/monuments");
  const [snapshot, loading, error] = useCollection(
    query(monumentRef, where("city", "==", "Kraków")),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (loading == false) {
      setMonuments(
        snapshot?.docs.map((doc) => {
          return {
            city: doc.get("city"),
            country: doc.get("country"),
            description: doc.get("description"),
            img: doc.get("img"),
            lat: doc.get("lat"),
            lng: doc.get("lng"),
            name: doc.get("name"),
          };
        }) as [ReducedMonument]
      );
    }
  }, [loading, snapshot]);

  const Cards = useMemo(
    () =>
      monuments?.map((monument) => (
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
        {loading ? <div> loading </div> : <>{Cards}</>}
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
