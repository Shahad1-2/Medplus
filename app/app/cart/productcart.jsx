"use client"
import { addToCart } from "@/store/cartSlice"
import { useDispatch } from "react-redux"

export default function ProductCard({id,name,price}){
  const dispatch = useDispatch();

  return(
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">{name}</h3>
      <p>₹{price}</p>
      <button onClick={()=>dispatch(addToCart({id,name,price}))}
        className="bg-medGreen text-white px-4 py-1 mt-2">
        Add to Cart
      </button>
    </div>
  )
}
