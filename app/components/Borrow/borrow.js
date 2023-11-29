// "use server";
import { collection, doc, query, getDocs } from "firebase/firestore";
import { db } from "@/Firebase";
import React from "react";

const Borrow = async ({ link }) => {
  let data = [];
  let doing = [];
  const ref = collection(db, "laboratory");
  const docref = doc(ref, link);
  const qBorrow = query(collection(docref, "borrow"));
  const querySnapshot = await getDocs(qBorrow);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return (
    <div>
      <h1>Peminjaman</h1>
      <ul>
        {data.map((data, id) => (
          <li key={id}>
            <div>
              <p>{data.name}</p>
              <p>{data.kindOf}</p>
            </div>
            <p>{new Date(data.Date.seconds * 1000).toDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Borrow;
