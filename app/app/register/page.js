"use client";
import { useState } from "react";

export default function Register(){
  const [data,setData] = useState({name:"",email:"",password:""});

  return(
    <div className="p-6">
      <h1 className="text-xl font-bold">Register</h1>

      <input className="border p-2 block w-full mt-3" placeholder="Name"
      onChange={e=>setData({...data,name:e.target.value})}/>

      <input className="border p-2 block w-full mt-3" placeholder="Email"
      onChange={e=>setData({...data,email:e.target.value})}/>

      <input className="border p-2 block w-full mt-3" placeholder="Password" type="password"
      onChange={e=>setData({...data,password:e.target.value})}/>

      <button className="mt-4 bg-medGreen text-white px-5 py-2">
        Register
      </button>
    </div>
  )
}
