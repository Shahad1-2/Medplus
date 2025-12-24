"use client";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

export default function ProductPage(){
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = {
    id,
    name:`Medicine ${id}`,
    price:150,
    desc:"This is a sample medicine description",
  }

  return(
    <div className="p-6">
      <h1 className="text-xl font-bold">{product.name}</h1>
      <p className="mt-2">{product.desc}</p>
      <p className="font-bold mt-3">₹{product.price}</p>

      <button className="mt-4 bg-medGreen text-white px-5 py-2"
        onClick={()=>dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  )
}
