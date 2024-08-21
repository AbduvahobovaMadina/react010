import Products from '@/components/products/Products';
import { useStateValue } from '@/context/Index'
import React from 'react'

const Wishlist = () => {
  const [data, dispatch] = useStateValue()
  console.log(data);
  
  return (
    <div >
      <h2 className='text-center text-4xl'>wishlist {data.son}</h2>
      <Products title={"Wishlist"} data={data.wishlist}/>
    </div>
  )
}

export default Wishlist