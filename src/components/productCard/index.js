import React, { useEffect, useState } from 'react'
import style from "./styles.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"; 

const ProductCard = ({id,title,price,imgUrl}) => {

 
  // const [store,setStore] =  useState();

  let history = useHistory();
  const redirect = () =>{
    const cartIds = JSON.parse(localStorage.getItem("id"));

    if(cartIds){

    
    cartIds.push(id);
    localStorage.setItem("id",JSON.stringify(cartIds));
  }else{
  localStorage.setItem("id",JSON.stringify([id]));
}
  

    console.log("Item ids",cartIds);
   
  }

    return (
        <div>
              <div className={style.itemStyle}>
        <Link to={`/details?id=${id}`}>
          <img
            className={style.imageStyle}
            src= {imgUrl}
            alt="image not found"
          />
          <p className={style.descriptionStyle}>{title}</p>
          <p>{price}</p>
        </Link>

        
          <button type="button" onClick ={redirect}>add</button>
      </div>
            
        </div>
    )
}

export default ProductCard
