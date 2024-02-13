import React from "react";
import classes from "../Category/category.module.css";
import {Link} from 'react-router-dom'

const CategoryCard = ({ data }) => {
  // console.log('Data:', data); 
  //  {title: 'Jewelery',
  //   name: 'jewelery', imgLink: 'https://m.media-amazon.com/images/I/71r7eWuCsaL._AC_UL480_FMwebp_QL65_.jpg'};
    
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
