import React from "react";
import { BiMap } from "react-icons/bi";
import styled from "styled-components";
import { device } from "../../assets/device";

type FloatingMapButtonProps = {
  handleClick: () => void;
};

const FloatingMapButton: React.FC<FloatingMapButtonProps> = ({
  handleClick,
}) => {
  return (
    <>
      <StyledFloatingMapButton onClick={handleClick}>
        <BiMap />
        Pokaż na mapie
      </StyledFloatingMapButton>
    </>
  );
};

export default FloatingMapButton;

const StyledFloatingMapButton = styled.button`
  display: none;
  @media ${device.laptop} {
    width: 180px;
    height: 40px;
    background-color: #606060;
    color: #fff;
    font-size: ${({ theme }) => theme.fontSizes.button};
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 10px;
    display: block;
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 5px;
    }
  }
`;
