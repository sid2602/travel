import styled from "styled-components";
import { device } from "../../assets/device";
import Link from "next/link";
import React, { useState } from "react";
type MonumentCardProps = {
  imgSrc?: string;
  title: string;
  subTitle: string;
  text: string;
};

const MonumentCard: React.FC<MonumentCardProps> = ({
  imgSrc = "https://dummyimage.com/220x180",
  title,
  subTitle,
  text,
}) => {
  return (
    <Link href={`monument/${title}`}>
      <a>
        <MonumentCardContainer>
          <MonumentCardImageContainer>
            <MonumentCardImage src={imgSrc} />
          </MonumentCardImageContainer>
          <CardContentContainer>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <Text>{text}</Text>
          </CardContentContainer>
        </MonumentCardContainer>
      </a>
    </Link>
  );
};

export default MonumentCard;

const MonumentCardContainer = styled.article`
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

const MonumentCardImageContainer = styled.section`
  min-width: 220px;
  height: 100%;
  flex: 1;

  @media ${device.mobileXl} {
    flex: 1;
    width: 100%;
    max-height: 180px;
  }
`;

const MonumentCardImage = styled.img`
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
