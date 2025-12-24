"use client";
import { useSelector } from "react-redux";

export default function Checkout(){
  const cart = useSelector(state=>state.cart.items);
  const total = useSelector(state=>state.cart.total);

  return(
    <div className="p-6">
      <h1 className="text-xl font-bold">Checkout</h1>

      <div className="mt-4 bg-white p-4 rounded shadow">
        <h2 className="font-bold">Delivery Address</h2>
        <input className="border p-2 w-full mt-2" placeholder="Full Name"/>
        <input className="border p-2 w-full mt-2" placeholder="Address"/>
        <input className="border p-2 w-full mt-2" placeholder="City"/>
        <input className="border p-2 w-full mt-2" placeholder="Pincode"/>
      </div>

      <h2 className="mt-5 font-bold">Order Summary</h2>

      {cart.map((item,i)=>(
        <div key={i} className="p-3 bg-white mt-2 flex justify-between">
          <p>{item.name}</p><p>₹{item.price}</p>
        </div>
      ))}

      <h2 className="mt-4 text-lg font-bold">Total: ₹{total}</h2>

      <button className="bg-medGreen text-white px-6 py-2 mt-4">
        Place Order
      </button>
    </div>
  )
}
