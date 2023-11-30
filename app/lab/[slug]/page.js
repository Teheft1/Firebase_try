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
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-3xl font-semibold">Lab {lab}</h1>
      </div>
      <div className="grid grid-cols-2 justify-between">
        <div>
          <Lab link={slug} />
        </div>
        <div>
          <Borrow link={slug} />
        </div>
      </div>
      <a href={"../formadd/" + slug}>Pinjam</a>
    </div>
  );
};

export default Page;
