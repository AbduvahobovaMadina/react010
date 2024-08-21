import React, {useState, useReducer} from 'react'
import { reducer, initialState } from '@/context/Reducer';


const Footer = () => {
  let [data,dispatch] = useReducer(reducer, initialState)
  console.log(data);
  
  return (
    <div className='h-60 bg-slate-900 text-white'>
        <h2>Footer {data.son}</h2>
        <button className='border active:bg-white active:text-black hover:cursor-pointer mr-4 p-1' onClick={()=> dispatch({type:"INC", payload: 1})}>Increment</button>
        <button className='border active:bg-white active:text-black hover:cursor-pointer mr-4 p-1' onClick={()=> dispatch({type:"INC", payload: 10})}>Increment 10</button>
        <button className='border active:bg-white active:text-black hover:cursor-pointer p-1 ' disabled={data.son <= 0} onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
    </div>
  )
}

export default Footer