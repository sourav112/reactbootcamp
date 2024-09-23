import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/shared/Navbar';

export default function ProductDetailPage() {
    let{productId}=useParams();
    const[product,setProduct]=useState({name:"", mainImageUrl:""});
    const getSingleProductBySlug=async (params)=>{
        const {data} =await axios.get(`https://api.glowmeko.com/v1/products/single/${productId}`);
        console.log("Data: ",data);
        if(data?.result)
        {
            setProduct({
                name:data?.result?.name,
                mainImageUrl:data?.result?.mainImageUrl
            });
        }
    };
    useEffect(()=>{
    getSingleProductBySlug();
    
},[]);
  return (
    <div>
        <Navbar/>
        Product Name: {product?.name}
        <img src={`https://glowmeko.s3.amazonaws.com/${product?.mainImageUrl}`}/>
    </div>
  )
}
