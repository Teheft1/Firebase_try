"use client";
import {
  setDoc,
  collection,
  getDoc,
  doc,
  Timestamp,
  FieldValue,
  addDoc,
  add,
} from "firebase/firestore";
import { useParams } from "next/navigation";
import { db } from "@/Firebase";
import React, { useState } from "react";

const Formadd = () => {
  const { slug } = useParams();
  const [Newborrow, setNewBorrow] = useState({
    name: "",
    kindOf: "",
    Dates: "",
  });

  const AddBorrow = async (e) => {
    e.preventDefault();
    const docref = collection(db, "laboratory");
    const idref = doc(docref, slug);
    const insid = collection(idref, "borrow");

    if (
      Newborrow.name !== "" &&
      Newborrow.kindOf !== "" &&
      Newborrow.Dates != ""
    ) {
      console.log(new Date(Newborrow.Dates).toDateString());
      const d = new Date(Newborrow.Dates);
      console.log(d);
      await setDoc(doc(insid), {
        name: Newborrow.name,
        kindOf: Newborrow.kindOf,
        Dates: new Date(Newborrow.Dates),
      });
      setNewBorrow({ name: "", kindOf: "", Dates: "" });
      alert("data added succesfully");
    } else {
      alert("isi Semua data");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <h1>Form Borrow</h1>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Nama"
          onChange={(e) => setNewBorrow({ ...Newborrow, name: e.target.value })}
          className="col-span-3 p-3 border my-3 text-black"
        ></input>
        <input
          type="text"
          placeholder="Alasan"
          onChange={(e) =>
            setNewBorrow({ ...Newborrow, kindOf: e.target.value })
          }
          className="col-span-3 p-3 border my-3 text-black"
        ></input>
        <input
          type="date"
          placeholder="Tanggal"
          onChange={(e) =>
            setNewBorrow({ ...Newborrow, Dates: e.target.value })
          }
          className="col-span-3 p-3 border my-3 text-black"
        ></input>
      </div>
      <button
        onClick={AddBorrow}
        type="submit"
        className="bg-slate-300 hover:bg-slate-500 p-3 text-xl w-20 my-3 h-14"
      >
        Add
      </button>
    </div>
  );
};

export default Formadd;
