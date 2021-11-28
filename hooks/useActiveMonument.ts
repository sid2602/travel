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

export interface UseActiveMonumentReturn {
  activeMonument: Monument | null;
  loading: boolean;
  error?: FirestoreError;
}

export const useActiveMonument = (monumentName: string) => {
  const [activeMonument, setActiveMonument] = useState<Monument | null>(null);
  const monumentRef = collection(db, "/monuments");
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
      setActiveMonument(snapshot?.docs[0]?.data() as Monument);
    }
  }, [loading, snapshot]);

  return {
    activeMonument,
    loading,
    error,
  };
};
