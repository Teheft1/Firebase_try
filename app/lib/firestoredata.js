import { db } from "@/Firebase";
import {
  QuerySnapshot,
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
// import { useEffect } from "react";

const Firestoredata = async () => {
  const q = query(collection(db, "laboratory"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
    // console.log(doc.id, "=>", doc.data);
  });
  return (
    <div>
      <div>
        <ul>
          {data.map((data, id) => (
            <li key={id}>
              <h1>{data.labname}</h1>
              <h2>{data.kasublab}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Firestoredata;
