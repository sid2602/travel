import styled from "styled-components";
import { GrFormNext } from "react-icons/gr";
import Link from "next/link";
import { IconButton } from "../Buttons/IconButton";
import {
  MapContainer,
  TileLayer,
  Marker as MarkerComponent,
  Popup,
} from "react-leaflet";
import { useMapContext } from "../../contexts/MapContext";
import { Marker as MarkerModel } from "../../models/marker";
import L from "leaflet";

interface MarkerProps {
  markerData: MarkerModel;
}

export const Marker: React.FC<MarkerProps> = ({ markerData }) => {
  const { activeMonumentPosition } = useMapContext();

  const { lat, lng, img, monumentName } = markerData;

  const className =
    activeMonumentPosition?.lat === lat && activeMonumentPosition?.lng === lng
      ? "active-marker"
      : "marker";

  const icon = L.icon({
    iconUrl: "/img/marker.min.svg",
    iconSize: [35, 55],
    iconAnchor: [5, 55],
    className,
  });

  return (
    <MarkerComponent position={[lat, lng]} icon={icon} key={`${lat}${lng}`}>
      <Popup>
        <PopupImgContainer>
          <PopupImg src={img} alt={monumentName} />
        </PopupImgContainer>
        <PopupContext>
          <PopupText>{monumentName}</PopupText>
          <Link href={`/monument/${monumentName}`}>
            <a>
              <IconButton>
                <NextIcon />
              </IconButton>
            </a>
          </Link>
        </PopupContext>
      </Popup>
    </MarkerComponent>
  );
};

const PopupImgContainer = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
`;

const PopupImg = styled.img`
  width: 100%;
  height: auto;
`;

const PopupContext = styled.div`
  padding: 1rem;
  display: flex;
`;

const PopupText = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  width: 80%;
`;

const NextIcon = styled(GrFormNext)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.grey};
`;

const StyledMarker = styled(Marker)`
  color: red;
  width: 100px;
  background-color: red;
  position: relative;
  top: -10px;
`;
