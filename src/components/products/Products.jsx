import { useStateValue } from "@/context/Index";
import React from "react";
import { GoHeart } from "react-icons/go";
import { toast } from "react-toastify";


const Products = ({ data, title }) => {
  const [ _, dispatch ] = useStateValue()
  let items = data?.map((product) => (
    <div className="border p-3" key={product.id}>
      <div className="w-full h-60 bg-gray-200">
        <img className="w-full h-full object-contain duration-300 hover:scale-105 cursor-pointer" src={product.images[0]} alt="Photo" />
      </div>
      <p>{product.title}</p>
      <strong className="text-red-500">{product.price} USD</strong>
      <div>
        <button onClick={()=> dispatch({type:"CART", payload:product})} className="border p-1 hover:bg-green-300 hover:text-white">Add to cart</button>
        <GoHeart onClick={()=> {
          dispatch({type:"ADD_TO_WISHLIST", payload:product})
          toast.success("Mahsulot qo'shildi",{position: "bottom-right"})
          }} className=" ml-64 hover:cursor-pointer active:text-red-500" />
      
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-4 gap-2">{items}</div>
    </div>
  );
};

export default Products;
