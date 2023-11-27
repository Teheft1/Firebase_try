import Image from "next/image";
import Firestoredata from "./lib/firestoredata";

export default function Home() {
  
  return (
    <div>
      <h1>Welcome To Web Lab</h1>
      <Firestoredata />
    </div>
  );
}
