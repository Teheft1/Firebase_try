import Firestoredata from "./lib/firestoredata";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="my-10 text-3xl font-bold">Welcome to Web Lab</h1>
      <Firestoredata />
    </div>
  );
}
