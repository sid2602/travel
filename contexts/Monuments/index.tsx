import {
  collection,
  FirestoreError,
  getFirestore,
  query,
  where,
} from "@firebase/firestore";
import { createContext, useContext, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { ReducedMonument } from "../../models/reducedMonument";
import firebase from "../../firebase/clientApp";
import { useEffect } from "react";

interface MonumentsContextInterface {
  monuments: ReducedMonument[];
  loading: boolean;
  error?: FirestoreError;
}

const MonumentsContext = createContext<MonumentsContextInterface>({
  monuments: [],
  loading: true,
});

export const useMonumentsContext = () => useContext(MonumentsContext);

export const MonumentsProvider: React.FC<{}> = ({ children }) => {
  const [monuments, setMonuments] = useState<ReducedMonument[]>([]);
  const monumentRef = collection(getFirestore(firebase), "/monuments");
  const [snapshot, loading, error] = useCollection(
    query(monumentRef, where("city", "==", "Kraków")),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (loading == false) {
      setMonuments(
        snapshot?.docs.map((doc) => {
          return {
            city: doc.get("city"),
            country: doc.get("country"),
            description: doc.get("description"),
            img: doc.get("img"),
            lat: doc.get("lat"),
            lng: doc.get("lng"),
            name: doc.get("name"),
          };
        }) as [ReducedMonument]
      );
    }
  }, [loading, snapshot]);

  return (
    <MonumentsContext.Provider
      value={{
        monuments,
        loading,
        error,
      }}
    >
      {children}
    </MonumentsContext.Provider>
  );
};
