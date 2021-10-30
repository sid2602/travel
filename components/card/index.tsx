import styled from "styled-components";

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
  min-width: 300px;
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
`;

const CardImageContainer = styled.section`
  min-width: 180px;
  height: 100%;
  flex: 1;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
`;

const CardContentContainer = styled.section`
  padding: 1rem;
  height: 100%;
  flex: 2;
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
