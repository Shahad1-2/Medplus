import Banner from "@/components/Banner"
import ProductCard from "@/components/ProductCard"

export default function Home(){
  return(
    <div>
      <Banner/>
      <h2 className="text-xl font-bold px-6 mt-6">Popular Medicines</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {[1,2,3,4,5,6].map(i=>(
          <ProductCard key={i}
            id={i}
            name={`Medicine ${i}`}
            price={100+i}
          />
        ))}
      </div>
    </div>
  )
}
