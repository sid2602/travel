import { useRouter } from "next/router";
import styled from "styled-components";
import Map from "../../components/map";
import Container from "../../components/container";

const Monument: React.FC<{}> = () => {
  const {
    query: { monumentName },
  } = useRouter();

  return (
    <Container>
      <InfoContainer>{monumentName}</InfoContainer>
      <Map />
    </Container>
  );
};

export default Monument;

const InfoContainer = styled.section`
  width: 50%;
  padding: 1rem;
`;
