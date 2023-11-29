import { collection, query, doc, getDocs } from "firebase/firestore";
import { db } from "@/Firebase";
import React from "react";

const labins = async ({ link }) => {
  let data = [];
  const ref = collection(db, "laboratory");
  const docref = doc(ref, link);
  const qAslab = query(collection(docref, "aslab"));
  const querySnapshot = await getDocs(qAslab);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return (
    <div>
      <h1>Asisten Laboratorium</h1>
      <ul>
        {data.map((data, id) => (
          <li key={id}>
            <h1>{data.Name}</h1>
            <h2>{data.email}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default labins;
