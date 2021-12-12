import {
  collection,
  FirestoreError,
  getFirestore,
  query,
  where,
} from "@firebase/firestore";
import { useState, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { Monument } from "../models/monument";
import { db } from "../firebase/clientApp";
import { useMapContext } from "../contexts/MapContext";
import { Position } from "../models/position";

export interface UseActiveMonumentReturn {
  activeMonument: Monument | null;
  loading: boolean;
  error?: FirestoreError;
}

export const useActiveMonument = (monumentName: string) => {
  const [activeMonument, setActiveMonument] = useState<Monument | null>(null);
  const monumentRef = collection(db, "/monuments");
  const { handleChangeActivePosition } = useMapContext();

  const [snapshot, loading, error] = useCollection(
    query(
      monumentRef,
      where("name", "==", monumentName == undefined ? "" : monumentName)
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (loading == false) {
      const monument = snapshot?.docs[0]?.data() as Monument;
      setActiveMonument(monument);
      handleChangeActivePosition({ lat: monument.lat, lng: monument.lng });
    }
  }, [loading, snapshot]);

  const { handleSetActiveMonumentPosition } = useMapContext();

  useEffect(() => {
    if (activeMonument) {
      handleSetActiveMonumentPosition({
        lat: activeMonument.lat,
        lng: activeMonument.lng,
      } as Position);
    }

    return () => {
      handleSetActiveMonumentPosition(null);
    };
  }, [activeMonument]);

  return {
    activeMonument,
    loading,
    error,
  };
};
