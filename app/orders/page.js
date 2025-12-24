export default function Orders(){
  const dummyOrders = [
    {id:1,status:"Delivered",amount:300},
    {id:2,status:"Processing",amount:150}
  ];

  return(
    <div className="p-6">
      <h1 className="text-xl font-bold">My Orders</h1>

      {dummyOrders.map(o=>(
        <div key={o.id} className="p-3 bg-white mt-2 rounded shadow flex justify-between">
          <p>Order #{o.id}</p>
          <p>{o.status}</p>
          <p>₹{o.amount}</p>
        </div>
      ))}
    </div>
  )
}
