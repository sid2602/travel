import { MapContainer, TileLayer } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Marker as MarkerModel } from "../../models/marker";
import { useMapContext } from "../../contexts/MapContext";
import { Marker } from "./markersList";
type MapProps = {
  markers: MarkerModel[] | undefined;
};

const Map: React.FC<MapProps> = ({ markers }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const { activePosition, handleSetMap } = useMapContext();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <StyledMap
      center={[activePosition.lat, activePosition.lng]}
      zoom={13}
      scrollWheelZoom={true}
      whenCreated={handleSetMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers?.map((marker) => (
        <Marker markerData={marker} />
      ))}
    </StyledMap>
  );
};

export default Map;

const StyledMap = styled(MapContainer)`
  width: 100%;
  height: 100%;
`;
