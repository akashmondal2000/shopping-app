import React from 'react'
import style from "./styles.module.css";
import { Link } from "react-router-dom";


const ProductCard = ({title,price,imgUrl}) => {
    return (
        <div>
              <div className={style.itemStyle}>
        <Link to="/details">
          <img
            className={style.imageStyle}
            src= {imgUrl}
            alt="image not found"
          />
          <p className={style.descriptionStyle}>{title}</p>
          <p>{price}</p>
        </Link>

        <Link to="/cart">
          <button type="button">add</button>{" "}
        </Link>
      </div>
            
        </div>
    )
}

export default ProductCard
