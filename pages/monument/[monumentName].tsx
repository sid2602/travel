import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../assets/device";
import AppContainer from "../../components/appContainer";
import Map from "../../components/map";

type MonumentProps = {};

const monumentData = {
  img: "/img/wawel.jpg",
  monumentName: "Wawel",
  description: `Zamek Królewski na Wawelu jest renesansową rezydencją królewską,
  znajdującą się Wzgórzu Wawelskim, nieopodal zakola rzeki Wisły.
  Jest dwupiętrową budowlą o charakterze renesansowym, barokowym
  oraz z elementami klasycyzmu. Znajduje się tu dziedziniec z
  krużgankami arkadowymi, bramą wjazdową, pięć wież mieszkalnych. Na
  przestrzeni wieków, zamek był wielokrotnie rozbudowywany i
  odnawiany. Liczne pożary, grabieże i przemarsze obcych wojsk
  powodowały, że obiekt był wielokrotnie odbudowywany w nowych
  stylach architektonicznych. W XIV w. zamek rozbudował król
  Władysław Łokietek, a jego syn Kazimierz Wielki stworzył
  imponującą gotycką rezydencję. Za czasów Władysława Jagiełły,
  powiększono zamek o pawilon gotycki, zw. wieżą Duńską i w tym
  stanie budowla przetrwała do pożaru w r. 1499. Około r. 1504 król
  Aleksander Jagiellończyk przystąpił do przebudowy gotyckiej
  rezydencji nadając jej kształt renesansowy. Od 1507 r. dzieło
  brata kontynuował Zygmunt I zwany Starym. To za jego czasów
  powstały słynne krużganki. Sale i komnaty zamkowe nabrały
  splendoru po zakupieniu przez Zygmunta Augusta wspaniałych arrasów
  flamandzkich. Wśród wielu zabytków, w zbiorach muzeum można
  zobaczyć kolekcję wspominanych wcześniej arrasów z XVI w.,
  portrety królów i kolekcję renesansowych mebli włoskich, 30
  słynnych głów wawelskich. W Skarbcu eksponowane są wyroby
  złotnicze, z kości słoniowej i bursztynu, a także Szczerbiec -
  miecz koronacyjny królów polskich, miecz króla Zygmunta Starego,
  zbroje, szyszaki, buławy oraz armaty.`,
};

const Monument: React.FC<MonumentProps> = () => {
  const {
    query: { monumentName },
  } = useRouter();

  const [monument, setMonument] = useState(monumentData);

  return (
    <AppContainer>
      <InfoContainer>
        <ImageContainer>
          <Image src={monument.img} />
        </ImageContainer>
        <Header>
          <HeadLine>{monument.monumentName}</HeadLine>
        </Header>
        <MonumentSections>
          <MonumentInfo>
            <MonumentInfoHeader>
              <MonumentInfoHeadline>Opis</MonumentInfoHeadline>
            </MonumentInfoHeader>
            <MonumentInfoDescription>
              {monument.description}
            </MonumentInfoDescription>
          </MonumentInfo>
        </MonumentSections>
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
