import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { device } from "../../assets/device";
import FloatingMapButton from "./floatingMapButton";
import CloseMobileMapButton from "./closeMobileMapButton";
import { Marker } from "../../models/marker";
import { useMonumentsContext } from "../../contexts/Monuments";
import { useMapContext } from "../../contexts/MapContext";

type MapProps = {};

const Map: React.FC<MapProps> = () => {
  const {
    activePosition: { lat, lng },
  } = useMapContext();

  const [mobileMapIsActive, setMobileMapActive] = useState<boolean>(false);
  const { monuments } = useMonumentsContext();

  const handleMobileMapActive = () => {
    setMobileMapActive((prevState) => !prevState);
  };

  const markers: Marker[] = useMemo(
    () =>
      monuments?.map((monument) => ({
        lat: monument.lat,
        lng: monument.lng,
        text: monument.name,
      })),
    [monuments]
  );

  const MapWithNoSSR = React.useMemo(
    () =>
      dynamic(() => import("./map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [markers, lat, lng]
  );

  return (
    <>
      <MapContainer mobileMapIsActive={mobileMapIsActive}>
        <CloseMobileMapButton handleClick={handleMobileMapActive} />
        <MapWithNoSSR markers={markers} />
      </MapContainer>
      <FloatingMapButton handleClick={handleMobileMapActive} />
    </>
  );
};

export default Map;

type MapContainerProps = {
  mobileMapIsActive: boolean;
};

const MapContainer = styled.section<MapContainerProps>`
  display: block;
  width: 50%;
  height: 100%;
  padding: 1rem;
  @media ${device.laptop} {
    display: none;

    ${({ mobileMapIsActive }) =>
      mobileMapIsActive &&
      css`
        z-index: 2;
        width: 100%;
        display: block;
        position: absolute;
        left: 0;
        height: calc(100vh - 50px);
      `}
  }
`;
