import React from 'react'
import {categoryInfo} from '../Category/categoryInfo'
import CategoryCard from '../Category/CategoryCard'
import classes from '../Category/category.module.css'


const Category = () => {
  return (
   <section className={classes.category__container}>
    {
        categoryInfo.map((info)=>(
            <CategoryCard data ={info} />
        ))
    }
   </section>
  
  )
}


export default Category;