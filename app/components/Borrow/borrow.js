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
  if (querySnapshot.empty) {
    doing = "Tidak Ada Peminjaman";
  } else {
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
  }

  return (
    <div>
      <h1 className="text-lg font-semibold">Peminjaman</h1>
      <ul className="list-none border flex flex-col">
        {doing}
        {data.map((data, id) => (
          <li key={id} className="flex flex-row">
            <div className="flex flex-row justify-between">
              <p>{data.name}</p>
              <p>{data.kindOf}</p>
            </div>
            <p>{new Date(data.Dates.seconds * 1000).toDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Borrow;
