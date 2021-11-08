import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { device } from "../../assets/device";

type CloseMobileMapButtonTypes = {
  handleClick: () => void;
};

const CloseMobileMapButton: React.FC<CloseMobileMapButtonTypes> = ({
  handleClick,
}) => {
  return (
    <StyledCloseMobileMapButton onClick={handleClick}>
      <FaTimes />
    </StyledCloseMobileMapButton>
  );
};

export default CloseMobileMapButton;

const StyledCloseMobileMapButton = styled.button`
  display: none;

  @media ${device.laptop} {
    position: absolute;
    right: 25px;
    top: 25px;
    background-color: white;
    box-shadow: 0 0 1px 0 black;
    color: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    z-index: 1000;
  }
`;
