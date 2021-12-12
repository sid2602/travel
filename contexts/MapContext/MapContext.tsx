import { createContext, useContext, useEffect, useState } from "react";
import { Position } from "../../models/position";

interface MonumentsContextInterface {
  activePosition: Position;
  handleChangeActivePosition: (newActivePosition: Position) => void;
  map: L.Map | null;
  handleSetMap: (map: L.Map) => void;
  activeMonumentPosition: Position | null;
  handleSetActiveMonumentPosition: (position: Position | null) => void;
}

const MapContext = createContext<MonumentsContextInterface>({
  activePosition: { lat: 50.05408720089961, lng: 19.935244094164165 },
  handleChangeActivePosition: () => {},
  map: null,
  handleSetMap: () => {},
  activeMonumentPosition: null,
  handleSetActiveMonumentPosition: () => {},
});

export const useMapContext = () => useContext(MapContext);

export const MapProvider: React.FC<{}> = ({ children }) => {
  const [map, setMap] = useState<L.Map | null>(null);

  const [activePosition, setactivePosition] = useState<Position>({
    lat: 50.05408720089961,
    lng: 19.935244094164165,
  });

  const handleChangeActivePosition = (newActivePosition: Position) => {
    setactivePosition(newActivePosition);
  };

  const [activeMonumentPosition, setActiveMonumentPosition] =
    useState<Position | null>(null);

  const handleSetActiveMonumentPosition = (position: Position | null) => {
    setActiveMonumentPosition(position);
  };

  const handleSetMap = (map: L.Map) => {
    setMap(map);
  };

  useEffect(() => {
    setactivePosition({
      lat: activePosition.lat,
      lng: activePosition.lng,
    } as Position);
  }, [activePosition.lat, activePosition.lng]);

  return (
    <MapContext.Provider
      value={{
        activePosition,
        handleChangeActivePosition,
        map,
        handleSetMap,
        activeMonumentPosition,
        handleSetActiveMonumentPosition,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
