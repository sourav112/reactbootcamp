import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';

export default function ProductList() {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch(
            "https://api.glowmeko.com/v1/products/home/get-all?productType=skin-care"
        ).then((response)=>response.json())
        .then((data)=>
            {
                if(data?.status && data.results.length>0)
                {
                    setProducts(data.results);
                }
                else{
                    setProducts([]);
                }
            })
        .catch((error)=>console.error("Error: ",error));
    },[])
  return (
    <div className='grid grid-cols-5 gap-4'>
            {products?.map((product)=>{
                return <SingleProduct key={product._id} product={product} />;
            })}
    </div>
  );
}
