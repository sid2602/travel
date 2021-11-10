import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../assets/device";
import AppContainer from "../../components/appContainer";
import Map from "../../components/map";
import firebase from "../../firebase/clientApp";
import { getFirestore, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

type MonumentProps = {};

const Monument: React.FC<MonumentProps> = () => {
  const {
    query: { monumentName },
  } = useRouter();
  const [monument, setMonument] = useState<any>(null);
  const monumentRef = collection(getFirestore(firebase), "/monuments");
  const [snapshot, loading, error] = useCollection(
    query(
      monumentRef,
      where("name", "==", monumentName == undefined ? "" : monumentName)
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (loading == false) {
      setMonument(snapshot?.docs[0]?.data());
    }
  }, [loading, snapshot]);

  return (
    <AppContainer>
      <InfoContainer>
        {loading ? (
          <div>loading</div>
        ) : (
          <>
            <ImageContainer>
              <Image src={monument?.img} />
            </ImageContainer>
            <Header>
              <HeadLine>{monument?.monumentName}</HeadLine>
            </Header>
            <MonumentSections>
              <MonumentInfo>
                <MonumentInfoHeader>
                  <MonumentInfoHeadline>Opis</MonumentInfoHeadline>
                </MonumentInfoHeader>
                <MonumentInfoDescription>
                  {monument?.description}
                </MonumentInfoDescription>
              </MonumentInfo>
            </MonumentSections>
          </>
        )}
      </InfoContainer>
      <Map />
    </AppContainer>
  );
};

export default Monument;

const InfoContainer = styled.section`
  width: 50%;
  padding: 1rem;
  @media ${device.laptop} {
    width: 100%;
  }
`;

const ImageContainer = styled.article`
  width: 100%;
  height: 250px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Header = styled.header`
  margin: 1rem 0 2rem;

  @media ${device.mobileXl} {
    margin: 1rem 0;
  }
`;

const HeadLine = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.headline3};
  font-weight: bold;
  text-align: center;

  @media ${device.mobileXl} {
    font-size: ${({ theme }) => theme.fontSizes.headline4};
  }
`;

const MonumentSections = styled.section``;

const MonumentInfo = styled.article`
  padding: 0 4rem;

  @media ${device.mobileXl} {
    padding: 0;
  }
`;

const MonumentInfoHeader = styled.header`
  padding: 1rem 0;
  border-bottom: 2px solid black;
`;

const MonumentInfoHeadline = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headline4};
  font-style: italic;

  @media ${device.mobileXl} {
    font-size: ${({ theme }) => theme.fontSizes.headline5};
  }
`;

const MonumentInfoDescription = styled.p`
  padding: 1rem 0;
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.grey};
  line-height: 22px;
`;
