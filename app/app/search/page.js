"use client";
import { useState } from "react";

export default function Search(){
  const [query,setQuery] = useState("");
  const [results,setResults] = useState([]);

  const dummy = [
    {id:1,name:"Paracetamol 500mg", price:60},
    {id:2,name:"Amoxicillin 250mg", price:120},
    {id:3,name:"Cough Syrup", price:95}
  ];

  const handleSearch = ()=>{
    const res = dummy.filter(m=>m.name.toLowerCase().includes(query.toLowerCase()));
    setResults(res);
  }

  return(
    <div className="p-6">
      <h1 className="text-xl font-bold">Search Medicines</h1>

      <input className="border p-2 w-full mt-3"
       placeholder="Search medicine..."
       onChange={e=>setQuery(e.target.value)}
      />

      <button onClick={handleSearch} className="mt-3 bg-medGreen text-white px-4 py-2">
        Search
      </button>

      <div className="mt-5">
        {results.map(m=>(
          <div key={m.id} className="p-3 bg-white mt-2 rounded shadow">
            {m.name} - ₹{m.price}
          </div>
        ))}
      </div>
    </div>
  )
}
