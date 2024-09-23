import React from 'react'
import { Link } from 'react-router-dom';
import { Routes } from '../../routes';

export default function SingleProduct(props) {
    const {product}=props;
  return (
     <Link to={Routes.Single_Product.DYNAMIC(product.slug)}>
        <div className='bg-gray-200 shadow rounded border border-orange-300 relative'>
                    <span className='absolute top-0 right-0 border border-orange-300 shadow bg-green-400'>10%</span>
                    <div className='bg-gray-100'>
                        <img src={`https://glowmeko.s3.amazonaws.com/${product.mainImageUrl}`}/>
                    </div>
                    
                    <p className='text-center' title={product?.name}>{product?.name.slice(0,20)}</p>
                    <p className='text-center'>{product?.price}</p>
                    <p className='text-center p-2'>
                        <button type='button' className='bg-orange-300 rounded px-3 text-white py-3'>Add To Cart</button>
                    </p>
        </div>
     </Link>
  )
}
