"use client";
import { useState } from "react";

export default function Login(){
  const [data,setData] = useState({email:"",password:""});

  return(
    <div className="p-6">
      <h1 className="text-xl font-bold">Login</h1>

      <input className="border p-2 block w-full mt-3"
        placeholder="Email"
        onChange={e=>setData({...data,email:e.target.value})}
      />

      <input className="border p-2 block w-full mt-3"
        placeholder="Password"
        type="password"
        onChange={e=>setData({...data,password:e.target.value})}
      />

      <button className="mt-4 bg-medGreen text-white px-5 py-2">
        Login
      </button>
    </div>
  )
}
