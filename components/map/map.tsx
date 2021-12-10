import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Marker as MarkerModel } from "../../models/marker";
import { useMapContext } from "../../contexts/MapContext";

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
      {markers?.map(({ lat, lng, text }) => (
        <Marker position={[lat, lng]} icon={icon} key={`${lat}${lng}`}>
          <Popup>{text}</Popup>
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
