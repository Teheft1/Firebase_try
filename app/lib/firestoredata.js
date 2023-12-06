import { db } from "@/Firebase";
import {
  QuerySnapshot,
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";

const Firestoredata = async () => {
  const q = query(collection(db, "laboratory"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return (
    <div className="my-10">
      <div className="flex flex-col justify-center items-center">
        <ul className="list-none">
          {data.map((data, id) => (
            <li
              key={id}
              className="flex flex-row border items-center justify-between"
            >
              <div>
                <h1 className="text-lg m-2">Lab = {data.labname}</h1>
                <h2 className="text-base m-2">Kepala = {data.kasublab}</h2>
              </div>
              <a className="border p-3 m-2" href={"../lab/" + data.id}>
                View
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Firestoredata;
