import dynamic from "next/dynamic";
import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { device } from "../../assets/device";
import FloatingMapButton from "./floatingMapButton";
import CloseMobileMapButton from "./closeMobileMapButton";
const Map: React.FC<{}> = () => {
  const [mobileMapIsActive, setMobileMapActive] = useState<boolean>(false);

  const handleMobileMapActive = () => {
    setMobileMapActive((prevState) => !prevState);
  };

  const MapWithNoSSR = React.useMemo(
    () =>
      dynamic(() => import("./map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <>
      <MapContainer mobileMapIsActive={mobileMapIsActive}>
        <CloseMobileMapButton handleClick={handleMobileMapActive} />
        <MapWithNoSSR />
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
