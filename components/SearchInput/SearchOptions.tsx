import styled from "styled-components";
import {
  SearchInputResultType,
  transformToPluralSearchInputResultType,
} from "../../assets/enums/SearchInputResultType";
import { Place } from "../../models/place";
import { FaPlaceOfWorship } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import Link from "next/link";
interface SearchOptions {
  category: SearchInputResultType;
  places: Place[];
}

export const SearchOptions: React.FC<SearchOptions> = ({
  category,
  places,
}) => {
  return (
    <Container>
      <Category>{transformToPluralSearchInputResultType(category)}</Category>
      {places.map(({ name }) => (
        <Link
          href={
            category === SearchInputResultType.Monument
              ? `/monument/${name}`
              : "/"
          }
        >
          <a>
            <Result>
              <ResultIconCon>
                {category === SearchInputResultType.City ? (
                  <GiModernCity />
                ) : (
                  <FaPlaceOfWorship />
                )}
              </ResultIconCon>
              <ResultInfoCon>
                <ResultInfoName>{name}</ResultInfoName>
                <ResultInfoCategory>{category}</ResultInfoCategory>
              </ResultInfoCon>
            </Result>
          </a>
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Category = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: bold;
  letter-spacing: 0.4px;
  padding: 1rem 1rem 0.5rem 1rem;
`;

const Result = styled.div`
  width: 100%;
  padding: 0.5rem 0 0.5rem 1rem;
  display: flex;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

const ResultIconCon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ResultInfoCon = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultInfoName = styled.p`
  font-weight: 500;
  text-transform: capitalize;
  font-size: 14px;
`;

const ResultInfoCategory = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 12px;
`;
