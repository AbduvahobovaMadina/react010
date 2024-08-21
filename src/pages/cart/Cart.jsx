import Newcart from '@/components/cart/Newcart'
import { useStateValue } from '@/context/Index'
import React from 'react'

const Cart = () => {
  const [data, dispatch] = useStateValue()
  console.log(data);
  
  return (
    <div >
      <h2 className='text-center text-4xl'>newcart {data.son}</h2>
      <Newcart title={"Newcart"} data={data.cart}/>
    </div>
  )
}

export default Cart