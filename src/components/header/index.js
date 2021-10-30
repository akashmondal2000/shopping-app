import style from "./style.module.css";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <header className={style.main}>
            <Link to ="/">
              <h1 className={style.container}>Shopping Store</h1>
            </Link>  
              <input className={style.searchBox} type="search" placeholder="Search" />

            <Link to="/cart">  
              <span className={style.cartStyle}>cart<Icon icon="eva:shopping-cart-outline" color="white" /></span>
             </Link> 
          
        </header>
    </div>
  );
};

export default Header;
