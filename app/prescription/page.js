"use client";
import { useState } from "react";

export default function Prescription(){
  const [file,setFile]=useState(null);

  return(
    <div className="p-6">
      <h1 className="text-xl font-bold">Upload Prescription</h1>

      <input type="file" onChange={e=>setFile(e.target.files[0])}
       className="mt-4"/>

      <button className="mt-4 bg-medGreen text-white px-6 py-2">
        Upload
      </button>
    </div>
  )
}
