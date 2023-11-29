import {
  QuerySnapshot,
  collection,
  getDocs,
  onSnapshot,
  doc,
  query,
  getDoc,
  Query,
} from "firebase/firestore";
import { db } from "@/Firebase";
import Borrow from "@/app/components/Borrow/borrow";
import Lab from "@/app/components/Labinside/lab";

const Page = async ({ params }) => {
  const slug = params.slug;
  let lab = [];

  const ref = doc(db, "laboratory", slug);
  const snap = await getDoc(ref);
  lab.push(snap.data().labname);
  return (
    <div>
      <h1>{lab}</h1>

      <Lab link={slug} />
      <Borrow link={slug} />
    </div>
  );
};

export default Page;
