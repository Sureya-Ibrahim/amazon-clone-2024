import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loader from '../Loader/Loader'


const Product = () => {
     const [products, setProducts] = useState([])
     const [isLoading, setIsLoading] = useState(true)

     useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then ((res)=> {
            console.log(res)
            setProducts(res.data)
            setIsLoading(false)
        }).catch((err)=>{
            console.log("Error")
            setIsLoading(false)
        })
        
     }, [])

  return (
    <section className={classes.products__container}>
      {isLoading ? (<Loader />) : (  
        
          products.map((singleProduct) => {
           return <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
})

      )}
      </section>
    );
}

export default Product