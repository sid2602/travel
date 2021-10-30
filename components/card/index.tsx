import styled from "styled-components";
import { device } from "../../assets/device";

type CardProps = {
  imgSrc?: string;
  title: string;
  subTitle: string;
  text: string;
};

const Card: React.FC<CardProps> = ({
  imgSrc = "https://dummyimage.com/220x180",
  title,
  subTitle,
  text,
}) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={imgSrc} />
      </CardImageContainer>
      <CardContentContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Text>{text}</Text>
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.article`
  max-width: 700px;
  width: 100%;
  border-radius: 10px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 6px 0 ${({ theme }) => theme.colors.shadow};
  display: flex;
  transition: 0.2s;

  &:hover {
    box-shadow: 6px 6px 6px 0 ${({ theme }) => theme.colors.shadow};
  }

  @media ${device.mobileXl} {
    flex-direction: column;
    min-width: 280px;
    height: 370px;
  }
`;

const CardImageContainer = styled.section`
  min-width: 220px;
  height: 100%;
  flex: 1;

  @media ${device.mobileXl} {
    flex: 1;
    width: 100%;
    max-height: 180px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;

  @media ${device.mobileXl} {
    border-radius: 10px 10px 0 0;
  }
`;

const CardContentContainer = styled.section`
  padding: 1.5rem 2rem;
  height: 100%;
  flex: 2;

  @media ${device.mobileXl} {
    padding: 1.5rem 1rem;
  }
`;

const Title = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headline5};
  font-weight: 500;
  padding: 0.3rem 0;
`;

const SubTitle = styled.h6`
  font-size: ${({ theme }) => theme.fontSizes.subtitle2};
  font-weight: 400;
  padding-bottom: 1.2rem;
`;

const Text = styled.p`
  display: block;
  overflow: hidden;
  max-height: 72px;
  font-size: ${({ theme }) => theme.fontSizes.body2};
  color: ${({ theme }) => theme.colors.grey};
`;
