import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map: React.FC = () => {
  const icon = L.icon({ iconUrl: "/img/marker.min.svg" });

  return (
    <StyledMap
      center={[50.05408720089961, 19.935244094164165]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50.05408720089961, 19.935244094164165]} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </StyledMap>
  );
};

export default Map;

const StyledMap = styled(MapContainer)`
  width: 100%;
  height: 100%;
`;
