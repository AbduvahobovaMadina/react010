import React, { createContext } from 'react'
import { useStateValue } from '@/context/Index'
import Products from '@/components/products/Products'
import { useFetch } from '@/hooks/useFetch'



const Home = () => {
  const{data: payload, loading} = useFetch("/products",{limit: 6} )
  const [data,dispatch] = useStateValue()
  console.log(payload?.products);
  
  return (
    <div>
      <h2 className='text-center text-4xl'>Home</h2>
      {loading && <div className="animate-spin "></div>}
      
      <button onClick={()=> dispatch({type:"INC", payload:1})}>Increment</button>
      <Products title={"New products"} data={payload?.products}/>
    </div>
  )
}

export default Home