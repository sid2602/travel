import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { device } from "../../assets/device";
import AppContainer from "../../components/appContainer/appContainer";
import Map from "../../components/map";
import { useActiveMonument } from "../../hooks/useActiveMonument";
import { BiArrowBack } from "react-icons/bi";
type MonumentProps = {};

const Monument: React.FC<MonumentProps> = () => {
  const {
    query: { monumentName },
    back,
  } = useRouter();

  const { activeMonument, loading, error } = useActiveMonument(
    monumentName as string
  );

  return (
    <AppContainer>
      <RowContainer>
        <InfoContainer>
          {loading ? (
            <div>loading</div>
          ) : (
            <>
              {activeMonument !== null && (
                <>
                  <ImageContainer>
                    <BackButton onClick={() => back()}>
                      <BackIcon />
                    </BackButton>
                    <Image src={activeMonument?.img} />
                  </ImageContainer>
                  <Header>
                    <HeadLine>{activeMonument?.name}</HeadLine>
                  </Header>
                  <MonumentSections>
                    <MonumentInfo>
                      <MonumentInfoHeader>
                        <MonumentInfoHeadline>Opis</MonumentInfoHeadline>
                      </MonumentInfoHeader>
                      <MonumentInfoDescription>
                        {activeMonument?.description}
                      </MonumentInfoDescription>
                    </MonumentInfo>
                  </MonumentSections>
                </>
              )}
            </>
          )}
        </InfoContainer>
        <Map />
      </RowContainer>
    </AppContainer>
  );
};

export default Monument;

const RowContainer = styled.section`
  display: flex;
  height: 100%;
`;

const InfoContainer = styled.section`
  width: 50%;
  padding: 1rem;
  @media ${device.laptop} {
    width: 100%;
  }
`;

const ImageContainer = styled.article`
  position: relative;
  width: 100%;
  height: 250px;
`;

const BackButton = styled.button`
  width: 35px;
  height: 35px;
  position: absolute;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 5px;
  left: 10px;
  top: 10px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackIcon = styled(BiArrowBack)`
  color: white;
  width: 25px;
  height: 25px;
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
