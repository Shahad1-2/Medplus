"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Navbar(){
  const cart = useSelector(state=>state.cart.items);
  const [open,setOpen] = useState(false);

  return(
    <div>
      <div className="bg-medGreen text-white p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">MedPlus</Link>

        <div className="hidden md:flex gap-6">
          <Link href="/search">Search</Link>
          <Link href="/prescription">Prescription</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/cart">Cart({cart.length})</Link>
          <Link href="/profile">Profile</Link>
        </div>

        <button className="md:hidden" onClick={()=>setOpen(!open)}>☰</button>
      </div>

      {open && (
        <div className="bg-white p-4 flex flex-col gap-3 md:hidden">
          <Link href="/search">Search</Link>
          <Link href="/prescription">Prescription</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/cart">Cart({cart.length})</Link>
          <Link href="/profile">Profile</Link>
        </div>
      )}
    </div>
  )
}
