import { collection } from "@firebase/firestore";
import { query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase/clientApp";

const useSearchCollectionByText = (
  collectionName: string,
  field: string,
  value: string
) => {
  const [response, setResponse] = useState<any[]>([]);

  const collectionRef = collection(db, `/${collectionName}`);

  const [responseSnapshot, loading, error] = useCollection(
    query(
      collectionRef,
      where(field, ">=", value.toLocaleLowerCase()),
      where(field, "<=", value.toLocaleLowerCase() + "\uf8ff")
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (!loading && !!responseSnapshot) {
      setResponse(responseSnapshot?.docs?.map((item) => item.data()));
    }
  }, [responseSnapshot, loading]);

  return {
    response,
    loading,
    error,
  };
};

export default useSearchCollectionByText;
