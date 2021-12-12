import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import { Marker as MarkerModel } from "../../models/marker";
import { useMapContext } from "../../contexts/MapContext";
import { GrFormNext } from "react-icons/gr";
import Link from "next/link";
import { IconButton } from "../Buttons/IconButton";
type MapProps = {
  markers: MarkerModel[] | undefined;
};

const Map: React.FC<MapProps> = ({ markers }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const {
    activePosition: { lat, lng },
    handleSetMap,
  } = useMapContext();

  const icon = L.icon({
    iconUrl: "/img/marker.min.svg",
    iconSize: [35, 55],
    iconAnchor: [5, 55],
  });

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <StyledMap
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={true}
      whenCreated={handleSetMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers?.map(({ lat, lng, monumentName, img }) => (
        <Marker position={[lat, lng]} icon={icon} key={`${lat}${lng}`}>
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
        </Marker>
      ))}
    </StyledMap>
  );
};

export default Map;

const StyledMap = styled(MapContainer)`
  width: 100%;
  height: 100%;
`;

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
