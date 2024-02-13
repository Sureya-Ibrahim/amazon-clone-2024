import React from 'react'
import {useState, useEffect} from  "react";
import LayOut from "../../Components/LayOut/LayOut";
import {useParams} from 'react-router-dom'
import axios from  'axios';
import { productUrl } from '../../API/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader'

const ProductDetail = () => {
  const {productId}= useParams()
  console.log(productId)  
  const [product , setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`) 
    .then((res)=>{
      console.log(res)
    setProduct(res.data)
    setIsLoading (false)
      }).catch((err)=>{
    console.log(err)
    setIsLoading(false)
      })
}, [])

  return (
    <LayOut>
      
      {isLoading ? <Loader /> : <ProductCard product={product}
      flex ={true}
      renderDesc={true}
      renderAdd={true}
      />}
    
    </LayOut>
  );
}

export default ProductDetail