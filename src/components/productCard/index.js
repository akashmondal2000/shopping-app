import React, { useEffect, useState } from 'react'
import style from "./styles.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"; 

const ProductCard = ({id,title,price,imgUrl}) => {

  let itemId = [id];
  let itemjson = JSON.stringify(itemId);

  // const [store,setStore] =  useState();

  useEffect (()=>{
    //localStorage.getItem(id);
    localStorage.setItem("id",itemjson);
  },[])

  let history = useHistory();
  const redirect = () =>{

    history.push(`/cart`);
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
